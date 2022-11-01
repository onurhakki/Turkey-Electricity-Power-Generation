const time_data = {0: [2010, 1], 1: [2010, 2], 2: [2010, 3], 3: [2010, 4], 4: [2010, 5], 5: [2010, 6], 6: [2010, 7], 7: [2010, 8], 8: [2010, 9], 9: [2010, 10], 10: [2010, 11], 11: [2010, 12], 12: [2011, 1], 13: [2011, 2], 14: [2011, 3], 15: [2011, 4], 16: [2011, 5], 17: [2011, 6], 18: [2011, 7], 19: [2011, 8], 20: [2011, 9], 21: [2011, 10], 22: [2011, 11], 23: [2011, 12], 24: [2012, 1], 25: [2012, 2], 26: [2012, 3], 27: [2012, 4], 28: [2012, 5], 29: [2012, 6], 30: [2012, 7], 31: [2012, 8], 32: [2012, 9], 33: [2012, 10], 34: [2012, 11], 35: [2012, 12], 36: [2013, 1], 37: [2013, 2], 38: [2013, 3], 39: [2013, 4], 40: [2013, 5], 41: [2013, 6], 42: [2013, 7], 43: [2013, 8], 44: [2013, 9], 45: [2013, 10], 46: [2013, 11], 47: [2013, 12], 48: [2014, 1], 49: [2014, 2], 50: [2014, 3], 51: [2014, 4], 52: [2014, 5], 53: [2014, 6], 54: [2014, 7], 55: [2014, 8], 56: [2014, 9], 57: [2014, 10], 58: [2014, 11], 59: [2014, 12], 60: [2015, 1], 61: [2015, 2], 62: [2015, 3], 63: [2015, 4], 64: [2015, 5], 65: [2015, 6], 66: [2015, 7], 67: [2015, 8], 68: [2015, 9], 69: [2015, 10], 70: [2015, 11], 71: [2015, 12], 72: [2016, 1], 73: [2016, 2], 74: [2016, 3], 75: [2016, 4], 76: [2016, 5], 77: [2016, 6], 78: [2016, 7], 79: [2016, 8], 80: [2016, 9], 81: [2016, 10], 82: [2016, 11], 83: [2016, 12], 84: [2017, 1], 85: [2017, 2], 86: [2017, 3], 87: [2017, 4], 88: [2017, 5], 89: [2017, 6], 90: [2017, 7], 91: [2017, 8], 92: [2017, 9], 93: [2017, 10], 94: [2017, 11], 95: [2017, 12], 96: [2018, 1], 97: [2018, 2], 98: [2018, 3], 99: [2018, 4], 100: [2018, 5], 101: [2018, 6], 102: [2018, 7], 103: [2018, 8], 104: [2018, 9], 105: [2018, 10], 106: [2018, 11], 107: [2018, 12], 108: [2019, 1], 109: [2019, 2], 110: [2019, 3], 111: [2019, 4], 112: [2019, 5], 113: [2019, 6], 114: [2019, 7], 115: [2019, 8], 116: [2019, 9], 117: [2019, 10], 118: [2019, 11], 119: [2019, 12], 120: [2020, 1], 121: [2020, 2], 122: [2020, 3], 123: [2020, 4], 124: [2020, 5], 125: [2020, 6], 126: [2020, 7], 127: [2020, 8], 128: [2020, 9], 129: [2020, 10], 130: [2020, 11], 131: [2020, 12], 132: [2021, 1], 133: [2021, 2], 134: [2021, 3], 135: [2021, 4], 136: [2021, 5], 137: [2021, 6], 138: [2021, 7], 139: [2021, 8], 140: [2021, 9], 141: [2021, 10], 142: [2021, 11], 143: [2021, 12], 144: [2022, 1], 145: [2022, 2], 146: [2022, 3], 147: [2022, 4], 148: [2022, 5], 149: [2022, 6], 150: [2022, 7], 151: [2022, 8], 152: [2022, 9], 153: [2022, 10], 154: [2022, 11], 155: [2022, 12]}

const max_count_val = 80
const min_count_val = 0

const max_cap_val = 8000
const min_cap_val = 0

var year = 2010;
var month = 1;
var datetime_value = year + month/12

var plotting_data = Object.assign({}, store);;
var selected_colors
var selected_type = "Count"
var total_sum = 0 ;

function sum(arr) {
    let r = 0;

    for (const e of arr) r += e;
    total_sum = r
    if (selected_type == "Count"){
        document.getElementById("TotalUnit").innerHTML = "Total (unit):"
    }
    else{
        document.getElementById("TotalUnit").innerHTML = "Total (GWm):"
        r = (r/1000).toFixed(2);
    }
    return r
}



