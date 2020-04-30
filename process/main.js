
    var chart_config = {
        chart: {
            container: "#tree",
           
            node: {
                collapsable: true
            },
           
        },
        nodeStructure: {
            text: {name: 'nmap the target'},
            
            children: [
                {
                    text: {name:"<p>There is a webserver!</p>"},                   
                }
            ]
        }
    };


var chart = new Treant(chart_config, function() { }, $ );
