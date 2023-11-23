
var graph = {
  A1: { A4: 4, I1: 16 },
  A3: { A4: 7, I4: 3 },
  A4: { A3: 7, A1: 4 },
  A5: { A6: 4.5, I2: 10 },
  A6: { A5: 4.5, A7: 9 },
  A7: { A6: 9, A8: 4.5 },
  A8: { A7: 4.5, I3: 3 },
  A9: { A10: 5 },
  A10: { A9: 5, I1: 4 },
  A11: { I1: 3, I2: 13, I5: 3 },
  A12: { I5: 7 },
  A13: { I3: 12, I4: 3 },
  A14: { I4: 14, I7: 2.5 },
  A15: { I22: 8 },
  A16: { I6: 13, I7: 3 },
  A17: { I8: 7 },
  A18: { I8: 29, I10: 8 },
  A19: { I15: 9 },
  A20: { I20: 14, I21: 7 },
  A21: { I21: 4, A22: 5 },
  A22: { A21: 5, A23: 5 },
  A23: { A22: 5, I15: 10 },
  A24: { A25: 5, I20: 2.5 },
  A25: { A24: 5, A26: 5 },
  A26: { A25: 5, I19: 2 },
  A27: { I17: 21, I18: 2.5 },
  A28: { A29: 13, I12: 13 },
  A29: { A28: 13, I13: 3 },
  A30: { I13: 13, I18: 9 },
  A31: { I19: 4 },
  A32: { I11: 8 },
  I1: { A1: 16, A10: 4, A11: 3 },
  I2: { A5: 10, I5: 10 },
  I3: { A8: 3, A13: 12, I6: 17 },
  I4: { A3: 3, A13: 3, A14: 14, I23: 21 },
  I5: { A11: 3, A12: 7, I2: 10 },
  I6: { A16: 13, I3: 17, I22: 1.5 },
  I7: { A14: 2.5, A16: 3, I9: 20 },
  I8: { A17: 7, A18: 29, I22: 21.5 },
  I9: { I7: 20, I10: 23, I12: 20, I23: 17 },
  I10: { A18: 8, I9: 23, I11: 23 },
  I11: { A32: 8, I10: 23, I16: 24 },
  I12: { A28: 13, I9: 20, I14: 17 },
  I13: { A29: 3, A30: 12, I21: 17, I16: 23 },
  I14: { I12: 17, I15: 4, I23: 21 },
  I15: { A19: 9, A23: 10, I14: 4 },
  I16: { I11: 24, I13: 17, I17: 21 },
  I17: { A27: 21, I16: 21 },
  I18: { A27: 2.5, A30: 9, I19: 4 },
  I19: { A26: 2, A31: 4, I18: 4 },
  I20: { A20: 14, A24: 2.5 },
  I21: { A20: 7, A21: 4, I13: 17 },
  I22: { A15: 8, I6: 1.5, I8: 21.5 },
  I23: { I4: 21, I14: 21, I9: 17 }
};

var roomMap = {
  "Amarnath":"A1",
  "Elephanta":"A1",
  "Jog":"A3",
  "Varaha":"A4",
  "Kalhatti 1":"A5",
  "Kalhatti 2":"A6",
  "Kalhatti 3":"A7",
  "Kalhatti 4":"A8",
  "Borra 1":"A9",
  "Borra 2":"A10",
  "Borra 3":"A11",
  "Badarni":"A12",
  "Sissu":"A13",
  "Tabo":"A14",
  "Belum":"A15",
  "Soochipara":"A16",
  "Kalhatti 5":"A17",
  "Kune":"A18",
  "Barachukkl":"A19",
  "Edakkal 1":"A20",
  "Edakkal 2":"A21",
  "Edakkal 3":"A22",
  "Edakkal 4":"A23",
  "Kempty 1":"A24",
  "Kempty 2":"A25",
  "Kempty 3":"A26",
  "Kempty 4":"A27",
  "Karla":"A28",
  "Hebbe":"A29",
  "Irupu":"A30",
  "Bhimlat":"A31",
  "Barkana":"A32",

  // Intersections start here 

  "Caffeteria SE":"I4",
  "Caffeteria NE":"I9",
  "Caffeteria SW":"I14",
}

var points = {

    "A1": [614, 618],
    "A3": [614, 825],
    "A4": [614, 682],
    "A5": [329, 496],
    "A6": [329, 587],
    "A7": [329, 740],
    "A8": [329, 833],
    "A9": [779, 297],
    "A10": [687, 297],
    "A11": [571, 297],
    "A12": [505, 168],
    "A13": [573, 872],
    "A14": [617, 1145],
    "A15": [187, 1219],
    "A16": [570, 1191],
    "A17": [329, 1753],
    "A18": [843, 1630],
    "A19": [1439, 732],
    "A20": [2016, 872],
    "A21": [1808, 872],
    "A22": [1715, 872],
    "A23": [1622, 872],
    "A24": [2276, 922],
    "A25": [2276, 1007],
    "A26": [2276, 1097],
    "A27": [2276, 1237],
    "A28": [1611, 1191],
    "A29": [1838, 1191],
    "A30": [2122, 1191],
    "A31": [2325, 1135],
    "A32": [1429, 1754],
    "I1": [617, 297],
    "I2": [329, 297],
    "I3": [329, 872],
    "I4": [617, 872],
    "I5": [505, 297],
    "I6": [329, 1191],
    "I7": [617, 1191],
    "I8": [329, 1630],
    "I9": [995, 1191],
    "I10": [995, 1630],
    "I11": [1429, 1630],
    "I12": [1374, 1191],
    "I13": [1883, 1191],
    "I14": [1374, 872],
    "I15": [1439, 872],
    "I16": [1883, 1630],
    "I17": [2276, 1630],
    "I18": [2276, 1191],
    "I19": [2276, 1135],
    "I20": [2276, 872],
    "I21": [1883, 872],
    "I22": [329, 1219],
    "I23": [995, 872]
}

