// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.8.0;

/// @title Fluidex configuration constants
contract Config {
    /// @dev Expected average period of block creation
    uint256 constant BLOCK_PERIOD = 15 seconds;

    /// @dev Expiration delta for priority request to be satisfied (in seconds)
    /// @dev NOTE: Priority expiration should be > (EXPECT_VERIFICATION_IN * BLOCK_PERIOD)
    /// @dev otherwise incorrect block with priority op could not be reverted.
    uint256 constant PRIORITY_EXPIRATION_PERIOD = 3 days;

    /// @dev Expiration delta for priority request to be satisfied (in ETH blocks)
    uint256 constant PRIORITY_EXPIRATION = PRIORITY_EXPIRATION_PERIOD / BLOCK_PERIOD;
}
