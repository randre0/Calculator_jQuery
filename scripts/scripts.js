let displayed_num = "0";
let results = 0;
let operation_checker = false;
let decimal_checker = false;
let current_number = "0";
const MAX_CHARS = 19;
$(document).ready(function(){

    $(".button").click(function(event) {
        let input_number = event.target.innerText;
        let input_id = event.target.id;
        if(input_id === "zero"){
            if(operation_checker){
                if(!max_text(displayed_num.length + 1)) {
                    current_number = input_number;
                    displayed_num += current_number;
                    $("#results_field").text(displayed_num);
                    operation_checker = false;
                }
            }
            else if(current_number !== "0" && displayed_num !== "0") {
                if(!max_text(displayed_num.length + 1)) {
                    current_number += input_number;
                    displayed_num += input_number;
                    $("#results_field").text(displayed_num);
                    operation_checker = false;
                }
            }
        }
        else {
            if(displayed_num === "0"){
                current_number = input_number;
                displayed_num = current_number;
                $("#results_field").text(displayed_num);
            }
            else if(current_number === "0"){
                if(!max_text(displayed_num.length + 1)) {
                    current_number = input_number;
                    displayed_num = displayed_num.slice(0, displayed_num.length - 1) + current_number;
                    $("#results_field").text(displayed_num);
                }
            }
            else{
                if(!max_text(displayed_num.length + 1)) {
                    current_number += input_number;
                    displayed_num += input_number;
                    $("#results_field").text(displayed_num);
                }
            }
            operation_checker = false;
        }
    });

    $(".operation").click(function(event){
        if(event.target.id === "equals"){
            results = eval(displayed_num);
            if(results % 1 === 0){
                displayed_num = results.toString();
                decimal_checker = false;
            }
            else{
                results = Number(results.toFixed(4));
                displayed_num = results.toString();
                decimal_checker = true;
            }
            current_number = displayed_num;
            $("#results_field").text(displayed_num);

        }
        else if(operation_checker){
            displayed_num = displayed_num.slice(0, displayed_num.length - 1) + event.target.innerText;
            $("#results_field").text(displayed_num);
            current_number = "";
            decimal_checker = false;
        }

        else {
            if(!max_text(displayed_num.length + 1)) {
                displayed_num += event.target.innerText;
                $("#results_field").text(displayed_num);
                operation_checker = true;
                current_number = "";
                decimal_checker = false;
            }
        }
    });

    $(".key").click(function(event){
        if(event.target.id === "clear"){
            displayed_num = "0";
            results = 0;
            current_number = "0";
            $("#results_field").text(results);
            decimal_checker = false;
        }
        else{
            if(!decimal_checker && !max_text(displayed_num.length + 1)) {
                current_number += event.target.innerHTML;
                displayed_num += event.target.innerHTML;
                $("#results_field").text(displayed_num);
                decimal_checker = true;
            }

        }
    });

    function max_text(displayed_count){
        if(displayed_count > MAX_CHARS) {
            $("#results_field").text("MAX CHARACTERS");
            setTimeout(function () {
                $("#results_field").text(displayed_num);
            }, 300);
            return true;
        }
        return false;

    };


});
