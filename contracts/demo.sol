// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DemoCoin is ERC20 {
    constructor() ERC20("DemoCoin", "DC") {}

    function mint(address account, uint256 amount) external {
        _mint(account, amount);
    }

    function burn(address account, uint256 amount) external {
        _burn(account, amount);
    }

    function decimals() public view virtual override returns (uint8) {
        return 18;
    }
}