function check_type_and_run(){
    if (document.getElementById("Selection")["count"].checked == true){
        selected_type = "Count"
        document.getElementById("label0").innerHTML = 1
        document.getElementById("label25").innerHTML = 20
        document.getElementById("label50").innerHTML = 40
        document.getElementById("label75").innerHTML = 60
        document.getElementById("label100").innerHTML = 80
        
    } else if (document.getElementById("Selection")["installedpower"].checked == true)
        {selected_type = "InstalledPower"
        document.getElementById("label0").innerHTML = 1
        document.getElementById("label25").innerHTML = 2000
        document.getElementById("label50").innerHTML = 4000
        document.getElementById("label75").innerHTML = 6000
        document.getElementById("label100").innerHTML = 8000
    }}


function value_to_rgb (x){return "rgb(" + x.toString() + ")";}

function array_to_colors(){
    let a = [];
    let selected_color_values
    for (let i = 0; i < Object.keys(plotting_data["İl"]).length; i++) {a.push(Object.values(plotting_data["İl"])[i])}
    if (selected_type == "Count"){
        selected_color_values = a.map(function(x) {if (x == 0) {return 0} else { return 1+Math.round(254*(x-min_count_val)/(max_count_val-min_count_val),0); }});
    } else if (selected_type == "InstalledPower"){
        selected_color_values = a.map(function(x) {if (x == 0) {return 0} else {return 1+Math.round(254*(x-min_cap_val)/(max_cap_val-min_cap_val),0)};})}
    const selected_colors = selected_color_values.map(function(x){return value_to_rgb(colors[x])});
    return selected_colors}

function counter(){
    for (let t = 0; t < Object.keys(plotting_data["İl"]).length; t++) {
        plotting_data["İl"][Object.keys(plotting_data["İl"])[t]] = 0;
        plotting_data["Tür"][Object.keys(plotting_data["Tür"])[t]] = 0;
        plotting_data["İl-Tür"][Object.keys(plotting_data["İl-Tür"])[t]] = {'Termik - Doğal Gaz': 0, 'Termik - Yerli Kömür': 0, 'Hidroelektrik': 0, 'Jeotermal': 0, 'Rüzgar': 0, 'Termik - Yerli Asfaltit': 0, 'Termik - İthal Kömür': 0, 'Biyokütle': 0, 'Termik - Fuel-oil': 0, 'Termik - Nafta': 0, 'Termik - Proses Atık Isısı': 0, 'Termik - Kömür': 0, 'Termik - Diğer': 0, 'Güneş': 0, 'Termik - Motorin': 0, 'Termik - Uranyum': 0}}
  for (let i = 0 ; i < data.length; i++) {
    if ((data[i][0] + data[i][1]/12)<= datetime_value ){
        if (selected_type == "Count"){
            plotting_data["İl"][data[i][4]] += 1
            plotting_data["Tür"][data[i][3]] += 1
            plotting_data["İl-Tür"][data[i][4]][data[i][3]] += 1
        }else if (selected_type == "InstalledPower"){
            plotting_data["İl"][data[i][4]] += data[i][5]
            plotting_data["Tür"][data[i][3]] += data[i][5]
            plotting_data["İl-Tür"][data[i][4]][data[i][3]] += data[i][5]}
        }}}


function update_colors(){
    for (let i = 0; i < Object.keys(plotting_data["İl"]).length; i++) {
        let key = Object.keys(plotting_data["İl"])[i];
        let selected_item = document.getElementById(key);
        let k = selected_item.children;
        for (let th = 0; th<k.length; th++){k[th].setAttribute("fill", "currentcolor")}
            selected_item.setAttribute("color", selected_colors[i])
    }}


function run_algorithm(){
    check_type_and_run()
    

    counter()
    document.getElementById("TotalValue").innerHTML = sum(Object.values(plotting_data["İl"]));
    selected_colors = array_to_colors()
    update_colors()}


// Start
run_algorithm()


var slider = document.getElementById("timeData");
var output1 = document.getElementById("year");
var output2 = document.getElementById("month");
var iter = 0; //  set your counter to 1
var pause_iter = 0;

slider.oninput = function() {
    year = time_data[this.value][0]
    month = time_data[this.value][1]
    iter = this.value; //  set your counter to 1
    pause_iter = this.value;

    datetime_value = year + month/12
    output1.innerHTML = year;
    output2.innerHTML = month;
    run_algorithm()}


function click_break_simulation(){
    if (iter == 156) {iter = 0;pause_iter=0}
    else if (pause_iter == 666) {iter=slider.value;pause_iter=slider.value}
    else {pause_iter = iter; iter=666;}
}
function click_run_simulation(){
    if (pause_iter == 666){iter=slider.value;pause_iter=slider.value}
    else if (iter == 666){iter = pause_iter;}
    else if (iter == 156) {iter = 0;pause_iter=0}
    run_simulation();}

