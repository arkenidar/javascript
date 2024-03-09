// tsc variables_binding --target es6 && node variables_binding
var bound_variables = {};
function bind_var(var_name, var_dependencies, var_binding, var_trigger = function () { }) {
    bound_variables[var_name] = { var_name, var_dependencies, var_binding, var_trigger };
    updated_variable(var_name);
}
function updated_variable(variable_name) {
    bound_variables[variable_name].var_trigger(variable_name);
    for (var affected_variable of find_affected_variables(variable_name)) {
        updated_variable(affected_variable);
    }
}
function find_affected_variables(variable_name) {
    var affected_variables = [];
    for (var each_variable_name of Object.keys(bound_variables)) {
        var each_variable = bound_variables[each_variable_name];
        if (-1 != each_variable.var_dependencies.indexOf(variable_name)) {
            affected_variables.push(each_variable_name);
        }
    }
    return affected_variables;
}
function get_var_value(var_name) {
    var bound_variable = bound_variables[var_name];
    if (bound_variable === undefined)
        return undefined;
    var var_dependencies = bound_variable.var_dependencies;
    for (var var_dependency of var_dependencies) {
        if (var_dependency == var_name)
            continue; // skip same
        if (get_var_value(var_dependency) === undefined)
            return undefined;
    }
    var var_binding = bound_variable.var_binding;
    return var_binding();
}
//----------------------------------------------------------------
function test_cases() {
    function trigger_message(bound_variable_name) {
        console.log("name:", bound_variable_name, "=>", get_var_value(bound_variable_name));
    }
    bind_var("check1", [], function () { return true; }, trigger_message);
    bind_var("check2", [], function () { return true; }, trigger_message);
    bind_var("check3", [], function () { return true; }, trigger_message);
    bind_var("status_text", ["status"], function () {
        return get_var_value("status") ? "OK" : "not OK";
    }, trigger_message);
    bind_var("status", ["check1", "check2", "check3"], function () {
        return get_var_value("check1") && get_var_value("check2") && get_var_value("check3");
    }, trigger_message);
    bind_var("check1", [], function () { return false; }, trigger_message);
    bind_var("check1", [], function () { return true; }, trigger_message);
    /*
    $ tsc variables_binding --target es6 && node variables_binding
    name: check1 => true
    name: check2 => true
    name: check3 => true
    name: status_text => undefined
    name: status => true
    name: status_text => OK
    name: check1 => false
    name: status => false
    name: status_text => not OK
    name: check1 => true
    name: status => true
    name: status_text => OK
    */
}
test_cases();
