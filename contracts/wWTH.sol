// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract wHTH is ERC20 {
    constructor() ERC20("wrappedHelpTheHomeless", "wHTH") {
        _mint(msg.sender, 1000000 * 10**uint256(decimals()));
    }

    function approve(address _spender, uint256 _value) public override returns (bool) {
        _approve(msg.sender, _spender, _value);
        return true;
    }

    function transfer(address _to, uint256 _value) public override returns (bool) {
        _transfer(msg.sender, _to, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public override returns (bool) {
        _transfer(_from, _to, _value);
        _approve(_from, msg.sender, allowance(_from, msg.sender) - _value);
        return true;
    }

    function allowance(address _owner, address _spender) public view override returns (uint256) {
        return super.allowance(_owner, _spender);
    }

    // Fallback function
    receive() external payable {}
}