function run_simulation(){
    setTimeout(function(){
        if (iter>=Object.keys(time_data).length){console.log("Over"); return}
        year = time_data[iter][0]
        month = time_data[iter][1]
        slider.value = iter
        datetime_value = year + month/12

        output1.innerHTML = year;
        output2.innerHTML = month;
        run_algorithm()
        iter++;


        if (iter<Object.keys(time_data).length){run_simulation()}
        else {console.log("Over"); return}}, 60);}
  

var closePopup = document.getElementById("popupclose");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");

// Close Popup Event
closePopup.onclick = function() {
    overlay.style.display = 'none';
    popup.style.display = 'none';};
    
function call_popup() {
    overlay.style.display = 'block';
    popup.style.display = 'block';
}



function update_pie_chart_locally(il){
    let x = [];
    let y = {};

    for (let i = 0; i < Object.keys(plotting_data["İl-Tür"][il]).length; i++) {y[Object.keys(plotting_data["İl-Tür"][il])[i]] = Object.values(plotting_data["İl-Tür"][il])[i];}
    
    let reorder = ['Hidroelektrik','Rüzgar','Güneş','Biyokütle','Jeotermal','Termik - Doğal Gaz','Termik - Yerli Kömür','Termik - Yerli Asfaltit','Termik - İthal Kömür','Termik - Kömür','Termik - Fuel-oil','Termik - Nafta','Termik - Proses Atık Isısı','Termik - Motorin','Termik - Uranyum','Termik - Diğer']
    let reorder_eng = ['Hydro','Wind','Solar','Biomass','Geothermal','Natural Gas','Black Coal','Asphaltite Coal','Import Coal','Coal','Fuel oil','Naphta','Waste Heat','Diesel Oil','Nuclear','Others']

    for (let i = 0; i < reorder.length; i++) {x.push(y[reorder[i]])}

    var data = [{
        values: x,
        labels: reorder_eng,
        type: 'pie',
        domain: { column: 1 },
        hoverinfo: 'label+percent+value',
        hole: .4,
        type: 'pie',
        textposition: 'inside',
        sort:false,
    }];

    var layout = {
        margin: {l: 0,r: 0,b: 0,t: 0,pad: 0},
        colorway: ['#1f77b4', '#2ca02c','#ff7f0e', '#bcbd22', '#17becf', '#d62728', '#7f7f7f', '#e377c2','#9467bd', '#8c564b',   ],
        showlegend: true,
    };
    Plotly.newPlot('popup_plot', data, layout);}

function show_values() {
    const element = document.querySelector('#svg-turkiye-haritasi');
    const info = document.querySelector('.il-isimleri');

    element.addEventListener(
        'mouseover',
        function (event) {
            let val_il = Math.round(plotting_data["İl"][event.target.parentNode.getAttribute('id')], 0)
            if (isNaN(val_il)){val_il = 0}

        if (event.target.tagName === 'path') {
            info.innerHTML = [
            '<div>',
            event.target.parentNode.getAttribute('name'),
            "<br>",
            val_il,
            '</div>'
            ].join('');}});


    
    element.addEventListener(
        'mousemove',
        function (event) {
        info.style.top = event.pageY + 25 + 'px';
        info.style.left = event.pageX + 'px';
        });

    element.addEventListener(
        'mouseout',
        function (event) {
        info.innerHTML = '';
        });

    element.addEventListener(
        'click',
        function (event) {
        if (event.target.tagName === 'path') {
            const parent = event.target.parentNode;
            call_popup()
            const id = parent.getAttribute('id');
            document.getElementById("popup_Title").innerHTML = document.getElementById(id).getAttribute('name')
            document.getElementById("popup_Total").innerHTML = Math.round(plotting_data["İl"][id])
            document.getElementById("popup_Perc").innerHTML =  (100* plotting_data["İl"][id]/total_sum).toFixed(2)
            update_pie_chart_locally(id)}});}


show_values()

// var ccc = []
// for (let i = 1; i < 51; i++) {
//     let yy = Math.round(i*255/51)
//     ccc.push( value_to_rgb(colors[yy])
//         )
//     }

// var data_color = d3.range(50);
// var colors_map = d3.scaleLinear().domain(d3.ticks(0, 50, 11)).range(ccc);
// var svg = d3.select(".some_thing");
// var rects = svg.selectAll(".rects")
// 	.data(data_color)
// 	.enter()
// 	.append("rect")
// 	.attr("x", "96%")
// 	.attr("height", 10)
// 	.attr("y", (d,i)=>""+2*i+"%")
// 	.attr("width","4%")
// 	.attr("fill", d=>ccc[d])
// 	//.attr("stroke", "gray");








