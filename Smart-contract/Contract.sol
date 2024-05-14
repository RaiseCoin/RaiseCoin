// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract StartupInvestmentPlatform is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    mapping(address => uint256) public userIDs;
    mapping(address => uint256) public founderIDs;
    mapping(address => uint256[]) private ownedNFTs;

    // Define an event that logs the minting of a new NFT
    event NFTMinted(uint256 indexed newItemId, address indexed owner);

    constructor() ERC721("Raise", "RC") {}

    // Users register themselves
    function registerUser(uint256 userID) public {
        require(userIDs[msg.sender] == 0, "User already registered.");
        userIDs[msg.sender] = userID;
    }

    // Founders register themselves
    function registerFounder(uint256 founderID) public {
        require(founderIDs[msg.sender] == 0, "Founder already registered.");
        founderIDs[msg.sender] = founderID;
    }

    // Check if a user is registered
    function isUserRegistered(address userAddress) public view returns (bool) {
        return userIDs[userAddress] != 0;
    }

    // Check if a founder is registered
    function isFounderRegistered(address founderAddress) public view returns (bool) {
        return founderIDs[founderAddress] != 0;
    }

    function getUserID(address userAddress) public view returns (uint256) {
        return userIDs[userAddress];
    }

    function getFounderID(address founderAddress) public view returns (uint256) {
        return founderIDs[founderAddress];
    }

    function mintNFT(string memory tokenURI, uint256 paymentAmount, address payable recipientAddress) public payable returns (uint256) {
        require(msg.value >= paymentAmount, "Insufficient funds sent.");

        // Transfer the funds to the recipient address
        recipientAddress.transfer(paymentAmount);

        // Mint the NFT to the caller's address
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        ownedNFTs[msg.sender].push(newItemId);

        // Emit the event with the new token ID
        emit NFTMinted(newItemId, msg.sender);

        return newItemId;
    }

    function getOwnedNFTs(address owner) public view returns (uint256[] memory) {
        return ownedNFTs[owner];
    }
}
