

var nodes = new vis.DataSet([
  {label: "Group Study"},
  {label: "Work on laptop"},
  {label: "Read"},
  {label: "Chat"},
  {label: "Sleep"},

]);

var edges = new vis.DataSet();

var container = document.getElementById('bubbles');
var data = {
  nodes: nodes,
  edges: edges
};

var options = {
  nodes: {borderWidth:0,shape:"circle",color:{background:'#F92C55', highlight:{background:'#F92C55', border: '#F92C55'}},font:{color:'#fff'}},
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
    // Do something
    nodes.update(node);
  }
});





var moods = new vis.DataSet([
  {label: "Happy    "},
  {label: "Bored"},
  {label: "Sad"},
  {label: "Agitated jijfer "},
  {label: "Excited"},

]);

var edgem = new vis.DataSet();

var containerm = document.getElementById('bubbles2');
var datam = {
  nodes: moods,
  edges: edgem
};

var optionsm = {
  nodes: {borderWidth:0,shape:"circle",color:{background:'#F92C55', highlight:{background:'#F92C55', border: '#F92C55'}},font:{color:'#fff'}},
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
    // Do something
    moods.update(nodem);
  }
});