function Account (account) {
    this.name = account.name;
    this.id = account.id;
    this.startDate = account.startDate;
    this.endDate = account.endDate;
    this.price = account.price;
}

Account.instances = {};

Account.add = function (account) {
    var account = new Account(account);
    //add account to the Account.instances collection
    Account.instances[account.id] = account;
    console.log("Account " + account.id + " created!");
};

Account.loadAll = function() {
    var key="", keys=[], accountsString="", accounts={};

    try {
        if (localStorage["accounts"]) {
            accountsString = localStorage["accounts"];
        }
    } catch (e) {
        alert ("Error when reading from Local Storage\n" + e);
    }

    if (accountsString) {
        accounts = JSON.parse(accountsString);
        keys = Object.keys(accounts);
        console.log(keys.length + " books loaded.");
        for (var i=0; i<keys.length; i++) {
            key = keys[i];
            Account.instances[key] = Account.convertRow2Obj(accounts[key]);
        }
    }
};

Account.convertRow2Obj = function (accountRow) {
    var account = new Account(accountRow);
    return account;
};

Book.update = function(account) {
    var account = Account.instances[account.id];
    var
}