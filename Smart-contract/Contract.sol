// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StartupInvestmentPlatform {

    struct User {
        string name;
        string userType; // "investor" or "startup"
        address userAddress;
    }

    struct Project {
        string title;
        string description;
        uint256 fundingGoal;
        uint256 amountRaised;
        address payable startupAddress;
        bool isActive;
    }

    address public owner;
    uint256 public projectCount;
    mapping(address => User) public users;
    mapping(uint256 => Project) public projects;

    constructor() {
        owner = msg.sender;
        projectCount = 0;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function.");
        _;
    }

    function registerUser(string memory _name, string memory _userType) public {
        require(users[msg.sender].userAddress == address(0), "User already registered.");
        users[msg.sender] = User(_name, _userType, msg.sender);
    }

    function createProject(string memory _title, string memory _description, uint256 _fundingGoal) public {
        require(users[msg.sender].userAddress != address(0), "User not registered.");
        require(keccak256(bytes(users[msg.sender].userType)) == keccak256(bytes("startup")), "Only startups can create projects.");

        projectCount++;
        projects[projectCount] = Project(_title, _description, _fundingGoal, 0, payable(msg.sender), true);
    }

    function investInProject(uint256 _projectId) public payable {
        require(users[msg.sender].userAddress != address(0), "User not registered.");
        require(keccak256(bytes(users[msg.sender].userType)) == keccak256(bytes("investor")), "Only investors can invest.");

        Project storage project = projects[_projectId];
        require(project.isActive, "Project is not active.");
        require(msg.value > 0 && project.amountRaised + msg.value <= project.fundingGoal, "Investment amount is invalid.");

        project.amountRaised += msg.value;
        project.startupAddress.transfer(msg.value);

        if (project.amountRaised == project.fundingGoal) {
            project.isActive = false;
        }
    }

    function getProjectDetails(uint256 _projectId) public view returns (string memory, string memory, uint256, uint256, address, bool) {
        require(_projectId <= projectCount, "Project does not exist.");
        Project memory project = projects[_projectId];
        return (project.title, project.description, project.fundingGoal, project.amountRaised, project.startupAddress, project.isActive);
    }

    function getUserDetails(address _userAddress) public view returns (string memory, string memory, address) {
        require(users[_userAddress].userAddress != address(0), "User not registered.");
        User memory user = users[_userAddress];
        return (user.name, user.userType, user.userAddress);
    }

    function cancelProject(uint256 _projectId) public {
    Project storage project = projects[_projectId];
    require(msg.sender == project.startupAddress, "Only the project owner can cancel the project.");
    require(!project.isActive, "Project is not active.");

    project.isActive = false;
    
}
function updateProjectDetails(uint256 _projectId, string memory _newTitle, string memory _newDescription) public {
    Project storage project = projects[_projectId];
    require(msg.sender == project.startupAddress, "Only the project owner can update the project.");
    require(project.isActive, "Project is not active.");

    project.title = _newTitle;
    project.description = _newDescription;

}
function withdrawFunds(uint256 _projectId) public {
    Project storage project = projects[_projectId];
    require(msg.sender == project.startupAddress, "Only the project owner can withdraw funds.");
    require(project.amountRaised >= project.fundingGoal, "Funding goal not reached.");

    project.startupAddress.transfer(project.amountRaised);
    project.isActive = false;
}

function isUserRegistered(address _userAddress) public view returns (bool) {
    return users[_userAddress].userAddress != address(0);
}

function getTotalProjectCount() public view returns (uint256) {
    return projectCount;
}

function isProjectActive(uint256 _projectId) public view returns (bool) {
    require(_projectId <= projectCount, "Project does not exist.");
    return projects[_projectId].isActive;
}
function getUserType(address _userAddress) public view returns (string memory) {
    require(isUserRegistered(_userAddress), "User is not registered.");
    return users[_userAddress].userType;
}

function getTotalFundsRaised(uint256 _projectId) public view returns (uint256) {
    require(_projectId <= projectCount, "Project does not exist.");
    return projects[_projectId].amountRaised;
}

function isFundingGoalMet(uint256 _projectId) public view returns (bool) {
    require(_projectId <= projectCount, "Project does not exist.");
    Project memory project = projects[_projectId];
    return project.amountRaised >= project.fundingGoal;
}

function getActiveProjects() public view returns (uint256[] memory) {
    uint256[] memory activeProjects = new uint256[](projectCount);
    uint256 activeCount = 0;

    for (uint256 i = 1; i <= projectCount; i++) {
        if (projects[i].isActive) {
            activeProjects[activeCount] = i;
            activeCount++;
        }
    }

    
    uint256[] memory trimmedActiveProjects = new uint256[](activeCount);
    for (uint256 j = 0; j < activeCount; j++) {
        trimmedActiveProjects[j] = activeProjects[j];
    }

    return trimmedActiveProjects;
}

function updateUserInformation(string memory _newName) public {
    require(isUserRegistered(msg.sender), "User is not registered.");
    users[msg.sender].name = _newName;
}









}

