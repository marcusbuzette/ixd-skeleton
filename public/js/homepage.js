var globalMood;
var globalTask;

var nodes = new vis.DataSet([
  {label: "Group Study",tag: "groupstudy"},
  {label: "Work on laptop",tag: "laptop"},
  {label: "Read",tag: "read"},
  {label: "Chat", tag: "chat"},
  {label: "  Relax ", tag: "relax"},

]);



var edges = new vis.DataSet();

var container = document.getElementById('bubblemood');
var data = {
  nodes: nodes,
  edges: edges
};

var options = {
  nodes: {borderWidth:0,shape:"circle",color:{background:'#b7b7b7', border:'#f4b342', highlight:{background:'#f4b342', border: '#707070'}},font:{color:'#fff'}},
  physics: {
    stabilization: false,
    minVelocity:  0.01,
    solver: "repulsion",
    repulsion: {
      nodeDistance: 40
    }
  }
};

var network = new vis.Network(container, data, options);


// Events
network.on("click", function(e) {
  if (e.nodes.length) {
    var node = nodes.get(e.nodes[0]);
    console.log(node.tag);
    globalTask = node.tag;
    console.log(globalTask);
    $("#confirm").attr("href","http://localhost:3000/resultNL?mood="+globalMood+"&task="+globalTask);
    nodes.update(node);
  }
});





var moods = new vis.DataSet([
  {label: "   Happy    ", tag: "happy"},
  {label: "   Bored  ", tag: "bored"},
  {label: "Sad", tag: "sad"},
  {label: "Agitated", tag: "agitated"},
  {label: " Excited ", tag: "excited"},
  {label: " Focus ", tag: "focus"},

]);

var edgem = new vis.DataSet();

var containerm = document.getElementById('bubbletask');
var datam = {
  nodes: moods,
  edges: edgem
};

var optionsm = {
  nodes: {borderWidth:0,shape:"circle",color:{background:'#b7b7b7', border:'#f4b342', highlight:{background:'#f4b342', border: '#707070'}},font:{color:'#fff'}},
  physics: {
    stabilization: false,
    minVelocity:  0.01,
    solver: "repulsion",
    repulsion: {
      nodeDistance: 40
    }
  }
};

var networkm = new vis.Network(containerm, datam, optionsm);

// Events
networkm.on("click", function(e) {
  if (e.nodes.length) {
    var nodem = moods.get(e.nodes[0]);
    console.log(nodem.tag);
    globalMood = nodem.tag;
    $("#confirm").attr("href","http://localhost:3000/resultNL?mood="+globalMood+"&task="+globalTask);
    moods.update(nodem);
  }
});


