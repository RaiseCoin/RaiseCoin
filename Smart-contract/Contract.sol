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

    constructor() ERC721("StartupInvestNFT", "SINFT") {}

    function registerUser(address userAddress, uint256 userID) public {
        require(userIDs[userAddress] == 0, "User already registered.");
        userIDs[userAddress] = userID;
    }

    function registerFounder(address founderAddress, uint256 founderID) public {
        require(founderIDs[founderAddress] == 0, "Founder already registered.");
        founderIDs[founderAddress] = founderID;
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

        // Proceed to mint the NFT to the caller's address
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        ownedNFTs[msg.sender].push(newItemId);

        return newItemId;
    }

    function getOwnedNFTs(address owner) public view returns (uint256[] memory) {
        return ownedNFTs[owner];
    }
}
