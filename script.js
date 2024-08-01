//#region JQuery Mask

$("#phone").mask("(99) 9999-99999");

//#endregion



//#region JQuery Counter

function wcqib_refresh_quantity_increments() {
    jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function (a, b) {
        var c = jQuery(b);
        c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
    })
}
String.prototype.getDecimals || (String.prototype.getDecimals = function () {
    var a = this,
        b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function () {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function () {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function () {
    var a = jQuery(this).closest(".quantity").find(".qty"),
        b = parseFloat(a.val()),
        c = parseFloat(a.attr("max")),
        d = parseFloat(a.attr("min")),
        e = a.attr("step");
    b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});

//#endregion



//#region Money

var prods = [
    {id: 11, name: "The Burger", price: 24.9},
    {id: 12, name: "The Bacon", price: 27.9},
    {id: 13, name: "The Chicken", price: 23.9},
    {id: 21, name: "Batatas Fritas", price: 11.9},
    {id: 22, name: "Bagel", price: 7.9},
    {id: 23, name: "Bolinhos Veganos", price: 17.9},
    {id: 31, name: "Sorvete com Chocolate", price: 14.9},
    {id: 32, name: "Torta de Frutas Silvestres", price: 11.9},
    {id: 33, name: "Trufas de Chocolate", price: 11.9},
];

var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency', currency: 'BRL'
});

function calc() {
    let quatities = document.getElementsByName("quantity");
    let output = document.getElementById("output");
    let total = 0;

    output.innerHTML = "<br>";

    for (let input of quatities) {
        let id = input.id;
        if (input.value > 0) {
            output.innerHTML += `ID do produto = ${prods[id-1].id} - Produto = ${prods[id-1].name} - Preço Un. = ${formatter.format(prods[id-1].price)} - Quantidade = ${input.value} - Valor = ${formatter.format(prods[id-1].price*parseFloat(input.value))} </br>`;
            total += prods[id-1].price*parseFloat(input.value);
        } 
    }

    if (total != 0) {
        output.insertAdjacentHTML("beforeend", `<h3>Total = ${formatter.format(total)}</h3>`);
    }
}

//#endregion