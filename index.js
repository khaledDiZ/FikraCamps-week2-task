let fs = require('fs');
let _  = require('underscore');

fs.readFile('./assets/flower.txt', (err, data)=>{
    if(err) return;

    // thanks for the hint :D
    let flowers = data.toString().split("\n");

    let resuilts = {
        //number of rows 
        rows: flowers.length,
        //number of flowers that's not starts with S gonna call it Number of flowers not with S = nofws
        nofws: 0,
        //flowers that's starts with S and it's gonna be an array 
        FlowersWithS: [],
        //flowers starts with my letter K 
        FlowersWithK: [],
        //flowers with length of five 
        flowersLengthFive: []
    }


    _.filter(flowers, (name) => {
		if(_.contains(name[0], 'S')) {
			resuilts.FlowersWithS.push(name)
		} else {
			resuilts.nofws += 1;



			if (_.contains(name[0], 'K')) {
				resuilts.FlowersWithK.push(name)
			}
		}


                if (name.length === 5) {
                    resuilts.flowersLengthFive.push(name)
                }
	})

    //console.log console.log everywhere ...
    console.log("Number of rows is:: "+resuilts.rows);
    console.log("###################################");
    console.log("Number of flowers that not start with S:: "+resuilts.nofws);
    console.log("###################################");
    console.log("Flowers that starts with S:: "+resuilts.FlowersWithS);
    console.log("###################################");
    console.log("Flowers that starts with K:: "+resuilts.FlowersWithK);
    console.log("###################################");
    console.log("Flowers with length of five:: "+resuilts.flowersLengthFive);

})