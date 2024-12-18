class GraphPlotter {
    constructor() {
      // Control Variables
      this.Points = false;  // Mark each value on the graph with a dot
      this.SubGrid = false; // Draw a smaller grid of 1/10 inside the Grid
      this.XTitle = '';     // Title for the X-axis
      this.YTitle = '';     // Title for the Y-axis
  
      // Grid Variables
      this.YMin = 0;
      this.YMax = 0;
      this.YStep = 0;
      this.XMin = 0;
      this.XMax = 0;
      this.XStep = 0;
      this.totalPoints = 0; // Total number of points to display
  
      // Size Variables
      this.WidthP = 0;
      this.HeightP = 0;

      // GP Coordinates
      this.Bottom = 0;
      this.Top    = 0;
      this.Left   = 0;
      this.Right  = 0;
    }
  
    // Setup Graph Plotter Settings
    GraphSetup(points, subGrid, xTitle, yTitle) {
      this.Points = points;
      this.SubGrid = subGrid;
      this.XTitle = xTitle;
      this.YTitle = yTitle;
    }
  
    // Setup Grid
    GridSetup(yMin, yMax, yStep, xMin, xMax, xStep) {
      this.YMin = yMin;
      this.YMax = yMax;
      this.YStep = yStep;
      this.XMin = xMin;
      this.XMax = xMax;
      this.XStep = xStep;
      this.totalPoints = this.XMax - this.XMin + 1;
    }
  
    // Setup Size
    SizeSetup(widthP, heightP) {
      this.WidthP = widthP;
      this.HeightP = heightP;

      this.Top = 50;
      this.Bottom = heightP - 50;
      this.Left = 100;
      this.Right = widthP - 100;
    }

    // Setup Offset
    OffsetSetup(offX, offY) {
        this.Top = 50 + offY;
        this.Bottom = this.HeightP - 50 + offY;
        this.Left = 100 + offX;
        this.Right = this.WidthP - 100 + offX;
    }
  
    // Fill the background of the Grid with a specific color
    fillBackground(backgroundColor) {
      noStroke();
      fill(backgroundColor);
      rect(this.Top - 50, this.Left - 100, this.WidthP + 100, this.HeightP + 50);
    }
  
    // Draw the Grid
    DrawGrid() {
      // Draw SubGrid
      if (this.SubGrid) {
        // Y sub grid
        for (let i = this.XMin; i < this.XMax; i += this.XStep / 10) {
          // Map each x value to a coordinate
          let x = map(i, this.XMin, this.XMax, this.Left, this.Right);
  
          // Draw Vertical Line
          strokeWeight(0.5);
          stroke(200);  // Light gray color for subgrid
          line(x, this.Bottom, x, this.Top);
        }
  
        // X sub grid
        for (let i = this.YMin; i < this.YMax; i += this.YStep / 10) {
          // Map each y value to a coordinate
          let y = map(i, this.YMin, this.YMax, this.Bottom, this.Top);
  
          // Draw Horizontal Line
          strokeWeight(0.5);
          stroke(200);  // Light gray color for subgrid
          line(this.Left, y, this.Right, y);
        }
      }
  
      // Draw Main Grid
      // Y grid
      for (let i = this.XMin; i <= this.XMax; i += this.XStep) {
        // Map each x value to a coordinate
        let x = map(i, this.XMin, this.XMax, this.Left, this.Right);
  
        // Draw Vertical Line
        strokeWeight(2);
        stroke(160);  // Dark gray color for grid
        line(x, this.Bottom, x, this.Top);
  
        // Display value of current x coordinate on the horizontal axis
        noStroke();
        textAlign(CENTER);
        fill(0);
        if (i !== 0) {  // Don't rewrite 0 on top of 0
          text(i, x, this.Bottom + 20);
        }
      }
  
      // X Grid
      for (let i = this.YMin; i <= this.YMax; i += this.YStep) {
        // Map each y value to a coordinate
        let y = map(i, this.YMin, this.YMax, this.Bottom, this.Top);
  
        // Draw Horizontal Line
        strokeWeight(2);
        stroke(160);  // Dark gray color for grid
        line(this.Left, y, this.Right, y);
  
        // Display value of current y coordinate on the vertical axis
        noStroke();
        textAlign(RIGHT);
        fill(0);
        if (i !== 0) {  // Don't rewrite 0 on top of 0
          text(i, this.Left - 10, y);
        }
      }
  
      // Drawing the axes
      stroke(0); 
      strokeWeight(2.5); 
      fill(0);
  
      // X axis
      let y = map(0, this.YMin, this.YMax, this.Bottom, this.Top);
      line(this.Left, y, this.Right, y);
  
      // Y axis
      let x = map(0, this.XMin, this.XMax, this.Left, this.Right);
      line(x, this.Bottom, x, this.Top);
  
      // Label the axes
      noStroke();
      fill(0);
      textAlign(CENTER);
      text(this.XTitle, this.Left + (this.WidthP / 2), this.Bottom + 40);
      textAlign(RIGHT);
      text(0, this.Left - 10, y);
      textAlign(RIGHT);
      rotate(-HALF_PI);
      text(this.YTitle, -(this.Bottom - (this.HeightP / 2)), this.Left - 70);
      rotate(HALF_PI);
      textAlign(CENTER);
      text(0, x, this.Bottom + 20);
    }
    
    // Draw the entire graph
    DrawGraph(graph, graphColor) {
        for(let i = 1; i < this.totalPoints; i += 1) {
            this.DrawReading(graph, graphColor, i)
        }
    }

    // Draw next Reading
    DrawReading(graph, graphColor,pointNo) {
      stroke(graphColor);
      strokeWeight(2.5);
        let X1 = 0;
        let X2 = 0;
        let Y1 = 0;
        let Y2 = 0;
        let drawPoints = this.Points;
  
        // Get coordinate of current value
        let x1 = map(pointNo - 1, 0, this.totalPoints - 1, this.Left, this.Right);
        let y1 = this.yCo(graph[pointNo - 1]);
  
        // Get coordinate of next value
        let x2 = map(pointNo, 0, this.totalPoints - 1, this.Left, this.Right);
        let y2 = this.yCo(graph[pointNo]);
  
        // Calculate Gradient for filtering lines
        let m = (y2 - y1) / (x2 - x1);
  
        // Fill OUT variables with initial data
        X1 = x1;
        X2 = x2;
        Y1 = y1;
        Y2 = y2;
  
        // Exception cases to force Y values inside the grid
        // Modify out variables using coordinate geometry
  
        // y1 above grid
        if (y1 < this.Top) {
          Y1 = this.Top;
          X1 = (Y1 - y1 + m * x1) / m;
          drawPoints = false;
        }
  
        // y1 below grid
        if (y1 > this.Bottom) {
          Y1 = this.Bottom;
          X1 = (Y1 - y1 + m * x1) / m;
          drawPoints = false;
        }
  
        // y2 above grid
        if (y2 < this.Top) {
          Y2 = this.Top;
          X2 = (Y2 - y1 + m * x1) / m;
          drawPoints = false;
        } 
  
        // y2 below grid
        if (y2 > this.Bottom) {
          Y2 = this.Bottom;
          X2 = (Y2 - y1 + m * x1) / m;
          drawPoints = false;
        }
        this.DrawSegment(drawPoints, X1, Y1, X2, Y2);
    }
  
    // Draw a straight line segment from one point to another; also uses boolean to decide whether to draw points on ends of the segment
    DrawSegment(drawPoint, X1, Y1, X2, Y2) {
      // Draw line from current value to next value
      strokeWeight(2.5);  // Thickness of 2 pixels
      line(X1, Y1, X2, Y2);
  
      // Draw Points
      if (drawPoint) {
        strokeWeight(5);  // Thickness of 5 pixels
        point(X1, Y1);
        point(X2, Y2);
      }
    }
  
    // Maps a y coordinate from the graph to the y coordinate on screen
    yCo(y) {
      let yCoord = map(y, this.YMin, this.YMax, this.Bottom, this.Top);
      return yCoord;
    }
}