document.addEventListener('DOMContentLoaded', function() {

    var canvas = document.getElementById('imageCanvas');
    var ctx = canvas.getContext('2d');

    var extractedImage = new Image();

    extractedImage.onload = function() {

        canvas.width = 2700;
        canvas.height = 2129;

        ctx.drawImage(extractedImage, 0, 0, canvas.width, canvas.height);

        document.getElementById('submitBtn').addEventListener('click', function() {

          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(extractedImage, 0, 0, canvas.width, canvas.height);

          var sourceDD = document.getElementById('sourceDD');
          var destinationDD = document.getElementById('destinationDD');

          var sourceVal = sourceDD.value;
          var destinationVal = destinationDD.value;

          const startPoint = roomMap[sourceVal];
          const endPoint = roomMap[destinationVal];
          var result = dijkstraAlgorithm(graph, startPoint, endPoint);
          var optimalPath = result.path;

          var xCoords = [];
          var yCoords = [];

          for(let i=0; i<optimalPath.length-1; i++){

            xCoords.push(points[optimalPath[i]][0]-25);
            yCoords.push(points[optimalPath[i]][1]);
            addPointsAtFixedDistance(points[optimalPath[i]][0]-25, points[optimalPath[i]][1], points[optimalPath[i]][0]-25, points[optimalPath[i+1]][1],25);
          }

          var srcImg = new Image();
          srcImg.onload = function() {
            ctx.drawImage(srcImg, xCoords[0]-20, yCoords[0]-25, 50, 50);
          }
          srcImg.src = './images/inpSrc.png'

          let index = 0;

          function drawPath() {
            if (index < xCoords.length - 1) {
              ctx.beginPath();
              ctx.moveTo(xCoords[index], yCoords[index]);

              ctx.lineTo(xCoords[index + 1], yCoords[index + 1]);

              ctx.strokeStyle = 'red';
              ctx.lineWidth = 3;
              ctx.stroke();
              index++;
            }
            setTimeout(drawPath, 750);
          }

          drawPath();

          function addPointsAtFixedDistance(x1, y1, x2, y2, distanceInterval) {
            const distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
            const numPoints = Math.floor(distance / distanceInterval);
            for (let i = 1; i <= numPoints; i++) {
              const ratio = i * distanceInterval / distance;
              const x = x1 * (1 - ratio) + x2 * ratio;
              const y = y1 * (1 - ratio) + y2 * ratio;
              xCoords.push(x);
              yCoords.push(y);
            }

          }

          var destImg = new Image();
          destImg.onload = setTimeout(function() {
            ctx.drawImage(destImg, xCoords[xCoords.length-1]-20, yCoords[yCoords.length-1]-25, 50, 50);
            destImg.style.zIndex = 100;
          },750*(xCoords.length+1))
          destImg.src = './images/inpDest.png'
        });
    };
    extractedImage.src = './images/floor-layout.png'

    loadRooms();
});

function loadRooms(){

  var sourceDD = document.getElementById('sourceDD');
  var destinationDD = document.getElementById('destinationDD');

  var keys = Object.keys(roomMap);

  for (var i = 0; i < Object.keys(roomMap).length; i++) {

    var option1 = document.createElement('option');
    var option2 = document.createElement('option');

    option1.value = keys[i];
    option1.text = keys[i];
    option1.style.fontWeight = 'bold';
    option1.style.fontSize = '25px';

    option2.value = keys[i];
    option2.text = keys[i];
    option2.style.fontWeight = 'bold';
    option2.style.fontSize = '25px';

    sourceDD.appendChild(option1);
    destinationDD.appendChild(option2);
  }

  var sortedOptions = Array.from(sourceDD.options).sort((a, b) => a.text.localeCompare(b.text));
  sourceDD.innerHTML = "";
  sortedOptions.forEach(option => sourceDD.add(option));

  var sortedOptions = Array.from(destinationDD.options).sort((a, b) => a.text.localeCompare(b.text));
  destinationDD.innerHTML = "";
  sortedOptions.forEach(option => destinationDD.add(option));
}

function dijkstraAlgorithm(graph, start, end) {
  const costs = Object.assign({[end]: Infinity}, graph[start]);
  const parents = {[end]: null};
  const processed = [];

  let node = findLowestCostNode(costs, processed);

  while (node) {
      let cost = costs[node];
      let children = graph[node];
      for (let n in children) {
          let newCost = cost + children[n];
          if (!costs[n] || costs[n] > newCost) {
              costs[n] = newCost;
              parents[n] = node;
          }
      }
      processed.push(node);
      node = findLowestCostNode(costs, processed);
  }

  let optimalPath = [end];
  let parent = parents[end];
  while (parent) {
      optimalPath.push(parent);
      parent = parents[parent];
  }
  optimalPath.push(start);
  optimalPath.reverse();

  return {distance: costs[end], path: optimalPath};
}

function findLowestCostNode(costs, processed) {
  return Object.keys(costs).reduce((lowest, node) => {
      if (lowest === null || costs[node] < costs[lowest]) {
          if (!processed.includes(node)) {
              lowest = node;
          }
      }
      return lowest;
  }, null);
}