import { useState } from 'react'
import './App.css'

interface Question {
  id: number;
  question: string;
  answer: string;
  codeExample?: string;
}

function App() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "1. Explain Raster Scan and Random Scan Display. 👉 Draw diagram + Differences (VERY IMPORTANT)",
      answer: "📌 100% exam question type",
      codeExample: `
⭐ Raster Scan Display

✅ Simple Meaning

Raster scan display draws picture line by line from top to bottom, like TV screen scanning.

📌 Working

Screen divided into small dots → Pixels
Pixel data stored in Frame Buffer (memory)
Electron beam scans row by row


📊 Raster Scan Diagram

-------------------------
| → → → → → → → → → → → |
| → → → → → → → → → → → |
| → → → → → → → → → → → |
| → → → → → → → → → → → |
 -------------------------

 Scanning line by line (Top → Bottom)

✅ Features

✔ Used in modern monitors
✔ Supports filled shapes, images, shading
✔ Cheaper technology



⭐ Random Scan Display (Vector Display)

✅ Simple Meaning

Random scan display draws picture only where lines are required (not full screen).

📌 Working

Stores line drawing instructions
Beam directly moves to draw lines
Draws one line at a time


📊 Random Scan Diagram

Screen

   \\        /
    \\      /
     \\____/
     /    \\
    /      \\

Beam directly draws required lines only


✅ Features

✔ Very smooth lines
✔ Used in old CAD systems
✔ Good for wireframe drawings



⭐ ⭐ Difference Between Raster Scan & Random Scan (VERY IMPORTANT)

| Raster Scan                 | Random Scan                  |
| --------------------------- | ---------------------------- |
| Line by line scanning       | Draws only required lines    |
| Pixel based picture         | Line based picture           |
| Uses Frame Buffer memory    | Stores line drawing commands |
| Slower for line drawing     | Faster for line drawing      |
| Low cost                    | High cost                    |
| Good for images             | Best for line drawings       |
| Used in TV, modern monitors | Used in old CAD systems      |


⭐ Easy Memory Trick 🧠

👉 Raster = Rows scanning
👉 Random = Direct line drawing


⭐ One Line Exam Definition

✅ Raster Scan:
Display where image is drawn using pixels scanned line by line.

✅ Random Scan:
Display where electron beam draws only required lines of picture.
      
      `
    },
    {
      id: 2,
      question: "2. Explain DDA Line Drawing Algorithm with example.",
      answer: "📌 Most repeated question",
      codeExample: `
⭐ DDA Line Drawing Algorithm
✅ Simple Meaning

DDA (Digital Differential Analyzer) is a line drawing algorithm used to draw a straight line on screen by 
calculating intermediate points between two endpoints.

It works by calculating small steps in x or y direction and finding the next pixel position.



⭐ Formula Used

For line between two points:
(x₁, y₁) → (x₂, y₂)


Step 1: Calculate Differences
Δx = x2 – x1
Δy = y2 – y1


Step 2: Find max number 
Steps = max(|Δx|, |Δy|)


Step 3: Find increment

Xinc = Δx / Steps
Yinc = Δy / Steps


step 3: increment with X and Y

x = x + Xinc
y = y + Yinc

👉 Each calculated value is rounded to nearest integer pixel.
These incremental calculations are the base of DDA line generation. 


---------------------------------------------------------


⭐ Steps of DDA Algorithm

Step 1

Input starting point (x₁, y₁) and ending point (x₂, y₂)


Step 2

Calculate
Δx and Δy


Step 3
Find number of steps

Steps = max(|Δx|, |Δy|)


Step 4
Find increment

Xinc = Δx / Steps
Yinc = Δy / Steps


Step 5

Plot first point


Step 6

Repeat steps times
Add increments and plot next point


---------------------------------------------------------


⭐ Example (Very Important)

Given

(x₁, y₁) = (5, 6)
(x₂, y₂) = (13, 10)

Step 1
Δx = 13 – 5 = 8
Δy = 10 – 6 = 4


Step 2
Steps = max(8,4) = 8


Step 3
Xinc = 8 / 8 = 1
Yinc = 4 / 8 = 0.5


Step 4 Plot Points

| Step  | X  | Y        |
| ----- | -- | -------- |
| Start | 5  | 6        |
| 1     | 6  | 6.5 → 7  |
| 2     | 7  | 7        |
| 3     | 8  | 7.5 → 8  |
| 4     | 9  | 8        |
| 5     | 10 | 8.5 → 9  |
| 6     | 11 | 9        |
| 7     | 12 | 9.5 → 10 |
| 8     | 13 | 10       |



⭐ Advantages of DDA

✅ Simple and easy to implement
✅ Easy mathematical calculation
✅ Faster than basic line equation method
✅ Less complex logic


⭐ Disadvantages of DDA

❌ Uses floating point calculation
❌ Uses round function → increases time
❌ Less accurate than Bresenham
❌ Line may not be perfectly smooth


⭐ One Line Exam Definition

DDA is an incremental scan conversion algorithm that calculates intermediate points using slope to draw 
a straight line.

      `
    },
    {
      id: 3,
      question: "3. Explain Bresenham’s Line Drawing Algorithm with example. Decision parameter Comparison with DDA ",
      answer: "📌 High scoring + numerical example",
      codeExample: `
⭐ Bresenham’s Line Drawing Algorithm
✅ Simple Meaning

Bresenham’s Line Drawing Algorithm is an efficient algorithm used to draw a straight line using only 
integer calculations.

It avoids floating point operations and rounding, so it is faster and more accurate than DDA.


⭐ Basic Idea

Instead of calculating slope (m), it uses a Decision Parameter (P) to decide which pixel to choose next.

At each step, we choose between:

  East pixel (E)
  North-East pixel (NE)

depending on the value of the decision parameter.



⭐ Decision Parameter Formula (For |m| < 1)

Given line from

      (x0​,y0​)→(xn​,yn​)


Step 1: Calculate

      Δx=xn​−x0​
      Δy=yn​−y0
      
      
Step 2: Initial Decision Parameter

      P0​=2Δy−Δx


Step 3: Update Rules

if Pk < 0
      Pk+1​=Pk​+2Δy

👉 Choose E pixel
👉 x increases by 1
👉 y remains same


if Pk >= 0
      Pk+1​=Pk​+2Δy−2Δx

👉 Choose NE pixel
👉 x increases by 1
👉 y increases by 1


⭐ Steps of Algorithm

1️⃣ Input starting and ending points
2️⃣ Calculate Δx and Δy
3️⃣ Calculate initial decision parameter
4️⃣ Plot first point
5️⃣ For each x:
If P < 0 → choose E
Else → choose NE
  6️⃣ Repeat until end point reached




⭐ Numerical Example (Very Important)

Given:

      (x0​,y0​)=(5,6)
      (xn​,yn​)=(13,10)

  
Step 1: Calculate Differences
      Δx=13−5=8
      Δy=10−6=4


Step 2: Initial Decision Parameter

      P0​=2(4)−8
      P0​=8−8=0


Step 3: Constants

      2Δy=8
      2Δy−2Δx=8−16=−8


Step 4: Iteration Table

| Step  | Pk            | Decision   | Next Point |
| ----- | ------------- | ---------- | ---------- |
| Start | 0             | P ≥ 0 → NE | (6,7)      |
| 1     | 0 + (-8) = -8 | P < 0 → E  | (7,7)      |
| 2     | -8 + 8 = 0    | NE         | (8,8)      |
| 3     | 0 + (-8) = -8 | E          | (9,8)      |
| 4     | -8 + 8 = 0    | NE         | (10,9)     |
| 5     | 0 + (-8) = -8 | E          | (11,9)     |
| 6     | -8 + 8 = 0    | NE         | (12,10)    |
| 7     | 0 + (-8) = -8 | E          | (13,10)    |



⭐ Advantages of Bresenham

✔ Uses only integer calculations
✔ No floating point
✔ Faster than DDA
✔ More accurate
✔ Less memory usage

⭐ Disadvantages

❌ Slightly complex logic
❌ Basic version works for |m| < 1 (needs modification for other slopes)



⭐ Comparison: Bresenham vs DDA (⭐ VERY IMPORTANT)

| DDA Algorithm                  | Bresenham Algorithm     |
| ------------------------------ | ----------------------- |
| Uses floating point arithmetic | Uses integer arithmetic |
| Uses rounding function         | No rounding required    |
| Less accurate                  | More accurate           |
| Slightly slower                | Faster                  |
| Easy to understand             | Slightly complex        |
| Uses slope (m)                 | Uses decision parameter |



⭐ Short Exam Definition

Bresenham’s algorithm is an incremental scan conversion algorithm that uses a decision parameter to 
determine the next pixel using integer calculations.

      `
    },
    {
      id: 4,
      question: "4. Explain Midpoint Circle Algorithm with example.",
      answer: "📌 Very important circle algorithm",
      codeExample: `
⭐ Midpoint Circle Algorithm
✅ Simple Meaning

Midpoint Circle Algorithm is used to draw a circle using only integer calculations.

It is based on the circle equation:
      x2+y2=r2

Instead of calculating every point, it checks the midpoint between two possible pixels and decides which 
pixel is closer to the circle.



⭐ Basic Idea

For each step, we choose between:

  East (E) → (x+1, y)
  South-East (SE) → (x+1, y-1)

Decision depends on the Decision Parameter (P).

Because circle is symmetric, we calculate points for one octant only and use symmetry to get remaining 7 
octants.



⭐ Initial Conditions

For circle centered at (0,0):

Starting point:

      (x0​,y0​)=(0,r)

Initial decision parameter:

      P0​=1−r


⭐ Decision Parameter Update

If Pk​<0

👉 Midpoint is inside circle
Choose East pixel

      Pk+1​=Pk​+2xk​+3


If Pk​≥0

👉 Midpoint is outside circle
Choose South-East pixel

      Pk+1​=Pk​+2xk​−2yk​+5


Repeat until x≥y



⭐ Steps of Algorithm

1️⃣ Input radius r and center (xc, yc)
2️⃣ Set x = 0, y = r
3️⃣ Compute initial P = 1 − r
4️⃣ Plot 8 symmetric points
5️⃣ While x < y:
  x = x + 1
  If P < 0 → update using first formula
  Else → y = y − 1 and update using second formula
  6️⃣ Repeat



⭐ Numerical Example (Very Important)

Given:

Radius r = 10
Center = (0,0)


Step 1: Initial Values

  x0​=0
  y0​=10
  P0​=1−10=−9


Step 2: Iterations

| Step | x | y  | P  | Decision          |
| ---- | - | -- | -- | ----------------- |
| 0    | 0 | 10 | -9 | P<0 → E           |
| 1    | 1 | 10 | -6 | E                 |
| 2    | 2 | 10 | -1 | E                 |
| 3    | 3 | 10 | 6  | SE                |
| 4    | 4 | 9  | 1  | SE                |
| 5    | 5 | 8  | 2  | SE                |
| 6    | 6 | 7  | 9  | Stop (x ≥ y soon) |

Now reflect these points in all 8 octants.


⭐ 8-Way Symmetry of Circle

If calculated point is (x, y)

Other points are:

(x,y)
(y,x)
(−x,y)
(−y,x)
(−x,−y)
(−y,−x)
(x,−y)
(y,−x)




⭐ Advantages

✔ Uses only integer arithmetic
✔ Faster than direct equation method
✔ Efficient for raster display
✔ Easy to implement

⭐ Disadvantages

❌ Slight inaccuracy due to pixel approximation
❌ Circle may not be perfectly smooth


⭐ Short Exam Definition

Midpoint Circle Algorithm is an incremental algorithm that uses a decision parameter to determine the 
nearest pixel to form a circle using 8-way symmetry.


`
    },
    {
      id: 5,
      question: "5. Explain Midpoint Ellipse Algorithm (steps + decision parameter).",
      answer: "📌 10–12 mark long answer possibility",
      codeExample: `
⭐ Midpoint Ellipse Algorithm
✅ Simple Meaning

The Midpoint Ellipse Algorithm is used to draw an ellipse using an incremental method.

It is similar to the midpoint circle algorithm but works with the ellipse equation:

      x2        y2
      _    +    _   =  1
      rx2      ry2
      

It uses a decision parameter to decide the next pixel position.
The ellipse uses 4-way symmetry (not 8 like circle).
      


⭐ Basic Idea

The first quadrant of ellipse is divided into two regions:

🔹 Region 1

Slope > -1
Move mainly in x direction

🔹 Region 2

Slope < -1
Move mainly in y direction

After calculating points in first quadrant, reflect them in other 3 quadrants.



⭐ Initial Setup

Given:
      rz = x-radius
      ry = y-radius
      Center = (x_c , y_c)
      
Start point:
      (x0​,y0​)=(0,ry​)



⭐ Decision Parameter – Region 1
Initial decision parameter:

      P1 0​​= ry2​ − rx2 ​ry ​+ 1 ​rx2​
                           -
                           4
                     

🔹 Region 1 Steps
While:
      2ry2​x<2rx2​y

if P1​<0

👉 Midpoint inside ellipse
Choose (x+1, y)

      P1(k+1)​=P1k​+2ry2​x+ry2​



if P1​≥0

👉 Midpoint outside ellipse
Choose (x+1, y-1)

      P1(k+1)​=P1k​+2ry2​x−2rx2​y+ry2​




⭐ Decision Parameter – Region 2

Initial value:
              
    P2 0 = ry2 ​(x+1/2​)^2 + rx2 ​(y−1)^2 − rx2 ​ry2​




🔹 Region 2 Steps

While y ≥ 0:


if P2​>0

👉 Choose (x, y-1)

  P2(k+1)​=P2k​−2rx2​y+rx2​


if P2​≤0

👉 Choose (x+1, y-1)

  P2(k+1)​=P2k​+2ry2​x−2rx2​y+rx2​



⭐ Complete Steps of Algorithm

1️⃣ Input rx,ry and center (x_c , y_c)
2️⃣ Start at (0 , r_y)
3️⃣ Calculate initial P₁
4️⃣ Process Region 1
5️⃣ Calculate initial P₂
6️⃣ Process Region 2
7️⃣ Apply 4-way symmetry



⭐ 4-Way Symmetry

If calculated point is (x, y)


Other points are:

(x,y)
(−x,y)
(x,−y)
(−x,−y)

Add center coordinates:

x=x+xc​
y=y+yc​



⭐ Advantages

✔ Efficient incremental method
✔ Uses decision parameter
✔ Suitable for raster display
✔ No floating slope calculation

⭐ Disadvantages

❌ Slight pixel approximation
❌ More complex than circle algorithm

⭐ Short Exam Definition

Midpoint Ellipse Algorithm is an incremental scan conversion algorithm that uses a decision parameter to 
generate ellipse points in two regions using 4-way symmetry.



----------------------------------------------------------------------

example:

⭐ Midpoint Ellipse Algorithm – Numerical Example with Tables
🔢 Given:

rx = 8
ry = 6
Center = (0,0)


rx² = 64
ry² = 36


⭐ Initial Values
x = 0
y = 6

Initial Decision Parameter (Region 1)

P1=ry2−rx2⋅ry+(1/4)rx2
P1=36−(64×6)+16
P1=36−384+16
P1=−332


⭐ Region 1 Table

Condition:

2ry2x<2rx2y


| Iteration | x | y | P1   | Decision          |
| --------- | - | - | ---- | ----------------- |
| 0         | 0 | 6 | -332 | P1<0 → (x+1, y)   |
| 1         | 1 | 6 | -224 | P1<0 → (x+1, y)   |
| 2         | 2 | 6 | -44  | P1<0 → (x+1, y)   |
| 3         | 3 | 6 | 208  | P1≥0 → (x+1, y-1) |
| 4         | 4 | 5 | -108 | P1<0 → (x+1, y)   |
| 5         | 5 | 5 | 288  | P1≥0 → (x+1, y-1) |
| 6         | 6 | 4 | 148  | P1≥0 → (x+1, y-1) |
| 7         | 7 | 3 | 348  | Exit Region 1     |




⭐ Region 2 Initial Decision Parameter

Using last point from Region 1:

x = 7
y = 3


P2=ry2(x+1/2)2+rx2(y−1)2−rx2ry2
P2=36(7.5)2+64(2)2−2304
P2=2025+256−2304
P2=−23


⭐ Region 2 Table

Condition:

y>0

| Iteration | x | y | P2   | Decision          |
| --------- | - | - | ---- | ----------------- |
| 0         | 7 | 3 | -23  | P2≤0 → (x+1, y-1) |
| 1         | 8 | 2 | 233  | P2>0 → (x, y-1)   |
| 2         | 8 | 1 | 169  | P2>0 → (x, y-1)   |
| 3         | 8 | 0 | Stop | End               |



⭐ 4-Way Symmetry (Very Important for Exam)

For each calculated point (x, y):

| Symmetry Points |
| --------------- |
| ( x,  y)        |
| (-x,  y)        |
| ( x, -y)        |
| (-x, -y)        |


If center is (xc, yc):

x = x + xc
y = y + yc


⭐ Final Output Points (First Quadrant)

Region 1:

(0,6)
(1,6)
(2,6)
(3,6)
(4,5)
(5,5)
(6,4)
(7,3)


Region 2:

(8,2)
(8,1)
(8,0)


⭐ Exam Tip ⭐

✔ Draw neat table
✔ Show at least 4–5 iterations
✔ Write symmetry formula
✔ Mention 2 regions clearly

You will get full marks 🔥

`
    },
    {
      id: 6,
      question: "6. short questions",
      answer: "",
      codeExample: `
🧠 2 MARK / MCQ – JUST READ

Pixel = Smallest screen element
Frame buffer = Stores intensity values
Resolution = Number of pixels
Refresh rate = ≥ 60 times per second
Equation of circle → x² + y² = r²
DDA uses → floating point
Bresenham uses → integer arithmetic
      
      `
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },

  ];

  const toggleQuestion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="app-container">
      <h1>Computer Graphics Interview Questions</h1>
      <div className="questions-container">
        {questions.map((q) => (
          <div key={q.id} className="question-item">
            <button 
              className={`question-button ${activeId === q.id ? 'active' : ''}`}
              onClick={() => toggleQuestion(q.id)}
            >
              {q.question}
            </button>
            {activeId === q.id && (
              <div className="answer-container">
                <div className="answer">
                  <h3>Answer:</h3>
                  <p>{q.answer}</p>
                </div>
                {q.codeExample && (
                  <div className="code-example">
                    <h3>Code Example:</h3>
                    <pre>
                      <code>{q.codeExample}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
