// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.8.0;

/// @title FluiDex operations tools
library Operations {
	/// @notice FluiDex circuit operation type
    enum OpType {
        Deposit
    }

	// Deposit pubdata
    struct Deposit {
        // uint8 opType
        uint32 accountId;
        uint16 tokenId;
        uint128 amount;
        address owner;
    }

	/// Serialize deposit pubdata
    function writeDepositPubdataForPriorityQueue(Deposit memory op) internal pure returns (bytes memory buf) {
        buf = abi.encodePacked(
            uint8(OpType.Deposit),
            bytes4(0), // accountId (ignored) (update when ACCOUNT_ID_BYTES is changed)
            op.tokenId, // tokenId
            op.amount, // amount
            op.owner // owner
        );
    }
}