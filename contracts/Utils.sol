// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.8.0;

library Utils {
    function hashBytesToBytes20(bytes memory _bytes) internal pure returns (bytes20) {
        return bytes20(uint160(uint256(keccak256(_bytes))));
    }
}
