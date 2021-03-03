// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.8.0;

/// @title Fluidex storage contract
contract Storage {
    /// @notice First open priority request id
    uint64 public firstPriorityRequestId;

    /// @notice Total number of requests
    uint64 public totalOpenPriorityRequests;
}
