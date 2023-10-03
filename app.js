"use strict";

const treeObj = [
  {
    name: 1,
    items: [
      {
        name: 2,
        items: [{ name: 3 }, { name: 4 }],
      },
      {
        name: 5,
        items: [{ name: 6 }],
      },
    ],
  },
  {
    name: 11,
    items: [
      {
        name: 12,
        items: [{ name: 13 }, { name: 14 }],
      },
      {
        name: 15,
        items: [{ name: 16 }],
      },
    ],
  },
];

const tree = {
  symbol: " ",
  eachElem: function (items) {
    this.symbol = "   " + this.symbol
    items.forEach((item) => {
      console.log(this.symbol,item.name);
      item.items ? this.eachElem(item.items) : null
    });
    this.symbol = this.symbol.slice(3)
  },
  addSymbol: function(items) {
    this.symbol = "∟"
    this.eachElem(items)
  },
  start: function(items) {
    items.forEach(item => {
      console.log(this.symbol,item.name);
      item.items ? this.addSymbol(item.items) : null
      this.symbol = " "
    }) 
  },
  init: function () {
    this.start(treeObj);
  },
};
tree.init();

