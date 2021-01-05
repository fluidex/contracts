// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockERC20 is ERC20 {
    constructor(
        string memory name,
        string memory symbol,
        uint8 decimals,
        address initialAccount,
        uint256 initialBalance
    ) ERC20(name, symbol) {
        _setupDecimals(decimals);
        _mint(initialAccount, initialBalance);
    }

    function mint(address to, uint256 amount) public returns (bool) {
        _mint(to, amount);
        return true;
    }
}
