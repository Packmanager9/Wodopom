
window.addEventListener('DOMContentLoaded', (event) => {


    let right = 0
    // let pomaoimg = new Image()
    // pomaoimg.src = 'rcpomao.png'

    const squaretable = {} // this section of code is an optimization for use of the hypotenuse function on Line and LineOP objects
    for (let t = 0; t < 10000000; t++) {
        squaretable[`${t}`] = Math.sqrt(t)
        if (t > 999) {
            t += 9
        }
    }
    let video_recorder
    let recording = 0
    // function CanvasCaptureToWEBM(canvas, bitrate) {
    //     // the video_recorder is set to  '= new CanvasCaptureToWEBM(canvas, 4500000);' in the setup, 
    //     // it uses the same canvas as the rest of the file.
    //     // to start a recording call .record() on video_recorder
    //     /*
    //     for example, 
    //     if(keysPressed['-'] && recording == 0){
    //         recording = 1
    //         video_recorder.record()
    //     }
    //     if(keysPressed['='] && recording == 1){
    //         recording = 0
    //         video_recorder.stop()
    //         video_recorder.download('File Name As A String.webm')
    //     }
    //     */
    //     this.record = Record
    //     this.stop = Stop
    //     this.download = saveToDownloads
    //     let blobCaptures = []
    //     let outputFormat = {}
    //     let recorder = {}
    //     let canvasInput = canvas.captureStream()
    //     if (typeof canvasInput == undefined || !canvasInput) {
    //         return
    //     }
    //     const video = document.createElement('video')
    //     video.style.display = 'none'

    //     function Record() {
    //         let formats = [
    //             "video/webm\;codecs=h264",
    //             "video/webm\;codecs=vp8",
    //             'video/vp8',
    //             "video/webm",
    //             'video/webm,codecs=vp9',
    //             "video/webm\;codecs=daala",
    //             "video/mpeg"
    //         ];

    //         for (let t = 0; t < formats.length; t++) {
    //             if (MediaRecorder.isTypeSupported(formats[t])) {
    //                 outputFormat = formats[t]
    //                 break
    //             }
    //         }
    //         if (typeof outputFormat != "string") {
    //             return
    //         } else {
    //             let videoSettings = {
    //                 mimeType: outputFormat,
    //                 videoBitsPerSecond: bitrate || 2000000 // 2Mbps
    //             };
    //             blobCaptures = []
    //             try {
    //                 recorder = new MediaRecorder(canvasInput, videoSettings)
    //             } catch (error) {
    //                 return;
    //             }
    //             recorder.onstop = handleStop
    //             recorder.ondataavailable = handleAvailableData
    //             recorder.start(100)
    //         }
    //     }
    //     function handleAvailableData(event) {
    //         if (event.data && event.data.size > 0) {
    //             blobCaptures.push(event.data)
    //         }
    //     }
    //     function handleStop() {
    //         const superBuffer = new Blob(blobCaptures, { type: outputFormat })
    //         video.src = window.URL.createObjectURL(superBuffer)
    //     }
    //     function Stop() {
    //         recorder.stop()
    //         video.controls = true
    //     }
    //     function saveToDownloads(input) { // specifying a file name for the output
    //         const name = input || 'video_out.webm'
    //         const blob = new Blob(blobCaptures, { type: outputFormat })
    //         const url = window.URL.createObjectURL(blob)
    //         const storageElement = document.createElement('a')
    //         storageElement.style.display = 'none'
    //         storageElement.href = url
    //         storageElement.download = name
    //         document.body.appendChild(storageElement)
    //         storageElement.click()
    //         setTimeout(() => {
    //             document.body.removeChild(storageElement)
    //             window.URL.revokeObjectURL(url)
    //         }, 100)
    //     }
    // }
    // const gamepadAPI = {
    //     controller: {},
    //     turbo: true,
    //     connect: function (evt) {
    //         if (navigator.getGamepads()[0] != null) {
    //             gamepadAPI.controller = navigator.getGamepads()[0]
    //             gamepadAPI.turbo = true;
    //         } else if (navigator.getGamepads()[1] != null) {
    //             gamepadAPI.controller = navigator.getGamepads()[0]
    //             gamepadAPI.turbo = true;
    //         } else if (navigator.getGamepads()[2] != null) {
    //             gamepadAPI.controller = navigator.getGamepads()[0]
    //             gamepadAPI.turbo = true;
    //         } else if (navigator.getGamepads()[3] != null) {
    //             gamepadAPI.controller = navigator.getGamepads()[0]
    //             gamepadAPI.turbo = true;
    //         }
    //         for (let i = 0; i < gamepads.length; i++) {
    //             if (gamepads[i] === null) {
    //                 continue;
    //             }
    //             if (!gamepads[i].connected) {
    //                 continue;
    //             }
    //         }
    //     },
    //     disconnect: function (evt) {
    //         gamepadAPI.turbo = false;
    //         delete gamepadAPI.controller;
    //     },
    //     update: function () {
    //         gamepadAPI.controller = navigator.getGamepads()[0]
    //         gamepadAPI.buttonsCache = [];// clear the buttons cache
    //         for (var k = 0; k < gamepadAPI.buttonsStatus.length; k++) {// move the buttons status from the previous frame to the cache
    //             gamepadAPI.buttonsCache[k] = gamepadAPI.buttonsStatus[k];
    //         }
    //         gamepadAPI.buttonsStatus = [];// clear the buttons status
    //         var c = gamepadAPI.controller || {}; // get the gamepad object
    //         var pressed = [];
    //         if (c.buttons) {
    //             for (var b = 0, t = c.buttons.length; b < t; b++) {// loop through buttons and push the pressed ones to the array
    //                 if (c.buttons[b].pressed) {
    //                     pressed.push(gamepadAPI.buttons[b]);
    //                 }
    //             }
    //         }
    //         var axes = [];
    //         if (c.axes) {
    //             for (var a = 0, x = c.axes.length; a < x; a++) {// loop through axes and push their values to the array
    //                 axes.push(c.axes[a].toFixed(2));
    //             }
    //         }
    //         gamepadAPI.axesStatus = axes;// assign received values
    //         gamepadAPI.buttonsStatus = pressed;
    //         // //////////////console.log(pressed); // return buttons for debugging purposes
    //         return pressed;
    //     },
    //     buttonPressed: function (button, hold) {
    //         var newPress = false;
    //         for (var i = 0, s = gamepadAPI.buttonsStatus.length; i < s; i++) {// loop through pressed buttons
    //             if (gamepadAPI.buttonsStatus[i] == button) {// if we found the button we're looking for...
    //                 newPress = true;// set the boolean variable to true
    //                 if (!hold) {// if we want to check the single press
    //                     for (var j = 0, p = gamepadAPI.buttonsCache.length; j < p; j++) {// loop through the cached states from the previous frame
    //                         if (gamepadAPI.buttonsCache[j] == button) { // if the button was already pressed, ignore new press
    //                             newPress = false;
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //         return newPress;
    //     },
    //     buttons: [
    //         'A', 'B', 'X', 'Y', 'LB', 'RB', 'Left-Trigger', 'Right-Trigger', 'Back', 'Start', 'Axis-Left', 'Axis-Right', 'DPad-Up', 'DPad-Down', 'DPad-Left', 'DPad-Right', "Power"
    //     ],
    //     buttonsCache: [],
    //     buttonsStatus: [],
    //     axesStatus: []
    // };
    let canvas
    let canvas_context
    let keysPressed = {}
    let FLEX_engine
    let TIP_engine = {}
    let XS_engine
    let YS_engine
    class Point {
        constructor(x, y) {
            this.x = x
            this.y = y
            this.radius = 0
        }
        pointDistance(point) {
            return (new LineOP(this, point, "transparent", 0)).hypotenuse()
        }
    }

    class Vector { // vector math and physics if you prefer this over vector components on circles
        constructor(object = (new Point(0, 0)), xmom = 0, ymom = 0) {
            this.xmom = xmom
            this.ymom = ymom
            this.object = object
        }
        isToward(point) {
            let link = new LineOP(this.object, point)
            let dis1 = link.squareDistance()
            let dummy = new Point(this.object.x + this.xmom, this.object.y + this.ymom)
            let link2 = new LineOP(dummy, point)
            let dis2 = link2.squareDistance()
            if (dis2 < dis1) {
                return true
            } else {
                return false
            }
        }
        rotate(angleGoal) {
            let link = new Line(this.xmom, this.ymom, 0, 0)
            let length = link.hypotenuse()
            let x = (length * Math.cos(angleGoal))
            let y = (length * Math.sin(angleGoal))
            this.xmom = x
            this.ymom = y
        }
        magnitude() {
            return (new Line(this.xmom, this.ymom, 0, 0)).hypotenuse()
        }
        normalize(size = 1) {
            let magnitude = this.magnitude()
            this.xmom /= magnitude
            this.ymom /= magnitude
            this.xmom *= size
            this.ymom *= size
        }
        multiply(vect) {
            let point = new Point(0, 0)
            let end = new Point(this.xmom + vect.xmom, this.ymom + vect.ymom)
            return point.pointDistance(end)
        }
        add(vect) {
            return new Vector(this.object, this.xmom + vect.xmom, this.ymom + vect.ymom)
        }
        subtract(vect) {
            return new Vector(this.object, this.xmom - vect.xmom, this.ymom - vect.ymom)
        }
        divide(vect) {
            return new Vector(this.object, this.xmom / vect.xmom, this.ymom / vect.ymom) //be careful with this, I don't think this is right
        }
        draw() {
            let dummy = new Point(this.object.x + this.xmom, this.object.y + this.ymom)
            let link = new LineOP(this.object, dummy, "#FFFFFF", 1)
            link.draw()
        }
    }
    class Line {
        constructor(x, y, x2, y2, color, width) {
            this.x1 = x
            this.y1 = y
            this.x2 = x2
            this.y2 = y2
            this.color = color
            this.width = width
        }
        angle() {
            return Math.atan2(this.y1 - this.y2, this.x1 - this.x2)
        }
        squareDistance() {
            let xdif = this.x1 - this.x2
            let ydif = this.y1 - this.y2
            let squareDistance = (xdif * xdif) + (ydif * ydif)
            return squareDistance
        }
        hypotenuse() {
            let xdif = this.x1 - this.x2
            let ydif = this.y1 - this.y2
            let hypotenuse = (xdif * xdif) + (ydif * ydif)
            if (hypotenuse < 10000000 - 1) {
                if (hypotenuse > 1000) {
                    return squaretable[`${Math.round(10 * Math.round((hypotenuse * .1)))}`]
                } else {
                    return squaretable[`${Math.round(hypotenuse)}`]
                }
            } else {
                return Math.sqrt(hypotenuse)
            }
        }
        draw() {
            let linewidthstorage = canvas_context.lineWidth
            canvas_context.strokeStyle = this.color
            canvas_context.lineWidth = this.width
            canvas_context.beginPath()
            canvas_context.moveTo(this.x1, this.y1)
            canvas_context.lineTo(this.x2, this.y2)
            canvas_context.stroke()
            canvas_context.lineWidth = linewidthstorage
        }
    }
    class LineOP {
        constructor(object, target, color, width) {
            this.object = object
            this.target = target
            this.color = color
            this.width = width
        }
        squareDistance() {
            let xdif = this.object.x - this.target.x
            let ydif = this.object.y - this.target.y
            let squareDistance = (xdif * xdif) + (ydif * ydif)
            return squareDistance
        }
        hypotenuse() {
            let xdif = this.object.x - this.target.x
            let ydif = this.object.y - this.target.y
            let hypotenuse = (xdif * xdif) + (ydif * ydif)
            if (hypotenuse < 10000000 - 1) {
                if (hypotenuse > 1000) {
                    return squaretable[`${Math.round(10 * Math.round((hypotenuse * .1)))}`]
                } else {
                    return squaretable[`${Math.round(hypotenuse)}`]
                }
            } else {
                return Math.sqrt(hypotenuse)
            }
        }
        angle() {
            return Math.atan2(this.object.y - this.target.y, this.object.x - this.target.x)
        }
        draw() {
            let linewidthstorage = canvas_context.lineWidth
            canvas_context.strokeStyle = this.color
            canvas_context.lineWidth = this.width
            canvas_context.beginPath()
            canvas_context.moveTo(this.object.x, this.object.y)
            canvas_context.lineTo(this.target.x, this.target.y)
            canvas_context.stroke()
            canvas_context.lineWidth = linewidthstorage
        }
    }
    class Triangle {
        constructor(x, y, color, length, fill = 0, strokeWidth = 0, leg1Ratio = 1, leg2Ratio = 1, heightRatio = 1) {
            this.x = x
            this.y = y
            this.color = color
            this.length = length
            this.x1 = this.x + this.length * leg1Ratio
            this.x2 = this.x - this.length * leg2Ratio
            this.tip = this.y - this.length * heightRatio
            this.accept1 = (this.y - this.tip) / (this.x1 - this.x)
            this.accept2 = (this.y - this.tip) / (this.x2 - this.x)
            this.fill = fill
            this.stroke = strokeWidth
        }
        draw() {
            canvas_context.strokeStyle = this.color
            canvas_context.stokeWidth = this.stroke
            canvas_context.beginPath()
            canvas_context.moveTo(this.x, this.y)
            canvas_context.lineTo(this.x1, this.y)
            canvas_context.lineTo(this.x, this.tip)
            canvas_context.lineTo(this.x2, this.y)
            canvas_context.lineTo(this.x, this.y)
            if (this.fill == 1) {
                canvas_context.fill()
            }
            canvas_context.stroke()
            canvas_context.closePath()
        }
        isPointInside(point) {
            if (point.x <= this.x1) {
                if (point.y >= this.tip) {
                    if (point.y <= this.y) {
                        if (point.x >= this.x2) {
                            this.accept1 = (this.y - this.tip) / (this.x1 - this.x)
                            this.accept2 = (this.y - this.tip) / (this.x2 - this.x)
                            this.basey = point.y - this.tip
                            this.basex = point.x - this.x
                            if (this.basex == 0) {
                                return true
                            }
                            this.slope = this.basey / this.basex
                            if (this.slope >= this.accept1) {
                                return true
                            } else if (this.slope <= this.accept2) {
                                return true
                            }
                        }
                    }
                }
            }
            return false
        }
    }
    class Rectangle {
        constructor(x, y, width, height, color, fill = 1, stroke = 0, strokeWidth = 1) {
            this.x = x
            this.y = y
            this.height = height
            this.width = width
            this.color = color
            this.xmom = 0
            this.ymom = 0
            this.stroke = stroke
            this.strokeWidth = strokeWidth
            this.fill = fill
        }
        draw() {
            canvas_context.fillStyle = this.color
            canvas_context.fillRect(this.x, this.y, this.width, this.height)
        }
        move() {
            this.x += this.xmom
            this.y += this.ymom
        }
        isPointInside(point) {
            if (point.x >= this.x) {
                if (point.y >= this.y) {
                    if (point.x <= this.x + this.width) {
                        if (point.y <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
        doesPerimeterTouch(point) {
            if (point.x + point.radius >= this.x) {
                if (point.y + point.radius >= this.y) {
                    if (point.x - point.radius <= this.x + this.width) {
                        if (point.y - point.radius <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
    }
    class RectangleR {
        constructor(x, y, width, height, color, fill = 1, stroke = 0, strokeWidth = 1) {
            this.x = x
            this.y = y
            this.height = height
            this.width = width
            this.color = color
            this.xmom = 0
            this.ymom = 0
            this.stroke = stroke
            this.strokeWidth = strokeWidth
            this.fill = fill
        }
        draw() {
            canvas_context.fillStyle = this.color
            canvas_context.fillRect(this.x, this.y, this.width, this.height)
            canvas_context.strokeStyle = "white"
            canvas_context.strokeRect(this.x, this.y, this.width, this.height)
        }
        move() {
            this.x += this.xmom
            this.y += this.ymom
        }
        isPointInside(point) {
            if (point.x >= this.x) {
                if (point.y >= this.y) {
                    if (point.x <= this.x + this.width) {
                        if (point.y <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
        doesPerimeterTouch(point) {
            if (point.x + point.radius >= this.x) {
                if (point.y + point.radius >= this.y) {
                    if (point.x - point.radius <= this.x + this.width) {
                        if (point.y - point.radius <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
    }
    class Circle {
        constructor(x, y, radius, color, xmom = 0, ymom = 0, friction = 1, reflect = 0, strokeWidth = 0, strokeColor = "transparent") {
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
            this.friction = friction
            this.reflect = reflect
            this.strokeWidth = strokeWidth
            this.strokeColor = strokeColor
        }
        draw() {
            canvas_context.lineWidth = this.strokeWidth
            canvas_context.strokeStyle = this.color
            canvas_context.beginPath();
            if (this.radius > 0) {
                canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)
                canvas_context.fillStyle = this.color
                canvas_context.fill()
                canvas_context.stroke();
            } else {
                //////////////console.log("The circle is below a radius of 0, and has not been drawn. The circle is:", this)
            }
        }
        move() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x += this.xmom
            this.y += this.ymom
        }
        unmove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x -= this.xmom
            this.y -= this.ymom
        }
        frictiveMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x += this.xmom
            this.y += this.ymom
            this.xmom *= this.friction
            this.ymom *= this.friction
        }
        frictiveunMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.xmom /= this.friction
            this.ymom /= this.friction
            this.x -= this.xmom
            this.y -= this.ymom
        }
        isPointInside(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius * this.radius)) {
                return true
            }
            return false
        }
        doesPerimeterTouch(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= ((this.radius + point.radius) * (this.radius + point.radius))) {
                return true
            }
            return false
        }
    }
    class CircleR {
        constructor(x, y, radius, color, xmom = 0, ymom = 0, friction = 1, reflect = 0, strokeWidth = 0, strokeColor = "transparent") {
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
            this.friction = friction
            this.reflect = reflect
            this.strokeWidth = strokeWidth
            this.strokeColor = strokeColor
        }
        draw() {
            canvas_context.lineWidth = 2
            canvas_context.strokeStyle = this.color
            canvas_context.beginPath();
            // if (this.radius > 0) {
            canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)
            canvas_context.fillStyle = this.color
            // canvas_context.fill()
            canvas_context.stroke();
            // } else {
            //     //////////////console.log("The circle is below a radius of 0, and has not been drawn. The circle is:", this)
            // }
        }
        move() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x += this.xmom
            this.y += this.ymom
        }
        unmove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x -= this.xmom
            this.y -= this.ymom
        }
        frictiveMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x += this.xmom
            this.y += this.ymom
            this.xmom *= this.friction
            this.ymom *= this.friction
        }
        frictiveunMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.xmom /= this.friction
            this.ymom /= this.friction
            this.x -= this.xmom
            this.y -= this.ymom
        }
        isPointInside(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius * this.radius)) {
                return true
            }
            return false
        }
        doesPerimeterTouch(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= ((this.radius + point.radius) * (this.radius + point.radius))) {
                return true
            }
            return false
        }
    } class Polygon {
        constructor(x, y, size, color, sides = 3, xmom = 0, ymom = 0, angle = 0, reflect = 0) {
            if (sides < 2) {
                sides = 2
            }
            this.reflect = reflect
            this.xmom = xmom
            this.ymom = ymom
            this.body = new Circle(x, y, size - (size * .293), "transparent")
            this.nodes = []
            this.angle = angle
            this.size = size
            this.color = color
            this.angleIncrement = (Math.PI * 2) / sides
            this.sides = sides
            for (let t = 0; t < sides; t++) {
                let node = new Circle(this.body.x + (this.size * (Math.cos(this.angle))), this.body.y + (this.size * (Math.sin(this.angle))), 0, "transparent")
                this.nodes.push(node)
                this.angle += this.angleIncrement
            }
        }
        isPointInside(point) { // rough approximation
            this.body.radius = this.size - (this.size * .293)
            if (this.sides <= 2) {
                return false
            }
            this.areaY = point.y - this.body.y
            this.areaX = point.x - this.body.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.body.radius * this.body.radius)) {
                return true
            }
            return false
        }
        move() {
            if (this.reflect == 1) {
                if (this.body.x > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.body.y > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.body.x < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.body.y < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.body.x += this.xmom
            this.body.y += this.ymom
        }
        draw() {
            this.nodes = []
            this.angleIncrement = (Math.PI * 2) / this.sides
            this.body.radius = this.size - (this.size * .293)
            for (let t = 0; t < this.sides; t++) {
                if (t % 2 == 0) {
                    let node = new Circle(this.body.x + (this.size * (Math.cos(this.angle))), this.body.y + (this.size * (Math.sin(this.angle))), 0, "transparent")
                    this.nodes.push(node)
                    this.angle += this.angleIncrement
                } else {
                    let node = new Circle(this.body.x + (this.size * this.xmom * (Math.cos(this.angle))), this.body.y + (this.size * this.ymom * (Math.sin(this.angle))), 0, "transparent")
                    this.nodes.push(node)
                    this.angle += this.angleIncrement
                }
            }
            canvas_context.strokeStyle = this.color
            canvas_context.fillStyle = this.color
            canvas_context.lineWidth = 0
            canvas_context.beginPath()
            canvas_context.moveTo(this.nodes[0].x, this.nodes[0].y)
            for (let t = 1; t < this.nodes.length; t++) {
                canvas_context.lineTo(this.nodes[t].x, this.nodes[t].y)
            }
            canvas_context.lineTo(this.nodes[0].x, this.nodes[0].y)
            canvas_context.fill()
            canvas_context.stroke()
            canvas_context.closePath()
        }
    }
    class Shape {
        constructor(shapes) {
            this.shapes = shapes
        }
        draw() {
            for (let t = 0; t < this.shapes.length; t++) {
                this.shapes[t].draw()
            }
        }
        isPointInside(point) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (this.shapes[t].isPointInside(point)) {
                    return true
                }
            }
            return false
        }
        doesPerimeterTouch(point) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (this.shapes[t].doesPerimeterTouch(point)) {
                    return true
                }
            }
            return false
        }
        innerShape(point) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (this.shapes[t].doesPerimeterTouch(point)) {
                    return this.shapes[t]
                }
            }
            return false
        }
        isInsideOf(box) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (box.isPointInside(this.shapes[t])) {
                    return true
                }
            }
            return false
        }
        adjustByFromDisplacement(x, y) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (typeof this.shapes[t].fromRatio == "number") {
                    this.shapes[t].x += x * this.shapes[t].fromRatio
                    this.shapes[t].y += y * this.shapes[t].fromRatio
                }
            }
        }
        adjustByToDisplacement(x, y) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (typeof this.shapes[t].toRatio == "number") {
                    this.shapes[t].x += x * this.shapes[t].toRatio
                    this.shapes[t].y += y * this.shapes[t].toRatio
                }
            }
        }
        mixIn(arr) {
            for (let t = 0; t < arr.length; t++) {
                for (let k = 0; k < arr[t].shapes.length; k++) {
                    this.shapes.push(arr[t].shapes[k])
                }
            }
        }
        push(object) {
            this.shapes.push(object)
        }
    }

    class Spring {
        constructor(x, y, radius, color, body = 0, length = 1, gravity = 0, width = 1) {
            if (body == 0) {
                this.body = new Circle(x, y, radius, color)
                this.anchor = new Circle(x, y, radius, color)
                this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", width)
                this.length = length
            } else {
                this.body = body
                this.anchor = new Circle(x, y, radius, color)
                this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", width)
                this.length = length
            }
            this.gravity = gravity
            this.width = width
        }
        balance() {
            this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", this.width)
            if (this.beam.hypotenuse() < this.length) {
                this.body.xmom += (this.body.x - this.anchor.x) / this.length
                this.body.ymom += (this.body.y - this.anchor.y) / this.length
                this.anchor.xmom -= (this.body.x - this.anchor.x) / this.length
                this.anchor.ymom -= (this.body.y - this.anchor.y) / this.length
            } else {
                this.body.xmom -= (this.body.x - this.anchor.x) / this.length
                this.body.ymom -= (this.body.y - this.anchor.y) / this.length
                this.anchor.xmom += (this.body.x - this.anchor.x) / this.length
                this.anchor.ymom += (this.body.y - this.anchor.y) / this.length
            }
            let xmomentumaverage = (this.body.xmom + this.anchor.xmom) / 2
            let ymomentumaverage = (this.body.ymom + this.anchor.ymom) / 2
            this.body.xmom = (this.body.xmom + xmomentumaverage) / 2
            this.body.ymom = (this.body.ymom + ymomentumaverage) / 2
            this.anchor.xmom = (this.anchor.xmom + xmomentumaverage) / 2
            this.anchor.ymom = (this.anchor.ymom + ymomentumaverage) / 2
        }
        draw() {
            this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", this.width)
            this.beam.draw()
            this.body.draw()
            this.anchor.draw()
        }
        move() {
            this.anchor.ymom += this.gravity
            this.anchor.move()
        }

    }
    class SpringOP {
        constructor(body, anchor, length, width = 3, color = body.color) {
            this.body = body
            this.anchor = anchor
            this.beam = new LineOP(body, anchor, color, width)
            this.length = length
        }
        balance() {
            if (this.beam.hypotenuse() < this.length) {
                this.body.xmom += ((this.body.x - this.anchor.x) / this.length)
                this.body.ymom += ((this.body.y - this.anchor.y) / this.length)
                this.anchor.xmom -= ((this.body.x - this.anchor.x) / this.length)
                this.anchor.ymom -= ((this.body.y - this.anchor.y) / this.length)
            } else if (this.beam.hypotenuse() > this.length) {
                this.body.xmom -= (this.body.x - this.anchor.x) / (this.length)
                this.body.ymom -= (this.body.y - this.anchor.y) / (this.length)
                this.anchor.xmom += (this.body.x - this.anchor.x) / (this.length)
                this.anchor.ymom += (this.body.y - this.anchor.y) / (this.length)
            }

            let xmomentumaverage = (this.body.xmom + this.anchor.xmom) / 2
            let ymomentumaverage = (this.body.ymom + this.anchor.ymom) / 2
            this.body.xmom = (this.body.xmom + xmomentumaverage) / 2
            this.body.ymom = (this.body.ymom + ymomentumaverage) / 2
            this.anchor.xmom = (this.anchor.xmom + xmomentumaverage) / 2
            this.anchor.ymom = (this.anchor.ymom + ymomentumaverage) / 2
        }
        draw() {
            this.beam.draw()
        }
        move() {
            //movement of SpringOP objects should be handled separate from their linkage, to allow for many connections, balance here with this object, move nodes independently
        }
    }

    class Color {
        constructor(baseColor, red = -1, green = -1, blue = -1, alpha = 1) {
            this.hue = baseColor
            if (red != -1 && green != -1 && blue != -1) {
                this.r = red
                this.g = green
                this.b = blue
                if (alpha != 1) {
                    if (alpha < 1) {
                        this.alpha = alpha
                    } else {
                        this.alpha = alpha / 255
                        if (this.alpha > 1) {
                            this.alpha = 1
                        }
                    }
                }
                if (this.r > 255) {
                    this.r = 255
                }
                if (this.g > 255) {
                    this.g = 255
                }
                if (this.b > 255) {
                    this.b = 255
                }
                if (this.r < 0) {
                    this.r = 0
                }
                if (this.g < 0) {
                    this.g = 0
                }
                if (this.b < 0) {
                    this.b = 0
                }
            } else {
                this.r = 0
                this.g = 0
                this.b = 0
            }
        }
        normalize() {
            if (this.r > 255) {
                this.r = 255
            }
            if (this.g > 255) {
                this.g = 255
            }
            if (this.b > 255) {
                this.b = 255
            }
            if (this.r < 0) {
                this.r = 0
            }
            if (this.g < 0) {
                this.g = 0
            }
            if (this.b < 0) {
                this.b = 0
            }
        }
        randomLight() {
            var letters = '0123456789ABCDEF';
            this.hash = '#';
            for (var i = 0; i < 6; i++) {
                this.hash += letters[(Math.floor(Math.random() * 12) + 4)];
            }
            var color = new Color(this.hash, 55 + Math.random() * 200, 55 + Math.random() * 200, 55 + Math.random() * 200)
            return color;
        }
        randomDark() {
            var letters = '0123456789ABCDEF';
            this.hash = '#';
            for (var i = 0; i < 6; i++) {
                this.hash += letters[(Math.floor(Math.random() * 12))];
            }
            var color = new Color(this.hash, Math.random() * 200, Math.random() * 200, Math.random() * 200)
            return color;
        }
        random() {
            var letters = '0123456789ABCDEF';
            this.hash = '#';
            for (var i = 0; i < 6; i++) {
                this.hash += letters[(Math.floor(Math.random() * 16))];
            }
            var color = new Color(this.hash, Math.random() * 255, Math.random() * 255, Math.random() * 255)
            return color;
        }
    }
    class Softbody { //buggy, spins in place
        constructor(x, y, radius, color, members = 10, memberLength = 5, force = 10, gravity = 0) {
            this.springs = []
            this.pin = new Circle(x, y, radius, color)
            this.spring = new Spring(x, y, radius, color, this.pin, memberLength, gravity)
            this.springs.push(this.spring)
            for (let k = 0; k < members; k++) {
                this.spring = new Spring(x, y, radius, color, this.spring.anchor, memberLength, gravity)
                if (k < members - 1) {
                    this.springs.push(this.spring)
                } else {
                    this.spring.anchor = this.pin
                    this.springs.push(this.spring)
                }
            }
            this.forceConstant = force
            this.centroid = new Point(0, 0)
        }
        circularize() {
            this.xpoint = 0
            this.ypoint = 0
            for (let s = 0; s < this.springs.length; s++) {
                this.xpoint += (this.springs[s].anchor.x / this.springs.length)
                this.ypoint += (this.springs[s].anchor.y / this.springs.length)
            }
            this.centroid.x = this.xpoint
            this.centroid.y = this.ypoint
            this.angle = 0
            this.angleIncrement = (Math.PI * 2) / this.springs.length
            for (let t = 0; t < this.springs.length; t++) {
                this.springs[t].body.x = this.centroid.x + (Math.cos(this.angle) * this.forceConstant)
                this.springs[t].body.y = this.centroid.y + (Math.sin(this.angle) * this.forceConstant)
                this.angle += this.angleIncrement
            }
        }
        balance() {
            for (let s = this.springs.length - 1; s >= 0; s--) {
                this.springs[s].balance()
            }
            this.xpoint = 0
            this.ypoint = 0
            for (let s = 0; s < this.springs.length; s++) {
                this.xpoint += (this.springs[s].anchor.x / this.springs.length)
                this.ypoint += (this.springs[s].anchor.y / this.springs.length)
            }
            this.centroid.x = this.xpoint
            this.centroid.y = this.ypoint
            for (let s = 0; s < this.springs.length; s++) {
                this.link = new Line(this.centroid.x, this.centroid.y, this.springs[s].anchor.x, this.springs[s].anchor.y, 0, "transparent")
                if (this.link.hypotenuse() != 0) {
                    this.springs[s].anchor.xmom += (((this.springs[s].anchor.x - this.centroid.x) / (this.link.hypotenuse()))) * this.forceConstant
                    this.springs[s].anchor.ymom += (((this.springs[s].anchor.y - this.centroid.y) / (this.link.hypotenuse()))) * this.forceConstant
                }
            }
            for (let s = 0; s < this.springs.length; s++) {
                this.springs[s].move()
            }
            for (let s = 0; s < this.springs.length; s++) {
                this.springs[s].draw()
            }
        }
    }
    class Observer {
        constructor(x, y, radius, color, range = 100, rays = 10, angle = (Math.PI * .125)) {
            this.body = new Circle(x, y, radius, color)
            this.color = color
            this.ray = []
            this.rayrange = range
            this.globalangle = Math.PI
            this.gapangle = angle
            this.currentangle = 0
            this.obstacles = []
            this.raymake = rays
        }
        beam() {
            this.currentangle = this.gapangle / 2
            for (let k = 0; k < this.raymake; k++) {
                this.currentangle += (this.gapangle / Math.ceil(this.raymake / 2))
                let ray = new Circle(this.body.x, this.body.y, 1, "white", (((Math.cos(this.globalangle + this.currentangle)))), (((Math.sin(this.globalangle + this.currentangle)))))
                ray.collided = 0
                ray.lifespan = this.rayrange - 1
                this.ray.push(ray)
            }
            for (let f = 0; f < this.rayrange; f++) {
                for (let t = 0; t < this.ray.length; t++) {
                    if (this.ray[t].collided < 1) {
                        this.ray[t].move()
                        for (let q = 0; q < this.obstacles.length; q++) {
                            if (this.obstacles[q].isPointInside(this.ray[t])) {
                                this.ray[t].collided = 1
                            }
                        }
                    }
                }
            }
        }
        draw() {
            this.beam()
            this.body.draw()
            canvas_context.lineWidth = 1
            canvas_context.fillStyle = this.color
            canvas_context.strokeStyle = this.color
            canvas_context.beginPath()
            canvas_context.moveTo(this.body.x, this.body.y)
            for (let y = 0; y < this.ray.length; y++) {
                canvas_context.lineTo(this.ray[y].x, this.ray[y].y)
                canvas_context.lineTo(this.body.x, this.body.y)
            }
            canvas_context.stroke()
            canvas_context.fill()
            this.ray = []
        }
    }
    function setUp(canvas_pass, style = "#000000") {
        canvas = canvas_pass
        // video_recorder = new CanvasCaptureToWEBM(canvas, 2500000);
        canvas_context = canvas.getContext('2d');
        canvas.style.background = style
        window.setInterval(function () {
            main()
        }, 40)
        document.addEventListener('keydown', (event) => {
            keysPressed[event.key] = true;
        });
        document.addEventListener('keyup', (event) => {
            delete keysPressed[event.key];
        });

        window.addEventListener('contextmenu', e => {
            e.preventDefault()
            right += 20
            FLEX_engine = canvas.getBoundingClientRect();
            XS_engine = e.clientX - FLEX_engine.left;
            YS_engine = e.clientY - FLEX_engine.top;
            TIP_engine.x = XS_engine
            TIP_engine.y = YS_engine
            TIP_engine.body = TIP_engine
            // wad.launch(TIP_engine)
            for (let t = 0; t < vessel.weapons.length; t++) {
                vessel.weapons[t].check2(TIP_engine)
                vessel.weapons[t].beingchecked = 1
            }
        })


        window.addEventListener('pointerdown', e => {
            if (start == 0) {
                start = 1
            }
            right = 0
            FLEX_engine = canvas.getBoundingClientRect();
            XS_engine = e.clientX - FLEX_engine.left;
            YS_engine = e.clientY - FLEX_engine.top;
            TIP_engine.x = XS_engine
            TIP_engine.y = YS_engine
            TIP_engine.body = TIP_engine

            if (enemy.hull <= 0) {
                if (enemy.body.isPointInside(TIP_engine)) {
                    enemy.spread = 31
                    return
                }
            }


            vessel.menuBattery.check(TIP_engine)
            vessel.upgradeMenu.check(TIP_engine)
            vessel.upgradeMenu.levels.check(TIP_engine)

            if (vessel.upgradeMenu.open == 1) {
                return
            }
            // ////////////console.log(vessel.energy.upgradeMenu)

            // if (keysPressed['2']) {

            //     let door = new Door(TIP_engine.x, TIP_engine.y)
            //     enemy.doors.push(door)
            //     ////////console.log(JSON.stringify(enemy.doors))
            //     return
            // }

            // for (let t = 0; t < enemy.blocks.length; t++) {
            //     for (let k = 0; k < enemy.blocks[t].length; k++) {
            //         if(enemy.blocks[t][k].isPointInside(TIP_engine)){
            //             if(keysPressed['p']){
            //                 enemy.blocks[t][k].fire = -100
            //                 enemy.blocks[t][k].onFire = 1
            //             }
            //         }
            //     }
            // }

            //         if (enemy.blocks[t][k].isPointInside(TIP_engine)) {
            //             // ////////////console.log(enemy.blocks[t][k].t, enemy.blocks[t][k].k)

            //             enemy.blocks[t][k].marked = 1
            //             if (keysPressed['k']) {
            //                 enemy.blocks[t][k].doorway = 1
            //                 enemy.blocks[t][k].color = "red"
            //             }
            //             if (keysPressed['m']) {
            //                 enemy.blocks[t][k].medbay = 1
            //                 enemy.blocks[t][k].color = "#00ff0044"
            //             }
            //             if (keysPressed['w']) {
            //                 enemy.blocks[t][k].weapon = 1
            //                 enemy.blocks[t][k].color = "#ff00FF44"
            //             }
            //             if (keysPressed['s']) {
            //                 enemy.blocks[t][k].shield = 1
            //                 enemy.blocks[t][k].color = "#00ffff44"
            //             }
            //             if (keysPressed['h']) {
            //                 enemy.blocks[t][k].helm = 1
            //                 enemy.blocks[t][k].color = "#FFAA0044"
            //             }
            //             if (keysPressed['e']) {
            //                 enemy.blocks[t][k].engine = 1
            //                 enemy.blocks[t][k].color = "#FFFF0044"
            //             }
            //             if (keysPressed['x']) {
            //                 enemy.blocks[t][k].security = 1
            //                 enemy.blocks[t][k].color = "#88888844"
            //             }
            //             if (keysPressed['o']) {
            //                 enemy.blocks[t][k].oxygen = 1
            //                 enemy.blocks[t][k].color = "#0000ff44"
            //             }
            //             if (keysPressed['l']) {
            //                 enemy.blocks[t][k].special = 1
            //                 enemy.blocks[t][k].color = "#ffAAff44"
            //             }
            //             if (keysPressed['y']) {
            //                 enemy.blocks[t][k].empty = 1
            //                 enemy.blocks[t][k].color = "#00000044"
            //             }


            //         }
            //     }
            // }
            // ////////console.log(JSON.stringify(enemy.doors))
            // ////////console.log(JSON.stringify(enemy.blocks))
            // return
            // wad.launch(TIP_engine)
            for (let t = 0; t < vessel.weapons.length; t++) {
                if (right <= 0) {
                    vessel.weapons[t].check(TIP_engine)
                }
            }
            for (let t = 0; t < vessel.doors.length; t++) {
                if (right <= 0) {
                    if (vessel.doors[t].check(TIP_engine)) {
                        return
                    }
                }
            }
            for (let t = 0; t < enemy.doors.length; t++) {
                if (right <= 0) {
                    if (enemy.doors[t].check(TIP_engine)) {
                        return
                    }
                }
            }
            right = 0
            vessel.UI.check(TIP_engine)
            let tile = {}
            for (let t = 0; t < vessel.blocks.length; t++) {
                for (let k = 0; k < vessel.blocks[t].length; k++) {
                    if (vessel.blocks[t][k].isPointInside(TIP_engine)) {
                        // if(keysPressed['p']){
                        //     vessel.blocks[t][k].fire = -100
                        //     vessel.blocks[t][k].onFire = 1
                        // }
                        // ////////////console.log(vessel.blocks[t][k].t, vessel.blocks[t][k].k)
                        // if (keysPressed['m']) {
                        //     vessel.blocks[t][k].medbay = 1
                        //     vessel.blocks[t][k].color = "#00ff0044"
                        // }
                        // if (keysPressed['w']) {
                        //     vessel.blocks[t][k].weapon = 1
                        //     vessel.blocks[t][k].color = "#ff00FF44"
                        // }
                        // if (keysPressed['s']) {
                        //     vessel.blocks[t][k].shield = 1
                        //     vessel.blocks[t][k].color = "#00ffff44"
                        // }
                        // if (keysPressed['h']) {
                        //     vessel.blocks[t][k].helm = 1
                        //     vessel.blocks[t][k].color = "#FFFF0044"
                        // }
                        // if (keysPressed['e']) {
                        //     vessel.blocks[t][k].engine = 1
                        //     vessel.blocks[t][k].color = "#FFFF0044"
                        // }
                        // if (keysPressed['x']) {
                        //     vessel.blocks[t][k].security = 1
                        //     vessel.blocks[t][k].color = "#88888844"
                        // }
                        // if (keysPressed['o']) {
                        //     vessel.blocks[t][k].oxygen = 1
                        //     vessel.blocks[t][k].color = "#0000ff44"
                        // }
                        // if (keysPressed['l']) {
                        //     vessel.blocks[t][k].special = 1
                        //     vessel.blocks[t][k].color = "#ffffff44"
                        // }
                        // if (keysPressed['y']) {
                        //     vessel.blocks[t][k].empty = 1
                        //     vessel.blocks[t][k].color = "#00000044"
                        // }
                        tile = vessel.blocks[t][k]
                        // tile.integrity *= .5
                        let whet = 0
                        for (let g = 0; g < vessel.guys.length; g++) {
                            // vessel.guys[g].selected = 0
                            if (tile == vessel.guys[g].tile || vessel.guys[g].healthbox.isPointInside(TIP_engine)) {
                                for (let r = 0; r < vessel.guys.length; r++) {
                                    vessel.guys[r].selected = 0
                                }
                                vessel.guys[g].selected = 1
                                whet = 1
                                // vessel.guys[g].path = [vessel.guys[g].tile]
                                // vessel.guys[g].flagpath = [vessel.guys[g].tile]
                            }
                        }
                        vessel.guys.sort((a, b) => a.selected > b.selected ? -1 : 1)
                        if (vessel.guys[0].selected == 1) {
                            whet = 1
                        }
                        if (vessel.guys[0].tile.t != tile.t || vessel.guys[0].tile.k != tile.k) {
                            if (vessel.guys[0].selected == 1) {
                                if (vessel.guys[0].cound > 0) {
                                    vessel.guys[0].turning = 1
                                    vessel.guys[0].flagpath = astar.search(vessel, vessel.guys[0].tile, tile)
                                    vessel.guys[0].stogo = tile
                                    if (vessel.guys[0].flagpath.length > 1) {
                                        vessel.guys[0].selected = 0
                                    }
                                } else {
                                    vessel.guys[0].path = astar.search(vessel, vessel.guys[0].tile, tile)
                                    vessel.guys[0].stogo = tile
                                    if (vessel.guys[0].path.length > 1) {
                                        vessel.guys[0].selected = 0
                                    }
                                }
                                whet = 1
                            }
                        }

                        // if (whet == 0) {
                        //     if (tile.marked == 1) {
                        //         if (tile.holed != 1) {
                        //             tile.holed = 1
                        //             vessel.hull -= 2
                        //         } else {
                        //             tile.holed = 0
                        //         }
                        //     }
                        // }

                        // for (let g = 0; g < vessel.guys.length; g++) {
                        //     // vessel.guys[g].selected = 0
                        // }
                        break
                    }
                }
                stars.check(TIP_engine)
            }

            ////////////console.log(JSON.stringify(enemy.blocks))
            // example usage: if(object.isPointInside(TIP_engine)){ take action }
        });
        window.addEventListener('pointermove', continued_stimuli);
        window.addEventListener('pointerup', e => {
            // window.removeEventListener("pointermove", continued_stimuli);
        })
        function continued_stimuli(e) {
            FLEX_engine = canvas.getBoundingClientRect();
            XS_engine = e.clientX - FLEX_engine.left;
            YS_engine = e.clientY - FLEX_engine.top;
            TIP_engine.x = XS_engine
            TIP_engine.y = YS_engine
            TIP_engine.body = TIP_engine
            stars.hover(TIP_engine)
        }
    }
    // function gamepad_control(object, speed = 1) { // basic control for objects using the controler
    //     //         //////////////console.log(gamepadAPI.axesStatus[1]*gamepadAPI.axesStatus[0]) //debugging
    //     if (typeof object.body != 'undefined') {
    //         if (typeof (gamepadAPI.axesStatus[1]) != 'undefined') {
    //             if (typeof (gamepadAPI.axesStatus[0]) != 'undefined') {
    //                 object.body.x += (gamepadAPI.axesStatus[0] * speed)
    //                 object.body.y += (gamepadAPI.axesStatus[1] * speed)
    //             }
    //         }
    //     } else if (typeof object != 'undefined') {
    //         if (typeof (gamepadAPI.axesStatus[1]) != 'undefined') {
    //             if (typeof (gamepadAPI.axesStatus[0]) != 'undefined') {
    //                 object.x += (gamepadAPI.axesStatus[0] * speed)
    //                 object.y += (gamepadAPI.axesStatus[1] * speed)
    //             }
    //         }
    //     }
    // }
    function control(object, speed = 1) { // basic control for objects
        if (typeof object.body != 'undefined') {
            if (keysPressed['w']) {
                object.body.y -= speed
            }
            if (keysPressed['d']) {
                object.body.x += speed
            }
            if (keysPressed['s']) {
                object.body.y += speed
            }
            if (keysPressed['a']) {
                object.body.x -= speed
            }
        } else if (typeof object != 'undefined') {
            if (keysPressed['w']) {
                object.y -= speed
            }
            if (keysPressed['d']) {
                object.x += speed
            }
            if (keysPressed['s']) {
                object.y += speed
            }
            if (keysPressed['a']) {
                object.x -= speed
            }
        }
    }
    function getRandomLightColor() { // random color that will be visible on  black background
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[(Math.floor(Math.random() * 12) + 4)];
        }
        return color;
    }
    function getRandomColor() { // random color
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[(Math.floor(Math.random() * 16) + 0)];
        }
        return color;
    }
    function getRandomDarkColor() {// color that will be visible on a black background
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[(Math.floor(Math.random() * 12))];
        }
        return color;
    }
    function castBetween(from, to, granularity = 10, radius = 1) { //creates a sort of beam hitbox between two points, with a granularity (number of members over distance), with a radius defined as well
        let limit = granularity
        let shape_array = []
        for (let t = 0; t < limit; t++) {
            let circ = new Circle((from.x * (t / limit)) + (to.x * ((limit - t) / limit)), (from.y * (t / limit)) + (to.y * ((limit - t) / limit)), radius, "red")
            circ.toRatio = t / limit
            circ.fromRatio = (limit - t) / limit
            shape_array.push(circ)
        }
        return (new Shape(shape_array))
    }

    function castBetweenPoints(from, to, granularity = 10, radius = 1) { //creates a sort of beam hitbox between two points, with a granularity (number of members over distance), with a radius defined as well
        let limit = granularity
        let shape_array = []
        for (let t = 0; t < limit; t++) {
            let circ = new Circle((from.x * (t / limit)) + (to.x * ((limit - t) / limit)), (from.y * (t / limit)) + (to.y * ((limit - t) / limit)), radius, "red")
            circ.toRatio = t / limit
            circ.fromRatio = (limit - t) / limit
            shape_array.push(circ)
        }
        return shape_array
    }

    class Disang {
        constructor(dis, ang) {
            this.dis = dis
            this.angle = ang
        }
    }

    class BezierHitbox {
        constructor(x, y, cx, cy, ex, ey, color = "red") { // this function takes a starting x,y, a control point x,y, and a end point x,y
            this.color = color
            this.x = x
            this.y = y
            this.cx = cx
            this.cy = cy
            this.ex = ex
            this.ey = ey
            this.metapoint = new Circle((x + cx + ex) / 3, (y + cy + ey) / 3, 3, "#FFFFFF")
            this.granularity = 100
            this.body = [...castBetweenPoints((new Point(this.x, this.y)), (new Point(this.ex, this.ey)), this.granularity, 0)]

            let angle = (new Line(this.x, this.y, this.ex, this.ey)).angle()

            this.angles = []
            for (let t = 0; t < this.granularity; t++) {
                this.angles.push(angle)
            }
            for (let t = 0; t <= 1; t += 1 / this.granularity) {
                this.body.push(this.getQuadraticXY(t))
                this.angles.push(this.getQuadraticAngle(t))
            }
            this.hitbox = []
            for (let t = 0; t < this.body.length; t++) {
                let link = new LineOP(this.body[t], this.metapoint)
                let disang = new Disang(link.hypotenuse(), link.angle() + (Math.PI * 2))
                this.hitbox.push(disang)
            }
            this.constructed = 1
        }
        isPointInside(point) {
            let link = new LineOP(point, this.metapoint)
            let angle = (link.angle() + (Math.PI * 2))
            let dis = link.hypotenuse()
            for (let t = 1; t < this.hitbox.length; t++) {
                if (Math.abs(this.hitbox[t].angle - this.hitbox[t - 1].angle) > 1) {
                    continue
                }
                if (angle.between(this.hitbox[t].angle, this.hitbox[t - 1].angle)) {
                    if (dis < (this.hitbox[t].dis + this.hitbox[t - 1].dis) * .5) {
                        return true
                    }
                }
            }
            return false
        }
        doesPerimeterTouch(point) {
            let link = new LineOP(point, this.metapoint)
            let angle = (link.angle() + (Math.PI * 2))
            let dis = link.hypotenuse()
            for (let t = 1; t < this.hitbox.length; t++) {
                if (Math.abs(this.hitbox[t].angle - this.hitbox[t - 1].angle) > 1) {
                    continue
                }
                if (angle.between(this.hitbox[t].angle, this.hitbox[t - 1].angle)) {
                    if (dis < ((this.hitbox[t].dis + this.hitbox[t - 1].dis) * .5) + point.radius) {
                        return this.angles[t]
                    }
                }
            }
            return false
        }
        draw() {
            this.metapoint.draw()
            let tline = new Line(this.x, this.y, this.ex, this.ey, this.color, 3)
            tline.draw()
            canvas_context.beginPath()
            this.median = new Point((this.x + this.ex) * .5, (this.y + this.ey) * .5)
            let angle = (new LineOP(this.median, this.metapoint)).angle()
            let dis = (new LineOP(this.median, this.metapoint)).hypotenuse()
            canvas_context.bezierCurveTo(this.x, this.y, this.cx - (Math.cos(angle) * dis * .38), this.cy - (Math.sin(angle) * dis * .38), this.ex, this.ey)

            canvas_context.fillStyle = this.color
            canvas_context.strokeStyle = this.color
            canvas_context.lineWidth = 3
            canvas_context.stroke()
        }
        getQuadraticXY(t) {
            return new Point((((1 - t) * (1 - t)) * this.x) + (2 * (1 - t) * t * this.cx) + (t * t * this.ex), (((1 - t) * (1 - t)) * this.y) + (2 * (1 - t) * t * this.cy) + (t * t * this.ey))
        }
        getQuadraticAngle(t) {
            var dx = 2 * (1 - t) * (this.cx - this.x) + 2 * t * (this.ex - this.cx);
            var dy = 2 * (1 - t) * (this.cy - this.y) + 2 * t * (this.ey - this.cy);
            return -Math.atan2(dx, dy) + 0.5 * Math.PI;
        }
    }
    Number.prototype.between = function (a, b, inclusive) {
        var min = Math.min(a, b),
            max = Math.max(a, b);
        return inclusive ? this >= min && this <= max : this > min && this < max;
    }

    let setup_canvas = document.getElementById('canvas') //getting canvas from document
    let textbox = document.getElementById('text') //getting canvas from document

    setUp(setup_canvas) // setting up canvas refrences, starting timer. 

    // object instantiation and creation happens here 

    class Dot {
        constructor(k, type, center, size) {
            this.type = type
            this.center = center
            this.k = k
            this.size = size
            this.angle = ((Math.PI * 2) / 3) * this.k
            this.body = new Circle(this.center.x + (Math.cos(this.angle) * this.size), this.center.y + (Math.sin(this.angle) * this.size), size * .707, 'White')
            if (this.type == 0) {
                this.body.color = "red"
            } else if (this.type == 1) {
                this.body.color = "yellow"
            } else if (this.type == 2) {
                this.body.color = "blue"
            }
        }
        draw() {
            this.body.x = this.center.x + (Math.cos(this.angle) * this.size)
            this.body.y = this.center.y + (Math.sin(this.angle) * this.size)
            this.body.draw()
        }
        doesPerimeterTouch(p) {
            if (this.body.doesPerimeterTouch(p)) {
                return true
            }
            return false
        }
    }

    class Wadapam {
        constructor(x, y, size) {
            this.dots = []
            this.center = new Circle(x, y, size, "black")
            for (let t = 0; t < 3; t++) {
                let dot = new Dot(t, (Math.floor(Math.random() * 3)), this.center, size)
                this.dots.push(dot)
            }
        }
        draw() {
            this.center.move()
            this.center.draw()
            for (let t = 0; t < this.dots.length; t++) {
                this.dots[t].draw()
            }
        }
    }

    class Board {
        constructor(size) {
            this.launcher = new Circle(360, 680, 1, "white")
            this.wads = []
            this.size = size
            this.onwad = new Wadapam(this.launcher.x, this.launcher.y, size)
        }
        draw() {
            this.launcher.draw()
            this.onwad.draw()
            let wet = 0
            if (this.onwad.center.x < 100) {
                wet = 1
            } else if (this.onwad.center.x > 620) {
                wet = 1
            } else if (this.onwad.center.y < 20) {
                wet = 1
            } else if (this.onwad.center.y > 720) {
                wet = 1
            }
            for (let t = 0; t < this.wads.length; t++) {
                this.wads[t].draw()
                for (let k = 0; k < this.wads[t].dots.length; k++) {
                    if (this.wads[t].dots[k].doesPerimeterTouch(this.onwad.dots[0].body)) {
                        wet = 1
                        break
                    } else if (this.wads[t].dots[k].doesPerimeterTouch(this.onwad.dots[1].body)) {
                        wet = 1
                        break
                    } else if (this.wads[t].dots[k].doesPerimeterTouch(this.onwad.dots[2].body)) {
                        wet = 1
                        break
                    }
                }
            }

            if (wet == 1) {
                this.onwad.center.xmom = 0
                this.onwad.center.ymom = 0
                this.onwad.center.x /= this.size * 1.41
                this.onwad.center.x = Math.floor(this.onwad.center.x)
                this.onwad.center.x *= this.size * 1.41
                this.onwad.center.y /= this.size * 1.41
                this.onwad.center.y = Math.floor(this.onwad.center.y)
                this.onwad.center.y *= this.size * 1.41
                this.wads.push(this.onwad)
                this.onwad = new Wadapam(this.launcher.x, this.launcher.y, this.size)
            }
        }
        launch(point) {
            let vec = new Vector(this.onwad.center, this.onwad.center.x - point.x, this.onwad.center.y - point.y)
            vec.normalize(this.size * .25)
            this.onwad.center.xmom = -vec.xmom
            this.onwad.center.ymom = -vec.ymom
        }
    }

    class Tile {
        constructor(x, y, width, height, color, id, size, posx, posy, walkable) {
            this.faction = -1
            this.factionsrock = []
            this.factions = []
            this.counterset = 0
            this.slime = false
            this.counter = 0
            this.x = x
            this.builtOn = 0
            this.y = y
            this.height = height
            this.width = width
            this.color = color
            this.xmom = (Math.random() - .5) * 30
            this.ymom = (Math.random() - .5) * 30
            this.koffset = 0
            this.toffset = 0
            this.occupied = false
            // this.markdraw = 1 //remove for fog
            this.breaker = []
            var F;

            var parent;
            // this.inPath = false;
            this.getGCost = this.getValueG;
            this.getHCost = this.getValueH;
            this.g = 0
            this.weight = 1
            this.size = size;
            this.posx = posx;
            this.posy = posy;
            this.walkable = walkable;
            // if (Math.random() < .01) {
            //     if (this.hotrock != 1 && this.hotrock != 2) {
            //         this.walkable = false
            //         this.ice = 1
            //         this.color = "#AAFFFF"
            //     }
            // }
            this.integrity = 100
            this.air = 100
            this.fire = 100
            this.newfire = 100
            this.tag = Math.floor(Math.random() * 18)
            this.id = id;
        }
        isWall() {
            return this.walkable
        }
        overlap(rect) {
            /*
             * Each array in parameter is one rectangle
             * in each array, there is an array showing the co-ordinates of two opposite corners of the rectangle
             * Example:
             * [[x1, y1], [x2, y2]], [[x3, y3], [x4, y4]]
             */

            //Check whether there is an x overlap
            if ((this.x <= rect.x && rect.x <= this.x + this.width) //Event that x3 is inbetween x1 and x2
                || (this.x <= rect.x + rect.width && rect.x + rect.width <= this.x + this.width) //Event that x4 is inbetween x1 and x2
                || (rect.x <= this.x && this.x + this.width <= rect.x + rect.width)) {  //Event that x1 and x2 are inbetween x3 and x4
                //Check whether there is a y overlap using the same procedure
                if ((this.y <= rect.y && rect.y <= this.y + this.height) //Event that y3 is between y1 and y2
                    || (this.y <= rect.y + rect.height && rect.y + rect.height <= this.y + this.height) //Event that y4 is between y1 and y2
                    || (rect.y <= this.y && this.y + this.height <= rect.y + rect.height)) { //Event that y1 and y2 are between y3 and y4
                    return true;
                }
            }
            return false;
        }

        getCost(fromNeighbor) {
            if (vessel.diagonal == false && vessel.slimeflag != 1) { //edit???
                if (fromNeighbor.slime == true) {
                    if (this.slime == true) {
                        if (fromNeighbor && fromNeighbor.x != this.x && fromNeighbor.y != this.y) {
                            return -(1.1 * 1.4) * this.weight
                        } else {
                            return -1.1 * this.weight
                        }
                    } else {

                        if (fromNeighbor && fromNeighbor.x != this.x && fromNeighbor.y != this.y) {
                            return 1405.1 * this.weight
                        } else {
                            return 1005.1 * this.weight
                        }
                    }
                } else {

                    if (this.slime == true) {
                        if (fromNeighbor && fromNeighbor.x != this.x && fromNeighbor.y != this.y) {
                            return -(6.1 * 1.4) * this.weight
                        } else {
                            return -6.1 * this.weight
                        }
                    } else {
                        if (fromNeighbor && fromNeighbor.x != this.x && fromNeighbor.y != this.y) {
                            return this.weight * 14.1421;
                        }
                        return this.weight * 10;
                    }
                }
            } else {
                if (fromNeighbor && fromNeighbor.x != this.x && fromNeighbor.y != this.y) {
                    return this.weight * 1.41421;
                }
                return this.weight;
            }
        }
        toString() {
            return "[" + this.x + " " + this.y + "]";
        }
        createStartNode() {
            // nodeDrawer(gctx, this, 2, "black", "#00FFFF88");

        }
        createEndNode() {
            // nodeDrawer(gctx, this, 2, "black", "#FFFF0088");

        }
        toggleWalkable() {
            this.walkable = !this.walkable;
        }
        getValueF() {
            //this is a problem
            var fValue = (this.getValueH()) + (this.getValueG());

            return (fValue);
        }
        getValueH() {
            var endNodePosition = {
                posx: endPoint.x,
                posy: endPoint.y
            };

            return (getDistance(this, endNodePosition));

        }
        getValueG() {
            var startPointPosition = {
                posx: endPoint.x,
                posy: endPoint.y
            };
            return (getDistance(this, startPointPosition));
        }
        createWall() {
            // nodeDrawer(gctx, this, 2, "transparent", "black");

        }
        drawOpenNode() {
            // nodeDrawer(gctx, this, 2, "transparent", "transparent");

        }
        drawClosedNode() {
            // nodeDrawer(gctx, this, 2, "transparent", "transparent");
        }
        drawPath() {
            // nodeDrawer(gctx, this, 2, "transparent", "#FF000033");
        }
        drawNode() {

            //gctx.beginPath();
            //gctx.lineWidth = ".1";
            //gctx.strokeStyle = "black";
            //gctx.fillStyle = "transparent";

            // let link = new Line(this.posx, this.posy, bottle.crew[bottle.selectedcrew].body.x-100, bottle.crew[bottle.selectedcrew].body.y-300, "red", 1)
            // if (link.hypotenuse() < 108) {
            // ////////////////////////////////////////////////////////////////////////console.log(link)
            // ////////////////////////////////////////////////////////////////////////console.log(bottle)
            // }
            // let roundedx = (Math.round((startPoint.x) / 10))
            // let roundedy = (Math.round((startPoint.y) / 10))
            // if (this.walkable !== false) {
            //     //gctx.fillRect(this.posx, this.posy, this.size, this.size);
            //     //gctx.rect(this.posx, this.posy, this.size, this.size);
            //     //gctx.closePath();
            //     //gctx.stroke();
            // }
            // if (this.inPath === true) {
            //     // this.drawPath();
            // } else if (this.walkable === false) {
            //     // ////////////////////////////////////////////////////////////////////////console.log(this)

            //     // this.createWall();
            //     return;
            //     // }else if (link.hypotenuse() < 11) {
            // } else if (this.posx == roundedx && this.posy == roundedy) {
            //     //   ////////////////////////////////////////////////////////////////////////console.log("hit the startNode");
            //     //   this.createStartNode();
            //     return;
            // } else if (this.posx == endPoint.x && this.posy == endPoint.y) {
            //     //   this.createEndNode();

            // }

        }
        dirtdraw() {
            if (this.dirt == 1) {
                // map_context.drawImage(rawdirt, 0, 0, rawdirt.width, rawdirt.height, (this.x + 5) - 100, (this.y + 5) - 100, 200, 200)
            }
        }
        hole() {
            if (this.integrity < 5) {
                this.holed = 1
            }
            if (this.integrity >= 98) {
                this.holed = 0
            }
            if (this.holed == 1) {
                canvas_context.drawImage(holeimg, 0, 0, 32, 32, this.x + 8, this.y + 8, this.width - 16, this.height - 16)
            }
            if (this.fire < 50) {
                this.onFire = 1
            }
            if (this.fire >= 50) {
                this.onFire = 0
            }
            if (this.onFire == 1) {
                // if(Math.random()<.5){
                this.tag++
                this.tag %= 18
                // }
                canvas_context.drawImage(fire, this.tag * (fire.width / 18), 0, fire.width / 18, fire.height, this.x, this.y, this.width, this.height)
            }
        }
        draw() {
            // this.counterset++
            // if (this.counterset % 3 == 0) {
            //     this.counter++
            // }
            // if (this.sourcerock <= 0 && this.hotrock != 0) {
            //     this.hotrock = 0
            //     // this.color = "#AACCFF"
            //     vessel.hotrocks.splice(vessel.hotrocks.indexOf(this), 1)
            // }
            // if (((this.walkable == false) || (this.walkable == true && this.spiretile >= 1))&& this.builtOn == 1 && !(this.hotrock >= 1)) {
            //     if (this.spiretile >= 1) {
            //         this.color = "transparent"
            //     }
            //     if (typeof this.wallcolor != "undefined") {
            // ////////////////////console.log("s")
            canvas_context.fillStyle = this.color
            canvas_context.strokeStyle = this.color
            canvas_context.fillRect(this.x, this.y, this.width, this.height)
            canvas_context.strokeRect(this.x, this.y, this.width, this.height)
            // map_context.strokeStyle = 'black' //this.wallcolor
            // map_context.lineWidth = 1
            // map_context.strokeRect(this.x, this.y, this.width, this.height)
            //     } else {
            //         map_context.fillStyle = this.color  //may not be else?
            //         map_context.fillRect(this.x, this.y, this.width, this.height)
            //     }
            // } else if (this.walkable == false && this.ice == 1) {
            //     map_context.drawImage(nowalk, this.x, this.y)
            // } else if (this.ice == 1) {
            //     this.walkable = false
            //     map_context.drawImage(nowalk, this.x, this.y)
            // } else if (this.hotrock == 1) {
            //     map_context.drawImage(hotrock1, this.x, this.y)
            // } else if (this.hotrock == 2) {
            //     map_context.drawImage(hotrock2, (this.counter % 6) * 10, 0, 10, 10, this.x, this.y, 10, 10)
            // } else {
            // }
        }
        move() {
            this.x += this.xmom
            this.y += this.ymom
        }
        isPointInside(point) {
            ////////////////////console.log(point, this)
            if (point.x >= this.x) {
                if (point.y >= this.y) {
                    if (point.x <= this.x + this.width) {
                        if (point.y <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
        doesPerimeterTouch(point) {
            if (point.x + point.radius >= this.x) {
                if (point.y + point.radius >= this.y) {
                    if (point.x - point.radius <= this.x + this.width) {
                        if (point.y - point.radius <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
    }
    // let wad = new Board(10)
    let rs = []

    let ximage = new Image()
    ximage.src = "yship.png"
    let shipimage = new Image()
    shipimage.src = "ship2.png"

    let holeimg = new Image()
    holeimg.src = "hole.png"

    for (let t = 1; t < 16; t++) {
        let ing = new Image()
        ing.src = `r${t}.png`
        rs.push(ing)
    }
    let rat = 720 / 512

    let z = 13
    class Guy {
        constructor(tile) {
            this.name = getRandomLightColor()
            this.tile = tile
            this.tile.walkable = false
            this.body = new Circle(256 * rat, 256 * rat, 16, "transparent")
            this.count = 0
            this.type = Math.floor(Math.random() * 15)
            // z++
            this.selected = 0
            this.target = {}
            this.path = [this.tile]
            this.stogo = this.tile
            this.step = 0
            this.cound = 0
            this.turning = 0
            this.flagpath = [this.tile]
            this.stats = [4 + Math.floor(this.type * .5), 1, 1, 1, 1, 1, 1, 1, 1]
            this.skillslist = [1, 1, 1, 1, 1, 1, 1, 1, 1]
            // for(let t= 0;t<this.skillslist.length;t++){
            //     this.skillslist[t]+= (Math.random()*1.5)
            // }
            this.repair = 2
            this.extinguish = 2
            this.energy = 0
            this.skills = ''
            if (this.type == 7) {
                this.stats[0] = 2
                this.skills += 'Fast+++, '
            }

            this.shieldPower = 0
            this.weaponPower = 0
            this.helmPower = 0
            this.fireproof = 0
            this.airless = 0

            if (this.type == 1) {
                this.stats[2] += 1
            }
            if (this.type == 1) {
                this.stats[2] += 2
                this.shieldPower = 1
                this.repair = 5
                this.extinguish = 3
                this.skills += 'Repair+, Extinguish+, Shield++++, '
            }
            if (this.type == 6) {
                this.regen = 1
                this.skills += 'Regen+++, '
            } else {
                this.regen = 0
            }
            if (this.type == 13) {
                this.energy = 1
                this.airless = 1
                this.skills += 'Energetic, Breathless, '
            }
            this.isMedbay = 0
            if (this.type == 14) {
                this.isMedbay = 1
                this.stats[0] = 4
                this.skills += 'Medical++, fast+'
            }
            if (this.type == 10) {
                this.stats[2] += .5
                this.shieldPower = .1
                this.stats[1] += .5
                this.weaponPower = .1
                this.stats[0] = 7
                this.skills += 'Weapon++, Shield++, '
            }
            if (this.type == 0) {
                // this.health*=3
                // this.maxhealth = this.health
                this.stats[0] *= 6
                this.damage *= 2
                this.stats[5] += 1
                this.extinguish = 10
                this.repair = 10
                this.fireproof = 1
                this.skills += 'Fireproof+, Fight+++, Extinguish++, Repair++, Slow--, '
            }
            if (this.type == 13) {
                this.stats[0] *= 2
                for (let t = 1; t < this.stats.length; t++) {
                    this.stats[t] *= .8
                }
                this.skills += 'Slow, '
            }
            this.rate = this.stats[0]
            this.health = 170 + (this.type * 10)
            this.maxhealth = this.health
            if (this.type == 0) {
                this.health *= 3
                this.maxhealth = this.health
            }
            // this.health *= .1
            this.pulsecheck = 0
            this.damage = 5
            this.barter = 1

            // let rooms = ["medbay", "weapon", "shield", "helm", "oxygen", "security", "engine", "special", "empty"]

            if (this.type == 2) {
                this.stats[6] += 1
                this.regen = .5
                this.damage = 6
                this.skills += 'Regen++, Engineer+, Fight+, '
            }
            if (this.type == 3) {
                this.stats[1] += .5
                this.damage = 7
                this.skills += 'Weapons+, Fight++, '
            }
            if (this.type == 4) {
                this.rate = 6
                this.stats[6] += .7
                this.stats[3] += .7
                this.health *= .9
                this.maxhealth = this.health
                this.skills += 'Helm+, Engineer+, '
            }
            if (this.type == 5) {
                this.stats[3] += .7
                this.health *= 1.2
                this.maxhealth = this.health
                this.damage = 6
                this.barter = 1.05
                this.skills += 'Thrifty++, Helm+, Fight++, '
            }
            if (this.type == 6) {
                this.stats[5] += .7
                this.damage = 6
                this.rate = 8
                this.skills += 'Security+, Fight+, '
            }
            if (this.type == 7) {
                this.stats[1] += .7
                this.damage = 6
                this.skills += 'Weapons+, Fight+, '
            }
            if (this.type == 8) {
                this.regen = .25
                this.stats[1] += 1.2
                this.damage = 6
                this.skills += 'Regen+, Fight+, '
            }
            if (this.type == 9) {
                this.stats[1] += 2
                this.weaponPower = 1
                this.skills += 'Weapons+++, '
            }
            if (this.type == 11) {
                this.stats[3] += 2
                this.helmPower = 1
                this.skills += 'Helm+++, '
            }
            if (this.type == 12) {
                this.barter = 1.03
                this.damage = 7
                this.health += 50
                this.stats[6] += .1
                this.stats[3] -= .2
                this.maxhealth = this.health
                this.skills += 'Thrifty+, Fight++, Helm-, Engine+'
            }
            // this.health = 1
        }
        draw() {

            for(let t= 0;t<this.skillslist.length;t++){
                if(this.skillslist[t] > 1.75){
                    this.skillslist[t] = 1.75
                }
            }
            let sys = ["medbay", "weapon", "shield", "helm", "oxygen", "security", "engine", "special", "empty"]
            let hass = 0
            if (vessel.guys.includes(this)) {
                for (let t = 0; t < vessel.guys.length; t++) {
                    for (let s = 0; s < sys.length; s++) {
                        if (vessel.guys[t].tile[sys[s]] == 1) {
                            if (this.tile[sys[s]] == 1) {
                                if (vessel.guys[t].isMedbay == 1) {
                                    hass++
                                }
                            }
                        }
                    }
                }
            } else {
                for (let t = 0; t < enemy.guys.length; t++) {
                    for (let s = 0; s < sys.length; s++) {
                        if (enemy.guys[t].tile[sys[s]] == 1) {
                            if (this.tile[sys[s]] == 1) {
                                if (enemy.guys[t].isMedbay == 1) {
                                    hass++
                                }
                            }
                        }
                    }
                }
            }
            this.health += hass * .5
            if (this.health > this.maxhealth) {
                this.health = this.maxhealth
            }


            this.pulsecheck++
            if (this.pulsecheck >= 10 && this.tile == this.path[this.step]) {
                this.pulsecheck = 0
                if (vessel.guys.includes(this)) {

                    if (this.tile == this.path[0]) {
                        for (let t = 0; t < vessel.guys.length; t++) {
                            if (this != vessel.guys[t]) {
                                if (this.tile == vessel.guys[t].tile && !(vessel.guys[t].tile == vessel.guys[t].path[vessel.guys[t].step])) {
                                    let n = vessel.neighbors(this.tile)
                                    for (let r = 0; r < n.length; r++) {
                                        if (n[r].walkable == true) {
                                            this.path = astar.search(vessel, this.tile, n[r])
                                            break
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if (this.tile == this.path[0]) {
                        for (let t = 0; t < enemy.guys.length; t++) {
                            if (this != enemy.guys[t]) {
                                if (this.tile == enemy.guys[t].tile) {
                                    let n = enemy.neighbors(this.tile)
                                    for (let r = 0; r < n.length; r++) {
                                        if (n[r].walkable == true) {
                                            this.path = astar.search(enemy, this.tile, n[r])
                                            break
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
            this.health += this.regen
            if (this.health > this.maxhealth) {
                this.health = this.maxhealth
            }
            if (vessel.guys.includes(this)) {
                let hrat = this.health / this.maxhealth
                this.healthbox = new Rectangle(0, ((vessel.guys.indexOf(this)) * 43), 66, 42, "#555555")
                if (this.selected == 1) {
                    this.healthbox.color = "#558855"
                }

                this.healthbox.draw()
                this.healthbar = new Rectangle(34, ((vessel.guys.indexOf(this)) * 43) + 32, 30 * hrat, 5, `rgb(${255 - (255 * hrat)}, ${0 + (255 * hrat)}, ${80})`)
                this.healthbar.draw()
                canvas_context.drawImage(rs[this.type], 64 * (this.count % (rs[this.type].width / 64)), 0, 64, 64, this.healthbar.x - 34, this.healthbar.y - 27, this.body.radius * 2, this.body.radius * 2)

            } else if (enemy.guys.includes(this)) {

                let hrat = this.health / this.maxhealth
                this.healthbox = new Rectangle(1202, ((enemy.guys.indexOf(this)) * 43), 66, 42, "#555555")
                if (this.selected == 1) {
                    this.healthbox.color = "#558855"
                }

                this.healthbox.draw()
                this.healthbar = new Rectangle(1234, ((enemy.guys.indexOf(this)) * 43) + 32, 30 * hrat, 5, `rgb(${255 - (255 * hrat)}, ${0 + (255 * hrat)}, ${80})`)
                this.healthbar.draw()
                canvas_context.drawImage(rs[this.type], 64 * (this.count % (rs[this.type].width / 64)), 0, 64, 64, this.healthbar.x - 34, this.healthbar.y - 27, this.body.radius * 2, this.body.radius * 2)

            }

            if (this.turning > 0) {
                if (this.path[1] == this.flagpath[1]) {
                    this.turning = 0
                    this.path = this.flagpath
                    this.cound++
                }
                this.cound--
                if (this.cound <= 0) {
                    this.turning = 0
                    this.path = this.flagpath
                }
            } else if (this.step < this.path.length - 1) {
                if ((this.path[this.step + 1].walkable == true) || (this.step < this.path.length)) {
                    if (Math.random() < .5) {

                        this.count++
                    }
                    // if (this.path.length > 1) {
                    // //////////////console.log(this.path)
                    this.cound++
                    // }
                    if (this.cound > this.rate) {
                        this.step++
                        this.cound = 0
                    }
                }
            } else {
                this.path = [this.tile]
                this.step = 0
            }
            if ((this.tile != this.path[this.step])) {
                this.tile.walkable = true
                if (this.path[this.step]) {

                    this.tile = this.path[this.step]
                }
                // //////////////console.log(this.tile)
                this.tile.walkable = false
            }
            // this.cound =this.stats[0]
            // } else {
            //     // this.cound-=2
            //     // this.tile.walkable = false
            // }
            if (this.step > 0) {
                this.path.splice(0, this.step)
                this.flagpath.splice(0, this.step)
                this.step = 0
                if (vessel.guys.includes(this)) {
                    let srch = astar.search(vessel, this.tile, this.stogo)
                    if (srch.length > 0) {
                        this.path = srch
                    }
                } else {
                    let srch = astar.search(enemy, this.tile, this.stogo)
                    if (srch.length > 0) {
                        this.path = srch
                    }
                }
                // if(this.stogo !=  this.path[this.path.length-1]){

                // }
            } else {

                if (vessel.guys.includes(this)) {
                    this.path = astar.search(vessel, this.tile, this.stogo)
                } else {
                    this.path = astar.search(enemy, this.tile, this.stogo)
                }
            }
            if (this.selected == 1) {
                // control(this.body)
                // this.tile.color = '#00ff0022'
                this.tile.draw()
            }
            if (Math.random() < .1) {
                this.count++
            }
            // //////////////console.log(this.path)
            let l = this.rate - this.cound
            if (this.path.length > 1) {
                this.body.x = (this.tile.x + (this.tile.width * .5)) * l
                this.body.y = (this.tile.y + (this.tile.height * .5)) * l
                this.body.x += (this.path[Math.min(this.step + 1, this.path.length - 1)].x + (this.path[Math.min(this.step + 1, this.path.length - 1)].width * .5)) * this.cound
                this.body.y += (this.path[Math.min(this.step + 1, this.path.length - 1)].y + (this.path[Math.min(this.step + 1, this.path.length - 1)].height * .5)) * this.cound
                this.body.x *= 1 / this.rate
                this.body.y *= 1 / this.rate
                // //////////////console.log(this.tile)
                this.tile.draw = (new Tile()).draw
                // this.tile.color = "green"
                // this.tile.draw()
            } else {

                this.body.x = (this.tile.x + (this.tile.width * .5))
                this.body.y = (this.tile.y + (this.tile.height * .5))

                // this.tile.color = "red"
                // this.tile.draw()
            }
            if (this.tile.air < 50) {
                if (this.airless == 0) {
                    this.health -= ((50 - this.tile.air) / 50) * .5
                }
            }
            if (this.tile.fire < 50) {
                if (this.fireproof == 0) {
                    this.health -= ((50 - this.tile.fire) / 50) * 1.5
                }
            }
            this.tile.fire += this.extinguish
            if (this.tile.fire > 100) {
                this.tile.fire = 100
            }
            canvas_context.drawImage(rs[this.type], 64 * (this.count % (rs[this.type].width / 64)), 0, 64, 64, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)
        }
    }

    class Shields {
        constructor() {
            this.rings = []
            this.level = 3
            this.charge = 0
            this.state = this.level
            this.maxout = 300
        }
        draw() {

            if (this == vessel.shield) {
                this.level = Math.min(vessel.UI.systems[2].max, vessel.UI.systems[2].demand)
                if(typeof vessel.hash != 'undefined'){
                if (vessel.hash['shield'].integrity < 100*(1-(1/(11-vessel.UI.systems[2].max)))) {
                    this.state = 0
                }
            }
            } else {
                this.level = Math.min(enemy.UI.systems[2].max, enemy.UI.systems[2].demand)
                if(typeof enemy.hash != 'undefined'){
                if (enemy.hash['shield'].integrity < 100*(1-(1/(11-enemy.UI.systems[2].max)))) {
                    this.state = 0
                }
            }
            }
            let hrat = this.charge / this.maxout

            if (this.charge > this.maxout) {
                hrat = 1
            }
            this.healthbar = new Rectangle(68, 0, 104 * 1, 30, "#ffffff")
            this.healthbar.draw()

            this.healthbar = new Rectangle(69, 10, 100 * 1, 10, `rgb(${0}, ${0 + (0)}, ${0 + (0)})`)
            this.healthbar.draw()

            this.healthbar = new Rectangle(69, 10, 100 * hrat, 10, `rgb(${255 - (255 * hrat)}, ${0 + (255 * hrat)}, ${0 + (255 * hrat)})`)
            this.healthbar.draw()

            this.healthbar = new Rectangle(68, 0, 104 * 1, 30, "#ffffff")

            if (this.charge > this.maxout) {
                this.charge = 0
                this.state++
                if (this.state > this.level) {
                    this.state = this.level
                    this.charge = this.maxout - 1
                }
            }
            this.rings = []
            for (let t = 0; t < this.state; t++) {
                if (t > this.level) {
                    break
                }
                if (this == vessel.shield) {
                    this.rings.push(new CircleR(vessel.body.x, vessel.body.y, 296 + (t * 12), "cyan"))
                } else {
                    this.rings.push(new CircleR(enemy.body.x, enemy.body.y, 296 + (t * 12), "cyan"))
                }
            }

            for (let t = 0; t < this.rings.length; t++) {
                this.rings[t].draw()
            }
        }
    }

    class System {
        constructor(type) {
            this.type = type
            this.demand = 0
            this.max = 3
            this.fed = 0
            this.sto = 0
            this.bars = []
            if (this.type == 0) {
                this.max = 1
            }
            if (this.type == 1) {
                this.demand = 1
                this.sto = 1
                this.max = 2
            }
            if (this.type == 2) {
                this.demand = 1
                this.sto = 1
                this.max = 2
            }
            if (this.type == 3) {
                this.demand = 1
                this.sto = 1
                this.max = 1
            }
            if (this.type == 4) {
                this.demand = 1
                this.sto = 1
                this.max = 1
            }
            if (this.type == 5) {
                this.demand = 1
                this.sto = 1
                this.max = 1
            }
            if (this.type == 6) {
                this.demand = 1
                this.sto = 1
                this.max = 2
            }
            if (this.type == 7) {
                this.max = 0
            }
            if (this.type == 8) {
                this.max = 0
            }
        }
    }
    class SystemX {
        constructor(type) {
            this.type = type
            this.demand = 0
            this.max = 10
            this.fed = 0
            this.sto = 0
            this.bars = []
        }
    }


    class RedX {
        constructor(x, y) {
            const angle = Math.PI / 4
            this.point1 = new Point(x + (Math.cos(angle) * 10), y + (Math.sin(angle) * 10))
            this.point2 = new Point(x + (Math.cos(angle) * -10), y + (Math.sin(angle) * -10))
            this.point3 = new Point(x + (Math.cos(angle + Math.PI * .5) * 10), y + (Math.sin(angle + Math.PI * .5) * 10))
            this.point4 = new Point(x + (Math.cos(angle + Math.PI * .5) * -10), y + (Math.sin(angle + Math.PI * .5) * -10))

            this.link1 = new LineOP(this.point1, this.point2, "red", 3)
            this.link2 = new LineOP(this.point3, this.point4, "red", 3)
        }
        draw() {
            this.link1.draw()
            this.link2.draw()
        }
    }

    class Weapon {
        constructor(type) {
            this.frame = 0
            this.max = 50000000000000000000000
            this.beingchecked = 0
            this.auto = 1
            this.type = type
            this.body = new RectangleR(270, 650, 100, 70, "#444444")
            this.charge = 0
            this.double = 1
            this.crew = 1
            this.puncture = 0
            this.fireChance = 0
            if (this.type == 0) {
                this.name1 = "Basic"
                this.name2 = "Laser"
                this.max = 500
                this.damage = 35
                this.real = 1
                this.fireChance = 10
            } else if (this.type == 1) {
                this.name1 = "Basic"
                this.name2 = "Bomb"
                this.max = 1000
                this.damage = 90
                this.bomb = 1
                this.real = 1
                this.fireChance = 20
            } else if (this.type == 2) {
                this.name1 = "Double"
                this.name2 = "Laser"
                this.max = 900
                this.damage = 80
                this.real = 1
                this.double = 2
                this.fireChance = 20
            } else if (this.type == 3) {
                this.name1 = "Triple"
                this.name2 = "Laser"
                this.max = 1300
                this.damage = 135
                this.real = 1
                this.double = 3
                this.fireChance = 30
            } else if (this.type == 4) {
                this.name1 = "Crew"
                this.name2 = "Laser"
                this.max = 650
                this.damage = 35
                this.real = 1
                this.double = 1
                this.crew = 8
                this.fireChance = 40
            } else if (this.type == 5) {
                this.name1 = "Mega"
                this.name2 = "Laser"
                this.max = 1400
                this.damage = 140
                this.real = 1
                this.crew = 2
                this.double = 2
                this.fireChance = 35
            } else if (this.type == 6) {
                this.name1 = "Medium"
                this.name2 = "Bomb"
                this.max = 1500
                this.damage = 110
                this.bomb = 1
                this.real = 1
                this.fireChance = 30
            } else if (this.type == 7) {
                this.name1 = "Big"
                this.name2 = "Bomb"
                this.max = 1800
                this.damage = 150
                this.bomb = 1
                this.real = 1
                this.crew = 1.5
                this.fireChance = 45
            } else if (this.type == 8) {
                this.name1 = "Mega"
                this.name2 = "Bomb"
                this.max = 2900
                this.damage = 200
                this.bomb = 1
                this.real = 1
                this.crew = 1.8
                this.puncture = 1
                this.fireChance = 50
            } else if (this.type == 9) {
                this.name1 = "Heat"
                this.name2 = "Beam"
                this.max = 1200
                this.damage = 10
                // this.bomb = 1
                this.beam = 1
                this.real = 1
                this.crew = 1.8
                // this.puncture = 1
                this.fireChance = 200
                this.double = 0
            } else if (this.type == 100) {
                this.name1 = "Wodopom"
                this.name2 = ""
                this.max = 900
                this.damage = 1
                this.bomb = 0
                this.real = 1
                this.crew = 1.8
                this.puncture = 1
                this.wod = 1
                this.double = 10
                this.fireChance = 0
            }
            // this.fireChance = 0
        }
        fire(tile) {
            if (this.charge >= this.max) {
                if (vessel.weapons.includes(this)) {
                    if (enemy.hull <= 0) {
                        return
                    }
                }
                if (enemy.weapons.includes(this)) {
                    if (vessel.hull <= 0) {
                        return
                    }
                }
                if (vessel.weapons.includes(this)) {
                    if (enemy.hull <= 0) {
                        return
                    }
                    if (this.bomb == 1) {
                        if (vessel.bombs <= 0) {
                            return
                        }
                    }
                }
                if (enemy.weapons.includes(this)) {
                    if (vessel.hull <= 0) {
                        return
                    }
                    if (this.bomb == 1) {
                        if (enemy.bombs <= 0) {
                            return
                        }
                    }
                }
                if (this.beam == 1) {
                    this.angle = Math.random() * Math.PI * 2
                }
                this.firing = 10
                this.target = tile
                this.charge = 0
                if (vessel.weapons.includes(this)) {
                    if (enemy.hull <= 0) {
                        return
                    }
                    if (this.bomb == 1) {
                        if (vessel.bombs <= 0) {
                            return
                        }
                        vessel.bombs--
                    }

                    if (Math.random() < enemy.dodgeRate()) {

                        for (let t = 0; t < vessel.guys.length; t++) {
                            if (vessel.guys[t].tile.weapon == 1) {
                                vessel.guys[t].skillslist[1] += .01
                            }
                        }


                        if (enemy.shield.state > 0 && this.bomb != 1) {
                            enemy.shield.state -= this.double
                            enemy.shield.charge = 0
                            if (enemy.shield.state < 0) {
                                enemy.shield.state = 0
                            }
                            for (let t = 0; t < enemy.guys.length; t++) {
                                if (enemy.guys[t].tile.shield == 1) {
                                    enemy.guys[t].skillslist[2] += .01
                                }
                            }
                        } else {
                            tile.integrity -= this.damage
                            tile.fire -= this.fireChance
                            if (Math.random() < (this.fireChance / 300)) {
                                tile.onFire = 1
                                tile.fire = 0
                            }
                            if (this.puncture == 1) {
                                let n = enemy.neighbors(tile)
                                for (let r = 0; r < n.length; r++) {
                                    n[r].integrity -= this.damage
                                }
                            }
                            if (this.beam == 1) {
                                let n = enemy.neighbors(tile)
                                for (let r = 0; r < n.length; r++) {
                                    n[r].fire -= this.fireChance
                                    if (Math.random() < (this.fireChance / 300)) {
                                        if (n[r].oxygen == 1) {
                                            n[r].integrity -= this.damage
                                            enemy.hull -= this.damage * .1
                                        }
                                        n[r].onFire = 1
                                        n[r].fire = 0
                                    }
                                }
                            }
                            enemy.hull -= this.damage * .1
                            for (let t = 0; t < enemy.guys.length; t++) {
                                if (enemy.guys[t].tile == tile) {
                                    enemy.guys[t].health -= this.damage * this.crew
                                }
                            }
                        }
                    } else {
                        let j = 0
                        while (this.target.marked == 1) {
                            j++
                            if (j > 1000) {
                                break
                            }
                            this.target = enemy.blocks[Math.floor(Math.random() * enemy.blocks.length)][Math.floor(Math.random() * enemy.blocks[0].length)]
                        }
                    }
                } else {
                    if (enemy.hull <= 0) {
                        return
                    }
                    if (this.bomb == 1) {
                        if (enemy.bombs <= 0) {
                            return
                        }
                        enemy.bombs--
                    }

                    if (Math.random() < vessel.dodgeRate()) {

                        for (let t = 0; t < enemy.guys.length; t++) {
                            if (enemy.guys[t].tile.weapon == 1) {
                                enemy.guys[t].skillslist[1] += .001
                            }
                        }




                        if (vessel.shield.state > 0 && this.bomb != 1) {
                            vessel.shield.state -= this.double
                            vessel.shield.charge = 0
                            if (vessel.shield.state < 0) {
                                vessel.shield.state = 0
                            }
                            for (let t = 0; t < vessel.guys.length; t++) {
                                if (vessel.guys[t].tile.shield == 1) {
                                    vessel.guys[t].skillslist[2] += .01
                                }
                            }

                        } else {
                            tile.integrity -= this.damage
                            tile.fire -= this.fireChance
                            if (this.puncture == 1) {
                                let n = vessel.neighbors(tile)
                                for (let r = 0; r < n.length; r++) {
                                    n[r].integrity -= this.damage
                                }
                            }
                            if (this.beam == 1) {
                                let n = vessel.neighbors(tile)
                                for (let r = 0; r < n.length; r++) {
                                    n[r].fire -= this.fireChance
                                    if (Math.random() < (this.fireChance / 300)) {
                                        if (n[r].oxygen == 1) {
                                            n[r].integrity -= this.damage
                                            vessel.hull -= this.damage * .1
                                        }
                                        n[r].onFire = 1
                                        n[r].fire = 0
                                    }
                                }
                            }
                            vessel.hull -= this.damage * .1
                            for (let t = 0; t < vessel.guys.length; t++) {
                                if (vessel.guys[t].tile == tile) {
                                    vessel.guys[t].health -= this.damage * this.crew
                                }
                            }
                        }
                    } else {

                        for (let t = 0; t < vessel.guys.length; t++) {
                            if (vessel.guys[t].tile.engine == 1) {
                                vessel.guys[t].skillslist[6] += .01
                            }
                            if (vessel.guys[t].tile.helm == 1) {
                                vessel.guys[t].skillslist[3] += .01
                            }
                        }



                        let j = 0
                        while (this.target.marked == 1) {
                            j++
                            if (j > 1000) {
                                break
                            }
                            this.target = vessel.blocks[Math.floor(Math.random() * vessel.blocks.length)][Math.floor(Math.random() * vessel.blocks[0].length)]
                        }
                    }
                }
            }
        }
        check(point) {

            if (this.selected == 1) {
                for (let t = 0; t < enemy.blocks.length; t++) {
                    for (let k = 0; k < enemy.blocks.length; k++) {
                        if (enemy.blocks[t][k].isPointInside(point)) {
                            this.fire(enemy.blocks[t][k])
                            return
                        }
                    }
                }


            }


            if (this.beingchecked > 0) {
                return
            }
            if (this.body.isPointInside(point)) {
                for (let t = 0; t < vessel.weapons.length; t++) {
                    vessel.weapons[t].selected = 0
                }
                this.selected = 1 //*=-1
            } else {
                this.selected = 0
            }
        }
        check2(point) {
            if (this.body.isPointInside(point)) {
                this.auto *= -1
            }
        }
        work() {

            if (this.auto == 1) {
                if (vessel.weapons.includes(this)) {
                    for (let t = 0; t < enemy.blocks.length; t++) {
                        for (let k = 0; k < enemy.blocks.length; k++) {
                            if (enemy.blocks[t][k].marked == 1) {
                                if (Math.random() < .05) {
                                    this.fire(enemy.blocks[t][k])
                                    break
                                }
                            }
                        }
                    }
                } else {

                    for (let t = 0; t < vessel.blocks.length; t++) {
                        for (let k = 0; k < vessel.blocks.length; k++) {
                            if (vessel.blocks[t][k].marked == 1) {
                                if (Math.random() < .05) {
                                    this.fire(vessel.blocks[t][k])
                                    break
                                }
                            }
                        }
                    }
                }

            }
            if (this.firing > 0) {
                if (this.type == 0) {
                    if (vessel.weapons.includes(this)) {

                        let link = new LineOP(vessel.body, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "red", 7)
                        link.draw()
                        let lin2k = new LineOP(vessel.body, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "white", 3)
                        lin2k.draw()
                        this.firing--
                    } else {

                        let link = new LineOP(enemy.body, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "red", 7)
                        link.draw()
                        let lin2k = new LineOP(enemy.body, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "white", 3)
                        lin2k.draw()
                        this.firing--
                    }
                } else if (this.type == 1) {
                    let link = new Circle(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), 17 * ((10 - this.firing) / 8), "#FF0000")
                    link.draw()
                    let link2 = new Circle(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), 13 * ((10 - this.firing) / 8.05), "#FFAA00")
                    link2.draw()
                    let link3 = new Circle(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), 9 * ((10 - this.firing) / 8.1), "#FFFF00")
                    link3.draw()
                    this.firing -= 2
                } else if (this.type == 2) {
                    if (vessel.weapons.includes(this)) {
                        if (this.firing < 4 || this.firing > 6) {
                            let link = new LineOP(vessel.body, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "orange", 9)
                            link.draw()
                            let lin2k = new LineOP(vessel.body, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "yellow", 4)
                            lin2k.draw()
                        }
                        this.firing -= .7
                    } else {
                        if (this.firing < 4 || this.firing > 6) {
                            let link = new LineOP(enemy.body, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "orange", 9)
                            link.draw()
                            let lin2k = new LineOP(enemy.body, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "yellow", 4)
                            lin2k.draw()
                        }
                        this.firing -= .7
                    }
                } else if (this.type == 3) {
                    if (vessel.weapons.includes(this)) {
                        if (this.firing < 2.5 || this.firing > 7.5 || (this.firing > 4 && this.firing < 6)) {
                            let link = new LineOP(vessel.body, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "Purple", 9)
                            link.draw()
                            let lin2k = new LineOP(vessel.body, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "magenta", 4)
                            lin2k.draw()
                        }
                        this.firing -= .5
                    } else {
                        if (this.firing < 2.5 || this.firing > 7.5 || (this.firing > 4 && this.firing < 6)) {
                            let link = new LineOP(enemy.body, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "purple", 9)
                            link.draw()
                            let lin2k = new LineOP(enemy.body, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "magenta", 4)
                            lin2k.draw()
                        }
                        this.firing -= .5
                    }
                } else if (this.type == 4) {
                    if (vessel.weapons.includes(this)) {
                        let link = new LineOP(vessel.body, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "Blue", 11)
                        link.draw()
                        let lin2k = new LineOP(vessel.body, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "Black", 9)
                        lin2k.draw()
                        this.firing -= .5
                    } else {
                        let link = new LineOP(enemy.body, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "Blue", 11)
                        link.draw()
                        let lin2k = new LineOP(enemy.body, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "Black", 9)
                        lin2k.draw()
                        this.firing -= .5
                    }
                } else if (this.type == 5) {
                    if (vessel.weapons.includes(this)) {
                        let link = new LineOP(vessel.body, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "#FF00AA", 12)
                        link.draw()
                        let lin2k = new LineOP(vessel.body, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "#AA00FF", 9)
                        lin2k.draw()
                        this.firing -= 1
                    } else {
                        let link = new LineOP(enemy.body, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "#FF00AA", 12)
                        link.draw()
                        let lin2k = new LineOP(enemy.body, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "#AA00FF", 9)
                        lin2k.draw()
                        this.firing -= 1
                    }
                } else if (this.type == 6) {
                    let link = new Circle(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), 22 * ((10 - this.firing) / 8), "#FF0000")
                    link.draw()
                    let link2 = new Circle(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), 16 * ((10 - this.firing) / 8.05), "#FFAA00")
                    link2.draw()
                    let link3 = new Circle(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), 12 * ((10 - this.firing) / 8.1), "#FFFF00")
                    link3.draw()
                    this.firing -= 2
                } else if (this.type == 7) {
                    let link = new Circle(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), 24 * ((10 - this.firing) / 8), "#FF0000")
                    link.draw()
                    let link2 = new Circle(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), 18 * ((10 - this.firing) / 8.05), "#FFAA00")
                    link2.draw()
                    let link3 = new Circle(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), 14 * ((10 - this.firing) / 8.1), "#FFFFFF")
                    link3.draw()
                    this.firing -= 2
                } else if (this.type == 8) {
                    let link = new Circle(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), 26 * ((10 - this.firing) / 8), "#FF0000")
                    link.draw()
                    let link2 = new Circle(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), 20 * ((10 - this.firing) / 8.05), "#FFAA00")
                    link2.draw()
                    let link3 = new Circle(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), 16 * ((10 - this.firing) / 8.1), "#FFFFFF")
                    link3.draw()
                    this.firing -= 2
                } else if (this.type == 9) {
                    let site5 = new RedX(this.target.x + (Math.cos(this.angle) * (10 - this.firing) * 5), this.target.y + (Math.sin(this.angle) * (10 - this.firing) * 5))
                    site5.draw()
                    let site = new RedX(this.target.x + (Math.cos(this.angle) * (10 - this.firing) * 4), this.target.y + (Math.sin(this.angle) * (10 - this.firing) * 4))
                    site.draw()
                    let site2 = new RedX(this.target.x + (Math.cos(this.angle) * (10 - this.firing) * 3), this.target.y + (Math.sin(this.angle) * (10 - this.firing) * 3))
                    site2.draw()
                    let site3 = new RedX(this.target.x + (Math.cos(this.angle) * (10 - this.firing) * 2), this.target.y + (Math.sin(this.angle) * (10 - this.firing) * 2))
                    site3.draw()
                    this.firing -= .2
                } else if (this.type == 100) {


                    if (vessel.weapons.includes(this)) {
                        let g = Math.max(10 - this.firing)
                        for (let k = 0; k < g; k++) {
                            let link = new Circle(enemy.body.x, enemy.body.y, (260 - (30 * k)) * ((10 - this.firing) / 8), getRandomLightColor() + '22')
                            link.draw()
                        }
                        this.firing -= .4
                    } else {
                        //they should never have this
                    }

                }
            }
        }
        draw() {

            if (keysPressed[vessel.weapons.indexOf(this) + 1]) {
                for (let t = 0; t < vessel.weapons.length; t++) {
                    vessel.weapons[t].selected = 0
                }
                this.selected = 1
            }

            this.work()
            this.beingchecked--
            if (vessel.weapons.includes(this)) {
                this.body.x = 270 + (100 * vessel.weapons.indexOf(this))
            } else {
                this.body.x = (vessel.upgradeMenu.window.x + 400) + ((100 * vessel.upgradeMenu.wepsto.indexOf(this)) % 500)
                this.body.y = (vessel.upgradeMenu.window.y + 10) + (70 * Math.floor(vessel.upgradeMenu.wepsto.indexOf(this) / 5))
            }
            if (this.selected == 1) {
                this.body.color = "#666666"
            } else {
                this.body.color = "#444444"
            }
            this.body.draw()
            if (this.type == -1) {
                return
            }
            canvas_context.fillStyle = "white"
            canvas_context.font = "10px comic sans ms"
            canvas_context.fillText(this.name1, this.body.x + 48, this.body.y + 10)
            canvas_context.fillText(vessel.weapons.indexOf(this) + 1, this.body.x + 5, this.body.y + this.body.height - 2)
            canvas_context.fillText(this.name2, this.body.x + 48, this.body.y + 25)
            if (this.auto == 1) {
                canvas_context.fillStyle = "#00ff00"
                canvas_context.font = "12px comic sans ms"
                canvas_context.fillText("Auto", this.body.x + 48, this.body.y + 38)
            }
            if (this.charge >= this.max) {
                this.charge = this.max
            }
            let crat = this.charge / this.max
            this.bar = new RectangleR(this.body.x + 48, this.body.y + this.body.height - 8, (this.body.width - 50) * crat, 6, `rgb(${255 - (255 * crat)}, ${0 + (255 * crat)}, ${128})`)
            this.bar.draw()

            if (this.type == 0) {
                canvas_context.drawImage(basiclaser, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
            } else if (this.type == 1) {
                canvas_context.drawImage(basicmissle, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
            } else if (this.type == 2) {
                canvas_context.drawImage(doublelaser, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
            } else if (this.type == 3) {
                canvas_context.drawImage(triplelaser, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
            } else if (this.type == 4) {
                canvas_context.drawImage(crewlaser, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
            } else if (this.type == 5) {
                canvas_context.drawImage(megalaser, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
            } else if (this.type == 6) {
                canvas_context.drawImage(mediummmissle, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
            } else if (this.type == 7) {
                canvas_context.drawImage(bigmissle, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
            } else if (this.type == 8) {
                canvas_context.drawImage(megamissle, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
            } else if (this.type == 9) {
                canvas_context.drawImage(heatbeam, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
            } else if (this.type == 100) {
                this.frame++
                canvas_context.drawImage(wodopomimg, (this.frame % 30) * 32, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
            }


        }
    }

    let fire = new Image()
    fire.src = "fire.png"

    let shieldimage = new Image()
    shieldimage.src = "shield.png"
    let engineimage = new Image()
    engineimage.src = "engine.png"
    let weaponimage = new Image()
    weaponimage.src = "weapon.png"
    let medbayimage = new Image()
    medbayimage.src = "medbay.png"
    let helmimage = new Image()
    helmimage.src = "helm.png"
    let oxygenimage = new Image()
    oxygenimage.src = "oxygen.png"
    let securityimage = new Image()
    securityimage.src = "security.png"
    let specialimage = new Image()
    specialimage.src = "special.png"
    let emptyimage = new Image()
    emptyimage.src = "empty.png"


    let basiclaser = new Image()
    basiclaser.src = "basiclaser.png"
    let doublelaser = new Image()
    doublelaser.src = "doublelaser.png"
    let triplelaser = new Image()
    triplelaser.src = "triplelaser.png"
    let megalaser = new Image()
    megalaser.src = "megalaser.png"
    let crewlaser = new Image()
    crewlaser.src = "crewlaser.png"

    let wodopomimg = new Image()
    wodopomimg.src = "wodopom.png"

    let heatbeam = new Image()
    heatbeam.src = "heatbeam.png"


    let mediummmissle = new Image()
    mediummmissle.src = "mediummissle.png"
    let bigmissle = new Image()
    bigmissle.src = "bigmissle.png"
    let megamissle = new Image()
    megamissle.src = "megamissle.png"
    let basicmissle = new Image()
    basicmissle.src = "basicmissle.png"
    let warning = new Image()
    warning.src = "energywarn.png"
    let shiphealth = new Image()
    shiphealth.src = "shiphealth.png"



    let bat = new Image()
    bat.src = "bat.png"


    class ShipUI {
        constructor(level) {
            if (level == -1) {
                this.body = new Rectangle(40, 580, 230, 140, "#444444")
                this.systems = []
                for (let t = 0; t < 9; t++) {
                    this.systems.push(new System(t))
                    if (t == 4) {
                        this.systems[t].demand = 1
                        this.systems[t].sto = 1
                    }
                }
                this.count = 0
                this.slap = 2
                this.bars = []

                for (let t = 0; t < this.systems.length; t++) {
                    let box = new Rectangle(this.body.x + 5 + (t * 25), (this.body.y + this.body.height) - 135, 20, 135, "#999999")
                    box.draw()
                    for (let k = 0; k < 12; k++) {
                        this.systems[t].bars[k] = new Rectangle(box.x + 2, (((box.y + 135) - (k * 12)) - 12), 16, 10, "#00ff00")
                        if (this.systems[t].demand + this.systems[t].fed > k) {
                            this.systems[t].bars[k].color = "#00ff00"
                        }
                        if (this.systems[t].fed > k) {
                            this.systems[t].bars[k].color = "orange"
                        }
                    }
                    this.box = box
                }
            } else {

                this.body = new Rectangle(40, 580, 230, 140, "#444444")
                this.systems = []
                for (let t = 0; t < 9; t++) {
                    this.systems.push(new System(t))
                    if (t == 4) {
                        this.systems[t].demand = 1
                        this.systems[t].sto = 1
                    }
                }
                let j = 0
                while (j < (level * .5)) {
                    // ////console.log("hit")
                    this.systems[j % this.systems.length].max += 1
                    if (this.systems[j % this.systems.length].max >= 10) {
                        this.systems[j % this.systems.length].max = 10
                    }
                    j++
                }
                this.count = 0
                this.slap = 2
                this.bars = []
                for (let t = 0; t < this.systems.length; t++) {
                    let box = new Rectangle(this.body.x + 5 + (t * 25), (this.body.y + this.body.height) - 135, 20, 135, "#999999")
                    box.draw()
                    for (let k = 0; k < 12; k++) {
                        this.systems[t].bars[k] = new Rectangle(box.x + 2, (((box.y + 135) - (k * 12)) - 12), 16, 10, "#00ff00")
                        if (this.systems[t].demand + this.systems[t].fed > k) {
                            this.systems[t].bars[k].color = "#00ff00"
                        }
                        if (this.systems[t].fed > k) {
                            this.systems[t].bars[k].color = "orange"
                        }
                    }
                    this.box = box
                }
            }
        }
        draw() {
            this.body.draw()
            for (let t = 0; t < this.systems.length; t++) {

                if (this.systems[t].demand + this.systems[t].fed > this.systems[t].max) {
                    this.systems[t].demand--
                } else {
                    this.systems[t].demand = this.systems[t].sto
                }
                let box = new Rectangle(this.body.x + 5 + (t * 25), (this.body.y + this.body.height) - 135, 20, 135, "#999999")
                box.draw()
                this.slap++
                if (this.slap > 15) {
                    this.slap = 0
                    this.count++
                }
                for (let k = 0; k < this.systems[t].max; k++) {
                    this.systems[t].bars[k] = new Rectangle(box.x + 2, (((box.y + 135) - (k * 12)) - 12), 16, 10, "#ff0000")


                    let rooms = ["medbay", "weapon", "shield", "helm", "oxygen", "security", "engine", "special", "empty"]
                    if (this.systems[t].demand + this.systems[t].fed > k) {
                        this.systems[t].bars[k].color = "#00ff00"
                    }
                    if (this.systems[t].fed > k) {
                        this.systems[t].bars[k].color = "orange"
                    }
                    if(typeof vessel.hash != 'undefined'){
                        if(vessel.hash[rooms[t]].integrity < 100*(1-(1/(11-this.systems[t].max)))){
                            this.systems[t].bars[k].color = "black"
                        }
                    }

                    this.systems[t].bars[k].draw()
                    canvas_context.drawImage(bat, this.systems[t].bars[k].x, this.systems[t].bars[k].y)
                }
                // box.y+=135
                if (t == 0) {
                    canvas_context.drawImage(medbayimage, 16 * (this.count % 4), 0, 16, 16, box.x, box.y - 20, 16, 16)
                } else if (t == 1) {
                    canvas_context.drawImage(weaponimage, 0, 0, 16, 16, box.x, box.y - 20, 16, 16)
                } else if (t == 2) {
                    canvas_context.drawImage(shieldimage, 0, 0, 16, 16, box.x, box.y - 20, 16, 16)
                } else if (t == 3) {
                    canvas_context.drawImage(helmimage, 0, 0, 16, 16, box.x, box.y - 20, 16, 16)
                } else if (t == 4) {
                    canvas_context.drawImage(oxygenimage, 0, 0, 16, 16, box.x, box.y - 20, 16, 16)
                } else if (t == 5) {
                    canvas_context.drawImage(securityimage, 0, 0, 16, 16, box.x, box.y - 20, 16, 16)
                } else if (t == 6) {
                    canvas_context.drawImage(engineimage, 0, 0, 16, 16, box.x, box.y - 20, 16, 16)
                } else if (t == 7) {
                    canvas_context.drawImage(specialimage, 0, 0, 16, 16, box.x, box.y - 20, 16, 16)
                } else if (t == 8) {
                    canvas_context.drawImage(emptyimage, 0, 0, 16, 16, box.x, box.y - 20, 16, 16)
                }
                this.systems[t].fed = 0
            }
        }
        check(point) {
            for (let t = 0; t < this.systems.length; t++) {
                // let box = new Rectangle(this.body.x + 5 + (t * 25), (this.body.y + this.body.height) - 135, 20, 135, "#999999")
                for (let k = 0; k < this.systems[t].max; k++) {
                    // let bar = new Rectangle(box.x + 2, ((box.y + 135) - (k * 12)) - 12, 16, 10, "#00ff00")
                    this.systems[t].bars[k].y -= 1
                    this.systems[t].bars[k].height += 2
                    if (this.systems[t].bars[k].isPointInside(point)) {
                        if (this.systems[t].demand > k) {
                            this.systems[t].demand--
                            this.systems[t].sto = this.systems[t].demand
                        } else {
                            if (vessel.energy.power > 0) {
                                this.systems[t].demand++
                                this.systems[t].sto = this.systems[t].demand
                            } else {
                                vessel.warn = 10
                            }
                        }
                    }
                }
            }
        }
    }

    class MenuUI {
        constructor(body) {
            this.body = body
            this.systems = []
            for (let t = 0; t < 9; t++) {
                this.systems.push(new SystemX(t))
            }
            this.count = 0
            this.slap = 2
            this.bars = []
            this.first = 0

            for (let t = 0; t < this.systems.length; t++) {
                let box = new Rectangle(this.body.x + 5 + (t * 25), (this.body.y + this.body.height) - 135, 20, 135, "#999999")
                box.draw()
                for (let k = 0; k < this.systems[t].max; k++) {
                    this.systems[t].bars[k] = new Rectangle(box.x + 2, (((box.y + 135) - (k * 12)) - 12), 16, 10, "#DDDDDD")
                    if (this.systems[t].demand + this.systems[t].fed > k) {
                        this.systems[t].bars[k].color = "#00ff00"
                    }
                    if (this.systems[t].fed > k) {
                        this.systems[t].bars[k].color = "orange"
                    }
                    this.systems[t].bars[k].draw()
                }
            }
        }
        draw() {
            this.body.draw()
            for (let t = 0; t < this.systems.length; t++) {
                if (this.first == 0) {
                    this.systems[t].demand = vessel.UI.systems[t].max
                }

                if (this.systems[t].demand + this.systems[t].fed > this.systems[t].max) {
                    // this.systems[t].demand--
                } else {
                    // this.systems[t].demand = this.systems[t].sto
                }
                let box = new Rectangle(41 + this.body.x + 5 + (t * 25), (this.body.y + this.body.height) - 135, 20, 135, "#999999")
                box.draw()
                this.slap++
                if (this.slap > 15) {
                    this.slap = 0
                    this.count++
                }
                for (let k = 0; k < this.systems[t].max; k++) {
                    this.systems[t].bars[k] = new Rectangle(box.x + 2, (((box.y + 135) - (k * 12)) - 12), 16, 10, "#FFDDDD")
                    if (this.systems[t].demand + this.systems[t].fed > k) {
                        this.systems[t].bars[k].color = "#FF0000"
                    }
                    if (this.systems[t].fed > k) {
                        this.systems[t].bars[k].color = "orange"
                    }
                    this.systems[t].bars[k].draw()
                    canvas_context.drawImage(bat, this.systems[t].bars[k].x, this.systems[t].bars[k].y)
                }
                // box.y+=135
                if (t == 0) {
                    canvas_context.drawImage(medbayimage, 16 * (this.count % 4), 0, 16, 16, box.x, box.y - 20, 16, 16)
                } else if (t == 1) {
                    canvas_context.drawImage(weaponimage, 0, 0, 16, 16, box.x, box.y - 20, 16, 16)
                } else if (t == 2) {
                    canvas_context.drawImage(shieldimage, 0, 0, 16, 16, box.x, box.y - 20, 16, 16)
                } else if (t == 3) {
                    canvas_context.drawImage(helmimage, 0, 0, 16, 16, box.x, box.y - 20, 16, 16)
                } else if (t == 4) {
                    canvas_context.drawImage(oxygenimage, 0, 0, 16, 16, box.x, box.y - 20, 16, 16)
                } else if (t == 5) {
                    canvas_context.drawImage(securityimage, 0, 0, 16, 16, box.x, box.y - 20, 16, 16)
                } else if (t == 6) {
                    canvas_context.drawImage(engineimage, 0, 0, 16, 16, box.x, box.y - 20, 16, 16)
                } else if (t == 7) {
                    canvas_context.drawImage(specialimage, 0, 0, 16, 16, box.x, box.y - 20, 16, 16)
                } else if (t == 8) {
                    canvas_context.drawImage(emptyimage, 0, 0, 16, 16, box.x, box.y - 20, 16, 16)
                }
                this.systems[t].fed = 0
            }

            this.first = 1
        }
        check(point) {
            if (vessel.upgradeMenu.open != 1) {
                return
            }
            for (let t = 0; t < this.systems.length; t++) {
                // let box = new Rectangle(this.body.x + 5 + (t * 25), (this.body.y + this.body.height) - 135, 20, 135, "#999999")
                for (let k = 0; k < this.systems[t].max; k++) {
                    // let bar = new Rectangle(box.x + 2, ((box.y + 135) - (k * 12)) - 12, 16, 10, "#00ff00")
                    if (this.systems[t].bars[k].isPointInside(point)) {
                        // if (this.systems[t].demand > k) {
                        // this.systems[t].demand--
                        // this.systems[t].sto = this.systems[t].demand
                        // } else {
                        // if (vessel.energy.power > 0) {
                        if (vessel.scrap >= (15) + (this.systems[t].demand * 5)) {
                            if (this.systems[t].demand < 10) {
                                vessel.scrap -= (15) + (this.systems[t].demand * 5)
                                this.systems[t].demand++
                                vessel.UI.systems[t].max = this.systems[t].demand
                                this.systems[t].sto = this.systems[t].demand
                            }
                        }
                        // } else {
                        //     // vessel.warn = 10
                        // }
                        // }
                    }
                }
            }
        }
    }
    let system = new Image()
    system.src = "system.png"
    class UpgradeMenu {
        constructor() {
            this.wepsto = []
            // for(let t = 0;t<8;t++){
            //     let v = new Weapon(t)
            //     v.auto = 0
            //     this.wepsto.push(v)
            // }
            for (let t = 0; t < 15; t++) {
                let v = new Weapon(-1)
                v.auto = 0
                this.wepsto.push(v)
            }
            this.button = new RectangleR(1, 540, 40, 40, "#444444")
            this.open = -1
            this.window = new RectangleR(200, 200, 910, 250, "#444444")
            this.levels = new MenuUI(this.window)
        }
        draw() {
            this.button.draw()
            canvas_context.drawImage(system, this.button.x, this.button.y)
            if (this.open == 1) {
                this.window.draw()
                this.levels.draw()
                vessel.menuBattery.draw()
                canvas_context.fillStyle = "white"
                canvas_context.font = "10px comic sans ms"
                canvas_context.fillText("Money: " + vessel.money, this.window.x + 270, this.window.y + 20)
                canvas_context.fillText("Scrap: " + vessel.scrap, this.window.x + 270, this.window.y + 40)
                canvas_context.fillText("Hull: " + vessel.hull, this.window.x + 270, this.window.y + 60)
                canvas_context.fillText("Fuel: " + vessel.fuel, this.window.x + 270, this.window.y + 80)
                canvas_context.fillText("Bombs: " + vessel.bombs, this.window.x + 270, this.window.y + 100)
                for (let t = 0; t < this.wepsto.length; t++) {
                    this.wepsto[t].draw()
                    this.wepsto[t].auto = 0
                }
            }
        }
        check(point) {
            if (this.open == 1) {


                for (let k = 0; k < vessel.weapons.length; k++) {
                    if (vessel.weapons[k].body.isPointInside(point)) {
                        for (let t = 0; t < vessel.weapons.length; t++) {
                            vessel.weapons[t].selected = 0
                        }
                        vessel.weapons[k].selected = 1 //*=-1
                    } else {
                        // vessel.weapons[k].selected = 0
                    }
                }



                for (let t = 0; t < this.wepsto.length; t++) {
                    if (this.wepsto[t].body.isPointInside(point)) {
                        for (let k = 0; k < vessel.weapons.length; k++) {
                            if (vessel.weapons[k].selected == 1) {
                                let swap = new Weapon(this.wepsto[t].type)
                                this.wepsto[t] = new Weapon(vessel.weapons[k].type)
                                vessel.weapons[k] = swap
                            }
                        }
                    }
                }
            }
            if (this.button.isPointInside(point)) {
                this.open *= -1
            }
        }
    }


    class Battery {
        constructor(power, systems) {
            this.power = power
            this.powersto = power
            this.expenditure = 0
            this.systems = systems
        }
        balance() {
            if (this == vessel.energy) {
                this.powersto = vessel.menuBattery.power
                this.power = this.powersto
                for (let t = 0; t < this.systems.length; t++) {
                    this.power -= this.systems[t].demand
                }
                this.box = new RectangleR(1, 580, 40, 140, "#555555")
                // this.box.draw()
                for (let t = 0; t < this.powersto; t++) {
                    let block = new RectangleR(2 + ((t % 4) * 10), 720 - (10 + (Math.floor(t / 4) * 10)), 10, 10, "#dd0000")
                    // block.draw()
                }
                for (let t = 0; t < this.power; t++) {
                    let block = new RectangleR(2 + ((t % 4) * 10), 720 - (10 + (Math.floor(t / 4) * 10)), 10, 10, "#00dd00")
                    // block.draw()
                }
            } else if (this == enemy.energy) {
                // this.powersto = enemy.menuBattery.power
                this.power = this.powersto
                for (let t = 0; t < this.systems.length; t++) {
                    this.power -= this.systems[t].demand
                }
                this.box = new RectangleR(1, 580, 40, 140, "#555555")
                // this.box.draw()
                for (let t = 0; t < this.powersto; t++) {
                    let block = new RectangleR(2 + ((t % 4) * 10), 720 - (10 + (Math.floor(t / 4) * 10)), 10, 10, "#dd0000")
                    // block.draw()
                }
                for (let t = 0; t < this.power; t++) {
                    let block = new RectangleR(2 + ((t % 4) * 10), 720 - (10 + (Math.floor(t / 4) * 10)), 10, 10, "#00dd00")
                    // block.draw()
                }
            } else {
                // this.powersto = vessel.menuBattery.power
                this.power = this.powersto
                for (let t = 0; t < this.systems.length; t++) {
                    this.power -= this.systems[t].sto - this.systems[t].fed
                }
                this.box = new RectangleR(1, 580, 40, 140, "#555555")
                // this.box.draw()
                for (let t = 0; t < this.powersto; t++) {
                    let block = new RectangleR(2 + ((t % 4) * 10), 720 - (10 + (Math.floor(t / 4) * 10)), 10, 10, "#dd0000")
                    // block.draw()
                }
                for (let t = 0; t < this.power; t++) {
                    let block = new RectangleR(2 + ((t % 4) * 10), 720 - (10 + (Math.floor(t / 4) * 10)), 10, 10, "#00dd00")
                    // block.draw()
                }
            }
        }
        draw() {
            if (this == vessel.battery) {
                this.powersto = vessel.menuBattery.power
                this.power = this.powersto
                for (let t = 0; t < this.systems.length; t++) {
                    this.power -= this.systems[t].demand
                }
                this.box = new RectangleR(1, 580, 40, 140, "#555555")
                this.box.draw()
                for (let t = 0; t < this.powersto; t++) {
                    let block = new RectangleR(2 + ((t % 4) * 10), 720 - (10 + (Math.floor(t / 4) * 10)), 10, 10, "#dd0000")
                    block.draw()
                }
                for (let t = 0; t < this.power; t++) {
                    let block = new RectangleR(2 + ((t % 4) * 10), 720 - (10 + (Math.floor(t / 4) * 10)), 10, 10, "#00dd00")
                    block.draw()
                }
            } else {
                this.powersto = vessel.menuBattery.power
                this.power = this.powersto
                for (let t = 0; t < this.systems.length; t++) {
                    this.power -= this.systems[t].sto - this.systems[t].fed
                }
                this.box = new RectangleR(1, 580, 40, 140, "#555555")
                this.box.draw()
                for (let t = 0; t < this.powersto; t++) {
                    let block = new RectangleR(2 + ((t % 4) * 10), 720 - (10 + (Math.floor(t / 4) * 10)), 10, 10, "#dd0000")
                    block.draw()
                }
                for (let t = 0; t < this.power; t++) {
                    let block = new RectangleR(2 + ((t % 4) * 10), 720 - (10 + (Math.floor(t / 4) * 10)), 10, 10, "#00dd00")
                    block.draw()
                }
            }
        }
    }
    class BatteryMenu {
        constructor(power, systems) {
            this.power = power
            this.powersto = power
            this.expenditure = 0
            this.systems = systems
            this.box = new Rectangle(0, 0, 0, 0)
        }
        balance() {

        }
        check(point) {
            if (vessel.upgradeMenu.open != 1) {
                return
            }
            if (this.box.isPointInside(point)) {
                if (vessel.scrap >= vessel.energy.powersto) {
                    if (this.power < 56) {
                        vessel.scrap -= vessel.energy.powersto
                        this.power++
                    }
                }
            }
        }
        draw() {
            // this.power = //this.powersto
            // for (let t = 0; t < this.systems.length; t++) {
            //     this.power -= this.systems[t].demand
            // }
            this.box = new RectangleR(vessel.upgradeMenu.window.x + 1, vessel.upgradeMenu.window.y + 110, 40, 140, "#555555")
            this.box.draw()
            for (let t = 0; t < this.power; t++) {
                let block = new RectangleR(vessel.upgradeMenu.window.x + 2 + ((t % 4) * 10), (vessel.upgradeMenu.window.y + vessel.upgradeMenu.window.height) - (10 + (Math.floor(t / 4) * 10)), 10, 10, "#dd0000")
                block.draw()
            }
        }
    }
    class Door {
        constructor(x, y) {
            this.body = new Circle(x, y, 10, "#00ff00")
            this.t = 0
            this.count = 0
        }
        draw() {
            // this.body.draw()
            this.count = 0
            for (let t = 0; t < vessel.blocks.length; t++) {
                for (let k = 0; k < vessel.blocks[t].length; k++) {
                    if (vessel.blocks[t][k].doesPerimeterTouch(this.body)) {
                        this.count++
                    }
                }
            }
            this.body.radius = Math.min(this.count * 7, 18)
            let vverts = [7, 9, 0, 11, 4, 2]
            if (vverts.includes(vessel.doors.indexOf(this))) {
                if (this.body.color == "#00ff00") {
                    let rect = new RectangleR(this.body.x - 2, this.body.y - (this.count * 8), 4, 4, this.body.color)
                    rect.draw()
                    let rect2 = new RectangleR(this.body.x - 2, this.body.y + ((this.count * 8) - 4), 4, 4, this.body.color)
                    rect2.draw()
                } else {
                    let rect = new RectangleR(this.body.x - 2, this.body.y - (this.count * 8), 4, 16 * this.count, this.body.color)
                    rect.draw()
                }
            } else {
                if (this.body.color == "#00ff00") {
                    let rect = new RectangleR(this.body.x - (this.count * 8), this.body.y - 2, 4, 4, this.body.color)
                    rect.draw()
                    let rect2 = new RectangleR(this.body.x + ((this.count * 8) - 4), this.body.y - 2, 4, 4, this.body.color)
                    rect2.draw()
                } else {
                    let rect = new RectangleR(this.body.x - (this.count * 8), this.body.y - 2, 16 * this.count, 4, this.body.color)
                    rect.draw()
                }

            }
        }
        check(point) {
            this.t = 0
            if (vessel.doors.includes(this)) {
                let wet = 0
                if (this.body.isPointInside(point)) {
                    // //console.log(vessel.doors.indexOf(this))
                    for (let t = 0; t < vessel.blocks.length; t++) {
                        for (let k = 0; k < vessel.blocks[t].length; k++) {
                            if (vessel.blocks[t][k].doesPerimeterTouch(this.body)) {
                                vessel.blocks[t][k].doorway *= -1
                                wet = 1
                                if (vessel.blocks[t][k].doorway == 1) {
                                    this.body.color = "#00ff00"
                                } else {
                                    this.body.color = "#FF0000"
                                }
                            }
                        }
                    }
                }
                if (wet == 1) {
                    return true
                }
            } else {
                let wet = 0
                if (this.body.isPointInside(point)) {
                    for (let t = 0; t < enemy.blocks.length; t++) {
                        for (let k = 0; k < enemy.blocks[t].length; k++) {
                            if (enemy.blocks[t][k].doesPerimeterTouch(this.body)) {
                                enemy.blocks[t][k].doorway *= -1
                                wet = 1
                                if (enemy.blocks[t][k].doorway == 1) {
                                    this.body.color = "#00ff00"
                                } else {
                                    this.body.color = "#FF0000"
                                }
                            }
                        }
                    }
                }
                if (wet == 1) {
                    return true
                }
            }
        }
    }

    class Ship {
        constructor(width, height, posx, posy, gridPoints) {
            this.star = 0
            this.pulse = 0
            this.UI = new ShipUI(-1)
            this.energy = new Battery(9, this.UI.systems)
            this.warn = 0
            this.scrap = 50
            this.bombs = 20
            this.fuel = 10
            this.shield = new Shields()
            this.shield.state = this.UI.systems[2].max
            // this.UI.systems[1].max = 10
            // this.UI.systems[1].demand = 10
            this.hull = 300
            this.maxhull = this.hull
            this.enterTile = {}
            this.enterTile.make = 1
            this.entryFee = 25
            this.money = 100
            this.windspeed = 1
            this.winddiry = 1
            this.winddirx = 0
            this.width = width;
            this.height = height;
            this.posx = posx;
            this.posy = posy;
            this.gridPoints = gridPoints;
            this.turn = 0
            this.blocks = []
            this.pens = []
            let id = 0
            this.diagonal = true
            let f1 = Math.floor(Math.random() * 5)
            let f2 = Math.floor(Math.random() * 5)
            this.blocks = []
            for (let t = 0; t < 16; t++) {
                let subtiles = []
                for (let k = 0; k < 16; k++) {
                    let tile = new Tile((t * 32 * rat), (k * 32 * rat), 32 * rat, 32 * rat, getRandomColor() + '41')
                    tile.t = t
                    tile.k = k
                    // //////////////console.log(baseShipTiles)
                    let keys = Object.keys(baseShipTiles[t][k])
                    for (let f = 0; f < keys.length; f++) {
                        tile[keys[f]] = baseShipTiles[t][k][keys[f]]
                    }
                    //////////////console.log(tile)
                    if (tile.color == "#ff000044") {
                        //////////////console.log("h")
                        tile.medbay = 1
                    }
                    if (tile.empty == 1) {
                        //////////////console.log("h")
                        tile.color = "#FFFFFF44"
                    }
                    if (tile.engine == 1) {
                        //////////////console.log("h")
                        tile.color = "#ffaa0044"
                    }
                    if (tile.marked == 1) {
                        //////////////console.log("w")
                        tile.walkable = true
                    }
                    tile.holed = 0
                    // tile.color = "#00000041"
                    subtiles.push(tile)
                }
                this.blocks.push(subtiles)
            }
            this.createGrid()
            this.gridPoints = []

            for (let t = 0; t < this.blocks.length; t++) {
                for (let k = 0; k < this.blocks[t].length; k++) {
                    this.gridPoints.push(this.blocks[t][k])
                }
            }
            this.dirtyNodes = []
            this.roads = []
            this.roadtiles = []
            this.guests = []

            this.body = new Circle(256 * rat, 256 * rat, (256 * rat), "white")
            this.count = 0
            let tiles = []
            for (let t = 0; t < this.blocks.length; t++) {
                for (let k = 0; k < this.blocks[t].length; k++) {
                    if (this.blocks[t][k].marked == 1) {
                        this.blocks[t][k].integrity = 100
                        tiles.push(this.blocks[t][k])
                    }
                }
            }
            this.first = 0

            this.weapons = []
            this.doors = []
            for (let t = 0; t < doors.length; t++) {
                this.doors.push(new Door(doors[t].body.x, doors[t].body.y))
            }
            this.upgradeMenu = new UpgradeMenu()
            this.menuBattery = new BatteryMenu(9, this.upgradeMenu.levels)
        }
        dodgeRate() {
            if (this.first == 0) {
                return 0
            }
            let dodgerate = this.boosts[3] + this.boosts[6]
            // //console.log( 1-(1/(11-this.UI.systems[6].max)))
            if (this.hash['engine'].integrity < 100*(1-(1/(11-this.UI.systems[6].max)))) {
                dodgerate = 0
            }
            if (this.hash['helm'].integrity < 100*(1-(1/(11-this.UI.systems[3].max)))) {
                dodgerate = 0
            }
            if (this.boosts[3] == 0 || this.boosts[6] == 0) {
                dodgerate * 5
            }
            if (dodgerate == 0) {
                return 1
            } else {
                return .75 - (dodgerate / 40)
            }
        }
        draw() {

            if (start == 1) {
                canvas_context.drawImage(shipimage, 0, 0, 256, 256, stars.stars[this.star].body.x - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.y - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.radius * .5, stars.stars[this.star].body.radius * .5)
                // ////////console.log("hif")
            } else {

                for (let t = 0; t < this.blocks.length; t++) {
                    for (let k = 0; k < this.blocks[t].length; k++) {

                        //0 medbay, 1 weapons, 2 shield, 3 helm, 4 oxygen, 5 security, 6 engine, 7 special, 8 empty
                        if (this.blocks[t][k].doorway == 1) {
                            this.blocks[t][k].type2 = -1
                        } else {
                            this.blocks[t][k].type2 = Math.random()
                        }

                        if (this.blocks[t][k].medbay == 1) {
                            this.blocks[t][k].type = 0
                        } else if (this.blocks[t][k].weapon == 1) {
                            this.blocks[t][k].type = 1
                        } else if (this.blocks[t][k].shield == 1) {
                            this.blocks[t][k].type = 2
                        } else if (this.blocks[t][k].helm == 1) {
                            this.blocks[t][k].type = 3
                        } else if (this.blocks[t][k].oxygen == 1) {
                            this.blocks[t][k].type = 4
                        } else if (this.blocks[t][k].security == 1) {
                            this.blocks[t][k].type = 5
                        } else if (this.blocks[t][k].engine == 1) {
                            this.blocks[t][k].type = 6
                        } else if (this.blocks[t][k].special == 1) {
                            this.blocks[t][k].type = 7
                        } else if (this.blocks[t][k].empty == 1) {
                            this.blocks[t][k].type = 8
                        }
                    }
                }
                this.shield.draw()
                this.UI.draw()
                // enemy.UI.draw()
                // enemy.energy.draw()
                this.energy.draw()
                this.hrat = this.hull / this.maxhull
                this.healthbar = new RectangleR(180, 10, 250, 10, "transparent")
                this.healthbar.draw()
                canvas_context.drawImage(shiphealth, 0, 0, 250 * this.hrat, 10, this.healthbar.x, 10, 250 * this.hrat, 10)


                let bc = 0
                let ac = 0
                for (let t = 0; t < this.blocks.length; t++) {
                    for (let k = 0; k < this.blocks[t].length; k++) {
                        if (this.blocks[t][k].marked == 1) {
                            bc++
                            ac += this.blocks[t][k].air
                        }
                    }
                }
                ac /= bc
                this.ac = ac
                canvas_context.fillStyle = "white"
                canvas_context.font = "15px comic sans ms"
                canvas_context.fillText(Math.round(ac) + '% ship air', 90, 60)
                canvas_context.fillText(this.bombs + ' Bombs', 90, 100)
                canvas_context.fillText(Math.round((1 - this.dodgeRate()) * 100) + '% dodge', 90, 140)

                if (this.warn > 0) {
                    canvas_context.drawImage(warning, 0, 0, 40, 40, this.energy.box.x - 20, this.energy.box.y + this.energy.box.height - 80, 80, 80)
                    this.warn--
                }
                if (this.first == 0) {
                    let tiles = []
                    for (let t = 0; t < this.blocks.length; t++) {
                        for (let k = 0; k < this.blocks[t].length; k++) {
                            if (this.blocks[t][k].marked == 1) {
                                this.blocks[t][k].walkable = true
                                //////////////console.log("r")
                                tiles.push(this.blocks[t][k])
                            }
                        }
                    }
                    this.guys = [new Guy(tiles[0]), new Guy(tiles[34]), new Guy(tiles[91])]
                    // this.guys = [new Guy(tiles[10]), new Guy(tiles[12]), new Guy(tiles[14]), new Guy(tiles[16]), new Guy(tiles[20]), new Guy(tiles[11]), new Guy(tiles[13]), new Guy(tiles[15]), new Guy(tiles[17]), new Guy(tiles[15]), new Guy(tiles[17])]

                    this.first = 1


                    this.weapons = []
                    let wep1 = new Weapon(0)
                    let wep2 = new Weapon(1)
                    let wep3 = new Weapon(-1)
                    let wep4 = new Weapon(-1)


                    // wep2.name1 = "Basic"
                    // wep2.name2 = "Bomb"
                    // wep2.max = 1000
                    // wep2.damage = 90
                    // wep2.bomb = 1
                    // wep2.real = 1
                    // wep2.type = 1

                    this.weapons.push(wep1)
                    this.weapons.push(wep2)
                    this.weapons.push(wep3)
                    this.weapons.push(wep4)
                }
                // canvas_context.drawImage(shipimage, 0, 0, 256, 256, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)



                for (let t = 0; t < this.blocks.length; t++) {
                    for (let k = 0; k < this.blocks[t].length; k++) {
                        let hrat = this.blocks[t][k].integrity / 100
                        if (this.blocks[t][k].marked == 1) {
                            // this.blocks[t][k].color = `rgba(${255 - (255 * hrat)}, ${0 + (255 * hrat)}, ${80}, .3)`
                            this.blocks[t][k].draw()
                            this.blocks[t][k].hole()
                        }
                    }
                }
                for (let t = 0; t < this.guys.length; t++) {
                    if (this.guys[t].health <= 0) {
                        this.guys[t].tile.walkable = true
                        this.guys.splice(t, 1)
                    }
                }

                this.boosts = [0, 0, 0, 0, 0, 0, 0, 0, 0]
                //0 medbay, 1 weapons, 2 shield, 3 helm, 4 oxygen, 5 security, 6 engine, 7 special, 8 empty
                for (let t = 0; t < this.guys.length; t++) {
                    this.guys[t].draw()
                    this.guys[t].tile.integrity += this.guys[t].repair
                    if (this.guys[t].tile.integrity > 100) {
                        this.guys[t].tile.integrity = 100
                    }
                    // //////////////console.log(this.guys[t].tile)
                    if (this.guys[t].tile.medbay == 1) {
                        if (this.UI.systems[0].demand + this.UI.systems[0].fed > 0) {
                            this.guys[t].health += Math.min((this.UI.systems[0].demand + this.UI.systems[0].fed) / 2, 7)
                        }
                        if (this.guys[t].health > this.guys[t].maxhealth) {
                            this.guys[t].health = this.guys[t].maxhealth
                        }
                        this.boosts[0] += (this.guys[t].stats[0] * this.guys[t].skillslist[0] * Math.min((this.UI.systems[0].demand + this.guys[t].energy), this.UI.systems[0].max))
                        this.UI.systems[0].fed += this.guys[t].energy
                        for (let w = 0; w < vessel.guys.length; w++) {
                            if (vessel.guys[w].tile.medbay == 1) {
                                vessel.guys[w].skillslist[0] += .000003
                            }
                        }
                    } else if (this.guys[t].tile.weapon == 1) {
                        this.boosts[1] += (this.guys[t].stats[1] * this.guys[t].skillslist[1] * Math.min(this.guys[t].weaponPower + (this.UI.systems[1].demand + this.guys[t].energy), this.guys[t].weaponPower + this.UI.systems[1].max))
                        this.UI.systems[1].fed += this.guys[t].energy
                        for (let w = 0; w < vessel.guys.length; w++) {
                            if (vessel.guys[w].tile.weapon == 1) {
                                vessel.guys[w].skillslist[1] += .000003
                            }
                        }
                    } else if (this.guys[t].tile.shield == 1) {
                        this.boosts[2] += (this.guys[t].stats[2] * this.guys[t].skillslist[2] * Math.min(this.guys[t].shieldPower + (this.UI.systems[2].demand + this.guys[t].energy), this.guys[t].shieldPower + this.UI.systems[2].max))
                        this.UI.systems[2].fed += this.guys[t].energy
                              for (let w = 0; w < vessel.guys.length; w++) {
                            if (vessel.guys[w].tile.shield == 1) {
                                vessel.guys[w].skillslist[2] += .000003
                            }
                        }
                    } else if (this.guys[t].tile.helm == 1) {
                        this.boosts[3] += (this.guys[t].stats[3] * this.guys[t].skillslist[3] * Math.min(this.guys[t].helmPower + (this.UI.systems[3].demand + this.guys[t].energy), this.guys[t].helmPower + this.UI.systems[3].max))
                        this.UI.systems[3].fed += this.guys[t].energy
                        for (let w = 0; w < vessel.guys.length; w++) {
                            if (vessel.guys[w].tile.helm == 1) {
                                vessel.guys[w].skillslist[3] += .000003
                            }
                        }
                    } else if (this.guys[t].tile.oxygen == 1) {
                        this.boosts[4] += (this.guys[t].stats[4] * this.guys[t].skillslist[4] * Math.min((this.UI.systems[4].demand + this.guys[t].energy), this.UI.systems[4].max))
                        this.UI.systems[4].fed += this.guys[t].energy

                        for (let w = 0; w < vessel.guys.length; w++) {
                            if (vessel.guys[w].tile.oxygen == 1) {
                                if (vessel.ac < 95) {
                                    vessel.guys[w].skillslist[4] += .00051
                                }
                            }
                        }


                    } else if (this.guys[t].tile.security == 1) {
                        this.boosts[5] += (this.guys[t].stats[5] * this.guys[t].skillslist[5] * Math.min((this.UI.systems[5].demand + this.guys[t].energy), this.UI.systems[5].max))
                        this.UI.systems[5].fed += this.guys[t].energy

                        for (let w = 0; w < vessel.guys.length; w++) {
                            if (vessel.guys[w].tile.security == 1) {
                                vessel.guys[w].skillslist[5] += .00003
                            }
                        }


                    } else if (this.guys[t].tile.engine == 1) {
                        this.boosts[6] += (this.guys[t].stats[6] * this.guys[t].skillslist[6] * Math.min((this.UI.systems[6].demand + this.guys[t].energy), this.UI.systems[6].max))
                        this.UI.systems[6].fed += this.guys[t].energy
                        for (let w = 0; w < vessel.guys.length; w++) {
                            if (vessel.guys[w].tile.engine == 1) {
                                vessel.guys[w].skillslist[6] += .000003
                            }
                        }
                    } else if (this.guys[t].tile.special == 1) {
                        this.boosts[7] += (this.guys[t].stats[7] * this.guys[t].skillslist[7] * Math.min((this.UI.systems[7].demand + this.guys[t].energy), this.UI.systems[7].max))
                        this.UI.systems[7].fed += this.guys[t].energy
                        for (let w = 0; w < vessel.guys.length; w++) {
                            if (vessel.guys[w].tile.special == 1) {
                                vessel.guys[w].skillslist[7] += .00003
                            }
                        }
                    } else if (this.guys[t].tile.empty == 1) {
                        this.boosts[8] += (this.guys[t].stats[8] * this.guys[t].skillslist[8] * Math.min((this.UI.systems[8].demand + this.guys[t].energy), this.UI.systems[8].max))
                        this.UI.systems[8].fed += this.guys[t].energy
                        for (let w = 0; w < vessel.guys.length; w++) {
                            if (vessel.guys[w].tile.empty == 1) {
                                vessel.guys[w].skillslist[8] += .00003
                            }
                        }

                    }


                }


                let rooms = ["medbay", "weapon", "shield", "helm", "oxygen", "security", "engine", "special", "empty"]
                this.hash = {}
                for (let r = 0; r < rooms.length; r++) {
                    this.hash[rooms[r]] = {}
                    this.hash[rooms[r]].interior = 0
                    this.hash[rooms[r]].integrity = 0
                    this.hash[rooms[r]].air = 0
                    this.hash[rooms[r]].fire = 0
                }
                for (let t = 0; t < this.blocks.length; t++) {
                    for (let k = 0; k < this.blocks[t].length; k++) {
                        for (let r = 0; r < rooms.length; r++) {
                            if (this.blocks[t][k][rooms[r]] == 1) {
                                if (typeof this.hash[rooms[r]].interior == "undefined") {
                                    this.hash[rooms[r]].interior = 0
                                }
                                if (this.hash[rooms[r]].interior > 0) {
                                    this.hash[rooms[r]].interior += 1
                                    this.hash[rooms[r]].integrity += this.blocks[t][k].integrity
                                    this.hash[rooms[r]].air += this.blocks[t][k].air
                                    this.hash[rooms[r]].fire += this.blocks[t][k].fire
                                } else {
                                    this.hash[rooms[r]].interior = 1
                                    this.hash[rooms[r]].integrity = this.blocks[t][k].integrity
                                    this.hash[rooms[r]].air = this.blocks[t][k].air
                                    this.hash[rooms[r]].fire = this.blocks[t][k].fire
                                }
                            }
                        }
                    }
                }
                let kre = Object.keys(this.hash)
                for (let t = 0; t < kre.length; t++) {
                    this.hash[kre[t]].integrity /= this.hash[kre[t]].interior
                    this.hash[kre[t]].air /= this.hash[kre[t]].interior
                    this.hash[kre[t]].fire /= this.hash[kre[t]].fire //wtf
                }
                for (let t = 0; t < this.blocks.length; t++) {
                    for (let k = 0; k < this.blocks[t].length; k++) {
                        for (let r = 0; r < rooms.length; r++) {
                            if (this.blocks[t][k][rooms[r]] == 1) {
                                this.blocks[t][k].integrity = (this.hash[rooms[r]].integrity)
                                // this.blocks[t][k].air = ( this.hash[rooms[r]].air) 
                                // this.blocks[t][k].fire = ( this.hash[rooms[r]].fire) 
                            }
                        }
                    }
                }




                for (let w = 0; w < this.weapons.length; w++) {
                    if (this.hash["weapon"].integrity >=  100*(1-(1/(11-this.UI.systems[1].max)))) {
                        //////////////console.log( this.boosts[1])
                        this.weapons[w].charge += Math.sqrt(this.boosts[1])
                    }
                }

                if (this.hash["shield"].integrity >=  100*(1-(1/(11-this.UI.systems[2].max)))) {
                    this.shield.charge += Math.sqrt(this.boosts[2])
                }

                let oat = 0
                if (this.UI.systems[4].demand < 1 || !(this.hash["oxygen"].integrity >=  100*(1-(1/(11-this.UI.systems[4].max))))) {
                    oat = 1
                } else if (this.hash["oxygen"].integrity >=  100*(1-(1/(11-this.UI.systems[4].max)))) {
                    for (let t = 0; t < this.blocks.length; t++) {
                        for (let k = 0; k < this.blocks[t].length; k++) {
                            this.blocks[t][k].air += (this.boosts[4] + this.UI.systems[4].demand) / 10
                            if (this.blocks[t][k].air > 100) {
                                this.blocks[t][k].air = 100
                            }
                        }
                    }
                }
                for (let t = 0; t < this.blocks.length; t++) {
                    for (let k = 0; k < this.blocks[t].length; k++) {
                        this.blocks[t][k].newair = this.blocks[t][k].air
                        this.blocks[t][k].newfire = this.blocks[t][k].fire
                    }
                }

                for (let t = 0; t < this.blocks.length; t++) {
                    for (let k = 0; k < this.blocks[t].length; k++) {
                        if (oat == 1) {
                            if (this.blocks[t][k].marked == 1) {
                                this.blocks[t][k].air -= (this.guys.length / 180)
                                // this.blocks[t][k].air = Math.round(this.blocks[t][k].air)
                            }
                        }
                    }
                }

                this.pulse++

                for (let t = 0; t < this.blocks.length; t++) {
                    for (let k = 0; k < this.blocks[t].length; k++) {
                        this.blocks[t][k].newair = this.blocks[t][k].air
                        this.blocks[t][k].newfire = this.blocks[t][k].fire
                    }
                }


                for (let t = 0; t < this.blocks.length; t++) {
                    for (let k = 0; k < this.blocks[t].length; k++) {
                        if (this.blocks[t][k].onFire == 1) {
                            this.blocks[t][k].fire -= (100 - this.blocks[t][k].fire) / 50
                            if (this.blocks[t][k].fire <= 0) {
                                this.blocks[t][k].fire = 0
                                if (this.blocks[t][k].integrity > 30) {
                                    this.blocks[t][k].integrity -= .05
                                }

                                if (Math.random() < .01) {
                                    this.hull -= .5
                                }
                            }
                        }
                        this.blocks[t][k].fire = Math.max(100 - this.blocks[t][k].air, this.blocks[t][k].fire)
                    }
                }

                if (this.pulse % 2 == 3) {

                    // for (let t = this.blocks.length - 1; t >= 0; t--) {
                    //     for (let k = this.blocks[t].length - 1; k >= 0; k--) {
                    //         if (this.blocks[t][k].marked == 1) {
                    //             let n = this.neighbors(this.blocks[t][k])
                    //             for (let f = n.length - 1; f >= 0; f--) {
                    //                 if (n[f].marked == 1) {
                    //                     this.blocks[t][k].hair = (this.blocks[t][k].air + (n[f].air * 1)) * .5
                    //                     this.blocks[t][k].hfire = (this.blocks[t][k].fire + (n[f].fire * 999)) * .001
                    //                 }
                    //             }
                    //             for (let f = 0; f < n.length; f++) {
                    //                 if (n[f].marked == 1) {
                    //                     this.blocks[t][k].chfire = (this.blocks[t][k].air + (n[f].air * 1)) * .5
                    //                     this.blocks[t][k].chfire = (this.blocks[t][k].fire + (n[f].fire * 999)) * .001
                    //                 }
                    //             }
                    //             this.blocks[t][k].air = (this.blocks[t][k].hair + this.blocks[t][k].chair) * .5
                    //             this.blocks[t][k].air = (this.blocks[t][k].hfire + this.blocks[t][k].chfire) * .5
                    //         }
                    //     }
                    // }
                    // for (let t = 0; t < this.blocks.length; t++) {
                    //     for (let k = 0; k < this.blocks[t].length; k++) {
                    //         if (this.blocks[t][k].marked == 1) {
                    //             let n = this.neighbors(this.blocks[t][k])
                    //             for (let f = 0; f < n.length; f++) {
                    //                 if (n[f].marked == 1) {
                    //                     this.blocks[t][k].air = (this.blocks[t][k].air + (n[f].air * 1)) * .5
                    //                 }
                    //             }
                    //         }
                    //     }
                    // }

                } else {

                    for (let t = 0; t < this.blocks.length; t++) {
                        for (let k = 0; k < this.blocks[t].length; k++) {
                            if (this.blocks[t][k].marked == 1) {
                                let n = this.neighbors(this.blocks[t][k])
                                let sum = 0
                                let fsum = 0
                                for (let f = 0; f < n.length; f++) {
                                    if (n[f].marked == 1) {
                                        sum += (n[f].air * 1)
                                        fsum += (n[f].fire * 1)
                                    }
                                }
                                for (let f = n.length - 1; f >= 0; f--) {
                                    if (n[f].marked == 1) {
                                        sum += (n[f].air * 1)
                                        fsum += (n[f].fire * 1)
                                    }
                                }
                                sum /= n.length * 2
                                fsum /= n.length * 2
                                this.blocks[t][k].air = (this.blocks[t][k].air + sum) * .5
                                this.blocks[t][k].fire = ((this.blocks[t][k].fire * 39) + fsum) * .025
                            }
                        }
                    }

                    // for (let t = this.blocks.length - 1; t >= 0; t--) {
                    //     for (let k = this.blocks[t].length - 1; k >= 0; k--) {
                    //         if (this.blocks[t][k].marked == 1) {
                    //             let n = this.neighbors(this.blocks[t][k])
                    //             for (let f = n.length - 1; f >= 0; f--) {
                    //                 if (n[f].marked == 1) {
                    //                     this.blocks[t][k].air = (this.blocks[t][k].air + (n[f].air * 1)) * .5
                    //                 }
                    //             }
                    //         }
                    //     }
                    // }
                }


                for (let t = 0; t < this.blocks.length; t++) {
                    for (let k = 0; k < this.blocks[t].length; k++) {
                        // this.blocks[t][k].air = this.blocks[t][k].newair
                    }
                }
                for (let t = 0; t < this.blocks.length; t++) {
                    for (let k = 0; k < this.blocks[t].length; k++) {

                        if (this.blocks[t][k].holed == 1) {
                            this.blocks[t][k].air -= 7
                            let n = this.neighbors(this.blocks[t][k])
                            for (let f = 0; f < n.length; f++) {
                                if (n[f].marked == 1) {
                                    n[f].air -= 5
                                }
                            }
                        }
                        if (this.blocks[t][k].air <= 0) {
                            this.blocks[t][k].air = 0
                        }
                        if (this.blocks[t][k].fire <= 0) {
                            this.blocks[t][k].fire = 0
                        }
                        if (this.blocks[t][k].marked == 1) {
                            // canvas_context.fillStyle = "White"
                            // canvas_context.fillText(Math.round(this.blocks[t][k].fire), this.blocks[t][k].x + 16, this.blocks[t][k].y + 16)
                        }

                        // if (this.blocks[t][k].fire < 50) {
                        //     canvas_context.drawImage(fire, this.blocks[t][k].x, this.blocks[t][k].y)
                        // }
                        if (this.blocks[t][k].air < 50) {
                            if (this.blocks[t][k].marked == 1) {

                                let airwarn = new Rectangle(this.blocks[t][k].x, this.blocks[t][k].y, this.blocks[t][k].width, this.blocks[t][k].height, "#FF0000")
                                let o = this.blocks[t][k].air
                                if (o < 50) {
                                    airwarn.color = "#FF000011"
                                }
                                if (o < 45) {
                                    airwarn.color = "#FF000018"
                                }
                                if (o < 40) {
                                    airwarn.color = "#FF000025"
                                }
                                if (o < 35) {
                                    airwarn.color = "#FF000032"
                                }
                                if (o < 30) {
                                    airwarn.color = "#FF000042"
                                }
                                if (o < 25) {
                                    airwarn.color = "#FF000052"
                                }
                                if (o < 20) {
                                    airwarn.color = "#FF000062"
                                }
                                airwarn.draw()
                            }
                        }
                    }
                }

                for (let t = 0; t < this.weapons.length; t++) {
                    this.weapons[t].draw()
                }

                for (let t = 0; t < this.doors.length; t++) {
                    this.doors[t].draw()
                }

                this.upgradeMenu.draw()

            }

        }
        cleanDirty() {
            for (var i = 0; i < this.dirtyNodes.length; i++) {
                astar.cleanNode(this.dirtyNodes[i]);
            }
            this.dirtyNodes = [];
        }
        cleanLiar() {
            for (var i = 0; i < this.dirtyNodes.length; i++) {
                liarsastar.cleanNode(this.dirtyNodes[i]);
            }
            this.dirtyNodes = [];
        }
        cleanSlimy() {
            for (var i = 0; i < this.dirtyNodes.length; i++) {
                slimyastar.cleanNode(this.dirtyNodes[i]);
            }
            this.dirtyNodes = [];
        }
        cleanSlime() {
            for (var i = 0; i < this.dirtyNodes.length; i++) {
                slimemakingastar.cleanNode(this.dirtyNodes[i]);
            }
            this.dirtyNodes = [];
        }
        markDirty(node) {
            this.dirtyNodes.push(node);
        }
        neighborsOld(node) {

            var ret = [];
            var x = node.t;
            var y = node.k;
            var grid = this.blocks;
            this.diagonal = false
            // West
            if (grid[x - 1] && grid[x - 1][y]) {
                ret.push(grid[x - 1][y]);
            }

            // East
            if (grid[x + 1] && grid[x + 1][y]) {
                ret.push(grid[x + 1][y]);
            }

            // South
            if (grid[x] && grid[x][y - 1]) {
                ret.push(grid[x][y - 1]);
            }

            // North
            if (grid[x] && grid[x][y + 1]) {
                ret.push(grid[x][y + 1]);
            }

            if (this.diagonal) {
                // Southwest
                if (grid[x - 1] && grid[x - 1][y - 1]) {
                    ret.push(grid[x - 1][y - 1]);
                }

                // Southeast
                if (grid[x + 1] && grid[x + 1][y - 1]) {
                    ret.push(grid[x + 1][y - 1]);
                }

                // Northwest
                if (grid[x - 1] && grid[x - 1][y + 1]) {
                    ret.push(grid[x - 1][y + 1]);
                }

                // Northeast
                if (grid[x + 1] && grid[x + 1][y + 1]) {
                    ret.push(grid[x + 1][y + 1]);
                }
            }

            return ret;
        }
        neighbors(node) {

            var ret = [];
            var x = node.t;
            var y = node.k;
            var grid = this.blocks;
            this.diagonal = false
            // West



            if (grid[x - 1] && grid[x - 1][y]) {
                if (grid[x - 1][y].type == node.type || (node.type2 == -1 || grid[x - 1][y].type2 == -1)) {
                    if (grid[x - 1][y].marked == 1) {
                        ret.push(grid[x - 1][y]);
                    }
                }
            }

            // East
            if (grid[x + 1] && grid[x + 1][y]) {
                if (grid[x + 1][y].type == node.type || (node.type2 == -1 || grid[x + 1][y].type2 == -1)) {
                    if (grid[x + 1][y].marked == 1) {
                        ret.push(grid[x + 1][y]);
                    }
                }
            }

            // South
            if (grid[x] && grid[x][y - 1]) {
                if (grid[x][y - 1].type == node.type || (node.type2 == -1 || grid[x][y - 1].type2 == -1)) {
                    if (grid[x][y - 1].marked == 1) {
                        ret.push(grid[x][y - 1]);
                    }
                }
            }

            // North
            if (grid[x] && grid[x][y + 1]) {
                if (grid[x][y + 1].type == node.type || (node.type2 == -1 || grid[x][y + 1].type2 == -1)) {
                    if (grid[x][y + 1].marked == 1) {
                        ret.push(grid[x][y + 1]);
                    }
                }
            }

            if (this.diagonal) {
                // Southwest
                if (grid[x - 1] && grid[x - 1][y - 1]) {
                    ret.push(grid[x - 1][y - 1]);
                }

                // Southeast
                if (grid[x + 1] && grid[x + 1][y - 1]) {
                    ret.push(grid[x + 1][y - 1]);
                }

                // Northwest
                if (grid[x - 1] && grid[x - 1][y + 1]) {
                    ret.push(grid[x - 1][y + 1]);
                }

                // Northeast
                if (grid[x + 1] && grid[x + 1][y + 1]) {
                    ret.push(grid[x + 1][y + 1]);
                }
            }

            return ret;
        }
        createGrid() {
            // //gctx.drawImage(shipImage, 0, 0, shipImage.width/2, shipImage.height/2)
            var tempNode;
            var countNodes = 0;
            //gctx.beginPath();
            //gctx.lineWidth =  0;
            //gctx.strokeStyle = "transparent";
            //gctx.rect(0, 0, this.width, this.height);
            //gctx.stroke();

            for (var i = 0; i < this.width; i += NODESIZE) {
                gridPointsByPos[i] = [];

                for (var j = 0; j < this.height; j += NODESIZE) {
                    gridPointsByPos[i][j] = countNodes;
                    //here's the problem , need to set the walkability of the node without always being true...
                    ////////////////////////////////////////////////////////////////////////console.log(countNodes)
                    tempNode = new Tile(i, j, 10, 10, "tan", countNodes, NODESIZE, i, j, true);

                    // let cutOut = [0,1 ,2, 3, 10, 5,6,7, 8, 9, 10, 11, 12,13, 18, 19,20, 32,33,  26, 31, 39, 410, 45, 46, 52, 57,58,59,99, 112, 108, 95, 197, 198, 199, 205, 203, 2010, 236, 237, 238, 242, 243,2410, 216, 212, 229, 225, 210, 211, 223, 2210, 217, 218, 230, 231]
                    // for(let t = 0; t< 1000; t++){
                    //     if(t%13 == 0){
                    //         cutOut.push(t)
                    //     }
                    //     if((t-12)%13 == 0){
                    //         cutOut.push(t)
                    //     }
                    //     if((t-1)%13 == 0){
                    //         if(t>195){
                    //             cutOut.push(t)
                    //         }
                    //     }
                    //     if((t-11)%13 == 0){
                    //         if(t>195){
                    //             cutOut.push(t)
                    //         }
                    //     }
                    // }
                    // for(let t  = 0; t<bottle.crew.length; t++){
                    //     if(tempNode.isPointInside(bottle.crew[t].body)){
                    //         tempNode.walkable = false;
                    //     }
                    // }
                    // if (cutOut.includes(countNodes)){
                    //         tempNode.walkable = false;

                    // }
                    // if (wallSet.has(countNodes)) {
                    // //   ////////////////////////////////////////////////////////////////////////console.log("wallSet had countNodes!")
                    //   tempNode.walkable = false;
                    // }

                    // tempNode.drawNode();
                    tempNode.F = tempNode.getValueF();
                    this.gridPoints.push(tempNode);

                    countNodes++;

                }
            }

        }

    }

    class EnemyShip {
        constructor(type, level) {
            this.now = Date.now()
            this.type = type
            this.level = level
            this.ondeath = 0
            this.pulse = 0
            this.UI = new ShipUI(level)
            this.energy = new Battery(9 + Math.floor(this.level * .3), this.UI.systems)
            let l = Math.floor(this.level * .5)
            while (l > 0) {
                l--
                let x = Math.floor(Math.random() * this.UI.systems.length)
                if (this.UI.systems[x].max < 10) {
                    this.UI.systems[x].max += 1
                }
            }
            this.warn = 0
            this.scrap = 35
            this.bombs = 5 + Math.floor(this.level / 2)
            this.fuel = 10
            this.shield = new Shields()
            this.shield.state = this.UI.systems[2].max
            this.hull = 25 + (this.level * 7)
            this.maxhull = this.hull
            this.body = new Circle(1000, 360, 100, "red")
            this.weapons = []
            this.first = 0
            this.blocks = []
            for (let t = 0; t < 16; t++) {
                let subtiles = []
                for (let k = 0; k < 16; k++) {
                    let tile = new Tile(740 + (t * 32 * 1), 100 + (k * 32 * 1), 32 * 1, 32 * 1, "#FFFFFF" + '91')
                    tile.t = t
                    tile.k = k


                    if (this.type == 0) {
                        let keys = Object.keys(enemyship1[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship1[t][k][keys[f]]
                        }
                    } else if (this.type == 1) {
                        let keys = Object.keys(enemyship2[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship2[t][k][keys[f]]
                        }
                    }
                    tile.air = 100
                    tile.fire = 100
                    tile.newfire = 100
                    tile.onFire = 0
                    tile.xmom = (Math.random() - .5) * 30
                    tile.ymom = (Math.random() - .5) * 30

                    if (tile.engine > 0 || tile.medbay > 0 || tile.oxygen > 0 || tile.weapon > 0 || tile.helm > 0 || tile.security > 0 || tile.empty > 0 || tile.doorway > 0 || tile.shield > 0 || tile.empty > 0) {
                        tile.marked = 1
                        //////////////console.log("w")
                        tile.walkable = true
                        if (tile.empty > 0) {
                            tile.color = "#FFFFFF44"
                        }
                        if (tile.medbay > 0) {
                            tile.color = "#00ff0044"
                        }
                        if (tile.oxygen > 0) {
                            tile.color = "#0000ff44"
                        }
                        if (tile.weapon > 0) {
                            tile.color = "#ff00FF44"
                        }
                        if (tile.helm > 0) {
                            tile.color = "#ffff0044"
                        }
                        if (tile.security > 0) {
                            tile.color = "#88888844"
                        }
                        if (tile.shield > 0) {
                            tile.color = "#00ffff44"
                        }
                        if (tile.engine > 0) {
                            tile.color = "#FFAA0044"
                        }
                    } else {
                        tile.marked = -1
                        //////////////console.log("w")
                        tile.walkable = false

                    }
                    tile.holed = 0

                    subtiles.push(tile)
                }
                this.blocks.push(subtiles)
            }


            // for (let t = 0; t < this.blocks.length; t++) {
            //     for (let k = 0; k < this.blocks[t].length; k++) {
            //         if (this.blocks[t][k].doesPerimeterTouch(this.body)) {
            //             this.blocks[t][k].marked = 1
            //         }
            //     }
            // }

            this.createGrid()
            this.gridPoints = []

            for (let t = 0; t < this.blocks.length; t++) {
                for (let k = 0; k < this.blocks[t].length; k++) {
                    this.gridPoints.push(this.blocks[t][k])
                }
            }
            this.dirtyNodes = []
            this.roads = []
            this.roadtiles = []
            this.guests = []

            this.count = 0
            let tiles = []
            for (let t = 0; t < this.blocks.length; t++) {
                for (let k = 0; k < this.blocks[t].length; k++) {
                    if (this.blocks[t][k].marked == 1) {
                        this.blocks[t][k].integrity = 100
                        tiles.push(this.blocks[t][k])
                    }
                }
            }
            this.first = 0
            this.doors = []

            if (this.type == 0) {
                for (let t = 0; t < enemyship1doors.length; t++) {
                    this.doors.push(new Door(enemyship1doors[t].body.x, enemyship1doors[t].body.y))
                }
            } else if (this.type == 1) {
                for (let t = 0; t < enemyship2doors.length; t++) {
                    this.doors.push(new Door(enemyship2doors[t].body.x, enemyship2doors[t].body.y))
                }
            }
            this.weapons = []

            this.state = 0
        }
        dodgeRate() {
            if (this.first == 0) {
                return 0
            }
            let dodgerate = this.boosts[3] + this.boosts[6]

            if (this.hash['engine'].integrity <  100*(1-(1/(11-this.UI.systems[6].max))) || this.boosts[3] == 0) {
                dodgerate = 0
            }
            if (this.hash['helm'].integrity < 100*(1-(1/(11-this.UI.systems[3].max))) || this.boosts[6] == 0  ) { 
                dodgerate = 0
            }
            if (dodgerate == 0) {
                return 1
            } else {
                return Math.max(.75 - (dodgerate / 40))
            }
        }
        cleanDirty() {
            for (var i = 0; i < this.dirtyNodes.length; i++) {
                astar.cleanNode(this.dirtyNodes[i]);
            }
            this.dirtyNodes = [];
        }
        cleanLiar() {
            for (var i = 0; i < this.dirtyNodes.length; i++) {
                liarsastar.cleanNode(this.dirtyNodes[i]);
            }
            this.dirtyNodes = [];
        }
        cleanSlimy() {
            for (var i = 0; i < this.dirtyNodes.length; i++) {
                slimyastar.cleanNode(this.dirtyNodes[i]);
            }
            this.dirtyNodes = [];
        }
        cleanSlime() {
            for (var i = 0; i < this.dirtyNodes.length; i++) {
                slimemakingastar.cleanNode(this.dirtyNodes[i]);
            }
            this.dirtyNodes = [];
        }
        markDirty(node) {
            this.dirtyNodes.push(node);
        }
        neighbors(node) {

            var ret = [];
            var x = node.t;
            var y = node.k;
            var grid = this.blocks;
            this.diagonal = false
            // West



            if (grid[x - 1] && grid[x - 1][y]) {
                if (grid[x - 1][y].type == node.type || (node.type2 == -1 || grid[x - 1][y].type2 == -1)) {
                    if (grid[x - 1][y].marked == 1) {
                        ret.push(grid[x - 1][y]);
                    }
                }
            }

            // East
            if (grid[x + 1] && grid[x + 1][y]) {
                if (grid[x + 1][y].type == node.type || (node.type2 == -1 || grid[x + 1][y].type2 == -1)) {
                    if (grid[x + 1][y].marked == 1) {
                        ret.push(grid[x + 1][y]);
                    }
                }
            }

            // South
            if (grid[x] && grid[x][y - 1]) {
                if (grid[x][y - 1].type == node.type || (node.type2 == -1 || grid[x][y - 1].type2 == -1)) {
                    if (grid[x][y - 1].marked == 1) {
                        ret.push(grid[x][y - 1]);
                    }
                }
            }

            // North
            if (grid[x] && grid[x][y + 1]) {
                if (grid[x][y + 1].type == node.type || (node.type2 == -1 || grid[x][y + 1].type2 == -1)) {
                    if (grid[x][y + 1].marked == 1) {
                        ret.push(grid[x][y + 1]);
                    }
                }
            }

            //////////console.log(ret.length)
            return ret;
        }
        createGrid() {
            var tempNode;
            var countNodes = 0;
            for (var i = 0; i < this.width; i += NODESIZE) {
                gridPointsByPos[i] = [];
                for (var j = 0; j < this.height; j += NODESIZE) {
                    gridPointsByPos[i][j] = countNodes;
                    tempNode = new Tile(i, j, 10, 10, "tan", countNodes, NODESIZE, i, j, true);
                    tempNode.F = tempNode.getValueF();
                    this.gridPoints.push(tempNode);
                    countNodes++;
                }
            }
        }

        draw() {
            if (Date.now() - this.now > (1000 * 3 * 60) + (this.level * 1000)) {
                vessel.fuel--
                start = 1
                enemy = new EnemyShip(Math.floor(Math.random() * 2), this.level + 1)
            } else {
                canvas_context.fillStyle = "white"
                canvas_context.font = "10px comic sans ms"
                canvas_context.fillText("Powering leap: " + Math.floor(((1000 * 3 * 60 + (this.level * 1000)) - Math.floor(Date.now() - this.now)) / 1000), 800, 50)
            }

            let rooms = ["medbay", "weapon", "shield", "helm", "oxygen", "security", "engine", "special", "empty"]


            this.hrat = this.hull / this.maxhull
            this.healthbar = new RectangleR(800, 10, 250, 10, "transparent")
            this.healthbar.draw()
            canvas_context.drawImage(shiphealth, 0, 0, 250 * this.hrat, 10, this.healthbar.x, 10, 250 * this.hrat, 10)




            for (let t = 0; t < this.blocks.length; t++) {
                for (let k = 0; k < this.blocks[t].length; k++) {

                    //0 medbay, 1 weapons, 2 shield, 3 helm, 4 oxygen, 5 security, 6 engine, 7 special, 8 empty
                    if (this.blocks[t][k].doorway == 1) {
                        this.blocks[t][k].type2 = -1
                    } else {
                        this.blocks[t][k].type2 = Math.random()
                    }

                    if (this.blocks[t][k].medbay == 1) {
                        this.blocks[t][k].type = 0
                    } else if (this.blocks[t][k].weapon == 1) {
                        this.blocks[t][k].type = 1
                    } else if (this.blocks[t][k].shield == 1) {
                        this.blocks[t][k].type = 2
                    } else if (this.blocks[t][k].helm == 1) {
                        this.blocks[t][k].type = 3
                    } else if (this.blocks[t][k].oxygen == 1) {
                        this.blocks[t][k].type = 4
                    } else if (this.blocks[t][k].security == 1) {
                        this.blocks[t][k].type = 5
                    } else if (this.blocks[t][k].engine == 1) {
                        this.blocks[t][k].type = 6
                    } else if (this.blocks[t][k].special == 1) {
                        this.blocks[t][k].type = 7
                    } else if (this.blocks[t][k].empty == 1) {
                        this.blocks[t][k].type = 8
                    }
                }
            }
            this.shield.draw()
            if (this.first == 0) {
                this.now = Date.now()
                let tiles = []
                for (let t = 0; t < this.blocks.length; t++) {
                    for (let k = 0; k < this.blocks[t].length; k++) {
                        if (this.blocks[t][k].marked == 1) {
                            this.blocks[t][k].walkable = true
                            //////////////console.log("r")
                            tiles.push(this.blocks[t][k])
                        }
                    }
                }
                if (this.level < 6) {
                    this.guys = [new Guy(tiles[10])]
                } else if (this.level < 12) {
                    this.guys = [new Guy(tiles[10]), new Guy(tiles[12])]
                } else if (this.level < 18) {
                    this.guys = [new Guy(tiles[10]), new Guy(tiles[12]), new Guy(tiles[14])]
                } else if (this.level < 24) {
                    this.guys = [new Guy(tiles[10]), new Guy(tiles[12]), new Guy(tiles[14]), new Guy(tiles[16])]
                } else {
                    this.guys = [new Guy(tiles[10]), new Guy(tiles[12]), new Guy(tiles[14]), new Guy(tiles[16]), new Guy(tiles[20])]

                }

                if (Math.random() < this.level / 50) {
                    this.guys.push(new Guy(tiles[0]))
                }
                if (Math.random() < this.level / 100) {
                    this.guys.push(new Guy(tiles[0]))
                }
                if (Math.random() < this.level / 150) {
                    this.guys.push(new Guy(tiles[0]))
                }
                if (Math.random() < this.level / 200) {
                    this.guys.push(new Guy(tiles[0]))
                }

                // this.guys = [new Guy(tiles[10]), new Guy(tiles[12]), new Guy(tiles[14]), new Guy(tiles[16]), new Guy(tiles[20]), new Guy(tiles[11]), new Guy(tiles[13]), new Guy(tiles[15]), new Guy(tiles[17])]



                // this.guys = []
                this.first = 1
                this.weapons = []
                if (this.level < 5) {
                    let wep1 = new Weapon(0)
                    let wep2 = new Weapon(-1)
                    let wep3 = new Weapon(-1)
                    let wep4 = new Weapon(-1)
                    this.weapons.push(wep1)
                    this.weapons.push(wep2)
                    this.weapons.push(wep3)
                    this.weapons.push(wep4)
                    if (Math.random() < .05) {
                        let wep5 = new Weapon(Math.floor(Math.random() * 10))
                        this.weapons.push(wep5)
                    }
                } else if (this.level < 10) {

                    let wep1 = new Weapon(0)
                    let wep2 = new Weapon(1)
                    let wep3 = new Weapon(-1)
                    let wep4 = new Weapon(-1)
                    this.weapons.push(wep1)
                    this.weapons.push(wep2)
                    this.weapons.push(wep3)
                    this.weapons.push(wep4)
                    if (Math.random() < .1) {
                        let wep5 = new Weapon(Math.floor(Math.random() * 10))
                        this.weapons.push(wep5)
                    }
                } else if (this.level < 15) {

                    let wep1 = new Weapon(0)
                    let wep2 = new Weapon(1)
                    let wep3 = new Weapon(0)
                    let wep4 = new Weapon(-1)
                    this.weapons.push(wep1)
                    this.weapons.push(wep2)
                    this.weapons.push(wep3)
                    this.weapons.push(wep4)
                    if (Math.random() < .5) {
                        let wep5 = new Weapon(Math.floor(Math.random() * 10))
                        this.weapons.push(wep5)
                    }
                } else {

                    let wep1 = new Weapon(2)
                    let wep2 = new Weapon(1)
                    let wep3 = new Weapon(0)
                    let wep4 = new Weapon(Math.floor(Math.random() * 2))
                    this.weapons.push(wep1)
                    this.weapons.push(wep2)
                    this.weapons.push(wep3)
                    this.weapons.push(wep4)
                    if (Math.random() < .9) {
                        let wep5 = new Weapon(Math.floor(Math.random() * 10))
                        this.weapons.push(wep5)
                    }
                    if (Math.random() < this.level / 100) {
                        let wep5 = new Weapon(Math.floor(Math.random() * 10))
                        this.weapons.push(wep5)
                    }
                    if (Math.random() < this.level / 500) {
                        let wep5 = new Weapon(Math.floor(Math.random() * 10))
                        this.weapons.push(wep5)
                    }
                }
            }
            // this.body.draw()
            for (let t = 0; t < this.blocks.length; t++) {
                for (let k = 0; k < this.blocks[t].length; k++) {
                    if (this.blocks[t][k].marked == 1) {
                        this.blocks[t][k].draw()
                    }
                    if (this.hull <= 0) {
                        this.shield.state = 0
                        // ////////console.log(this.blocks)
                        // return
                        this.guys = []
                        this.blocks[t][k].move()
                    }
                }
            }


            // canvas_context.globalAlpha = .5
            // canvas_context.drawImage(ximage, 0, 0, 512, 512, this.body.x - (this.body.radius*( 5.12/2)) -4 , this.body.y - (this.body.radius*( 5.12/2)) -4, this.body.radius * 5.12, this.body.radius *  5.12)

            // canvas_context.globalAlpha = 1


            for (let t = 0; t < this.blocks.length; t++) {
                for (let k = 0; k < this.blocks[t].length; k++) {
                    let hrat = this.blocks[t][k].integrity / 100
                    if (this.blocks[t][k].marked == 1) {
                        this.blocks[t][k].hole()
                        // this.blocks[t][k].color = `rgba(${255 - (255 * hrat)}, ${0 + (255 * hrat)}, ${80}, .3)`
                    }
                    // this.blocks[t][k].draw()
                }
            }
            for (let t = 0; t < this.guys.length; t++) {
                if (this.guys[t].health <= 0) {
                    this.guys[t].tile.walkable = true
                    this.guys.splice(t, 1)
                }
            }

            this.boosts = [0, 0, 0, 0, 0, 0, 0, 0, 0]
            //0 medbay, 1 weapons, 2 shield, 3 helm, 4 oxygen, 5 security, 6 engine, 7 special, 8 empty
            for (let t = 0; t < this.guys.length; t++) {
                // this.guys[t].draw()
                this.guys[t].tile.integrity += this.guys[t].repair
                if (this.guys[t].tile.integrity > 100) {
                    this.guys[t].tile.integrity = 100
                }
                // //////////////console.log(this.guys[t].tile)
                if (this.guys[t].tile.medbay == 1) {
                    if (this.UI.systems[0].demand + this.UI.systems[0].fed > 0) {
                        this.guys[t].health += Math.min((this.UI.systems[0].demand + this.UI.systems[0].fed) / 2, 7)
                    }
                    if (this.guys[t].health > this.guys[t].maxhealth) {
                        this.guys[t].health = this.guys[t].maxhealth
                    }
                    this.boosts[0] += (this.guys[t].stats[0] * this.guys[t].skillslist[0] * Math.min((this.UI.systems[0].demand + this.guys[t].energy), this.UI.systems[0].max))
                    this.UI.systems[0].fed += this.guys[t].energy
                } if (this.guys[t].tile.weapon == 1) {
                    // this.UI.systems[1].demand = 1
                    this.boosts[1] += (this.guys[t].stats[1] * this.guys[t].skillslist[1] * Math.min(this.guys[t].weaponPower + (this.UI.systems[1].demand + this.guys[t].energy), this.guys[t].weaponPower + this.UI.systems[1].max))
                    this.UI.systems[1].fed += this.guys[t].energy
                    // ////////////console.log(Math.min((this.UI.systems[1].demand + this.guys[t].energy), this.UI.systems[1].max))
                } if (this.guys[t].tile.shield == 1) {
                    // this.UI.systems[2].demand = 1
                    this.boosts[2] += (this.guys[t].stats[2] * this.guys[t].skillslist[2] * Math.min(this.guys[t].shieldPower + (this.UI.systems[2].demand + this.guys[t].energy), this.guys[t].shieldPower + this.UI.systems[2].max))
                    this.UI.systems[2].fed += this.guys[t].energy
                } if (this.guys[t].tile.helm == 1) {
                    this.boosts[3] += (this.guys[t].stats[3] * this.guys[t].skillslist[3] * Math.min(this.guys[t].helmPower + (this.UI.systems[3].demand + this.guys[t].energy), this.guys[t].helmPower + this.UI.systems[3].max))
                    this.UI.systems[3].fed += this.guys[t].energy
                } if (this.guys[t].tile.oxygen == 1) {
                    this.boosts[4] += (this.guys[t].stats[4] * this.guys[t].skillslist[4] * Math.min((this.UI.systems[4].demand + this.guys[t].energy), this.UI.systems[4].max))
                    this.UI.systems[4].fed += this.guys[t].energy
                } if (this.guys[t].tile.security == 1) {
                    this.boosts[5] += (this.guys[t].stats[5] * this.guys[t].skillslist[5] * Math.min((this.UI.systems[5].demand + this.guys[t].energy), this.UI.systems[5].max))
                    this.UI.systems[5].fed += this.guys[t].energy
                } if (this.guys[t].tile.engine == 1) {
                    this.boosts[6] += (this.guys[t].stats[6] * this.guys[t].skillslist[6] * Math.min((this.UI.systems[6].demand + this.guys[t].energy), this.UI.systems[6].max))
                    this.UI.systems[6].fed += this.guys[t].energy
                } if (this.guys[t].tile.special == 1) {
                    this.boosts[7] += (this.guys[t].stats[7] * this.guys[t].skillslist[7] * Math.min((this.UI.systems[7].demand + this.guys[t].energy), this.UI.systems[7].max))
                    this.UI.systems[7].fed += this.guys[t].energy
                } if (this.guys[t].tile.empty == 1) {
                    this.boosts[8] += (this.guys[t].stats[8] * this.guys[t].skillslist[8] * Math.min((this.UI.systems[8].demand + this.guys[t].energy), this.UI.systems[8].max))
                    this.UI.systems[8].fed += this.guys[t].energy
                }


            }
            ////////////console.log(this.boosts[2])

            this.hash = {}
            for (let r = 0; r < rooms.length; r++) {
                this.hash[rooms[r]] = {}
                this.hash[rooms[r]].interior = 0
                this.hash[rooms[r]].integrity = 0
                this.hash[rooms[r]].xmom = 0
                this.hash[rooms[r]].yomo = 0
                this.hash[rooms[r]].air = 0
                this.hash[rooms[r]].occupied = 0
                this.hash[rooms[r]].fire = 0
            }
            for (let t = 0; t < this.blocks.length; t++) {
                for (let k = 0; k < this.blocks[t].length; k++) {
                    for (let r = 0; r < rooms.length; r++) {
                        if (this.blocks[t][k][rooms[r]] == 1) {
                            if (typeof this.hash[rooms[r]].interior == "undefined") {
                                this.hash[rooms[r]].interior = 0
                            }
                            if (this.hash[rooms[r]].interior > 0) {
                                this.hash[rooms[r]].interior += 1
                                this.hash[rooms[r]].integrity += this.blocks[t][k].integrity
                                this.hash[rooms[r]].xmom += this.blocks[t][k].xmom
                                this.hash[rooms[r]].ymom += this.blocks[t][k].ymom
                                this.hash[rooms[r]].air += this.blocks[t][k].air
                                this.hash[rooms[r]].fire += this.blocks[t][k].fire
                            } else {
                                this.hash[rooms[r]].interior = 1
                                this.hash[rooms[r]].integrity = this.blocks[t][k].integrity
                                this.hash[rooms[r]].xmom = this.blocks[t][k].xmom
                                this.hash[rooms[r]].ymom = this.blocks[t][k].ymom
                                this.hash[rooms[r]].air = this.blocks[t][k].air
                                this.hash[rooms[r]].fire = this.blocks[t][k].fire
                            }
                            if (this.blocks[t][k].walkable == false) {
                                if (this.blocks[t][k].marked == 1) {
                                    this.hash[rooms[r]].occupied = 1
                                }
                            }
                        }
                    }
                }
            }
            for (let r = 0; r < rooms.length; r++) {
                if (this.hash[rooms[r]].occupied == 0) {
                    // ////console.log("hit")
                    if (rooms[r] == "shield") {
                        if (this.shield.state >= this.UI.systems[r].demand + this.UI.systems[r].fed) {
                            continue
                        }
                    }
                    if (rooms[r] == "oxygen") {
                        if (this.UI.systems[r].sto == 1) {
                            continue
                        }
                    }
                    this.UI.systems[r].sto--
                    if (this.UI.systems[r].sto <= 0) {
                        this.UI.systems[r].sto = 0
                    }
                }
            }


            let kre = Object.keys(this.hash)
            for (let t = 0; t < kre.length; t++) {
                this.hash[kre[t]].integrity /= this.hash[kre[t]].interior
                this.hash[kre[t]].xmom /= this.hash[kre[t]].interior
                this.hash[kre[t]].ymom /= this.hash[kre[t]].interior
                this.hash[kre[t]].air /= this.hash[kre[t]].interior
                this.hash[kre[t]].fire /= this.hash[kre[t]].interior
            }
            for (let t = 0; t < this.blocks.length; t++) {
                for (let k = 0; k < this.blocks[t].length; k++) {
                    for (let r = 0; r < rooms.length; r++) {
                        if (this.blocks[t][k][rooms[r]] == 1) {
                            this.blocks[t][k].integrity = ((this.hash[rooms[r]].integrity) + (this.blocks[t][k].integrity * 99)) * .01
                            if (this.blocks[t][k].empty == 1 && this.hull > 0) {

                                this.blocks[t][k].xmom = (Math.random() - .5) * 40
                                this.blocks[t][k].ymom = (Math.random() - .5) * 40
                            } else {
                                if (this.blocks[t][k].empty !== 1) {

                                    this.blocks[t][k].xmom = ((this.hash[rooms[r]].xmom))
                                    this.blocks[t][k].ymom = ((this.hash[rooms[r]].ymom))
                                }

                            }
                            // this.blocks[t][k].air = ( this.hash[rooms[r]].air) 
                        }
                    }
                }
            }

            this.medflag = 0

            for (let t = 0; t < this.guys.length; t++) {
                if (this.guys[t].health < this.guys[t].maxhealth * .25) {
                    this.medflag = 1
                }
            }

            if (Math.random() < .14) { //.14
                for (let t = 0; t < this.guys.length; t++) {
                    if (this.guys[t].cound != 0) { //.14 connect
                        continue
                    }
                    this.wet = 0
                    for (let t = 0; t < this.blocks.length; t++) {
                        for (let k = 0; k < this.blocks[t].length; k++) {
                            if (this.blocks[t][k].holed == 1 || this.blocks[t][k].onFire == 1) {
                                this.wet = 1
                            }
                        }
                    }
                    let tiles = []
                    let hole = 0
                    let holecount = 0
                    let fire = 0
                    let firecount = 0
                    let bc = 0
                    let ac = 0
                    for (let t = 0; t < this.blocks.length; t++) {
                        for (let k = 0; k < this.blocks[t].length; k++) {
                            if (this.blocks[t][k].marked == 1) {
                                bc++
                                ac += this.blocks[t][k].air
                            }
                        }
                    }
                    ac /= bc
                    this.ac = ac

                    // ////////console.log(ac)
                    for (let t = 0; t < this.blocks.length; t++) {
                        for (let k = 0; k < this.blocks[t].length; k++) {
                            if (this.wet == 1) {
                                if (this.blocks[t][k].holed == 1) {
                                    hole = 1
                                    holecount++
                                    //         tiles.push(this.blocks[t][k])
                                }
                                if (this.blocks[t][k].onFire == 1) {
                                    fire = 1
                                    firecount++
                                    //         tiles.push(this.blocks[t][k])
                                }
                            }
                            // } else {
                            if (this.blocks[t][k].marked == 1) {
                                tiles.push(this.blocks[t][k])
                            }
                            // }
                        }
                    }
                    if (ac < 75) {
                        this.state = 1
                    } else {
                        this.state = 0
                    }
                    let tile

                    this.energy.balance()
                    if (this.guys[t].health < this.guys[t].maxhealth * .25) {
                        if (this.UI.systems[0].demand < this.UI.systems[0].max) {
                            if (this.energy.power > 0) {
                                this.UI.systems[0].demand++
                                this.UI.systems[0].sto = this.UI.systems[0].demand
                            }
                        }

                        let priorities = ['medbay', 'medbay', 'medbay', 'medbay', 'medbay', 'medbay', 'medbay', 'medbay', 'medbay', 'medbay', 'medbay', 'medbay', 'medbay', 'medbay', 'medbay']
                        tile = tiles[Math.floor(Math.random() * tiles.length)]
                        let j = 0
                        let kiles = []
                        for (let g = 0; g < this.guys.length; g++) {
                            kiles.push(this.guys[g].tile)
                        }

                        while (!(tile[priorities[t]] == 1 && !kiles.includes(tile))) {
                            j++
                            if (j > 1000) {
                                break
                            }
                            tile = tiles[Math.floor(Math.random() * tiles.length)]
                        }
                        if (this.guys[t].tile[priorities[t]] == 1) {
                            tile = this.guys[t].tile
                            if (priorities[t] != "holed") {
                                let index = rooms.indexOf(priorities[t])
                                if (this.UI.systems[index].demand + this.UI.systems[index].fed < this.UI.systems[index].max) {
                                    if (this.energy.power > 0) {
                                        this.UI.systems[index].demand++
                                        this.UI.systems[index].sto = this.UI.systems[index].demand
                                    }
                                }
                            }
                        }

                    } else {
                        if (this.medflag == 0) {
                            if (this.UI.systems[0].demand > 0) {
                                this.UI.systems[0].demand--
                            }
                        }

                        if (fire == 1) {
                            if (this.state == 0) {
                                let priorities = ['weapon', 'shield', 'helm', 'weapon', 'shield', 'engine', 'helm', 'weapon', 'shield', 'engine', 'helm']
                                for (let h = 0; h < firecount; h++) {
                                    priorities.unshift("onFire")
                                }
                                tile = tiles[Math.floor(Math.random() * tiles.length)]
                                let j = 0
                                let kiles = []
                                for (let g = 0; g < this.guys.length; g++) {
                                    kiles.push(this.guys[g].tile)
                                }

                                while (!(tile[priorities[t]] == 1 && !kiles.includes(tile))) {
                                    j++
                                    if (j > 1000) {
                                        break
                                    }
                                    tile = tiles[Math.floor(Math.random() * tiles.length)]
                                }
                                if (this.guys[t].tile[priorities[t]] == 1) {
                                    tile = this.guys[t].tile
                                    if (priorities[t] != "onFire") {
                                        let index = rooms.indexOf(priorities[t])
                                        if (this.UI.systems[index].demand + this.UI.systems[index].fed < this.UI.systems[index].max) {
                                            if (this.energy.power > 0) {
                                                ////console.log(priorities[t])
                                                this.UI.systems[index].demand++
                                                this.UI.systems[index].sto = this.UI.systems[index].demand
                                            }
                                        }
                                    }
                                }


                            } else if (this.state == 1) {

                                let priorities = ["oxygen", 'weapon', 'shield', 'helm', 'weapon', 'shield', 'engine', 'helm', 'weapon', 'shield', 'engine', 'helm']
                                for (let h = 0; h < firecount; h++) {
                                    priorities.unshift("onFire")
                                }
                                tile = tiles[Math.floor(Math.random() * tiles.length)]
                                let j = 0
                                let kiles = []
                                for (let g = 0; g < this.guys.length; g++) {
                                    kiles.push(this.guys[g].tile)
                                }

                                while (!(tile[priorities[t]] == 1 && !kiles.includes(tile))) {
                                    j++
                                    if (j > 1000) {
                                        break
                                    }
                                    tile = tiles[Math.floor(Math.random() * tiles.length)]
                                }

                                if (this.guys[t].tile[priorities[t]] == 1) {
                                    tile = this.guys[t].tile
                                    if (priorities[t] != "onFire") {
                                        let index = rooms.indexOf(priorities[t])
                                        if (this.UI.systems[index].demand + this.UI.systems[index].fed < this.UI.systems[index].max) {
                                            if (this.energy.power > 0) {
                                                ////console.log(priorities[t])
                                                this.UI.systems[index].demand++
                                                this.UI.systems[index].sto = this.UI.systems[index].demand
                                            }
                                        }
                                    }
                                }

                            }

                        } else if (hole == 1) {
                            if (this.state == 0) {
                                let priorities = ['weapon', 'shield', 'helm', 'weapon', 'shield', 'engine', 'helm', 'weapon', 'shield', 'engine', 'helm']
                                for (let h = 0; h < holecount; h++) {
                                    priorities.unshift("holed")
                                }
                                tile = tiles[Math.floor(Math.random() * tiles.length)]
                                let j = 0
                                let kiles = []
                                for (let g = 0; g < this.guys.length; g++) {
                                    kiles.push(this.guys[g].tile)
                                }

                                while (!(tile[priorities[t]] == 1 && !kiles.includes(tile))) {
                                    j++
                                    if (j > 1000) {
                                        break
                                    }
                                    tile = tiles[Math.floor(Math.random() * tiles.length)]
                                }
                                if (this.guys[t].tile[priorities[t]] == 1) {
                                    tile = this.guys[t].tile
                                    if (priorities[t] != "holed") {
                                        let index = rooms.indexOf(priorities[t])
                                        if (this.UI.systems[index].demand + this.UI.systems[index].fed < this.UI.systems[index].max) {
                                            if (this.energy.power > 0) {
                                                ////console.log(priorities[t])
                                                this.UI.systems[index].demand++
                                                this.UI.systems[index].sto = this.UI.systems[index].demand
                                            }
                                        }
                                    }
                                }


                            } else if (this.state == 1) {

                                let priorities = ["oxygen", 'weapon', 'shield', 'helm', 'weapon', 'shield', 'engine', 'helm', 'weapon', 'shield', 'engine', 'helm']
                                for (let h = 0; h < holecount; h++) {
                                    priorities.unshift("holed")
                                }
                                tile = tiles[Math.floor(Math.random() * tiles.length)]
                                let j = 0
                                let kiles = []
                                for (let g = 0; g < this.guys.length; g++) {
                                    kiles.push(this.guys[g].tile)
                                }

                                while (!(tile[priorities[t]] == 1 && !kiles.includes(tile))) {
                                    j++
                                    if (j > 1000) {
                                        break
                                    }
                                    tile = tiles[Math.floor(Math.random() * tiles.length)]
                                }

                                if (this.guys[t].tile[priorities[t]] == 1) {
                                    tile = this.guys[t].tile
                                    if (priorities[t] != "holed") {
                                        let index = rooms.indexOf(priorities[t])
                                        if (this.UI.systems[index].demand + this.UI.systems[index].fed < this.UI.systems[index].max) {
                                            if (this.energy.power > 0) {
                                                ////console.log(priorities[t])
                                                this.UI.systems[index].demand++
                                                this.UI.systems[index].sto = this.UI.systems[index].demand
                                            }
                                        }
                                    }
                                }

                            }

                        } else {

                            if (this.state == 0) {
                                let priorities = ['weapon', 'shield', 'helm', 'weapon', "shield", 'engine', 'helm', 'weapon', 'shield', 'engine', 'helm']
                                tile = tiles[Math.floor(Math.random() * tiles.length)]
                                let j = 0
                                let kiles = []
                                for (let g = 0; g < this.guys.length; g++) {
                                    kiles.push(this.guys[g].tile)
                                }

                                while (!(tile[priorities[t]] == 1 && !kiles.includes(tile))) {
                                    j++
                                    if (j > 1000) {
                                        break
                                    }
                                    tile = tiles[Math.floor(Math.random() * tiles.length)]
                                }
                                ////console.log(kiles, !kiles.includes(tile))
                                if (this.guys[t].tile[priorities[t]] == 1) {
                                    tile = this.guys[t].tile
                                    if (priorities[t] != "holed") {
                                        let index = rooms.indexOf(priorities[t])
                                        if (this.UI.systems[index].demand + this.UI.systems[index].fed < this.UI.systems[index].max) {
                                            if (this.energy.power > 0) {
                                                ////console.log(this.UI.systems[index].max, this.energy.power)
                                                this.UI.systems[index].demand++
                                                this.UI.systems[index].sto = this.UI.systems[index].demand
                                            }
                                        }
                                    }
                                }

                            } else if (this.state == 1) {

                                let priorities = ["oxygen", 'weapon', 'shield', 'helm', 'weapon', 'shield', 'engine', 'helm', 'weapon', 'shield', 'engine', 'helm']
                                tile = tiles[Math.floor(Math.random() * tiles.length)]
                                let j = 0
                                let kiles = []
                                for (let g = 0; g < this.guys.length; g++) {
                                    kiles.push(this.guys[g].tile)
                                }

                                while (!(tile[priorities[t]] == 1 && !kiles.includes(tile))) {
                                    j++
                                    if (j > 1000) {
                                        break
                                    }
                                    tile = tiles[Math.floor(Math.random() * tiles.length)]
                                }

                                if (this.guys[t].tile[priorities[t]] == 1) {
                                    tile = this.guys[t].tile
                                    if (priorities[t] != "holed") {
                                        let index = rooms.indexOf(priorities[t])
                                        if (this.UI.systems[index].demand + this.UI.systems[index].fed < this.UI.systems[index].max) {
                                            if (this.energy.power > 0) {
                                                ////console.log(priorities[t])
                                                this.UI.systems[index].demand++
                                                this.UI.systems[index].sto = this.UI.systems[index].demand
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                    if (this.guys[t].cound > 0) {
                        this.guys[t].turning = 1
                        this.guys[t].flagpath = astar.search(this, this.guys[t].tile, tile)
                        this.guys[t].stogo = tile
                        if (this.guys[t].flagpath.length > 1) {
                            this.guys[t].selected = 0
                        }
                    } else {
                        this.guys[t].path = astar.search(enemy, this.guys[t].tile, tile)
                    }
                    this.guys[t].stogo = tile
                }
            }


            for (let t = 0; t < this.guys.length; t++) {
                this.guys[t].draw()
            }



            for (let w = 0; w < this.weapons.length; w++) {
                if (this.hash["weapon"].integrity >= 100*(1-(1/(11-this.UI.systems[1].max)))) {
                    //////////////console.log( this.boosts[1])
                    this.weapons[w].charge += Math.sqrt(this.boosts[1]) // * 5
                }
            }

            if (this.hash["shield"].integrity >= 100*(1-(1/(11-this.UI.systems[2].max)))) {
                this.shield.charge += Math.sqrt(this.boosts[2])
            }




            let oat = 0
            if (this.UI.systems[4].demand < 1 || !(this.hash["oxygen"].integrity >=  100*(1-(1/(11-this.UI.systems[4].max))))) {
                oat = 1
            } else if (this.hash["oxygen"].integrity >= 100*(1-(1/(11-this.UI.systems[4].max)))) {
                for (let t = 0; t < this.blocks.length; t++) {
                    for (let k = 0; k < this.blocks[t].length; k++) {
                        this.blocks[t][k].air += (this.boosts[4] + this.UI.systems[4].demand) / 10
                        if (this.blocks[t][k].air > 100) {
                            this.blocks[t][k].air = 100
                        }
                    }
                }
            }
            for (let t = 0; t < this.blocks.length; t++) {
                for (let k = 0; k < this.blocks[t].length; k++) {
                    this.blocks[t][k].newair = this.blocks[t][k].air
                    this.blocks[t][k].newfire = this.blocks[t][k].fire
                }
            }

            for (let t = 0; t < this.blocks.length; t++) {
                for (let k = 0; k < this.blocks[t].length; k++) {
                    if (oat == 1) {
                        if (this.blocks[t][k].marked == 1) {
                            this.blocks[t][k].air -= (this.guys.length / 180)
                            // this.blocks[t][k].air = Math.round(this.blocks[t][k].air)
                        }
                    }
                }
            }

            this.pulse++

            for (let t = 0; t < this.blocks.length; t++) {
                for (let k = 0; k < this.blocks[t].length; k++) {
                    this.blocks[t][k].newair = this.blocks[t][k].air
                    this.blocks[t][k].newfire = this.blocks[t][k].fire
                }
            }


            for (let t = 0; t < this.blocks.length; t++) {
                for (let k = 0; k < this.blocks[t].length; k++) {
                    if (this.blocks[t][k].onFire == 1) {
                        this.blocks[t][k].fire -= (100 - this.blocks[t][k].fire) / 50
                        if (this.blocks[t][k].fire <= 0) {
                            this.blocks[t][k].fire = 0
                            if (this.blocks[t][k].integrity > 30) {
                                this.blocks[t][k].integrity -= .05
                            }

                            if (Math.random() < .01) {
                                this.hull -= .5
                            }
                        }
                    }
                    this.blocks[t][k].fire = Math.max(100 - this.blocks[t][k].air, this.blocks[t][k].fire)
                }
            }


            if (this.pulse % 2 == 3) {

                // for (let t = this.blocks.length - 1; t >= 0; t--) {
                //     for (let k = this.blocks[t].length - 1; k >= 0; k--) {
                //         if (this.blocks[t][k].marked == 1) {
                //             let n = this.neighbors(this.blocks[t][k])
                //             for (let f = n.length - 1; f >= 0; f--) {
                //                 if (n[f].marked == 1) {
                //                     this.blocks[t][k].hair = (this.blocks[t][k].air + (n[f].air * 1)) * .5
                //                 }
                //             }
                //             for (let f = 0; f < n.length; f++) {
                //                 if (n[f].marked == 1) {
                //                     this.blocks[t][k].chair = (this.blocks[t][k].air + (n[f].air * 1)) * .5
                //                 }
                //             }

                //             this.blocks[t][k].air = (this.blocks[t][k].hair + this.blocks[t][k].chair) * .5
                //         }
                //     }
                // }
                // for (let t = 0; t < this.blocks.length; t++) {
                //     for (let k = 0; k < this.blocks[t].length; k++) {
                //         if (this.blocks[t][k].marked == 1) {
                //             let n = this.neighbors(this.blocks[t][k])
                //             for (let f = 0; f < n.length; f++) {
                //                 if (n[f].marked == 1) {
                //                     this.blocks[t][k].air = (this.blocks[t][k].air + (n[f].air * 1)) * .5
                //                 }
                //             }
                //         }
                //     }
                // }

            } else {

                for (let t = 0; t < this.blocks.length; t++) {
                    for (let k = 0; k < this.blocks[t].length; k++) {
                        if (this.blocks[t][k].marked == 1) {
                            let n = this.neighbors(this.blocks[t][k])
                            let sum = 0
                            let fsum = 0
                            for (let f = 0; f < n.length; f++) {
                                if (n[f].marked == 1) {
                                    sum += (n[f].air * 1)
                                    fsum += (n[f].fire * 1)
                                }
                            }
                            for (let f = n.length - 1; f >= 0; f--) {
                                if (n[f].marked == 1) {
                                    sum += (n[f].air * 1)
                                    fsum += (n[f].fire * 1)
                                }
                            }
                            sum /= n.length * 2
                            fsum /= n.length * 2
                            this.blocks[t][k].air = (this.blocks[t][k].air + sum) * .5
                            this.blocks[t][k].fire = ((this.blocks[t][k].fire * 39) + fsum) * .025
                        }
                    }
                }

                // for (let t = this.blocks.length - 1; t >= 0; t--) {
                //     for (let k = this.blocks[t].length - 1; k >= 0; k--) {
                //         if (this.blocks[t][k].marked == 1) {
                //             let n = this.neighbors(this.blocks[t][k])
                //             for (let f = n.length - 1; f >= 0; f--) {
                //                 if (n[f].marked == 1) {
                //                     this.blocks[t][k].air = (this.blocks[t][k].air + (n[f].air * 1)) * .5
                //                 }
                //             }
                //         }
                //     }
                // }
            }


            for (let t = 0; t < this.blocks.length; t++) {
                for (let k = 0; k < this.blocks[t].length; k++) {
                    // this.blocks[t][k].air = this.blocks[t][k].newair
                }
            }
            for (let t = 0; t < this.blocks.length; t++) {
                for (let k = 0; k < this.blocks[t].length; k++) {

                    if (this.blocks[t][k].holed == 1) {
                        this.blocks[t][k].air -= 7
                        let n = this.neighbors(this.blocks[t][k])
                        for (let f = 0; f < n.length; f++) {
                            if (n[f].marked == 1) {
                                n[f].air -= 5
                            }
                        }
                    }
                    if (this.blocks[t][k].air <= 0) {
                        this.blocks[t][k].air = 0
                    }
                    if (this.blocks[t][k].fire <= 0) {
                        this.blocks[t][k].fire = 0
                    }
                    if (this.blocks[t][k].marked == 1) {
                        // canvas_context.fillStyle = "White"
                        // canvas_context.fillText(Math.round(this.blocks[t][k].fire), this.blocks[t][k].x + 16, this.blocks[t][k].y + 16)
                    }
                    if (this.blocks[t][k].air < 50) {
                        if (this.blocks[t][k].marked == 1) {

                            let airwarn = new Rectangle(this.blocks[t][k].x, this.blocks[t][k].y, this.blocks[t][k].width, this.blocks[t][k].height, "#FF0000")
                            let o = this.blocks[t][k].air
                            if (o < 50) {
                                airwarn.color = "#FF000011"
                            }
                            if (o < 45) {
                                airwarn.color = "#FF000018"
                            }
                            if (o < 40) {
                                airwarn.color = "#FF000025"
                            }
                            if (o < 35) {
                                airwarn.color = "#FF000032"
                            }
                            if (o < 30) {
                                airwarn.color = "#FF000042"
                            }
                            if (o < 25) {
                                airwarn.color = "#FF000052"
                            }
                            if (o < 20) {
                                airwarn.color = "#FF000062"
                            }
                            airwarn.draw()
                        }
                    }
                }
            }

            for (let t = 0; t < this.doors.length; t++) {
                // this.doors[t].draw()
            }
            if (this.ondeath != 1) {
                this.ondeath--
                if (this.hull <= 0) {
                    if (this.ondeath < 0) {
                        this.ondeath = 14
                    }
                }
                if (this.ondeath > 0) {

                    let link = new Circle(this.body.x, this.body.y, 100 * ((14 - this.ondeath) / 8), "#FF000088")
                    link.draw()
                    let link2 = new Circle(this.body.x, this.body.y, 80 * ((14 - this.ondeath) / 8.05), "#FFAA0088")
                    link2.draw()
                    let link3 = new Circle(this.body.x, this.body.y, 60 * ((14 - this.ondeath) / 8.1), "#FFFF0088")
                    link3.draw()
                }
            } else {
                if (typeof this.spread == "undefined") {
                    this.spread = 0
                    this.loot = Math.floor((this.level * 1.1) + (Math.random() * (this.level * 1.1))) + 1
                    this.wegflag = Math.random()
                    this.crewflag = Math.random()
                    this.bombflag = Math.random()
                    this.fuelflag = Math.random()
                }
                this.body.draw()
                canvas_context.fillStyle = "white"
                canvas_context.font = "30px comic sans ms"
                canvas_context.fillText('+' + this.loot + " Scrap!", 720, 200)
                if (this.crewflag < (this.level / 30) && vessel.guys.length < 9) {
                    canvas_context.fillText("+1 Crew!", 720, 240)
                }

                let index = -1
                if (this.wegflag < (this.level / 30)) {
                    for (let t = 0; t < vessel.weapons.length; t++) {
                        if (vessel.weapons[t].real != 1) {
                            index = t
                            break
                        }
                    }
                }

                if (this.wegflag < (this.level / 30 && index > -1)) {
                    canvas_context.fillText("+1 Weapon!", 720, 280)
                }
                if (this.bombflag < .3) {
                    canvas_context.fillText(this.bombs + " Bombs!", 720, 320)
                }
                if (this.fuelflag < .5) {
                    canvas_context.fillText(3 + " fuel!", 720, 360)
                }

                canvas_context.fillText("Jump", this.body.x - (this.body.radius * .5), this.body.y)
                if (this.spread >= 30) {
                    for (let t = 0; t < vessel.weapons.length; t++) {
                        vessel.weapons[t].charge = 0
                    }
                    vessel.fuel--
                    start = 1
                    vessel.scrap += this.loot
                    let index = -1
                    if (this.wegflag < (this.level / 30)) {
                        for (let t = 0; t < vessel.weapons.length; t++) {
                            if (vessel.weapons[t].real != 1) {
                                index = t
                                break
                            }
                        }
                        if (index > -1) {
                            vessel.weapons[index] = (new Weapon(Math.floor(Math.random() * 10)))
                        } else {
                            // this.wegflag = 1

                            //new 
                            for (let t = 0; t < vessel.upgradeMenu.wepsto.length; t++) {
                                if (vessel.upgradeMenu.wepsto[t].real != 1) {
                                    index = t
                                    break
                                }
                            }

                            if (index > -1) {
                                vessel.upgradeMenu.wepsto[index] = (new Weapon(Math.floor(Math.random() * 10)))
                            } else {
                                this.wegflag = 1
                            }

                        }
                    }
                    if (this.bombflag < .3) {
                        vessel.bombs += this.bombs
                    }
                    if (this.fuelflag < .5) {
                        vessel.fuel += 3
                    }
                    if (this.crewflag < (this.level / 30)) {
                        if (vessel.guys.length < 9) {
                            let tile = vessel.blocks[Math.floor(Math.random() * vessel.blocks.length)][Math.floor(Math.random() * vessel.blocks.length)]
                            let j = 0
                            while (!tile.walkable) {
                                j++
                                if (j > 100) {
                                    break
                                }
                                tile = vessel.blocks[Math.floor(Math.random() * vessel.blocks.length)][Math.floor(Math.random() * vessel.blocks.length)]
                            }
                            let guy = new Guy(tile)
                            guy.draw()
                            vessel.guys.push(guy)
                        }
                    }
                    enemy = new EnemyShip(Math.floor(Math.random() * 2), this.level + 1)
                }
            }


        }
    }

    class Star {
        constructor(x, y) {
            this.name = getRandomColor() + " System"
            this.body = new Circle(x * 20, y + 20, 50, "white")
            this.spot = new Polygon(x * 20, y + 20, 5, getRandomLightColor(), 4 + (Math.random() * 10), (Math.random() * 2) + .2, (Math.random() * 2) + .2)
        }
        draw() {
            // this.body.draw()
            // control(this.spot, 10)
            if (this.body.x < 640) {
                return false
            }
            if (this.spot.body.x < 1280 && this.spot.body.x > 0) {
                this.spot.draw()
            }
        }
        check(point) {
            if (this.body.x < 640) {
                return false
            }
            if (this.body.isPointInside(point)) {
                vessel.star = stars.stars.indexOf(this)
                let subx = this.body.x
                start = 2
                for (let t = 0; t < stars.stars.length; t++) {
                    stars.stars[t].body.x -= subx - 640
                    stars.stars[t].spot.body.x -= subx - 640
                }
                return true
            }
            return false
        }
        hover(point) {
            if (this.body.x < 200) {
                return false
            }
            if (this.body.isPointInside(point)) {
                stars.to = stars.stars.indexOf(this)
            }
        }
    }

    class Stars {
        constructor() {
            this.to = 0
            this.stars = [new Star(130/4, 360)]
            for (let t = 0; this.stars.length < 480; t++) {
                let star = new Star((130/4) + (Math.random() * (canvas.width)), Math.random() * (canvas.height - 40))
                let wet = 1
                for (let k = 0; k < this.stars.length; k++) {
                    if (star.body.doesPerimeterTouch(this.stars[k].body)) {
                        wet = 0
                        break
                    }
                }
                if (wet == 1) {
                    this.stars.push(star)
                }
            }
            this.flag = 0
        }
        draw() {
            this.link = new LineOP(this.stars[vessel.star].body, this.stars[this.to].body, "red", 2)
            if (this.link.hypotenuse() < 420) {
                this.link.color = "#00FF00"
                this.flag = 1
            } else {
                this.flag = 0
                this.link.color = "#FF0000"
            }
            this.link.draw()
            for (let t = 0; t < this.stars.length; t++) {
                this.stars[t].draw()
            }
        }
        check(point) {
            if (this.flag == 1) {
                for (let t = 0; t < this.stars.length; t++) {
                    if (this.stars[t].check(point)) {
                        vessel.star = t
                        break
                    }
                }
            }
        }
        hover(point) {
            for (let t = 0; t < this.stars.length; t++) {
                this.stars[t].hover(point)
            }
        }
    }


    let start = 0
    let title = new Image()
    title.src = "title.png"
    let vessel = new Ship()
    let enemy = new EnemyShip(Math.floor(Math.random() * 2), 1)

    vessel.draw()
    let stars = new Stars()


    class Labels {
        constructor() {
            this.text = ''
        }
        draw() {
            if (!keysPressed['Shift']) {
                return
            }

            if (start == 1) {
                for (let t = 0; t < stars.stars.length; t++) {
                    if (stars.stars[t].body.isPointInside(TIP_engine)) {

                        this.text1 = stars.stars[t].name
                        this.text2 = ''
                        this.text3 = ''
                        this.text4 = ''
                        let dim = {}
                        canvas_context.font = "12px comic sans ms"
                        dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                        dim.h = 12
                        //////console.log(dim)
                        let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                        rect.draw()
                        canvas_context.fillStyle = "white"
                        let py = TIP_engine.y + 5
                        canvas_context.fillText(this.text1, rect.x + 10, py)
                        // py += 12
                        // canvas_context.fillText(this.text2, rect.x + 10, py)
                        // py += 12
                        // canvas_context.fillText(this.text3, rect.x + 10, py)
                        // py += 12
                        // canvas_context.fillText(this.text4, rect.x + 10, py)
                    }
                }
                return
            }

            let rooms = ['Medbay', 'Weapons', 'Shield', 'Helm', 'Oxygen', 'Security', 'Engine', 'Empty', 'Empty']
            for (let t = 0; t < vessel.UI.systems.length; t++) {
                for (let k = 0; k < vessel.UI.systems[t].bars.length; k++) {
                    vessel.UI.systems[t].bars[k].y -= 2
                    vessel.UI.systems[t].bars[k].height += 4
                    if (vessel.UI.systems[t].bars[k].isPointInside(TIP_engine)) {
                        this.text1 = rooms[t]
                        this.text2 = "Demand: " + vessel.UI.systems[t].demand
                        this.text3 = "Capacity: " + vessel.UI.systems[t].max
                        this.text4 = "Target: " + vessel.UI.systems[t].sto
                        let dim = {}
                        canvas_context.font = "12px comic sans ms"
                        dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                        dim.h = 44
                        //////console.log(dim)
                        let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                        rect.draw()
                        canvas_context.fillStyle = "white"
                        let py = TIP_engine.y + 5
                        canvas_context.fillText(this.text1, rect.x + 10, py)
                        py += 12
                        canvas_context.fillText(this.text2, rect.x + 10, py)
                        py += 12
                        canvas_context.fillText(this.text3, rect.x + 10, py)
                        py += 12
                        canvas_context.fillText(this.text4, rect.x + 10, py)
                    }
                    vessel.UI.systems[t].bars[k].y += 2
                    vessel.UI.systems[t].bars[k].height -= 4
                }
            }


            for (let t = 0; t < vessel.guys.length; t++) {
                if (vessel.guys[t].healthbox.isPointInside(TIP_engine)) {
                    this.text1 = `Crewman ${vessel.guys[t].name}`
                    this.text2 = `Skills: ${vessel.guys[t].skills}`
                    this.text3 = `Health: ${Math.round(vessel.guys[t].health)}/${vessel.guys[t].maxhealth}`
                    let sys = ["medbay", "weapon", "shield", "helm", "oxygen", "security", "engine", "special", "empty"]

                    this.text4 = "System: "
                    for (let s = 0; s < sys.length; s++) {
                        if (vessel.guys[t].tile[sys[s]] == 1) {
                            let sys2 = sys[s].charAt(0).toUpperCase() + sys[s].slice(1);
                            this.text4 += ' ' + sys2
                        }
                    }


                    let dim = {}
                    canvas_context.font = "12px comic sans ms"
                    dim.w = Math.max(170, Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width))
                    dim.h = 154
                    //////console.log(dim)
                    let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#555555dd")
                    rect.draw()
                    canvas_context.fillStyle = "white"
                    let py = TIP_engine.y + 5
                    canvas_context.fillText(this.text1, rect.x + 10, py)
                    py += 12
                    canvas_context.fillText(this.text2, rect.x + 10, py)
                    py += 12
                    canvas_context.fillText(this.text3, rect.x + 10, py)
                    py += 12
                    canvas_context.fillText(this.text4, rect.x + 10, py)
                    for (let r = 0; r < vessel.guys[t].skillslist.length; r++) {
                        let box1 = new RectangleR(TIP_engine.x + 5, py + 10, 130, 5, "#88888844")
                        canvas_context.fillStyle = "white"
                        canvas_context.font = "9px comic sans ms"
                        canvas_context.fillText(sys[r], box1.x + box1.width + 10, py + 15)
                        box1.draw()
                        let box4 = new RectangleR(TIP_engine.x + 5, py + 10, ((vessel.guys[t].skillslist[r] - 1.5) / .25) * (130), 5, "#FF0000")
                        let box3 = new RectangleR(TIP_engine.x + 5, py + 10, ((vessel.guys[t].skillslist[r] - 1.25) / .25) * (130), 5, "#FFFF00")
                        let box2 = new Rectangle(TIP_engine.x + 5, py + 10, ((vessel.guys[t].skillslist[r] - 1) / .25) * (130), 5, "#00FF00")

                        if (vessel.guys[t].skillslist[r] > 1.75) {
                            box4.width = 130
                        }
                        if (vessel.guys[t].skillslist[r] > 1.5) {
                            box3.width = 130
                        } else {
                            box4.width = 0
                        }
                        if (vessel.guys[t].skillslist[r] >= 1.25) {
                            box2.width = 130
                        } else {
                            box3.width = 0
                            box4.width = 0
                        }
                        box2.draw()
                        box3.draw()
                        box4.draw()
                        py += 12
                    }
                }
            }


            for (let t = 0; t < vessel.weapons.length; t++) {
                if (vessel.weapons[t].body.isPointInside(TIP_engine)) {
                    this.text1 = `Weapon: ${vessel.weapons[t].name1 + ' ' + vessel.weapons[t].name2}`
                    this.text2 = `Charge: ${vessel.weapons[t].charge}/${vessel.weapons[t].max}`
                    let str = 'Idle'
                    if (vessel.weapons[t].charge >= vessel.weapons[t].max) {
                        str = 'Ready'
                    } else {
                        if (vessel.boosts[1] > 0) {
                            str = 'Charging'
                        }
                    }
                    this.text3 = "State: " + str
                    // this.text4 = "Max: " + vessel.shield.level
                    let dim = {}
                    canvas_context.font = "12px comic sans ms"
                    dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                    dim.h = 44
                    //////console.log(dim)
                    let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#555555dd")
                    rect.draw()
                    canvas_context.fillStyle = "white"
                    let py = TIP_engine.y + 5
                    canvas_context.fillText(this.text1, rect.x + 10, py)
                    py += 12
                    canvas_context.fillText(this.text2, rect.x + 10, py)
                    py += 12
                    canvas_context.fillText(this.text3, rect.x + 10, py)
                    // py += 12
                    // canvas_context.fillText(this.text4, rect.x + 10, py)
                }
            }



            if (vessel.energy.box.isPointInside(TIP_engine)) {
                this.text1 = "Energy Storage"
                this.text2 = "Total: " + vessel.energy.powersto
                this.text3 = "Used: " + (vessel.energy.powersto - vessel.energy.power)
                this.text4 = "Remain: " + vessel.energy.power
                let dim = {}
                canvas_context.font = "12px comic sans ms"
                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                dim.h = 44
                //////console.log(dim)
                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                rect.draw()
                canvas_context.fillStyle = "white"
                let py = TIP_engine.y + 5
                canvas_context.fillText(this.text1, rect.x + 10, py)
                py += 12
                canvas_context.fillText(this.text2, rect.x + 10, py)
                py += 12
                canvas_context.fillText(this.text3, rect.x + 10, py)
                py += 12
                canvas_context.fillText(this.text4, rect.x + 10, py)
            }
            if (vessel.upgradeMenu.button.isPointInside(TIP_engine)) {
                this.text1 = "Upgrade menu"
                let dim = {}
                canvas_context.font = "12px comic sans ms"
                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                dim.h = 12
                //////console.log(dim)
                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                rect.draw()
                canvas_context.fillStyle = "white"
                let py = TIP_engine.y + 5
                canvas_context.fillText(this.text1, rect.x + 10, py)
                // py += 12
                // canvas_context.fillText(this.text2, rect.x + 10, py)
                // py += 12
                // canvas_context.fillText(this.text3, rect.x + 10, py)
                // py += 12
                // canvas_context.fillText(this.text4, rect.x + 10, py)
            }
            if (vessel.shield.healthbar.isPointInside(TIP_engine)) {
                this.text1 = "Shields"
                this.text2 = `Charge: ${vessel.shield.charge}/${vessel.shield.maxout}`
                this.text3 = "Current: " + vessel.shield.state
                this.text4 = "Max: " + vessel.shield.level
                let dim = {}
                canvas_context.font = "12px comic sans ms"
                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                dim.h = 44
                //////console.log(dim)
                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                rect.draw()
                canvas_context.fillStyle = "white"
                let py = TIP_engine.y + 5
                canvas_context.fillText(this.text1, rect.x + 10, py)
                py += 12
                canvas_context.fillText(this.text2, rect.x + 10, py)
                py += 12
                canvas_context.fillText(this.text3, rect.x + 10, py)
                py += 12
                canvas_context.fillText(this.text4, rect.x + 10, py)
            }
            if (vessel.healthbar.isPointInside(TIP_engine)) {
                this.text1 = "Hull"
                this.text2 = `Integrity: ${vessel.hull}/${vessel.maxhull}`
                this.text3 = "Current: " + vessel.shield.state
                this.text4 = "Max: " + vessel.shield.level
                let dim = {}
                canvas_context.font = "12px comic sans ms"
                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                dim.h = 24
                //////console.log(dim)
                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                rect.draw()
                canvas_context.fillStyle = "white"
                let py = TIP_engine.y + 5
                canvas_context.fillText(this.text1, rect.x + 10, py)
                py += 12
                canvas_context.fillText(this.text2, rect.x + 10, py)
                // py += 12
                // canvas_context.fillText(this.text3, rect.x + 10, py)
                // py += 12
                // canvas_context.fillText(this.text4, rect.x + 10, py)
            }

            for (let t = 0; t < enemy.blocks.length; t++) {
                for (let k = 0; k < enemy.blocks[t].length; k++) {
                    if (enemy.blocks[t][k].marked == 1) {
                        if (enemy.blocks[t][k].isPointInside(TIP_engine)) {
                            if (enemy.blocks[t][k].weapon == 1) {
                                this.text1 = "Weapons"
                                this.text2 = `Hull: ${Math.floor(enemy.blocks[t][k].integrity)}, Air: ${Math.round(enemy.blocks[t][k].air)}`
                                this.text3 = '1'
                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                //////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                                rect.draw()
                                canvas_context.fillStyle = "white"
                                let py = TIP_engine.y + 5
                                canvas_context.fillText(this.text1, rect.x + 10, py)
                                py += 12
                                canvas_context.fillText(this.text2, rect.x + 10, py)
                                //py += 12
                                //canvas_context.fillText(this.text3, rect.x + 10, py)
                            } else if (enemy.blocks[t][k].engine == 1) {
                                this.text1 = "Engines"
                                this.text2 = `Hull: ${Math.floor(enemy.blocks[t][k].integrity)}, Air: ${Math.round(enemy.blocks[t][k].air)}`
                                this.text3 = '1'
                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                //////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                                rect.draw()
                                canvas_context.fillStyle = "white"
                                let py = TIP_engine.y + 5
                                canvas_context.fillText(this.text1, rect.x + 10, py)
                                py += 12
                                canvas_context.fillText(this.text2, rect.x + 10, py)
                                //py += 12
                                //canvas_context.fillText(this.text3, rect.x + 10, py)
                            } else if (enemy.blocks[t][k].medbay == 1) {
                                this.text1 = "Medbay"
                                this.text2 = `Hull: ${Math.floor(enemy.blocks[t][k].integrity)}, Air: ${Math.round(enemy.blocks[t][k].air)}`
                                this.text3 = '1'
                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                // //////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                                rect.draw()
                                canvas_context.fillStyle = "white"
                                let py = TIP_engine.y + 5
                                canvas_context.fillText(this.text1, rect.x + 10, py)
                                py += 12
                                canvas_context.fillText(this.text2, rect.x + 10, py)
                                //py += 12
                                //canvas_context.fillText(this.text3, rect.x + 10, py)
                            } else if (enemy.blocks[t][k].helm == 1) {
                                this.text1 = "Helm"
                                this.text2 = `Hull: ${Math.floor(enemy.blocks[t][k].integrity)}, Air: ${Math.round(enemy.blocks[t][k].air)}`
                                this.text3 = '1'
                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                //////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                                rect.draw()
                                canvas_context.fillStyle = "white"
                                let py = TIP_engine.y + 5
                                canvas_context.fillText(this.text1, rect.x + 10, py)
                                py += 12
                                canvas_context.fillText(this.text2, rect.x + 10, py)
                                //py += 12
                                //canvas_context.fillText(this.text3, rect.x + 10, py)
                            } else if (enemy.blocks[t][k].shield == 1) {
                                this.text1 = "Shield"
                                this.text2 = `Hull: ${Math.floor(enemy.blocks[t][k].integrity)}, Air: ${Math.round(enemy.blocks[t][k].air)}`
                                this.text3 = '1'
                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                //////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                                rect.draw()
                                canvas_context.fillStyle = "white"
                                let py = TIP_engine.y + 5
                                canvas_context.fillText(this.text1, rect.x + 10, py)
                                py += 12
                                canvas_context.fillText(this.text2, rect.x + 10, py)
                                //py += 12
                                //canvas_context.fillText(this.text3, rect.x + 10, py)
                            } else if (enemy.blocks[t][k].empty == 1 || enemy.blocks[t][k].special == 1) {
                                this.text1 = "Empty"
                                this.text2 = `Hull: ${Math.floor(enemy.blocks[t][k].integrity)}, Air: ${Math.round(enemy.blocks[t][k].air)}`
                                this.text3 = '1'
                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                //////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                                rect.draw()
                                canvas_context.fillStyle = "white"
                                let py = TIP_engine.y + 5
                                canvas_context.fillText(this.text1, rect.x + 10, py)
                                py += 12
                                canvas_context.fillText(this.text2, rect.x + 10, py)
                                //py += 12
                                //canvas_context.fillText(this.text3, rect.x + 10, py)
                            } else if (enemy.blocks[t][k].oxygen == 1) {
                                this.text1 = "Oxygen Systems"
                                this.text2 = `Hull: ${Math.floor(enemy.blocks[t][k].integrity)}, Air: ${Math.round(enemy.blocks[t][k].air)}`
                                this.text3 = '1'
                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                //////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                                rect.draw()
                                canvas_context.fillStyle = "white"
                                let py = TIP_engine.y + 5
                                canvas_context.fillText(this.text1, rect.x + 10, py)
                                py += 12
                                canvas_context.fillText(this.text2, rect.x + 10, py)
                                //py += 12
                                //canvas_context.fillText(this.text3, rect.x + 10, py)
                            } else if (enemy.blocks[t][k].security == 1) {
                                this.text1 = "Security"
                                this.text2 = `Hull: ${Math.floor(enemy.blocks[t][k].integrity)}, Air: ${Math.round(enemy.blocks[t][k].air)}`
                                this.text3 = '1'
                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                //////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                                rect.draw()
                                canvas_context.fillStyle = "white"
                                let py = TIP_engine.y + 5
                                canvas_context.fillText(this.text1, rect.x + 10, py)
                                py += 12
                                canvas_context.fillText(this.text2, rect.x + 10, py)
                                //py += 12
                                //canvas_context.fillText(this.text3, rect.x + 10, py)
                            }
                        }
                    }
                }
            }


            for (let t = 0; t < vessel.blocks.length; t++) {
                for (let k = 0; k < vessel.blocks[t].length; k++) {
                    if (vessel.blocks[t][k].marked == 1) {
                        if (vessel.blocks[t][k].isPointInside(TIP_engine)) {
                            if (vessel.blocks[t][k].weapon == 1) {
                                this.text1 = "Weapons"
                                this.text2 = `Hull: ${Math.floor(vessel.blocks[t][k].integrity)}, Air: ${Math.round(vessel.blocks[t][k].air)}`
                                this.text3 = '1'
                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                //////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                                rect.draw()
                                canvas_context.fillStyle = "white"
                                let py = TIP_engine.y + 5
                                canvas_context.fillText(this.text1, rect.x + 10, py)
                                py += 12
                                canvas_context.fillText(this.text2, rect.x + 10, py)
                                //py += 12
                                //canvas_context.fillText(this.text3, rect.x + 10, py)
                            } else if (vessel.blocks[t][k].engine == 1) {
                                this.text1 = "Engines"
                                this.text2 = `Hull: ${Math.floor(vessel.blocks[t][k].integrity)}, Air: ${Math.round(vessel.blocks[t][k].air)}`
                                this.text3 = '1'
                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                //////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                                rect.draw()
                                canvas_context.fillStyle = "white"
                                let py = TIP_engine.y + 5
                                canvas_context.fillText(this.text1, rect.x + 10, py)
                                py += 12
                                canvas_context.fillText(this.text2, rect.x + 10, py)
                                //py += 12
                                //canvas_context.fillText(this.text3, rect.x + 10, py)
                            } else if (vessel.blocks[t][k].medbay == 1) {
                                this.text1 = "Medbay"
                                this.text2 = `Hull: ${Math.floor(vessel.blocks[t][k].integrity)}, Air: ${Math.round(vessel.blocks[t][k].air)}`
                                this.text3 = '1'
                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                //////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                                rect.draw()
                                canvas_context.fillStyle = "white"
                                let py = TIP_engine.y + 5
                                canvas_context.fillText(this.text1, rect.x + 10, py)
                                py += 12
                                canvas_context.fillText(this.text2, rect.x + 10, py)
                                //py += 12
                                //canvas_context.fillText(this.text3, rect.x + 10, py)
                            } else if (vessel.blocks[t][k].helm == 1) {
                                this.text1 = "Helm"
                                this.text2 = `Hull: ${Math.floor(vessel.blocks[t][k].integrity)}, Air: ${Math.round(vessel.blocks[t][k].air)}`
                                this.text3 = '1'
                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                //////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                                rect.draw()
                                canvas_context.fillStyle = "white"
                                let py = TIP_engine.y + 5
                                canvas_context.fillText(this.text1, rect.x + 10, py)
                                py += 12
                                canvas_context.fillText(this.text2, rect.x + 10, py)
                                //py += 12
                                //canvas_context.fillText(this.text3, rect.x + 10, py)
                            } else if (vessel.blocks[t][k].shield == 1) {
                                this.text1 = "Shield"
                                this.text2 = `Hull: ${Math.floor(vessel.blocks[t][k].integrity)}, Air: ${Math.round(vessel.blocks[t][k].air)}`
                                this.text3 = '1'
                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                //////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                                rect.draw()
                                canvas_context.fillStyle = "white"
                                let py = TIP_engine.y + 5
                                canvas_context.fillText(this.text1, rect.x + 10, py)
                                py += 12
                                canvas_context.fillText(this.text2, rect.x + 10, py)
                                //py += 12
                                //canvas_context.fillText(this.text3, rect.x + 10, py)
                            } else if (vessel.blocks[t][k].empty == 1 || vessel.blocks[t][k].special == 1) {
                                this.text1 = "Empty"
                                this.text2 = `Hull: ${Math.floor(vessel.blocks[t][k].integrity)}, Air: ${Math.round(vessel.blocks[t][k].air)}`
                                this.text3 = '1'
                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                //////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                                rect.draw()
                                canvas_context.fillStyle = "white"
                                let py = TIP_engine.y + 5
                                canvas_context.fillText(this.text1, rect.x + 10, py)
                                py += 12
                                canvas_context.fillText(this.text2, rect.x + 10, py)
                                //py += 12
                                //canvas_context.fillText(this.text3, rect.x + 10, py)
                            } else if (vessel.blocks[t][k].oxygen == 1) {
                                this.text1 = "Oxygen Systems"
                                this.text2 = `Hull: ${Math.floor(vessel.blocks[t][k].integrity)}, Air: ${Math.round(vessel.blocks[t][k].air)}`
                                this.text3 = '1'
                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                //////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                                rect.draw()
                                canvas_context.fillStyle = "white"
                                let py = TIP_engine.y + 5
                                canvas_context.fillText(this.text1, rect.x + 10, py)
                                py += 12
                                canvas_context.fillText(this.text2, rect.x + 10, py)
                                //py += 12
                                //canvas_context.fillText(this.text3, rect.x + 10, py)
                            } else if (vessel.blocks[t][k].security == 1) {
                                this.text1 = "Security"
                                this.text2 = `Hull: ${Math.floor(vessel.blocks[t][k].integrity)}, Air: ${Math.round(vessel.blocks[t][k].air)}`
                                this.text3 = '1'
                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                //////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                                rect.draw()
                                canvas_context.fillStyle = "white"
                                let py = TIP_engine.y + 5
                                canvas_context.fillText(this.text1, rect.x + 10, py)
                                py += 12
                                canvas_context.fillText(this.text2, rect.x + 10, py)
                                //py += 12
                                //canvas_context.fillText(this.text3, rect.x + 10, py)
                            }
                        }
                    }
                }
            }
        }
    }

    let labels = new Labels()
    function main() {


        if (vessel.hull <= 0) {
            vessel = new Ship()
            start = 0
        }

        // if (keysPressed['-'] && recording == 0) {
        //     recording = 1
        //     video_recorder.record()
        // }
        // if (keysPressed['='] && recording == 1) {
        //     recording = 0
        //     video_recorder.stop()
        //     video_recorder.download('File Name As A String.webm')
        // }
        if (start == 0) {
            canvas_context.drawImage(title, 0, 0)
            return
        } else if (start == 1) {
            canvas_context.clearRect(0, 0, canvas.width, canvas.height)  // refreshes the image
            var grd = canvas_context.createLinearGradient(0, 0, stars.stars[vessel.star].body.x, 0);
            grd.addColorStop(0, "#888888");
            grd.addColorStop(1, "#000000");
            canvas_context.fillStyle = grd;
            canvas_context.fillRect(0, 0, stars.stars[vessel.star].body.x, 720);


            stars.draw()
            vessel.draw()
            labels.draw()
        } else {

            // enemy = new EnemyShip(Math.floor(Math.random()*2))
            canvas_context.clearRect(0, 0, canvas.width, canvas.height)  // refreshes the image
            // // mag_canvas_context.clearRect(0, 0, mag_canvas.width, mag_canvas.height)  // refreshes the image
            // gamepadAPI.update() //checks for button presses/stick movement on the connected controller)
            // // // game code goes here
            // wad.draw()
            enemy.draw()
            vessel.draw()
            for (let w = 0; w < enemy.weapons.length; w++) {
                enemy.weapons[w].work()
            }
            labels.draw()
        }
    }

})
