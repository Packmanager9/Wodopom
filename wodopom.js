
window.addEventListener('DOMContentLoaded', (event) => {


    let globalRat = 1.5
    let stars
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
    //     // it uses the same canvas as the rest of the file.
    //     // to start a recording call .record() on video_recorder
    //     /*
    //     for example, 
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
    //         // //////////////////////////////////////////////////////////////console.log(pressed); // return buttons for debugging purposes
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
    let starcanvas_context
    let shipcanvas_context
    let shake_context
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
        intersects(line) {
            var det, gm, lm;
            det = (this.target.x - this.object.x) * (line.target.y - line.object.y) - (line.target.x - line.object.x) * (this.target.y - this.object.y);
            if (det === 0) {
                return false;
            } else {
                lm = ((line.target.y - line.object.y) * (line.target.x - this.object.x) + (line.object.x - line.target.x) * (line.target.y - this.object.y)) / det;
                gm = ((this.object.y - this.target.y) * (line.target.x - this.object.x) + (this.target.x - this.object.x) * (line.target.y - this.object.y)) / det;
                return (0 <= lm && lm <= 1) && (0 <= gm && gm <= 1);
            }
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
    class LineOPX {
        constructor(object, target, color, width) {
            this.object = object
            this.target = target
            this.color = color
            this.width = width
        }
        intersects(line) {
            var det, gm, lm;
            det = (this.target.x - this.object.x) * (line.target.y - line.object.y) - (line.target.x - line.object.x) * (this.target.y - this.object.y);
            if (det === 0) {
                return false;
            } else {
                lm = ((line.target.y - line.object.y) * (line.target.x - this.object.x) + (line.object.x - line.target.x) * (line.target.y - this.object.y)) / det;
                gm = ((this.object.y - this.target.y) * (line.target.x - this.object.x) + (this.target.x - this.object.x) * (line.target.y - this.object.y)) / det;
                return (0 <= lm && lm <= 1) && (0 <= gm && gm <= 1);
            }
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
            // let linewidthstorage = starcanvas_context.lineWidth
            starcanvas_context.strokeStyle = this.color
            starcanvas_context.lineWidth = this.width
            starcanvas_context.beginPath()
            starcanvas_context.moveTo(this.object.x, this.object.y)
            starcanvas_context.lineTo(this.target.x, this.target.y)
            starcanvas_context.stroke()
            ////////////////////////////console.log(this)
            // starcanvas_context.lineWidth = linewidthstorage
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
            canvas_context.lineWidth = 2
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
        movex(zise) {
            this.x += this.xmom / zise
            this.y += this.ymom / zise
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
                //////////////////////////////////////////////////////////////console.log("The circle is below a radius of 0, and has not been drawn. The circle is:", this)
            }
        }
        move() {
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
        movex(zise) {
            this.x += this.xmom / zise
            this.y += this.ymom / zise
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
            //     //////////////////////////////////////////////////////////////console.log("The circle is below a radius of 0, and has not been drawn. The circle is:", this)
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
                    let node = new Circle(this.body.x + (this.size * 2 * (Math.cos(this.angle))), this.body.y + (this.size * 2 * (Math.sin(this.angle))), 0, "transparent")
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
        starcanvas_context = starcanvas.getContext('2d');
        shipcanvas_context = shipcanvas.getContext('2d');
        shake_context = shake.getContext('2d');

        canvas.style.background = style
        starcanvas.style.background = style
        shipcanvas.style.background = style
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
            TIP_engine.x = XS_engine //*.666666
            TIP_engine.y = YS_engine //*.666666
            TIP_engine.body = TIP_engine
            // wad.launch(TIP_engine)
            for (let t = 0; t < vessel.weapons.length; t++) {
                vessel.weapons[t].check2(TIP_engine)
                vessel.weapons[t].beingchecked = 1
            }
        })


        window.addEventListener('pointerdown', e => {
            if (mode == 1) {

            } else {
                if (keysPressed['c']) {
                    if (stars.collapsed != 1) {
                        stars.collapsed = 1
                        for (let t = 0; t < stars.stars.length; t++) {
                            stars.stars[t].collapse()
                        }
                    }
                    return
                }
                if (keysPressed['e']) {
                    if (stars.collapsed == 1) {
                        stars.collapsed = 0
                        for (let t = 0; t < stars.stars.length; t++) {
                            stars.stars[t].expand()
                        }
                    }
                    return
                }
            }

            if (start == 0) {
                if (tut == -1) {

                    if (normButton.isPointInside(TIP_engine)) {
                        vessel = new Ship(0)
                        start = 1
                        return
                    } else {
                    }
                    if (mumButton.isPointInside(TIP_engine)) {
                        vessel = new Ship(11)
                        start = 1
                        return
                    } else {
                    }


                    if (plantButton.isPointInside(TIP_engine)) {
                        vessel = new Ship(7)
                        start = 1
                        return
                    } else {
                    }

                    if (blobButton.isPointInside(TIP_engine)) {
                        vessel = new Ship(8)
                        start = 1
                        return
                    } else {
                    }
                    if (numButton.isPointInside(TIP_engine)) {
                        vessel = new Ship(5)
                        start = 1
                        return
                    } else {
                    }

                    if (joButton.isPointInside(TIP_engine)) {
                        vessel = new Ship(12)
                        start = 1
                        return
                    } else {
                    }

                    if (gumButton.isPointInside(TIP_engine)) {
                        vessel = new Ship(6)
                        start = 1
                        return
                    } else {
                    }
                    
                    
                    if (energyButton.isPointInside(TIP_engine)) {
                        vessel = new Ship(13)
                        start = 1
                        return
                    } else {
                    }

                    if (crabButton.isPointInside(TIP_engine)) {
                        vessel = new Ship(1)
                        start = 1
                        return
                    } else {
                    }

                    if (shieldButton.isPointInside(TIP_engine)) {
                        vessel = new Ship(2)
                        start = 1
                        return
                    } else {
                    }


                    if (fishButton.isPointInside(TIP_engine)) {
                        vessel = new Ship(4)
                        start = 1
                        return
                    } else {
                    }

                    if (combButton.isPointInside(TIP_engine)) {
                        vessel = new Ship(9)
                        start = 1
                        return
                    } else {
                    }




                    if (fireButton.isPointInside(TIP_engine)) {
                        vessel = new Ship(3)
                        start = 1
                        return
                    } else {
                    }


                    if (beanButton.isPointInside(TIP_engine)) {
                        vessel = new Ship(10)
                        start = 1
                        return
                    } else {
                    }


                    if (modeButton.isPointInside(TIP_engine)) {
                        mode *= -1
                        stars = new Stars()
                        return
                    } else {
                        // start = 1
                    }
                    if (tutButton.isPointInside(TIP_engine)) {
                        tut = 1
                        return
                    } else {
                        start = 1
                    }
                } else {
                    if (tut < 3) {
                        tut++
                    } else {
                        tut = -1
                    }
                }
            }
            right = 0
            FLEX_engine = canvas.getBoundingClientRect();
            XS_engine = e.clientX - FLEX_engine.left;
            YS_engine = e.clientY - FLEX_engine.top;
            TIP_engine.x = XS_engine//*.666666
            TIP_engine.y = YS_engine//*.666666
            TIP_engine.body = TIP_engine
            ////////////////////////////////////////console.log(TIP_engine)

            if (vessel.guys) {
                let i1 = -1
                let i2 = -1
                for (let t = 0; t < vessel.guys.length; t++) {
                    if (vessel.guys[t].zSelected == 1) {
                        i1 = t
                        break
                    }
                }
                if (i1 != -1) {
                    for (let t = 0; t < vessel.guys[i1].gear.length; t++) {
                        vessel.guys[i1].gear[t].check(TIP_engine)
                    }
                }
            }

            if (vessel.upgradeMenu.open == 1) {

            } else {
                if (enemy.hull <= 0) {
                    if (enemy.deathbox.isPointInside(TIP_engine)) {
                        if (enemy.spread == 0) {
                            enemy.spread = 31
                            return
                        }
                    }
                }
                if (enemy.guys) {
                    let c = 0
                    for (let t = 0; t < enemy.guys.length; t++) {
                        if (enemy.guys[t].hostile == 1 && enemy.guys[t].mindControlled != 1) {
                            c++
                        }
                    }
                    if (enemy.guys.length == 0 || c == enemy.guys.length) {
                        if (enemy.deathbox.isPointInside(TIP_engine)) {
                            if (enemy.spread == 0) {
                                enemy.spread = 31
                                return
                            }
                        }
                    }
                }
                if (vessel.engineCharge >= 10000) {
                    if (vessel.jumper.isPointInside(TIP_engine)) {
                        for (let t = 0; t < vessel.weapons.length; t++) {
                            vessel.weapons[t].charge = 0
                        }
                        vessel.fuel--
                        start = 1
                        starfirst = 0
                        enemy = new EnemyShip(Math.floor(Math.random() * 40), enemy.level + 1)
                        return
                    }
                }

            }


            if (vessel.upgradeMenu.open == 1 && start == 2) {

                if (vessel.upgradeMenu.shopdraw == 1 && vessel.upgradeMenu.ket == 2) {

                    if (vessel.upgradeMenu.sellButton.isPointInside(TIP_engine)) {
                        vessel.upgradeMenu.wepsto[vessel.upgradeMenu.index].sold()
                        return
                    }

                }
                if (vessel.upgradeMenu.shopdraw == 2 && vessel.upgradeMenu.ket == 1) {

                    if (vessel.upgradeMenu.buyButton.isPointInside(TIP_engine)) {
                        stars.stars[vessel.star].weapons[vessel.upgradeMenu.index].bought()
                        return
                    }

                }


            }

            vessel.menuBattery.check(TIP_engine)
            vessel.upgradeMenu.check(TIP_engine)
            vessel.upgradeMenu.levels.check(TIP_engine)

            if (vessel.upgradeMenu.open == 1 && start == 2) {

                if (mode == 1) {

                    if (vessel.upgradeMenu.repairButton.isPointInside(TIP_engine)) {
                        if (vessel.scrap >= 5) {
                            if (vessel.hull <= 295) {
                                if (enemy.guys) {
                                    let c = 0
                                    for (let t = 0; t < enemy.guys.length; t++) {
                                        if (enemy.guys[t].hostile == 1 && enemy.guys[t].mindControlled != 1) {
                                            c++
                                        }
                                    }
                                    if (enemy.guys.length == 0 || c == enemy.guys.length) {
                                        vessel.hull += 5
                                        vessel.scrap -= 5
                                    }
                                } else if (enemy.hull <= 0) {
                                    vessel.hull += 5
                                    vessel.scrap -= 5
                                }
                            }
                        }
                        return
                    }
                } else {
                    if (vessel.star == 0) {
                        if (vessel.upgradeMenu.repairButton.isPointInside(TIP_engine)) {
                            if (vessel.scrap >= 5) {
                                if (vessel.hull <= 295) {
                                    if (enemy.guys) {
                                        let c = 0
                                        for (let t = 0; t < enemy.guys.length; t++) {
                                            if (enemy.guys[t].hostile == 1 && enemy.guys[t].mindControlled != 1) {
                                                c++
                                            }
                                        }
                                        if (enemy.guys.length == 0 || c == enemy.guys.length) {
                                            vessel.hull += 5
                                            vessel.scrap -= 5
                                        }
                                    } else if (enemy.hull <= 0) {
                                        vessel.hull += 5
                                        vessel.scrap -= 5
                                    }
                                }
                            }
                        }
                        return
                    }
                }
            }

            for (let t = 0; t < vessel.weapons.length; t++) {
                if (right <= 0) {
                    vessel.weapons[t].check(TIP_engine)
                }
            }

            vessel.UI.check(TIP_engine)



            if (vessel.upgradeMenu.open == 1 && start == 2) {

                for (let g = 0; g < vessel.guys.length; g++) {
                    if (vessel.guys[g].healthbox.isPointInside(TIP_engine)) {
                        for (let r = 0; r < vessel.guys.length; r++) {
                            vessel.guys[r].zSelected = 0
                        }
                        if (vessel.guys[g].hostile != 1) {
                            if (keysPressed['z']) {
                                vessel.guys[g].zSelected = 1
                            }
                        }
                        // vessel.guys[g].path = [vessel.guys[g].tile]
                        // vessel.guys[g].flagpath = [vessel.guys[g].tile]
                    }
                    // if (vessel.guys[g].zSelected == 1) {
                    //     for (let d = 0; d < vessel.guys[g].gear.length; d++) {
                    //         if (vessel.guys[g].gear[d].body.isPointInside(TIP_engine)) {
                    //             vet = 1
                    //         }
                    //     }
                    // }
                }
                return
            }
            // ////////////////////////////////////////////////////////////console.log(vessel.energy.upgradeMenu)

            // if (keysPressed['2']) {
            //     ////////////////////////////////////////////console.log(vessel.doors.length)
            //     let door = new Airlock(TIP_engine.x, TIP_engine.y)
            //     vessel.doors.push(door)
            //     ////////////////////////////////////////////console.log(JSON.stringify(vessel.doors))
            //     return
            // }

            // for (let t = 0; t < enemy.blocks.length; t++) {
            //     for (let k = 0; k < enemy.blocks[t].length; k++) {
            //         if (enemy.blocks[t][k].isPointInside(TIP_engine)) {
            //             if (keysPressed['p']) {
            //                 enemy.blocks[t][k].fire = -100
            //                 enemy.blocks[t][k].onFire = 1
            //             }
            //         }
            //     }
            // }

            //         if (enemy.blocks[t][k].isPointInside(TIP_engine)) {
            //             // ////////////////////////////////////////////////////////////console.log(enemy.blocks[t][k].t, enemy.blocks[t][k].k)

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
            // ////////////////////////////////////////////////////////console.log(JSON.stringify(enemy.doors))
            // ////////////////////////////////////////////////////////console.log(JSON.stringify(enemy.blocks))
            // return
            // wad.launch(TIP_engine)
            for (let t = 0; t < vessel.doors.length; t++) {
                if (right <= 0) {
                    if (vessel.doors[t].check(TIP_engine)) {
                        return
                    }
                }
            }
            for (let t = 0; t < enemy.doors.length; t++) {
                if (right <= 0) {
                    // if (enemy.doors[t].check(TIP_engine)) {
                    //     return //why was this here?
                    // }
                }
            }
            right = 0
            let tile = {}
            if (start == 2) {
                if (vessel.teleButton.isPointInside(TIP_engine)) {
                    for (let g = 0; g < vessel.guys.length; g++) {
                        if (vessel.guys[g].tile.special == 1) {
                            if (vessel.UI.systems[7].sto > 0) {
                                if (vessel.guys[g].hostile != 1) {
                                    vessel.guys[g].teleflag = 1
                                    return
                                }
                            }
                        }
                    }
                }
            }

            let vwt = -1
            if (vessel.guys) {
                for (let g = 0; g < vessel.guys.length; g++) {
                    if (vessel.guys[g].stretch == 1) {
                        for (let r = 0; r < vessel.guys[g].bodies.length; r++) {
                            if (vessel.guys[g].bodies[r].isPointInside(TIP_engine)) {
                                vwt = g
                            }
                        }
                    }
                }
            }

            let chet = 1
            if (vessel.guys) {
                for (let g = 0; g < vessel.guys.length; g++) {
                    if (vessel.guys[g].healthbox.isPointInside(TIP_engine)) {
                        chet = 0
                        break
                    }
                }
            }

            for (let t = 0; t < vessel.blocks.length; t++) {
                for (let k = 0; k < vessel.blocks[t].length; k++) {
                    if (vessel.blocks[t][k].isPointInside(TIP_engine) || chet == 0) {
                        // if (keysPressed['p']) {
                        //     vessel.blocks[t][k].fire = -100
                        //     // vessel.blocks[t][k].onFire = 1
                        // }
                        // ////////////////////////////////////////////////////////////console.log(vessel.blocks[t][k].t, vessel.blocks[t][k].k)
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

                        if (vessel.guys) {
                            let vet = 0
                            if (vessel.upgradeMenu.button.isPointInside(TIP_engine)) {
                                vet = 1
                            }
                            if (vessel.upgradeMenu.open == 1) {
                                if (vessel.upgradeMenu.window.isPointInside(TIP_engine)) {
                                    vet = 1
                                }
                            }
                            for (let g = 0; g < vessel.guys.length; g++) {
                                // vessel.guys[g].selected = 0
                                if (tile == vessel.guys[g].tile || vessel.guys[g].healthbox.isPointInside(TIP_engine) || vwt == g) {
                                    for (let r = 0; r < vessel.guys.length; r++) {
                                        vessel.guys[r].selected = 0
                                        // if(keysPressed['z']){
                                        if (vet == 0) {
                                            vessel.guys[r].zSelected = 0
                                        }
                                        // }
                                    }
                                    vet = 1

                                    if (vessel.guys[g].hostile != 1) {
                                        if (keysPressed['z']) {
                                            vessel.guys[g].zSelected = 1
                                        }
                                        vessel.guys[g].selected = 1
                                        whet = 1
                                    }
                                    // vessel.guys[g].path = [vessel.guys[g].tile]
                                    // vessel.guys[g].flagpath = [vessel.guys[g].tile]
                                }
                                if (vessel.guys[g].zSelected == 1) {
                                    for (let d = 0; d < vessel.guys[g].gear.length; d++) {
                                        if (vessel.guys[g].gear[d].body.isPointInside(TIP_engine)) {
                                            vet = 1
                                        }
                                    }
                                }
                            }

                            if (vet == 0) {

                            }

                            if (vet == 0) {
                                if (vessel.upgradeMenu.open == 1) {
                                    if (vessel.upgradeMenu.window.isPointInside(TIP_engine)) {
                                        for (let r = 0; r < vessel.guys.length; r++) {
                                            vessel.guys[r].zSelected = 0
                                        }
                                    } else {
                                        for (let r = 0; r < vessel.guys.length; r++) {
                                            vessel.guys[r].zSelected = 0
                                        }
                                    }
                                } else {
                                    for (let r = 0; r < vessel.guys.length; r++) {
                                        vessel.guys[r].zSelected = 0
                                    }
                                }
                            }
                            if (vessel.guys) {
                                vessel.guys.sort((a, b) => a.selected > b.selected ? -1 : 1)
                                if (vessel.guys.length > 0) {
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
                                }
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
                if (start == 1) {
                    stars.check(TIP_engine)
                }
            }


            for (let t = 0; t < enemy.blocks.length; t++) {
                for (let k = 0; k < enemy.blocks[t].length; k++) {
                    if (enemy.blocks[t][k].isPointInside(TIP_engine)) {
                        // if (keysPressed['p']) {
                        //     enemy.blocks[t][k].fire = -100
                        //     // enemy.blocks[t][k].onFire = 1
                        // }
                        // ////////////////////////////////////////////////////////////console.log(enemy.blocks[t][k].t, enemy.blocks[t][k].k)
                        // if (keysPressed['m']) {
                        //     enemy.blocks[t][k].medbay = 1
                        //     enemy.blocks[t][k].color = "#00ff0044"
                        // }
                        // if (keysPressed['w']) {
                        //     enemy.blocks[t][k].weapon = 1
                        //     enemy.blocks[t][k].color = "#ff00FF44"
                        // }
                        // if (keysPressed['s']) {
                        //     enemy.blocks[t][k].shield = 1
                        //     enemy.blocks[t][k].color = "#00ffff44"
                        // }
                        // if (keysPressed['h']) {
                        //     enemy.blocks[t][k].helm = 1
                        //     enemy.blocks[t][k].color = "#FFFF0044"
                        // }
                        // if (keysPressed['e']) {
                        //     enemy.blocks[t][k].engine = 1
                        //     enemy.blocks[t][k].color = "#FFFF0044"
                        // }
                        // if (keysPressed['x']) {
                        //     enemy.blocks[t][k].security = 1
                        //     enemy.blocks[t][k].color = "#88888844"
                        // }
                        // if (keysPressed['o']) {
                        //     enemy.blocks[t][k].oxygen = 1
                        //     enemy.blocks[t][k].color = "#0000ff44"
                        // }
                        // if (keysPressed['l']) {
                        //     enemy.blocks[t][k].special = 1
                        //     enemy.blocks[t][k].color = "#ffffff44"
                        // }
                        // if (keysPressed['y']) {
                        //     enemy.blocks[t][k].empty = 1
                        //     enemy.blocks[t][k].color = "#00000044"
                        // }
                        tile = enemy.blocks[t][k]
                        // tile.integrity *= .5
                        let whet = 0
                        if (enemy.guys) {

                            for (let g = 0; g < enemy.guys.length; g++) {
                                // enemy.guys[g].selected = 0
                                if (tile == enemy.guys[g].tile || enemy.guys[g].healthbox.isPointInside(TIP_engine) || vwt == g) {
                                    for (let r = 0; r < enemy.guys.length; r++) {
                                        enemy.guys[r].selected = 0
                                    }
                                    if (enemy.guys[g].hostile == 1) {
                                        enemy.guys[g].selected = 1
                                        whet = 1
                                    }
                                    // enemy.guys[g].path = [enemy.guys[g].tile]
                                    // enemy.guys[g].flagpath = [enemy.guys[g].tile]
                                }
                            }
                        }

                        if (enemy.guys) {
                            enemy.guys.sort((a, b) => a.selected > b.selected ? -1 : 1)
                            if (enemy.guys.length > 0) {
                                if (enemy.guys[0].selected == 1) {
                                    whet = 1
                                }
                                if (enemy.guys[0].tile.t != tile.t || enemy.guys[0].tile.k != tile.k) {
                                    if (enemy.guys[0].selected == 1 && enemy.guys[0].hostile == 1) {
                                        if (enemy.guys[0].cound > 0) {
                                            enemy.guys[0].turning = 1
                                            enemy.guys[0].flagpath = astar.search(enemy, enemy.guys[0].tile, tile)
                                            enemy.guys[0].stogo = tile
                                            if (enemy.guys[0].flagpath.length > 1) {
                                                enemy.guys[0].selected = 0
                                            }
                                        } else {
                                            enemy.guys[0].path = astar.search(enemy, enemy.guys[0].tile, tile)
                                            enemy.guys[0].stogo = tile
                                            if (enemy.guys[0].path.length > 1) {
                                                enemy.guys[0].selected = 0
                                            }
                                        }
                                        whet = 1
                                    }
                                }

                                // if (whet == 0) {
                                //     if (tile.marked == 1) {
                                //         if (tile.holed != 1) {
                                //             tile.holed = 1
                                //             enemy.hull -= 2
                                //         } else {
                                //             tile.holed = 0
                                //         }
                                //     }
                                // }

                                // for (let g = 0; g < enemy.guys.length; g++) {
                                //     // enemy.guys[g].selected = 0
                                // }
                            }
                        }
                        break
                    }
                }
                if (start == 1) {
                    stars.check(TIP_engine)
                }
            }

            ////////////////////////////////////////////////////////////console.log(JSON.stringify(enemy.blocks))
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
            TIP_engine.x = XS_engine//*.666666
            TIP_engine.y = YS_engine//*.666666
            TIP_engine.body = TIP_engine
            stars.hover(TIP_engine)
        }
    }
    // function gamepad_control(object, speed = 1) { // basic control for objects using the controler
    //     //         //////////////////////////////////////////////////////////////console.log(gamepadAPI.axesStatus[1]*gamepadAPI.axesStatus[0]) //debugging
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


    let starcanvas = document.getElementById('starcanvas') //getting canvas from document
    let shipcanvas = document.getElementById('shipcanvas') //getting canvas from document
    let shake = document.getElementById('shake') //getting canvas from document


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

    let engineblast = new Image()
    engineblast.src = "engineblast.png"
    let engineblastr = new Image()
    engineblastr.src = "engineblastr.png"

    class Tile {
        constructor(x, y, width, height, color, id, size, posx, posy, walkable) {
            this.left = 0
            this.right = 0
            this.newlyOnFire = 0
            this.onFire = 0
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
            // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////console.log(link)
            // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////console.log(bottle)
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
            //     // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////console.log(this)

            //     // this.createWall();
            //     return;
            //     // }else if (link.hypotenuse() < 11) {
            // } else if (this.posx == roundedx && this.posy == roundedy) {
            //     //   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////console.log("hit the startNode");
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
                if (this.newlyHoled != 1) {
                    breach.play()
                }
                this.newlyHoled = 1
            }
            if (this.integrity >= 98) {
                this.holed = 0
                this.newlyHoled = 0
            }
            if (this.holed == 1) {
                canvas_context.drawImage(holeimg, 0, 0, 32, 32, this.x + 8, this.y + 8, this.width - 16, this.height - 16)
            }
            if (this.fire < 50) {
                if (this.onFire == 0) {
                    this.newlyOnFire = 1
                }
                this.onFire = 1
            }
            if (this.fire >= 50) {
                this.onFire = 0
                this.newlyOnFire = 0
            }
            if (this.onFire == 1) {
                // if(Math.random()<.5){
                if (this.newlyOnFire == 1) {
                    for (let t = 0; t < firesounds.length; t++) {
                        if (firesounds[t].paused) {
                            firesounds[t].play()
                            break
                        }
                    }
                    this.newlyOnFire = 0
                } else {
                    // for (let t = 0; t < firesounds.length; t++) {
                    if (firesounds[0].paused) {
                        firesounds[0].play()
                        // break
                    }
                    // }
                }
                this.tag++
                this.tag %= 18
                // }
                let frat = (50 - this.fire) / 50
                if (frat < .1) {
                    frat = .1
                } else if (frat < .2) {
                    frat = .2
                } else if (frat < .3) {
                    frat = .3
                } else if (frat < .4) {
                    frat = .4
                } else if (frat < .5) {
                    frat = .5
                } else if (frat < .6) {
                    frat = .6
                } else if (frat < .75) {
                    frat = .75
                } else if (frat < .9) {
                    frat = .9
                } else if (frat >= 1) {
                    frat = 1
                }
                canvas_context.drawImage(fire, this.tag * (fire.width / 18), 0, fire.width / 18, fire.height, this.x + ((1 - frat) * this.width * .5), this.y + ((1 - frat) * this.height * .5), this.width * (frat), this.height * (frat))
            }
        }
        subdraw() {
            if (this.left == 1) {
                if (vessel.hash) {
                    if (vessel.hash['engine'].integrity > 100 * (1 - (1 / (11 - vessel.UI.systems[6].max)))) {
                        if (vessel.UI.systems[6].sto + vessel.UI.systems[6].fed > 0) {
                            canvas_context.drawImage(engineblast, (1 + Math.floor(Math.random() * 4)) * (32), 0, engineblast.width / 5, engineblast.height, this.x - (this.width * 2), this.y, this.width * 2, this.height)
                        } else {
                            canvas_context.drawImage(engineblast, 0, 0, engineblast.width / 5, engineblast.height, this.x - (this.width * 2), this.y, this.width * 2, this.height)
                        }
                    } else {
                        canvas_context.drawImage(engineblast, 0, 0, engineblast.width / 5, engineblast.height, this.x - (this.width * 2), this.y, this.width * 2, this.height)

                    }
                }
            }
            if (this.right == 1) {
                if (enemy.hash) {
                    if (enemy.hash['engine'].integrity > 100 * (1 - (1 / (11 - enemy.UI.systems[6].max)))) {
                        if (enemy.UI.systems[6].sto + enemy.UI.systems[6].fed > 0) {
                            canvas_context.drawImage(engineblastr, (1 + Math.floor(Math.random() * 4)) * (32), 0, engineblastr.width / 5, engineblastr.height, this.x + (this.width), this.y, this.width * 2, this.height)
                        } else {
                            canvas_context.drawImage(engineblastr, 0, 0, engineblastr.width / 5, engineblastr.height, this.x + (this.width), this.y, this.width * 2, this.height)
                        }
                    } else {
                        canvas_context.drawImage(engineblastr, 0, 0, engineblastr.width / 5, engineblastr.height, this.x + (this.width), this.y, this.width * 2, this.height)
                    }
                }
            }
        }
        draw() {

            let subx = (this.width - 16)
            let subz = (this.width - 16) * .5
            if (this.helm == 1 && this.medbay == 1) {
                this.color = "#AAFF0044"
                if (this.medbay == 1) {
                    canvas_context.drawImage(medsysicon, 0, 0, 16, 16, this.x + subz - 5, this.y + subz - 5, this.width - subx, this.height - subx)
                }
                if (this.helm == 1) {
                    canvas_context.drawImage(helmsysicon, 0, 0, 16, 16, this.x + subz + 5, this.y + subz, this.width - subx, this.height - subx)
                }
            }else{

                if (this.oxygen == 1 && this.medbay == 1) {
                    this.color = "#00FFAA44"
                    if (this.medbay == 1) {
                        canvas_context.drawImage(medsysicon, 0, 0, 16, 16, this.x + subz - 5, this.y + subz - 5, this.width - subx, this.height - subx)
                    }
                    if (this.oxygen == 1) {
                        canvas_context.drawImage(oxysysicon, 0, 0, 16, 16, this.x + subz + 5, this.y + subz, this.width - subx, this.height - subx)
                    }
                } else {
    
                    if (this.weapon == 1 && this.medbay == 1) {
                        if (this.medbay == 1) {
                            canvas_context.drawImage(medsysicon, 0, 0, 16, 16, this.x + subz - 5, this.y + subz - 5, this.width - subx, this.height - subx)
                        }
                        if (this.weapon == 1) {
                            canvas_context.drawImage(wepsysicon, 0, 0, 16, 16, this.x + subz + 5, this.y + subz, this.width - subx, this.height - subx)
                        }
                    } else {
                        // if (this.medbay == 1) {
                        //     canvas_context.drawImage(medsysicon, 0, 0, 16, 16, this.x + subz, this.y + subz, this.width - subx, this.height - subx)
                        // }
                        if (this.weapon == 1 && this.shield == 1) {
                            if (this.weapon == 1) {
                                canvas_context.drawImage(wepsysicon, 0, 0, 16, 16, this.x + subz - 5, this.y + subz - 5, this.width - subx, this.height - subx)
                            }
                            if (this.shield == 1) {
                                canvas_context.drawImage(shieldsysicon, 0, 0, 16, 16, this.x + subz + 5, this.y + subz, this.width - subx, this.height - subx)
                            }
                        } else {
                            if (this.weapon == 1) {
                                canvas_context.drawImage(wepsysicon, 0, 0, 16, 16, this.x + subz, this.y + subz, this.width - subx, this.height - subx)
                            }
                            if (this.shield == 1) {
                                canvas_context.drawImage(shieldsysicon, 0, 0, 16, 16, this.x + subz, this.y + subz, this.width - subx, this.height - subx)
                            }
                        }
    
                        if (this.security == 1 && this.medbay == 1) {
                            if (this.security == 1) {
                                canvas_context.drawImage(securitysysicon, 0, 0, 16, 16, this.x + subz - 5, this.y + subz - 5, this.width - subx, this.height - subx)
                            }
                            if (this.medbay == 1) {
                                canvas_context.drawImage(medsysicon, 0, 0, 16, 16, this.x + subz + 5, this.y + subz + 5, this.width - subx, this.height - subx)
                            }
                        } else {
                            if (this.security == 1) {
                                canvas_context.drawImage(securitysysicon, 0, 0, 16, 16, this.x + subz, this.y + subz, this.width - subx, this.height - subx)
                            }
                            if (this.medbay == 1) {
                                canvas_context.drawImage(medsysicon, 0, 0, 16, 16, this.x + subz, this.y + subz, this.width - subx, this.height - subx)
                            }
                        }
                    }
    
                    if (this.oxygen == 1) {
                        canvas_context.drawImage(oxysysicon, 0, 0, 16, 16, this.x + subz, this.y + subz, this.width - subx, this.height - subx)
                    }
    
    
    
                    if (this.special == 1) {
                        canvas_context.drawImage(teleportersysicon, 0, 0, 16, 16, this.x + subz, this.y + subz, this.width - subx, this.height - subx)
                    }
                    if (this.helm == 1 && this.engine == 1) {
    
                        if (this.engine == 1) {
                            canvas_context.drawImage(enginesysicon, 0, 0, 16, 16, this.x + subz - 5, this.y + subz - 5, this.width - subx, this.height - subx)
                        }
                        if (this.helm == 1) {
                            canvas_context.drawImage(helmsysicon, 0, 0, 16, 16, this.x + subz + 5, this.y + subz + 5, this.width - subx, this.height - subx)
                        }
                    } else {
    
                        if (this.engine == 1) {
                            canvas_context.drawImage(enginesysicon, 0, 0, 16, 16, this.x + subz, this.y + subz, this.width - subx, this.height - subx)
                        }
                        if (this.helm == 1) {
                            canvas_context.drawImage(helmsysicon, 0, 0, 16, 16, this.x + subz, this.y + subz, this.width - subx, this.height - subx)
                        }
                    }
    
    
                }
            }


            if (this.walkable == false) {
                if (this.integrity > 99) {
                    this.integrity = 100
                }
            }


            if (this.weaponized == 1) {
                if (vessel.weapons) {
                    if (vessel.supratiles) {
                        if (vessel.supratiles.includes(this)) {
                            if (vessel.wepDrawCount < vessel.weapons.length) {
                                if (vessel.weapons[vessel.wepDrawCount].real == 1) {
                                    if (!(vessel.weapons[vessel.wepDrawCount].temp > -1)) {
                                        vessel.weapons[vessel.wepDrawCount].center.x = this.x + (this.width * 1.45)
                                        vessel.weapons[vessel.wepDrawCount].center.y = this.y + (this.width * .25)
                                        if (vessel.weapons[vessel.wepDrawCount].type == 0) {
                                            canvas_context.drawImage(basiclaser, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 1) {
                                            canvas_context.drawImage(basicmissle, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 2) {
                                            canvas_context.drawImage(doublelaser, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 3) {
                                            canvas_context.drawImage(triplelaser, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 4) {
                                            canvas_context.drawImage(crewlaser, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 5) {
                                            canvas_context.drawImage(megalaser, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 6) {
                                            canvas_context.drawImage(mediummmissle, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 7) {
                                            canvas_context.drawImage(bigmissle, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 8) {
                                            canvas_context.drawImage(megamissle, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 9) {
                                            canvas_context.drawImage(heatbeam, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 10) {
                                            canvas_context.drawImage(ion1, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 11) {
                                            canvas_context.drawImage(ion2, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 12) {
                                            canvas_context.drawImage(ion3, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 13) {
                                            canvas_context.drawImage(ion4, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 14) {
                                            canvas_context.drawImage(rail1, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 15) {
                                            canvas_context.drawImage(rail2, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 16) {
                                            canvas_context.drawImage(rail3, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 17) {
                                            canvas_context.drawImage(shieldsap1, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 18) {
                                            canvas_context.drawImage(shieldsap2, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 19) {
                                            canvas_context.drawImage(shieldsap3, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 20) {
                                            canvas_context.drawImage(hardbeam1, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 21) {
                                            canvas_context.drawImage(hardbeam2, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 22) {
                                            canvas_context.drawImage(hardbeam3, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 23) {
                                            canvas_context.drawImage(scrapcannon1, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 24) {
                                            canvas_context.drawImage(scrapcannon2, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 25) {
                                            canvas_context.drawImage(scrapcannon3, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 26) {
                                            canvas_context.drawImage(heatbeam2, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 27) {
                                            canvas_context.drawImage(mindcontrol1, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 28) {
                                            canvas_context.drawImage(mindcontrol2, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 29) {
                                            canvas_context.drawImage(hook1, 0, 0, hook1.width, hook1.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 30) {
                                            canvas_context.drawImage(hook2, 0, 0, hook1.width, hook1.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 31) {
                                            canvas_context.drawImage(hook3, 0, 0, hook1.width, hook1.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 32) {
                                            canvas_context.drawImage(tractor1, 0, 0, hook1.width, hook1.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 33) {
                                            canvas_context.drawImage(tractor2, 0, 0, hook1.width, hook1.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 34) {
                                            canvas_context.drawImage(mirror, 0, 0, hook1.width, hook1.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (vessel.weapons[vessel.wepDrawCount].type == 35) {
                                            canvas_context.drawImage(mirror2, 0, 0, hook1.width, hook1.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        }else if (vessel.weapons[vessel.wepDrawCount].type == 36) {
                                            canvas_context.drawImage(capacitor1, 0, 0, hook1.width, hook1.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        }else if (vessel.weapons[vessel.wepDrawCount].type == 37) {
                                            canvas_context.drawImage(capacitor2, 0, 0, hook1.width, hook1.height, (this.x + (this.width * 1))+2.5, this.y, this.width * .5, this.height * .5)
                                        }
                                    }

                                }
                                vessel.wepDrawCount++

                                if (vessel.wepDrawCount < vessel.weapons.length) {
                                    if (vessel.weapons[vessel.wepDrawCount].real == 1) {
                                        if (!(vessel.weapons[vessel.wepDrawCount].temp > -1)) {
                                            vessel.weapons[vessel.wepDrawCount].center.x = this.x + (this.width * 1.45)
                                            vessel.weapons[vessel.wepDrawCount].center.y = this.y + (this.width * .75)
                                            if (vessel.weapons[vessel.wepDrawCount].type == 0) {
                                                canvas_context.drawImage(basiclaser, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 1) {
                                                canvas_context.drawImage(basicmissle, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 2) {
                                                canvas_context.drawImage(doublelaser, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 3) {
                                                canvas_context.drawImage(triplelaser, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 4) {
                                                canvas_context.drawImage(crewlaser, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 5) {
                                                canvas_context.drawImage(megalaser, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 6) {
                                                canvas_context.drawImage(mediummmissle, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 7) {
                                                canvas_context.drawImage(bigmissle, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 8) {
                                                canvas_context.drawImage(megamissle, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 9) {
                                                canvas_context.drawImage(heatbeam, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 10) {
                                                canvas_context.drawImage(ion1, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 11) {
                                                canvas_context.drawImage(ion2, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 12) {
                                                canvas_context.drawImage(ion3, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 13) {
                                                canvas_context.drawImage(ion4, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 14) {
                                                canvas_context.drawImage(rail1, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 15) {
                                                canvas_context.drawImage(rail2, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 16) {
                                                canvas_context.drawImage(rail3, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 17) {
                                                canvas_context.drawImage(shieldsap1, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 18) {
                                                canvas_context.drawImage(shieldsap2, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 19) {
                                                canvas_context.drawImage(shieldsap3, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 20) {
                                                canvas_context.drawImage(hardbeam1, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 21) {
                                                canvas_context.drawImage(hardbeam2, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 22) {
                                                canvas_context.drawImage(hardbeam3, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 23) {
                                                canvas_context.drawImage(scrapcannon1, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 24) {
                                                canvas_context.drawImage(scrapcannon2, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 25) {
                                                canvas_context.drawImage(scrapcannon3, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 26) {
                                                canvas_context.drawImage(heatbeam2, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 27) {
                                                canvas_context.drawImage(mindcontrol1, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 28) {
                                                canvas_context.drawImage(mindcontrol2, 0, 0, engineblast.width / 5, engineblast.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 29) {
                                                canvas_context.drawImage(hook1, 0, 0, hook1.width, hook1.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 30) {
                                                canvas_context.drawImage(hook2, 0, 0, hook1.width, hook1.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 31) {
                                                canvas_context.drawImage(hook3, 0, 0, hook1.width, hook1.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 32) {
                                                canvas_context.drawImage(tractor1, 0, 0, hook1.width, hook1.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 33) {
                                                canvas_context.drawImage(tractor2, 0, 0, hook1.width, hook1.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 34) {
                                                canvas_context.drawImage(mirror, 0, 0, hook1.width, hook1.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 35) {
                                                canvas_context.drawImage(mirror2, 0, 0, hook1.width, hook1.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 36) {
                                                canvas_context.drawImage(capacitor1, 0, 0, hook1.width, hook1.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (vessel.weapons[vessel.wepDrawCount].type == 37) {
                                                canvas_context.drawImage(capacitor2, 0, 0, hook1.width, hook1.height, (this.x + (this.width * 1))+2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            }
                                        }
                                    }

                                    vessel.wepDrawCount++
                                }
                            }

                        }
                    }
                }
            }


            if (this.weaponized == 1) {
                if (enemy.weapons) {
                    if (enemy.supratiles) {
                        if (enemy.supratiles.includes(this)) {
                            if (enemy.wepDrawCount < enemy.weapons.length) {
                                if (enemy.weapons[enemy.wepDrawCount].real == 1) {
                                    if (!(enemy.weapons[enemy.wepDrawCount].temp > -1)) {
                                        enemy.weapons[enemy.wepDrawCount].center.x = this.x - (this.width * .45)
                                        enemy.weapons[enemy.wepDrawCount].center.y = this.y + (this.width * .25)
                                        if (enemy.weapons[enemy.wepDrawCount].type == 0) {
                                            canvas_context.drawImage(basiclaserr, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 1) {
                                            canvas_context.drawImage(basicbombr, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 2) {
                                            canvas_context.drawImage(doublelaserr, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 3) {
                                            canvas_context.drawImage(triplelaserr, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 4) {
                                            canvas_context.drawImage(crewlaserr, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 5) {
                                            canvas_context.drawImage(megalaserr, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 6) {
                                            canvas_context.drawImage(mediummissler, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 7) {
                                            canvas_context.drawImage(bigmissler, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 8) {
                                            canvas_context.drawImage(megamissler, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 9) {
                                            canvas_context.drawImage(heatbeamr, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 10) {
                                            canvas_context.drawImage(ion1r, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 11) {
                                            canvas_context.drawImage(ion2r, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 12) {
                                            canvas_context.drawImage(ion3r, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 13) {
                                            canvas_context.drawImage(ion4r, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 14) {
                                            canvas_context.drawImage(railgunr1, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 15) {
                                            canvas_context.drawImage(railgunr2, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 16) {
                                            canvas_context.drawImage(railgunr3, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 17) {
                                            canvas_context.drawImage(shieldsapr1, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 18) {
                                            canvas_context.drawImage(shieldsapr2, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 19) {
                                            canvas_context.drawImage(shieldsapr3, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 20) {
                                            canvas_context.drawImage(hardbeamr1, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 21) {
                                            canvas_context.drawImage(hardbeamr2, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 22) {
                                            canvas_context.drawImage(hardbeamr3, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 23) {
                                            canvas_context.drawImage(scrapcannonr1, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 24) {
                                            canvas_context.drawImage(scrapcannonr2, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 25) {
                                            canvas_context.drawImage(scrapcannonr3, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 26) {
                                            canvas_context.drawImage(heatbeamr2, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 27) {
                                            canvas_context.drawImage(mindcontrolr1, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 28) {
                                            canvas_context.drawImage(mindcontrolr2, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 29) {
                                            canvas_context.drawImage(hookr1, 0, 0, hookr3.width, hookr3.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 30) {
                                            canvas_context.drawImage(hookr2, 0, 0, hookr3.width, hookr3.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 31) {
                                            canvas_context.drawImage(hookr3, 0, 0, hookr3.width, hookr3.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 32) {
                                            canvas_context.drawImage(tractorr1, 0, 0, hookr3.width, hookr3.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 33) {
                                            canvas_context.drawImage(tractorr2, 0, 0, hookr3.width, hookr3.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 34) {
                                            canvas_context.drawImage(mirrorr, 0, 0, hookr3.width, hookr3.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 35) {
                                            canvas_context.drawImage(mirrorr2, 0, 0, hookr3.width, hookr3.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 36) {
                                            canvas_context.drawImage(capacitorr1, 0, 0, hookr3.width, hookr3.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        } else if (enemy.weapons[enemy.wepDrawCount].type == 37) {
                                            canvas_context.drawImage(capacitorr2, 0, 0, hookr3.width, hookr3.height, (this.x - (this.width * .5))-2.5, this.y, this.width * .5, this.height * .5)
                                        }
                                    }
                                }
                                enemy.wepDrawCount++

                                if (enemy.wepDrawCount < enemy.weapons.length) {
                                    if (enemy.weapons[enemy.wepDrawCount].real == 1) {
                                        if (!(enemy.weapons[enemy.wepDrawCount].temp > -1)) {
                                            enemy.weapons[enemy.wepDrawCount].center.x = this.x - (this.width * .45)
                                            enemy.weapons[enemy.wepDrawCount].center.y = this.y + (this.width * .75)
                                            if (enemy.weapons[enemy.wepDrawCount].type == 0) {
                                                canvas_context.drawImage(basiclaserr, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 1) {
                                                canvas_context.drawImage(basicbombr, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 2) {
                                                canvas_context.drawImage(doublelaserr, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 3) {
                                                canvas_context.drawImage(triplelaserr, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 4) {
                                                canvas_context.drawImage(crewlaserr, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 5) {
                                                canvas_context.drawImage(megalaserr, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 6) {
                                                canvas_context.drawImage(mediummissler, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 7) {
                                                canvas_context.drawImage(bigmissler, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 8) {
                                                canvas_context.drawImage(megamissler, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 9) {
                                                canvas_context.drawImage(heatbeamr, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 10) {
                                                canvas_context.drawImage(ion1r, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 11) {
                                                canvas_context.drawImage(ion2r, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 12) {
                                                canvas_context.drawImage(ion3r, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 13) {
                                                canvas_context.drawImage(ion4r, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 14) {
                                                canvas_context.drawImage(railgunr1, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 15) {
                                                canvas_context.drawImage(railgunr2, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 16) {
                                                canvas_context.drawImage(railgunr3, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 17) {
                                                canvas_context.drawImage(shieldsapr1, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 18) {
                                                canvas_context.drawImage(shieldsapr2, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 19) {
                                                canvas_context.drawImage(shieldsapr3, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 20) {
                                                canvas_context.drawImage(hardbeamr1, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 21) {
                                                canvas_context.drawImage(hardbeamr2, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 22) {
                                                canvas_context.drawImage(hardbeamr3, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 23) {
                                                canvas_context.drawImage(scrapcannonr1, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 24) {
                                                canvas_context.drawImage(scrapcannonr2, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 25) {
                                                canvas_context.drawImage(scrapcannonr3, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 26) {
                                                canvas_context.drawImage(heatbeamr2, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 27) {
                                                canvas_context.drawImage(mindcontrolr1, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 28) {
                                                canvas_context.drawImage(mindcontrolr2, 0, 0, engineblast.width / 5, engineblast.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 29) {
                                                canvas_context.drawImage(hookr1, 0, 0, hookr3.width, hookr3.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 30) {
                                                canvas_context.drawImage(hookr2, 0, 0, hookr3.width, hookr3.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 31) {
                                                canvas_context.drawImage(hookr3, 0, 0, hookr3.width, hookr3.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 32) {
                                                canvas_context.drawImage(tractorr1, 0, 0, hookr3.width, hookr3.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 33) {
                                                canvas_context.drawImage(tractorr2, 0, 0, hookr3.width, hookr3.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 34) {
                                                canvas_context.drawImage(mirrorr, 0, 0, mirrorr.width, hookr3.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 35) {
                                                canvas_context.drawImage(mirrorr2, 0, 0, mirrorr.width, hookr3.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 36) {
                                                canvas_context.drawImage(capacitor2, 0, 0, mirrorr.width, hookr3.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            } else if (enemy.weapons[enemy.wepDrawCount].type == 37) {
                                                canvas_context.drawImage(capacitorr2, 0, 0, mirrorr.width, hookr3.height, (this.x - (this.width * .5))-2.5, this.y + (this.width * .5), this.width * .5, this.height * .5)
                                            }
                                        }
                                    }

                                    enemy.wepDrawCount++
                                }
                            }
                        }
                    }
                }

            }
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
            // ////////////////////////////////////////////////////////////////////console.log("s")
            canvas_context.fillStyle = this.color
            // canvas_context.strokeStyle = this.color
            canvas_context.fillRect(this.x, this.y, this.width, this.height)

            let n 
            let eet = 0
            if(vessel.supratiles.includes(this)){
                n = vessel.neighbors(this)
            }else{
                eet = 1
                n = enemy.neighbors(this)
            }
            let links = [true,true,true,true]
            for(let t=  0;t<n.length;t++){
                if(n[t].x == this.x){
                    if(n[t].y > this.y){
                        links[0] = false
                    }else{
                        links[1] = false
                    }
                }else{
                    if(n[t].x > this.x){
                        links[2] = false
                    }else{
                        links[3] = false
                    }
                }
            }

            canvas_context.strokeStyle = "#88888888"
            canvas_context.lineWidth = 5

            if(eet == 1 && enemy.hull<=0){

            }else{
                if(links[1]){
                    canvas_context.strokeRect(this.x, this.y-1, this.width, 2)
                }
                if(links[0]){
                    canvas_context.strokeRect(this.x, this.y+this.height-1, this.width, 2)
                }
                if(links[3]){
                    canvas_context.strokeRect(this.x-1, this.y, 2, this.height)
                }
                if(links[2]){
                    canvas_context.strokeRect(this.x+this.width-1, this.y, 2, this.height)
                }
            }





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
            ////////////////////////////////////////////////////////////////////console.log(point, this)
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

    //audio files
    let firesounds = []
    for (let t = 0; t < 4; t++) {
        let firesound = new Audio()
        firesound.src = "firesound.mp3"
        firesound.volume = .5 - (t / 10)
        firesounds.push(firesound)
    }

    let scrap = new Audio()
    scrap.src = "scrap.mp3"

    let breach = new Audio()
    breach.src = "breach.mp3"

    let intruder = new Audio()
    intruder.src = "intruder.mp3"

    let blast = new Audio()
    blast.src = "blast.mp3"
    let wodopomsong = new Audio()
    wodopomsong.src = "wodopomsong.mp3"
    wodopomsong.volume = .3

    let laser1 = new Audio()
    laser1.src = "laser1.mp3"

    let laser2 = new Audio()
    laser2.src = "laser2.mp3"

    let laser3 = new Audio()
    laser3.src = "laser3.mp3"

    let ion1aud = new Audio()
    ion1aud.src = "ion1.mp3"
    let ion2aud = new Audio()
    ion2aud.src = "ion2.mp3"
    let crewion1aud = new Audio()
    crewion1aud.src = "crewion1.mp3"
    let crewion2aud = new Audio()
    crewion2aud.src = "crewion2.mp3"


    let rail1aud = new Audio()
    rail1aud.src = "rail1.mp3"

    let rail2aud = new Audio()
    rail2aud.src = "rail2.mp3"

    let rail3aud = new Audio()
    rail3aud.src = "rail3.mp3"



    let sap1aud = new Audio()
    sap1aud.src = "sap1aud.mp3"
    let sap2aud = new Audio()
    sap2aud.src = "sap2aud.mp3"
    let sap3aud = new Audio()
    sap3aud.src = "sap3aud.mp3"



    let crewlaseraud = new Audio()
    crewlaseraud.src = "crewlaser.mp3"

    let megalaseraud = new Audio()
    megalaseraud.src = "megalaser.mp3"

    let airlockopen = new Audio()
    airlockopen.src = "airlockopen.mp3"
    let heatbeamaud = new Audio()
    heatbeamaud.src = "heatbeamaud.mp3"


    let doorclose = new Audio()
    doorclose.src = "doorclose.mp3"

    let dooropen = new Audio()
    dooropen.src = "dooropen.mp3"
    let ropesound = new Audio()
    ropesound.src = "rope2.mp3"


    let rs = []
    let ps = []

    let tut1 = new Image()
    tut1.src = "tut1.png"
    let tut2 = new Image()
    tut2.src = "tut2.png"
    let tut3 = new Image()
    tut3.src = "tut3.png"
    let tut4 = new Image()
    tut4.src = "tut4.png"
    let tut5 = new Image()
    tut5.src = "tut5.png"
    let tut6 = new Image()
    tut6.src = "tut6.png"

    let crabship = new Image()
    crabship.src = "crabship.png"
    let crabshipsmall = new Image()
    crabshipsmall.src = "crabshipsmall.png"
    let beanshipsmall = new Image()
    beanshipsmall.src = "beanshipsmall.png"
    let mumshipsmall = new Image()
    mumshipsmall.src = "mumshipsmall.png"
    let joshipsmall = new Image()
    joshipsmall.src = "joshipsmall.png"
    let energyshipsmall = new Image()
    energyshipsmall.src = "energyshipsmall.png"

    let ximage = new Image()
    ximage.src = "yship.png"
    let shipimage = new Image()
    shipimage.src = "ship2.png"

    let shipimage2 = new Image()
    shipimage2.src = "ship3.png"
    let shipimage4 = new Image()
    shipimage4.src = "ship5.png"
    let shipimage5 = new Image()
    shipimage5.src = "ship6.png"
    let shipimage6 = new Image()
    shipimage6.src = "ship7.png"
    let shipimage7 = new Image()
    shipimage7.src = "ship8.png"
    let shipimage8 = new Image()
    shipimage8.src = "ship9.png"
    let shipimage9 = new Image()
    shipimage9.src = "ship10.png"
    let shipimage10 = new Image()
    shipimage10.src = "ship11.png"

    let shipimage3 = new Image()
    shipimage3.src = "ship4.png"

    let holeimg = new Image()
    holeimg.src = "hole.png"

    for (let t = 1; t < 23; t++) {
        let ing = new Image()
        ing.src = `r${t}.png`
        rs.push(ing)
    }

    for (let t = 1; t < 23; t++) {
        let ing = new Image()
        ing.src = `p${t}.png`
        ps.push(ing)
    }

    let runnyblast = new Image()
    runnyblast.src = "runnyblast.png"
    let energydeathimg = new Image()
    energydeathimg.src = "energydeathb.png"
    let faceless = new Image()
    faceless.src = "faceless.png"



    let rat = 720 / 512

    let z = 13
    let pomcheck = 0

    class Gear {
        constructor(type, guy) {
            this.guy = guy
            this.type = type
            this.body = new RectangleR(270, 650, 150, 32, "#444444")
            this.armor = 0
            this.damage = 1 / 6
            this.speed = 0
            this.name1 = ''
            this.regen = 0
            this.name2 = ''
            if (this.type == 0) {
                this.name1 = 'Basic Body '
                this.name2 = 'Armor'
                this.armor = .1
                this.damage = 1.1
                this.speed = 0
            }
            if (this.type == 1) {
                this.name1 = 'Cool Shoes'
                this.name2 = ''
                this.armor = .05
                this.damage = 1 / 6
                this.speed = -1
            }
            if (this.type == 2) {
                this.name2 = ''
                this.name1 = 'Nice Shoes'
                this.armor = .05
                this.damage = 1 / 6
                this.speed = -2
            }
            if (this.type == 3) {
                this.name1 = 'Slick Shoes'
                this.name2 = ''
                this.armor = .05
                this.damage = 1 / 6
                this.speed = -3
            }
            if (this.type == 4) {
                this.name1 = 'Personal '
                this.name2 = 'Synthesizer'
                this.armor = 0
                this.damage = 1 / 6
                this.speed = -1
                this.regen = .1
            }
        }
        check(point) {
            if (this.guy.zSelected == 1) {
                if (this.selected == 1) {
                    let wet = 0
                    let dry = 0
                    let index = -1
                    for (let t = 0; t < vessel.upgradeMenu.wepsto.length; t++) {
                        if (vessel.upgradeMenu.wepsto[t].body.isPointInside(point)) {
                            index = t
                            break
                        }
                    }
                    if (index != -1) {
                        ////////console.log(index)
                        let g = vessel.upgradeMenu.wepsto[index].gearType
                        vessel.upgradeMenu.wepsto[index] = new Weapon(-1, -1, this.type)
                        this.guy.gear[this.guy.gear.indexOf(this)] = new Gear(g, this.guy)
                    }
                }
                if (this.body.isPointInside(point)) {
                    this.selected = 1
                }
            }
        }
        balance() {
            this.guy.gearSpeed += this.speed
            this.guy.gearArmor += this.armor
            this.guy.gearDamage += this.damage
            this.guy.gearRegen += this.regen
            // ////////console.log(this.guy.gearArmor)
        }
        draw() {
            if (this.selected == 1) {
                this.body.color = "#AA5555"
            } else {

                this.body.color = "#555555"
            }
            if (this.guy.gear.indexOf(this) % 2 == 0) {
                this.body.x = this.guy.healthbox.x + this.guy.healthbox.width
                this.body.y = this.guy.healthbox.y + this.guy.healthbox.height + (Math.floor(this.guy.gear.indexOf(this) / 2) * 32)
            } else {
                this.body.x = this.guy.healthbox.x + this.guy.healthbox.width + 150
                this.body.y = this.guy.healthbox.y + this.guy.healthbox.height + (Math.floor(this.guy.gear.indexOf(this) / 2) * 32)
            }
            this.body.draw()
            canvas_context.font = "11px comic sans ms"
            canvas_context.fillStyle = "white"
            canvas_context.fillText(this.name1 + this.name2, this.body.x + 5, this.body.y + 20)
        }
    }

    class Guy {
        constructor(tile, type = -1) {
            this.fighting = -1
            this.fightCount = (Math.floor(Math.random() * 20))
            this.hostileTimer = 1
            this.zSelected = 0
            this.gearSpeed = 0
            this.gearArmor = 0
            this.gearDamage = 0
            this.gearRegen = 0
            this.meleeKills = 0
            // ////////////////////////console.log(type)
            this.bullets = []
            this.teleflag = 0
            this.energydeathtag = 0
            this.name = getRandomLightColor()
            this.tile = tile
            this.tile.walkable = false
            this.body = new Circle(256 * rat, 256 * rat, 16, "transparent")
            this.count = 0
            if (type == -1) {
                this.type = Math.floor(Math.random() * 22)
            } else {
                // ////////////////////////console.log("dd")
                this.type = type
            }



            if (vessel.type == 0) {
                if (pomcheck == 0) {
                    pomcheck = 1
                    this.type = 12
                    this.gear = []
                    for (let t = 0; t < 1; t++) {
                        this.gear.push(new Gear(0, this))
                    }
                    for (let t = 0; t < 1; t++) {
                        this.gear.push(new Gear(2, this))
                    }
                    // for (let t = 0; t < 1; t++) {
                    //     this.gear.push(new Gear(4, this))
                    // }
                    for (let t = 0; t < 4; t++) {
                        this.gear.push(new Gear(-1, this))
                    }
                } else if (pomcheck == 1) {
                    pomcheck = 2
                    this.type = 1
                    this.gear = []
                    for (let t = 0; t < 1; t++) {
                        this.gear.push(new Gear(0, this))
                    }
                    for (let t = 0; t < 1; t++) {
                        this.gear.push(new Gear(1, this))
                    }
                    for (let t = 0; t < 4; t++) {
                        this.gear.push(new Gear(-1, this))
                    }
                } else if (pomcheck == 2) {
                    pomcheck = 3
                    this.type = 11
                    this.gear = []
                    for (let t = 0; t < 1; t++) {
                        this.gear.push(new Gear(0, this))
                    }
                    for (let t = 0; t < 1; t++) {
                        this.gear.push(new Gear(3, this))
                    }
                    for (let t = 0; t < 4; t++) {
                        this.gear.push(new Gear(-1, this))
                    }
                } else if (pomcheck == 5) {
                    pomcheck = 4
                    this.type = 19
                } else {
                    this.gear = []
                    for (let t = 0; t < 6; t++) {
                        this.gear.push(new Gear(-1, this))
                    }
                    if (type == -1 && this.type == 11) {
                        while (this.type == 11) {
                            this.type = Math.floor(Math.random() * 22)
                        }
                    }
                }
            } else {
                if (vessel.type == 7) {

                    this.gear = []
                    for (let t = 0; t < 1; t++) {
                        this.gear.push(new Gear(4, this))
                    }
                    for (let t = 0; t < 5; t++) {
                        this.gear.push(new Gear(-1, this))
                    }

                } else if (vessel.type == 10) {
                    this.gear = []
                    for (let t = 0; t < 1; t++) {
                        this.gear.push(new Gear(0, this))
                    }
                    for (let t = 0; t < 5; t++) {
                        this.gear.push(new Gear(-1, this))
                    }

                } else {

                    this.gear = []
                    for (let t = 0; t < 6; t++) {
                        this.gear.push(new Gear(-1, this))
                    }
                }//plantship
            }
            if (vessel.type == 0) {

            }
            // } else {
            //     while (this.type == 11) {
            //         this.type = Math.floor(Math.random() * 22)
            //     }
            // }
            if (vessel.type == 1) {
                while (this.type == 11) {
                    this.type = Math.floor(Math.random() * 22)
                }
            }
            if (vessel.type == 2) {
                while (this.type == 11) {
                    this.type = Math.floor(Math.random() * 22)
                }
            }
            if (vessel.type == 3) {
                while (this.type == 11) {
                    this.type = Math.floor(Math.random() * 22)
                }
            }
            if (vessel.type == 4) {
                while (this.type == 11) {
                    this.type = Math.floor(Math.random() * 22)
                }
            }
            if (vessel.type == 5) {
                while (this.type == 11) {
                    this.type = Math.floor(Math.random() * 22)
                }
            }
            if (vessel.type == 6) {
                while (this.type == 11) {
                    this.type = Math.floor(Math.random() * 22)
                }
            }
            if (vessel.type == 7) {
                while (this.type == 11) {
                    this.type = Math.floor(Math.random() * 22)
                }
            }
            if (vessel.type == 8) {
                while (this.type == 11) {
                    this.type = Math.floor(Math.random() * 22)
                }
            }
            if (vessel.type == 9) {
                while (this.type == 11) {
                    this.type = Math.floor(Math.random() * 22)
                }
            }
            if (vessel.type == 10) {
                while (this.type == 11) {
                    this.type = Math.floor(Math.random() * 22)
                }
            }
            if (vessel.type == 11) {
                while (this.type == 11) {
                    this.type = Math.floor(Math.random() * 22)
                }
            }
            if (vessel.type == 12) {
                while (this.type == 11) {
                    this.type = Math.floor(Math.random() * 22)
                }
            }
            if (vessel.type >= 13) { //enough
                while (this.type == 11) {
                    this.type = Math.floor(Math.random() * 22)
                }
            }
            // while (this.type == 18) {
            //     this.type = Math.floor(Math.random() * 19)
            // }
            // if(Math.random() < .1){
            //     this.type = 18
            // }
            this.c2 = getRandomDarkColor()
            this.c1 = getRandomLightColor()
            // z++
            this.hit = 100
            this.airless = 0
            this.fireproof = 0
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
            this.repair = 2
            this.extinguish = 2
            this.energy = 0
            this.skills = ''

            this.damage = 5
            if (this.type == 18) {
                this.stats[0] = 4
                this.skills += 'Fast++, '
            }
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
                this.names = ["Psuch", "Psybie", "Psybo", "Bozbe", "Psychus", "Psybean", "Pinkus", "Dotsy", "Beanbo"]
                this.name = this.names[Math.floor(Math.random() * this.names.length)]
            }
            if (this.type == 6) {
                this.regen = 1
                this.skills += 'Regen+++,  Makes Air++, '
                this.names = ["Bloom", "Gulpod", "Podpak", "Podoak", "Rosthro", "Rost", "Pothra", "Pappthra", "Throcus"]
                this.name = this.names[Math.floor(Math.random() * this.names.length)]
            } else {
                this.regen = 0
            }
            if (this.type == 13) {
                this.energy = 1
                this.airless = 1
                this.skills += 'Energetic+, Breathless+, '
                this.names = ["Solan", "Soleus", "Sunz", "Tunzt", "Glewrn", "Shyen", "Beam", "Zahp", "Bahtsol"]
                this.name = this.names[Math.floor(Math.random() * this.names.length)]
            }
            this.isMedbay = 0
            if (this.type == 14) {
                this.isMedbay = 1
                this.stats[0] = 4
                this.skills += 'Medical++, Fast++'
                this.names = ["Shetar", "Heaba", "Gibule", "Beatwa", "Clea", "Zipstitch", "Tosuhe", "Figgz", "Plubeah"]
                this.name = this.names[Math.floor(Math.random() * this.names.length)]
            }

            if (this.type == 15) {
                this.stats[0] = 6
                this.stats[4] += 1
                this.stats[5] = .5
                this.energy = 1
                this.repair += 1
                this.damage = 2
                this.skills += 'Energetic+, Fast+, Repair+, Oxygen+, Fight--, Security--'
                this.names = ["Geliphant", "Phantigel", "Gelp", "Phelli", "Gelphi", "Phelliglant", "Gnaiphel", "Trungle", "Gelypheyl"]
                this.name = this.names[Math.floor(Math.random() * this.names.length)]
            }
            if (this.type == 16) {
                this.stats[0] = 6
                this.stats[1] += 1
                this.stats[3] += 1
                // this.energy = 1
                this.repair += 5
                this.damage = 5
                this.skills += 'Fast+, Repair++, Helm+, Weapons+'
                this.names = ["Banandroid", "Nanbot", "Banabot", "Peeldroid", "Bananuits", "Banonlos", "Ananans", "Plantaindroid", "Nanananana"]
                this.name = this.names[Math.floor(Math.random() * this.names.length)]
            }
            if (this.type == 17) {
                // this.stats[0] = 6
                this.stats[2] += 1.2
                this.stats[6] += 1.2
                // this.energy = 1
                this.repair += 5
                this.damage = 5
                this.skills += 'Repair++, Engine++, Shield++, Flammable--, Slow-'
                this.names = ["Runnybabbit", "Splat", "Eggresst", "Yolkenstien", "Albubert", "Bunegg", "Ovolago", "Lagovo", "Rabolk"]
                this.name = this.names[Math.floor(Math.random() * this.names.length)]
            }
            if (this.type == 18) {
                // this.stats[0] = 6
                this.stats[2] += 1.2
                this.stats[6] += 1.2
                // this.energy = 1
                this.repair += 5
                this.damage = 5
                this.stretch = 1
                this.tiles = [this.tile, this.tile, this.tile, this.tile, this.tile, this.tile]
                this.skills += 'Stretch++'
                this.names = ["Gumnut"]
                this.name = this.names[Math.floor(Math.random() * this.names.length)]
            }

            if (this.type == 19) {
                this.repair *= .5
                this.extinguish = 0
                this.stats[0] = 6
                this.damage = 20
                // this.stretch = 1
                this.energy = 1
                // this.tiles = [this.tile, this.tile, this.tile, this.tile, this.tile, this.tile]
                this.fireproof = 1
                this.skills += 'Non-Extinguishing---, Repair--, Fight++++, Fireproof+, Energetic++, '
                this.names = ["Fireknife", "Sparky", "Ignus", "Slifier"]
                this.name = this.names[Math.floor(Math.random() * this.names.length)]
            }

            if (this.type == 20) {
                this.repair *= 2
                // this.extinguish = 0
                this.stats[6] = 5
                this.damage = 6
                // this.stretch = 1
                this.energy = 1
                // this.tiles = [this.tile, this.tile, this.tile, this.tile, this.tile, this.tile]
                this.flammable = 1
                this.skills += 'Engineer++++, Repair++, Energetic+, Flammable-'
                this.names = ["Kachort"]
                this.name = this.names[Math.floor(Math.random() * this.names.length)]
            }
            if (this.type == 21) {
                // this.extinguish = 0
                this.stats[2] = 2
                this.damage = 6
                // this.stretch = 1
                // this.energy = 1
                // this.tiles = [this.tile, this.tile, this.tile, this.tile, this.tile, this.tile]
                // this.flammable = 1
                this.skills += 'Shield++, Healthy++'
                this.names = ["Yuggo"]
                this.name = this.names[Math.floor(Math.random() * this.names.length)]
            }


            if (this.type == 10) {
                this.stats[2] += .5
                this.shieldPower = .1
                this.stats[1] += .5
                this.weaponPower = .1
                this.stats[0] = 7
                this.skills += 'Weapon++, Shield++, '
                this.names = ["Turtsquine", "Tricky", "Goldie", "Goldy", "Glynte", "Malbowlio", "Aqyrius", "Thumfin", "Rokkar"]
                this.name = this.names[Math.floor(Math.random() * this.names.length)]
            }
            if (this.type == 0) {
                // this.health*=3
                // this.maxhealth = this.health
                this.stats[0] *= 6
                this.damage = 12
                this.stats[5] += 1
                this.extinguish = 10
                this.repair = 10
                this.fireproof = 1
                this.skills += 'Fireproof+, Fight+++, Extinguish++, Repair++, Slow--, '
                this.names = ["Sheldo", "Snall", "Trurt", "Bendo", "Sheila", "Thump-Pow", "Break-Make", "Clear-Wall", "Dome-Tomb"]
                this.name = this.names[Math.floor(Math.random() * this.names.length)]
            }
            if (this.type == 13) {
                this.stats[0] *= 2
                for (let t = 1; t < this.stats.length; t++) {
                    this.stats[t] *= .98 //.8
                }
                this.skills += 'Slow-, '

                //names covered above
            }
            this.rate = this.stats[0]
            this.health = 170 + (this.type * 10)
            this.maxhealth = this.health
            if (this.type == 0) {
                this.health *= 3
                this.maxhealth = this.health
                //names covered above
            }
            // this.health *= .1
            this.pulsecheck = 0
            this.barter = 1

            // let rooms = ["medbay", "weapon", "shield", "helm", "oxygen", "security", "engine", "special", "empty"]

            if (this.type == 2) {
                this.stats[6] += 1.5
                this.regen = .5
                this.damage = 7
                this.skills += 'Regen++, Engineer++, Fight+, '

                this.names = ["Oscar", "Blobby", "Orcarto", "Sibnop", "Purbole", "Punckto", "Fleap", "Hosen", "Bedreo"]
                this.name = this.names[Math.floor(Math.random() * this.names.length)]
            }
            if (this.type == 3) {
                this.stats[1] += .5
                this.damage = 9
                this.skills += 'Weapons+, Fight++, '

                this.names = ["Bobbin", "Tentaslip", "Moom", "Bandagal", "Wrab", "Tenbanwra", "Wontombah", "Vieslib", "Banra"]
                this.name = this.names[Math.floor(Math.random() * this.names.length)]
            }
            if (this.type == 4) {
                this.rate = 6
                this.stats[6] += .7
                this.stats[3] += .7
                this.health *= .9
                this.maxhealth = this.health
                this.skills += 'Helm+, Engineer+, '
                this.names = ["Obchovy", "Ubchobie", "Ohboechoey", "Choeboye", "Obobloy", "Fiskcho", "Walfik", "Obochoy", "Chochoy"]
                this.name = this.names[Math.floor(Math.random() * this.names.length)]
            }
            if (this.type == 5) {
                this.stats[3] += .7
                this.health *= 1.2
                this.maxhealth = this.health
                this.damage = 9
                this.barter = 1.05
                this.skills += 'Thrifty++, Helm+, Fight++, '
                this.names = ["Clak", "Pinck", "Grak", "Clyk", "Clok", "Colk", "Colek", "Klack", "Brak"]
                this.name = this.names[Math.floor(Math.random() * this.names.length)]
            }

            this.oxygenating = 0
            if (this.type == 6) {
                this.stats[5] += .7
                this.damage = 7
                this.rate = 8
                this.airless = 1
                this.oxygenating = 1
                this.stats[4] += 2
                this.skills += 'Security+, Fight+, Flammable--, Breathless+, Oxygen++'
                //names covered above
            }
            if (this.type == 7) {
                this.stats[1] += .7
                this.damage = 6
                this.skills += 'Weapons+, Fight+, '
                this.names = ["Hop", "Hoppe", "Hoop", "Hawp", "Hap", "Haap", "Hahp", "Hawp", "Hyp"]
                this.name = this.names[Math.floor(Math.random() * this.names.length)]
            }
            if (this.type == 8) {
                this.regen = .25
                this.stats[1] += 1.2
                this.damage = 6
                this.skills += 'Regen+, Fight+, '
                this.names = ["Jomite", "Mojama", "Ommaja", "Mit", "Jom", "Joma", "Jamo", "Jomo", "Jomamul"]
                this.name = this.names[Math.floor(Math.random() * this.names.length)]
            }
            if (this.type == 9) {
                this.stats[1] += 2
                this.weaponPower = 1
                this.skills += 'Weapons+++, '
                this.names = ["Mani", "Stock", "Ockman", "Iasto", "Stoman", "Smanto", "Namitos", "Numman", "Manth", "Nine"]
                this.name = this.names[Math.floor(Math.random() * this.names.length)]
            }
            if (this.type == 11) {
                this.stats[3] += 2
                this.helmPower = 1
                this.health = 369
                this.maxhealth = this.health
                this.skills += 'Helm+++, '
                this.names = ["Pomao", "Jomao", "Pobo", "Podmao", "Peamao", "Pomom", "Pamao", "Pomo", "Pomoo", "Pomoa"]
                this.name = this.names[Math.floor(Math.random() * this.names.length)]
            }
            if (this.type == 12) {
                // this.barter = 1.03
                this.damage = 7
                this.health += 50
                this.stats[6] += .5
                this.stats[3] -= .25
                this.stats[2] -= .25
                this.stats[1] += .25
                this.maxhealth = this.health
                this.skills += 'Fight+, Helm-, Engine++, Weapons+'
                this.names = ["Pote", "Potte", "Poat", "Pohat", "Pewt", "Plote", "Ploat", "Polte", "Plotle", "Lotle"]
                this.name = this.names[Math.floor(Math.random() * this.names.length)]
            }

            if (this.type == 21) {
                this.health = 900
                this.maxhealth = 900

            }
            // this.health = 1
            this.secont = 0
            // this.energy = 1

            // if(vessel.type == 0){
            // }else{

            //     this.gear = []
            //     for(let t = 0;t<6;t++){
            //         this.gear.push(new Gear(-1, this))
            //     }
            // }
            this.rateSto = this.rate
            this.regenSto = this.regen
        }
        bodydraw() {

            if (vessel.guys) {




                if (this.zSelected == 1) {

                } else {

                    for (let t = 0; t < this.gear.length; t++) {
                        this.gear[t].selected = 0
                    }
                }


                if (vessel.guys.includes(this)) {
                    let hrat = this.health / this.maxhealth
                    this.healthbox = new Rectangle(0, ((vessel.guys.indexOf(this)) * 33), 66, 32, "#555555")
                    // if(this.gear){
                    if (this.zSelected == 1) {
                        for (let t = 0; t < this.gear.length; t++) {
                            this.gear[t].draw()
                        }
                    }
                    // }
                    if (this.hostile == 1) {
                        this.healthbox.color = "#FF5555"
                    }
                    if (this.selected == 1) {
                        this.healthbox.color = "#558855"
                    }

                    this.healthbox.draw()
                    this.healthbar = new Rectangle(34, ((vessel.guys.indexOf(this)) * 33) + 22, 30 * hrat, 5, `rgb(${255 - (255 * hrat)}, ${0 + (255 * hrat)}, ${80})`)
                    this.healthbar.draw()
                    if (this.hostile != 1) {
                        canvas_context.drawImage(rs[this.type], 64 * (this.count % (rs[this.type].width / 64)), 0, 64, 64, this.healthbox.x, this.healthbox.y, this.body.radius * 2, this.body.radius * 2)

                    } else {
                        canvas_context.drawImage(ps[this.type], 64 * (this.count % (rs[this.type].width / 64)), 0, 64, 64, this.healthbox.x, this.healthbox.y, this.body.radius * 2, this.body.radius * 2)

                    }
                    if (this.type == 20) {
                        if (Math.random() < .2) {
                            this.count++
                        }
                    }

                } else if (enemy.guys && vessel.UI.systems[5].sto > 0) {

                    if (enemy.guys.includes(this)) {

                        let hrat = this.health / this.maxhealth
                        this.healthbox = new Rectangle(1850, 5 + ((enemy.guys.indexOf(this)) * 33), 66, 32, "#555555")
                        if (this.hostile == 1) {
                            this.healthbox.color = "#5555FF"
                        }
                        if (this.selected == 1) {
                            this.healthbox.color = "#558855"
                        }

                        this.healthbox.draw()
                        this.healthbar = new Rectangle(1882, 5 + ((enemy.guys.indexOf(this)) * 33) + 22, 30 * hrat, 5, `rgb(${255 - (255 * hrat)}, ${0 + (255 * hrat)}, ${80})`)

                        this.healthbar.draw()
                        canvas_context.drawImage(rs[this.type], 64 * (this.count % (rs[this.type].width / 64)), 0, 64, 64, this.healthbox.x, this.healthbox.y, this.body.radius * 2, this.body.radius * 2)
                        if (this.hostile != 1) {
                            canvas_context.drawImage(rs[this.type], 64 * (this.count % (rs[this.type].width / 64)), 0, 64, 64, this.healthbox.x, this.healthbox.y, this.body.radius * 2, this.body.radius * 2)

                        } else {
                            canvas_context.drawImage(ps[this.type], 64 * (this.count % (rs[this.type].width / 64)), 0, 64, 64, this.healthbox.x, this.healthbox.y, this.body.radius * 2, this.body.radius * 2)

                        }

                        if (this.type == 20) {
                            if (Math.random() < .2) {
                                this.count++
                            }
                        }

                    }

                }
            }

        }
        fight() {
            this.fightCount++
            if (this.fightCount % 30 <= 3) {
                if (this.hostile == 1) {
                    if (enemy.guys) {
                        if (enemy.guys.includes(this)) {
                            let exclude = []
                            for (let t = 0; t < enemy.guys.length; t++) {
                                if (enemy.guys[t].hostile != 1) {
                                    let link = new LineOP(enemy.guys[t].body, this.body, "#00FFFF", 5)
                                    let link2 = new LineOP(enemy.guys[t].body, this.body, "white", 2)
                                    if (link.hypotenuse() < 50) {
                                        link.draw()
                                        link2.draw()
                                        if (!exclude.includes(t)) {
                                            exclude.push(t)
                                            // this.health -= enemy.guys[t].damage * .1

                                            let wet = 1
                                            if (this.health > 0) {
                                                wet = 0
                                            }
                                            // this.health -= (enemy.guys[t].damage * enemy.guys[t].gearDamage * 1.05) / (1 + this.gearArmor)
                                            if (wet == 0) {
                                                if (this.health <= 0) {
                                                    enemy.guys[t].meleeKills++
                                                }
                                            }
                                        }
                                        let wet = 1
                                        if (enemy.guys[t].health > 0) {
                                            wet = 0
                                        }
                                        enemy.guys[t].health -= (this.damage * this.gearDamage * 1.05) / (1 + enemy.guys[t].gearArmor)

                                        if (wet == 0) {
                                            if (enemy.guys[t].health <= 0) {
                                                this.meleeKills++
                                            }
                                        }
                                        break
                                    }
                                }
                            }
                        }
                    }
                } else {

                    if (enemy.guys) {
                        if (enemy.guys.includes(this)) {
                            let exclude = []
                            for (let t = 0; t < enemy.guys.length; t++) {
                                if (enemy.guys[t].hostile == 1) {
                                    let link = new LineOP(enemy.guys[t].body, this.body, "#ff0000", 5)
                                    let link2 = new LineOP(enemy.guys[t].body, this.body, "white", 2)
                                    if (link.hypotenuse() < 50) {
                                        this.fighting = 31
                                        link.draw()
                                        link2.draw()
                                        if (!exclude.includes(t)) {
                                            exclude.push(t)
                                            // this.health -= enemy.guys[t].damage * .1

                                            let wet = 1
                                            if (this.health > 0) {
                                                wet = 0
                                            }
                                            // this.health -= (enemy.guys[t].damage * enemy.guys[t].gearDamage * 1.05) / (1 + this.gearArmor)
                                            if (wet == 0) {
                                                if (this.health <= 0) {
                                                    enemy.guys[t].meleeKills++
                                                }
                                            }
                                        }
                                        let wet = 1
                                        if (enemy.guys[t].health > 0) {
                                            wet = 0
                                        }
                                        enemy.guys[t].health -= (this.damage * this.gearDamage * 1.05) / (1 + enemy.guys[t].gearArmor)

                                        if (wet == 0) {
                                            if (enemy.guys[t].health <= 0) {
                                                this.meleeKills++
                                            }
                                        }
                                        break
                                    } else {
                                        let max = 999999
                                        let i = -1
                                        for (let k = 0; k < enemy.guys.length; k++) {
                                            if (enemy.guys[k].hostile == 1) {
                                                if (max > enemy.guys[k].health) {
                                                    max = enemy.guys[k].health
                                                    i = k
                                                }
                                            }
                                        }
                                        if (i != -1) {
                                            let n = enemy.neighbors(enemy.guys[i].tile)
                                            let m = enemy.neighbors(this.tile)
                                            let nx = Math.floor(Math.random() * n.length)
                                            if (this.health > this.maxhealth * .3) {
                                                if (n[nx].walkable == true) {
                                                    if (this.fighting <= 1) {
                                                        if (!(m.includes(enemy.guys[i].tile))) {
                                                            this.path = astar.search(enemy, this.tile, n[nx])
                                                            this.stogo = n[nx]
                                                            this.fighting = 31
                                                        }
                                                    }
                                                }
                                            }
                                            break
                                        }

                                    }
                                }
                            }
                        }
                    }
                }
                if (this.hostile != 1) {
                    if (vessel.guys) {
                        if (vessel.guys.includes(this)) {
                            let exclude = []
                            for (let t = 0; t < vessel.guys.length; t++) {
                                if (vessel.guys[t].hostile == 1) {
                                    let link = new LineOP(vessel.guys[t].body, this.body, "cyan", 5)
                                    let link2 = new LineOP(vessel.guys[t].body, this.body, "white", 2)
                                    if (link.hypotenuse() < 60) {
                                        link.draw()
                                        link2.draw()
                                        if (!exclude.includes(t)) {
                                            exclude.push(t)
                                            let wet = 1
                                            if (this.health > 0) {
                                                wet = 0
                                            }
                                            // this.health -= (vessel.guys[t].damage * vessel.guys[t].gearDamage * 1.05) / (1 + this.gearArmor)
                                            if (wet == 0) {
                                                if (this.health <= 0) {
                                                    vessel.guys[t].meleeKills++
                                                }
                                            }
                                        }
                                        let wet = 1
                                        if (vessel.guys[t].health > 0) {
                                            wet = 0
                                        }
                                        vessel.guys[t].health -= (this.damage * this.gearDamage * 1.05) / (1 + vessel.guys[t].gearArmor)
                                        if (wet == 0) {
                                            if (vessel.guys[t].health <= 0) {
                                                this.meleeKills++
                                            }
                                        }
                                        break
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if (vessel.guys) {
                        if (vessel.guys.includes(this)) {
                            let exclude = []
                            for (let t = 0; t < vessel.guys.length; t++) {
                                if (vessel.guys[t].hostile != 1) {
                                    let link = new LineOP(vessel.guys[t].body, this.body, "red", 5)
                                    let link2 = new LineOP(vessel.guys[t].body, this.body, "white", 2)
                                    if (link.hypotenuse() < 60) {
                                        link.draw()
                                        link2.draw()
                                        if (!exclude.includes(t)) {
                                            exclude.push(t)
                                            let wet = 1
                                            if (this.health > 0) {
                                                wet = 0
                                            }
                                            // this.health -= (vessel.guys[t].damage * vessel.guys[t].gearDamage * 1.05) / (1 + this.gearArmor)
                                            if (wet == 0) {
                                                if (this.health <= 0) {
                                                    vessel.guys[t].meleeKills++
                                                }
                                            }
                                        }
                                        let wet = 1
                                        if (vessel.guys[t].health > 0) {
                                            wet = 0
                                        }
                                        vessel.guys[t].health -= (this.damage * this.gearDamage * 1.05) / (1 + vessel.guys[t].gearArmor)
                                        if (wet == 0) {
                                            if (vessel.guys[t].health <= 0) {
                                                this.meleeKills++
                                            }
                                        }
                                        break
                                    }
                                }
                            }
                        }
                    }

                }
            }
        }
        clone(tile, type = this.type) {

            let guy = new Guy(tile, type)
            guy.health = this.health
            guy.meleeKills = this.meleeKills
            guy.gear = []
            for (let t = 0; t < this.gear.length; t++) {
                guy.gear.push(new Gear(this.gear[t].type, guy))
            }

            for (let t = 0; t < this.skillslist.length; t++) {
                guy.skillslist[t] = this.skillslist[t]
            }


            return guy
        }
        draw() {
            if (this.type == 100) {
                return
            }
            this.fighting--
            if (this.mindControlled == 1) {
                this.hostileTimer--
            }
            if (this.hostileTimer <= 0) {
                this.hostile = 0
                this.mindControlled = 0
            }

            this.gearSpeed = 0
            this.gearArmor = 0
            this.gearDamage = 0
            this.gearRegen = 0

            for (let t = 0; t < this.gear.length; t++) {
                this.gear[t].balance()
            }
            this.rate = Math.max(2, this.rateSto - (-this.gearSpeed))

            this.regen = this.regenSto + this.gearRegen

            if (this.teleflag == 1) {
                if (vessel.guys.includes(this)) {
                    if (this.tile.special == 1) {
                        vessel.copies.push(this.clone(this.tile))
                        this.tile.walkable = true
                        let dummytile = enemy.supratiles[Math.floor(Math.random() * enemy.supratiles.length)]
                        let j = 0
                        while (dummytile.walkable == false) {
                            dummytile = enemy.supratiles[Math.floor(Math.random() * enemy.supratiles.length)]
                            j++
                            if (j > 100) {
                                break
                            }
                        }
                        let clone2 = this.clone(dummytile)
                        clone2.hostile = 1
                        ////////////////////////console.log(enemy, enemy.guys)
                        enemy.guys.push(clone2)
                        vessel.guys.splice(vessel.guys.indexOf(this), 1)

                        if (this.stretch == 1) {
                            for (let k = 0; k < this.tiles.length; k++) {
                                this.tiles[k].walkable = true
                            }
                        }

                    }
                    this.teleflag = 0
                    return
                } else {
                    if (this.tile.special == 1) {
                        enemy.copies.push(this.clone(this.tile))
                        this.tile.walkable = true
                        let dummytile = vessel.supratiles[Math.floor(Math.random() * vessel.supratiles.length)]
                        let j = 0
                        while (dummytile.walkable == false) {
                            dummytile = vessel.supratiles[Math.floor(Math.random() * vessel.supratiles.length)]
                            j++
                            if (j > 100) {
                                break
                            }
                        }
                        let clone2 = this.clone(dummytile)
                        clone2.hostile = 1
                        ////////////////////////console.log(enemy, enemy.guys)
                        vessel.guys.push(clone2)
                        enemy.guys.splice(enemy.guys.indexOf(this), 1)
                        if (this.stretch == 1) {
                            for (let k = 0; k < this.tiles.length; k++) {
                                this.tiles[k].walkable = true
                            }
                        }
                    }
                    this.teleflag = 0
                    return

                }
            }

            //subsumed by control
            if (this.hostile == 1) {
                if (vessel.guys.includes(this)) {
                    if (this.path.length <= 1) {
                        let i = -1
                        for (let k = 0; k < vessel.guys.length; k++) {
                            if (vessel.guys[k].hostile != 1) {
                                i = k
                            }
                        }
                        if (i > -1) {
                            let n = vessel.neighbors(vessel.guys[i].tile)
                            this.path = astar.search(vessel, this.tile, n[0])
                            this.stogo = n[Math.floor(Math.random() * n.length)]
                        }
                    }
                }
            }

            let l = this.rate - this.cound
            if (this.stretch == 1) {
                this.bodies = [new Point(0, 0), new Point(0, 0), new Point(0, 0)]
                for (let t = 0; t < this.tiles.length; t++) {
                    // if (this.path.length > 1) {
                    //     this.body.x = (this.tiles[t].x + (this.tiles[t].width * .5)) * l
                    //     this.body.y = (this.tiles[t].y + (this.tiles[t].height * .5)) * l
                    //     this.body.x += (this.path[Math.min(this.step + 1, this.path.length - 1)].x + (this.path[Math.min(this.step + 1, this.path.length - 1)].width * .5)) * Math.max(1,this.cound-this.gearSpeed)
                    //     this.body.y += (this.path[Math.min(this.step + 1, this.path.length - 1)].y + (this.path[Math.min(this.step + 1, this.path.length - 1)].height * .5)) * Math.max(1,this.cound-this.gearSpeed)
                    //     this.body.x *= 1 / this.rate
                    //     this.body.y *= 1 / this.rate
                    //     // //////////////////////////////////////////////////////////////console.log(this.tiles[t])
                    //     this.tiles[t].draw = (new Tile()).draw
                    //     // this.tiles[t].color = "green"
                    //     // this.tiles[t].draw()
                    // } else {
                    if (t < this.tiles.length - 1) {
                        this.body.x = (this.tiles[t].x + (this.tiles[t].width * .5)) * l
                        this.body.y = (this.tiles[t].y + (this.tiles[t].height * .5)) * l
                        this.body.x += (this.tiles[t + 1].x + (this.tiles[t + 1].width * .5)) * this.cound
                        this.body.y += (this.tiles[t + 1].y + (this.tiles[t + 1].height * .5)) * this.cound
                        this.body.x *= 1 / this.rate
                        this.body.y *= 1 / this.rate
                        // //////////////////////////////////////////////////////////////console.log(this.tiles[t])
                        this.tiles[t].draw = (new Tile()).draw
                        // this.tiles[t].color = "green"
                        // this.tiles[t].draw()
                    } else {

                        if (this.path.length > 1) {
                            this.body.x = (this.tile.x + (this.tile.width * .5)) * l
                            this.body.y = (this.tile.y + (this.tile.height * .5)) * l
                            this.body.x += (this.path[Math.min(this.step + 1, this.path.length - 1)].x + (this.path[Math.min(this.step + 1, this.path.length - 1)].width * .5)) * this.cound
                            this.body.y += (this.path[Math.min(this.step + 1, this.path.length - 1)].y + (this.path[Math.min(this.step + 1, this.path.length - 1)].height * .5)) * this.cound
                            this.body.x *= 1 / this.rate
                            this.body.y *= 1 / this.rate
                            // //////////////////////////////////////////////////////////////console.log(this.tile)
                            this.tile.draw = (new Tile()).draw
                            // this.tile.color = "green"
                            // this.tile.draw()
                        } else {

                            this.body.x = (this.tile.x + (this.tile.width * .5))
                            this.body.y = (this.tile.y + (this.tile.height * .5))

                            // this.tile.color = "red"
                            // this.tile.draw()
                        }
                    }
                    if (vessel.guys.includes(this)) {
                        this.bodies[t] = new Circle(this.body.x + (vessel.guys.indexOf(this) / 10), this.body.y + (vessel.guys.indexOf(this) / 10), 9, this.c2)
                    } else {
                        if (enemy.guys) {
                            this.bodies[t] = new Circle(this.body.x + (enemy.guys.indexOf(this) / 10), this.body.y + (enemy.guys.indexOf(this) / 10), 9, this.c2)
                        }
                    }
                }
            }

            if (this.bodies) {
                for (let t = 0; t < this.bodies.length; t++) {
                    if (vessel.guys.includes(this)) {

                        for (let c = 0; c < vessel.guys.length; c++) {
                            if (vessel.guys[c].stretch == 1) {
                                // if (this != vessel.guys[c]) {
                                if (vessel.guys[c].bodies) {
                                    for (let b = 0; b < vessel.guys[c].bodies.length; b++) {
                                        let link = new LineOP(this.bodies[t], vessel.guys[c].bodies[b])
                                        let ang = link.angle()
                                        let j = 0
                                        while (this.bodies[t].doesPerimeterTouch(vessel.guys[c].bodies[b])) {
                                            j++
                                            if (j > 1000) {
                                                break
                                            }
                                            vessel.guys[c].bodies[b].x -= Math.cos(ang) * .1
                                            vessel.guys[c].bodies[b].y -= Math.sin(ang) * .1
                                            this.bodies[t].x += Math.cos(ang) * .1
                                            this.bodies[t].y += Math.sin(ang) * .1
                                        }
                                    }
                                }
                                // }
                            }
                        }
                    } else {
                        if (enemy.guys) {
                            for (let c = 0; c < enemy.guys.length; c++) {
                                if (enemy.guys[c].stretch == 1) {
                                    // if (this != enemy.guys[c]) {
                                    if (enemy.guys[c].bodies) {
                                        for (let b = 0; b < enemy.guys[c].bodies.length; b++) {
                                            let link = new LineOP(this.bodies[t], enemy.guys[c].bodies[b])
                                            let ang = link.angle()
                                            let j = 0
                                            while (this.bodies[t].doesPerimeterTouch(enemy.guys[c].bodies[b])) {
                                                j++
                                                if (j > 1000) {
                                                    break
                                                }
                                                enemy.guys[c].bodies[b].x -= Math.cos(ang) * .1
                                                enemy.guys[c].bodies[b].y -= Math.sin(ang) * .1
                                                this.bodies[t].x += Math.cos(ang) * .1
                                                this.bodies[t].y += Math.sin(ang) * .1
                                            }
                                        }
                                    }
                                    // }
                                }
                            }
                        }
                    }
                }
            }

            if (this.stretch == 1) {
                this.lines = []
                if (this.bodies) {
                    for (let b = 0; b < this.bodies.length; b++) {
                        if (b > 0) {
                            let link = new LineOP(this.bodies[b], this.bodies[b - 1], this.bodies[b].color, this.bodies[b].radius + 4)
                            link.draw()

                            let centroic = new Point((this.bodies[b].x * .5) + (this.bodies[b - 1].x * .5), (this.bodies[b].y * .5) + (this.bodies[b - 1].y * .5))
                            let d1 = new Point(((centroic.x * 7) + this.bodies[b].x) * .125, ((centroic.y * 7) + this.bodies[b].y) * .125)
                            let d2 = new Point(((centroic.x * 7) + this.bodies[b - 1].x) * .125, ((centroic.y * 7) + this.bodies[b - 1].y) * .125)

                            // let linkw = new LineOP(new Point((this.bodies[b].x*.75)+(this.bodies[t-1].x*.25), (this.bodies[b].y*.75)+(this.bodies[t-1].y*.25)),new Point((this.bodies[b].x*.25)+(this.bodies[t-1].x*.75), (this.bodies[b].y*.25)+(this.bodies[t-1].y*.75)),  "yellow", this.bodies[b].radius)
                            let linkw = new LineOP(d1, d2, this.c1, this.bodies[b].radius + 5)
                            linkw.draw()
                            this.lines[b - 1] = link
                            //////////////////////////////console.log(this.bodies.length)
                        }
                    }
                }
            }
            if (enemy.guys) {
                if (this.secont == 0 && enemy.guys.includes(this)) {
                    this.secont = 1
                    let k = Math.min(Math.round(enemy.level / 3), 50)
                    let j = 0
                    while (k > 0) {
                        j++
                        if (j > 1000) {
                            break
                        }
                        k--
                        this.skillslist[Math.floor(Math.random() * this.skillslist.length)] += Math.min((enemy.level / 100), .15)
                    }
                    //////////////////////////////////////////////console.log(this.skillslist)
                }

            }

            for (let t = 0; t < this.skillslist.length; t++) {
                if (this.skillslist[t] > 1.75) {
                    this.skillslist[t] = 1.75
                }
            }
            let sys = ["medbay", "weapon", "shield", "helm", "oxygen", "security", "engine", "special", "empty"]
            let hass = 0

            if (vessel.guys) {
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
                }
            }
            if (enemy.guys) {
                if (enemy.guys.includes(this)) {
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
            }
            this.health += hass * .25 //.5
            if (this.health > this.maxhealth) {
                this.health = this.maxhealth
            }


            this.pulsecheck += Math.random()
            if (this.pulsecheck >= 20) {
                this.pulsecheck = 0
            }


            let kiles = []
            if (vessel.guys) {
                if (vessel.guys.includes(this)) {
                    for (let g = 0; g < vessel.guys.length; g++) {
                        if (this == vessel.guys[g]) {
                            continue
                        } else {
                            kiles.push(vessel.guys[g].tile)
                        }
                        if (vessel.guys[g].stretch == 1) {
                            for (let ghy = 0; ghy < vessel.guys[g].tiles.length - 1; ghy++) {
                                kiles.push(vessel.guys[g].tiles[ghy])
                            }
                        }
                    }
                } else {

                    for (let g = 0; g < enemy.guys.length; g++) {
                        if (this == enemy.guys[g]) {
                            continue
                        } else {
                            kiles.push(enemy.guys[g].tile)
                        }
                        if (enemy.guys[g].stretch == 1) {
                            for (let ghy = 0; ghy < enemy.guys[g].tiles.length - 1; ghy++) {
                                kiles.push(enemy.guys[g].tiles[ghy])
                            }
                        }
                    }
                }
            }
            if ((this.pulsecheck >= 10 && this.tile == this.path[this.path.length - 1]) || ((this.tile.guyIn == false || kiles.includes(this.tile)))) {
                this.pulsecheck = 0
                if (vessel.guys.includes(this)) {

                    if (this.path.length <= 1 && this.cound == 0) {
                        for (let t = 0; t < vessel.guys.length; t++) {
                            if (this != vessel.guys[t]) {
                                if (vessel.guys[t].path.length <= 1 && this.path.length <= 1) {
                                    if ((this.tile == vessel.guys[t].tile || kiles.includes(this.tile))) {
                                        let n = vessel.neighbors(this.tile)
                                        for (let r = 0; r < n.length; r++) {
                                            if (n[r].walkable == true && n[r].guyIn == false && !kiles.includes(n[r])) {
                                                this.path = astar.search(vessel, this.tile, n[r])
                                                this.stogo = n[r]
                                                break
                                            } else {
                                                n = vessel.neighbors(n[r])
                                                for (let d = Math.floor(Math.random() * (n.length)); d < n.length; d++) {
                                                    if (n[d].walkable == true && n[d].guyIn == false && !kiles.includes(n[d])) {
                                                        this.path = astar.search(vessel, this.tile, n[d])
                                                        this.stogo = n[d]
                                                        //////////////////////////////console.log(n)
                                                        break
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {

                        let kiles = []
                        if (vessel.guys.includes(this)) {
                            for (let g = 0; g < vessel.guys.length; g++) {
                                if (this != vessel.guys[g]) {
                                    continue
                                } else {
                                    kiles.push(vessel.guys[g].tile)
                                }
                                if (vessel.guys[g].stretch == 1) {
                                    for (let ghy = 0; ghy < vessel.guys[g].tiles.length - 1; ghy++) {
                                        kiles.push(vessel.guys[g].tiles[ghy])
                                    }
                                }
                            }
                        } else {

                            for (let g = 0; g < enemy.guys.length; g++) {
                                if (this != enemy.guys[g]) {
                                    continue
                                } else {
                                    kiles.push(enemy.guys[g].tile)
                                }
                                if (enemy.guys[g].stretch == 1) {
                                    for (let ghy = 0; ghy < enemy.guys[g].tiles.length - 1; ghy++) {
                                        kiles.push(enemy.guys[g].tiles[ghy])
                                    }
                                }
                            }
                        }



                        for (let t = 0; t < vessel.guys.length; t++) {
                            if (this != vessel.guys[t]) {
                                if (vessel.guys[t].path.length <= 1 && this.path.length <= 1) {
                                    if ((this.tile == vessel.guys[t].tile || kiles.includes(vessel.guys[t].tile))) {
                                        let n = vessel.neighbors(this.tile)
                                        for (let r = 0; r < n.length; r++) {
                                            if (n[r].walkable == true && n[r].guyIn == false && !kiles.includes(n[r])) {
                                                vessel.guys[t].path = astar.search(vessel, this.tile, n[r])
                                                vessel.guys[t].stogo = n[r]
                                                break
                                            } else {
                                                n = vessel.neighbors(n[r])
                                                for (let d = Math.floor(Math.random() * (n.length)); d < n.length; d++) {
                                                    if (n[d].walkable == true && n[d].guyIn == false && !kiles.includes(n[d])) {
                                                        vessel.guys[t].path = astar.search(vessel, vessel.guys[t].tile, n[d])
                                                        vessel.guys[t].stogo = n[d]
                                                        //////////////////////////////console.log(n)
                                                        break
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {


                    if (this.path.length <= 1 && this.cound == 0) {
                        for (let t = 0; t < enemy.guys.length; t++) {
                            if (this != enemy.guys[t]) {
                                if (enemy.guys[t].path.length <= 1 && this.path.length <= 1) {
                                    if ((this.tile == enemy.guys[t].tile || kiles.includes(this.tile))) {
                                        let n = enemy.neighbors(this.tile)
                                        for (let r = 0; r < n.length; r++) {
                                            if (n[r].walkable == true && n[r].guyIn == false && !kiles.includes(n[r])) {
                                                if (this.fighting < 0) {
                                                    this.path = astar.search(enemy, this.tile, n[r])
                                                    this.stogo = n[r]
                                                    break
                                                }
                                            } else {
                                                n = enemy.neighbors(n[r])
                                                for (let d = Math.floor(Math.random() * (n.length)); d < n.length; d++) {
                                                    if (n[d].walkable == true && n[d].guyIn == false && !kiles.includes(n[d])) {
                                                        if (this.fighting < 0) {
                                                            this.path = astar.search(enemy, this.tile, n[d])
                                                            this.stogo = n[d]
                                                            //////////////////////////////console.log(n)
                                                            break
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {

                        let kiles = []
                        if (enemy.guys.includes(this)) {
                            for (let g = 0; g < enemy.guys.length; g++) {
                                if (this != enemy.guys[g]) {
                                    continue
                                } else {
                                    kiles.push(enemy.guys[g].tile)
                                }
                                if (enemy.guys[g].stretch == 1) {
                                    for (let ghy = 0; ghy < enemy.guys[g].tiles.length - 1; ghy++) {
                                        kiles.push(enemy.guys[g].tiles[ghy])
                                    }
                                }
                            }
                        } else {

                            for (let g = 0; g < enemy.guys.length; g++) {
                                if (this != enemy.guys[g]) {
                                    continue
                                } else {
                                    kiles.push(enemy.guys[g].tile)
                                }
                                if (enemy.guys[g].stretch == 1) {
                                    for (let ghy = 0; ghy < enemy.guys[g].tiles.length - 1; ghy++) {
                                        kiles.push(enemy.guys[g].tiles[ghy])
                                    }
                                }
                            }
                        }



                        for (let t = 0; t < enemy.guys.length; t++) {
                            if (this != enemy.guys[t]) {
                                if (enemy.guys[t].path.length <= 1 && this.path.length <= 1) {
                                    if ((this.tile == enemy.guys[t].tile || kiles.includes(enemy.guys[t].tile))) {
                                        let n = enemy.neighbors(this.tile)
                                        for (let r = 0; r < n.length; r++) {
                                            if (n[r].walkable == true && n[r].guyIn == false && !kiles.includes(n[r])) {
                                                if (enemy.guys[t].fighting < 0) {
                                                    enemy.guys[t].path = astar.search(enemy, this.tile, n[r])
                                                    enemy.guys[t].stogo = n[r]
                                                    break
                                                }
                                            } else {
                                                n = enemy.neighbors(n[r])
                                                for (let d = Math.floor(Math.random() * (n.length)); d < n.length; d++) {
                                                    if (n[d].walkable == true && n[d].guyIn == false && !kiles.includes(n[d])) {
                                                        if (enemy.guys[t].fighting < 0) {
                                                            enemy.guys[t].path = astar.search(enemy, enemy.guys[t].tile, n[d])
                                                            enemy.guys[t].stogo = n[d]
                                                            //////////////////////////////console.log(n)
                                                            break
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            this.health += (this.regen * .5) //1
            if (this.health > this.maxhealth) {
                this.health = this.maxhealth
            }
            //bodydraw

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
                    // //////////////////////////////////////////////////////////////console.log(this.path)
                    if (this.hostile == 1) {
                        if (this.path[this.step + 1].walkable == true) {
                            this.cound++
                        }
                    } else {
                        this.cound++
                    }
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

                let kiles = []
                if (vessel.guys.includes(this)) {
                    for (let g = 0; g < vessel.guys.length; g++) {
                        if ((vessel.guys[g]) != this) {
                            kiles.push(vessel.guys[g].tile)
                        }
                    }
                } else {
                    for (let g = 0; g < enemy.guys.length; g++) {
                        if ((enemy.guys[g]) != this) {
                            kiles.push(enemy.guys[g].tile)
                        }
                    }
                }
                if (!kiles.includes(this.tile)) {
                    this.tile.walkable = true
                    this.tile.guyIn = true
                    if (this.stretch == 1) {
                        for (let t = 0; t < this.tiles.length; t++) {
                            this.tiles[t].walkable = true
                            this.tiles[t].guyIn = true
                        }
                    }
                }
                if (this.path[this.step]) {

                    this.tile = this.path[this.step]
                }
                // //////////////////////////////////////////////////////////////console.log(this.tile)
                this.tile.walkable = false
                this.tile.guyIn = false
                if (this.stretch == 1) {
                    this.tiles.splice(0, 1)
                    this.tiles.push(this.tile)
                }
                if (this.stretch == 1) {
                    for (let t = 0; t < this.tiles.length; t++) {
                        this.tiles[t].walkable = false
                        this.tiles[t].guyIn = false
                    }
                }
            }
            // this.cound =this.stats[0]
            // } else {
            //     // Math.max(1,this.cound-this.gearSpeed)-=2
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

                if (vessel.guys) {
                    if (vessel.guys.includes(this)) {
                        this.path = astar.search(vessel, this.tile, this.stogo)
                    } else {
                        this.path = astar.search(enemy, this.tile, this.stogo)
                    }
                }
            }
            if (this.selected == 1) {
                // control(this.body)
                // this.tile.color = '#00ff0022'
                ////////////////////console.log(this.tile)
                this.tile.draw()
            }
            if (Math.random() < .1 || this.type == 15) {
                this.count++
            }
            // //////////////////////////////////////////////////////////////console.log(this.path)
            l = this.rate - this.cound
            if (this.path.length > 1) {
                this.body.x = (this.tile.x + (this.tile.width * .5)) * l
                this.body.y = (this.tile.y + (this.tile.height * .5)) * l
                this.body.x += (this.path[Math.min(this.step + 1, this.path.length - 1)].x + (this.path[Math.min(this.step + 1, this.path.length - 1)].width * .5)) * this.cound
                this.body.y += (this.path[Math.min(this.step + 1, this.path.length - 1)].y + (this.path[Math.min(this.step + 1, this.path.length - 1)].height * .5)) * this.cound
                this.body.x *= 1 / this.rate
                this.body.y *= 1 / this.rate
                // //////////////////////////////////////////////////////////////console.log(this.tile)
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
                    this.health -= (((50 - this.tile.fire) / 50) * 1.5) + (this.regen * .9)
                    if (this.type == 6 || this.type == 17 || this.type == 20) { //gulpod runnybabbit kachort
                        this.health -= (((50 - this.tile.fire) / 50) * 1.5)
                    }
                }
            }
            this.tile.fire += this.extinguish
            if (this.tiles) {
                for (let t = 0; t < this.tiles.length; t++) {
                    this.tiles[t].fire += this.extinguish / 6
                }
            }
            if (this.tile.fire > 100) {
                this.tile.fire = 100
            }
            canvas_context.imageSmoothingEnabled = true
            if (this.type == 16) {
                canvas_context.imageSmoothingEnabled = false
            } else {

            }



            // this.tiles[t].color = "red"
            // this.tiles[t].draw()
            // }

            if (this.stretch == 1) {
                for (let t = 0; t < this.tiles.length; t++) {
                    if (vessel.guys.includes(this) || vessel.UI.systems[5].sto > 0) {
                        // this.bodies[t].draw()
                        canvas_context.drawImage(faceless, 64 * (Math.floor(((this.count * 1.2) + t)) % (faceless.width / 64)), 0, 64, 64, (this.bodies[t].x - this.body.radius) + 5, (this.bodies[t].y - this.body.radius) + 5, (this.body.radius * 2) - 10, (this.body.radius * 2) - 10)
                    }
                }

                if (this.path.length > 1) {
                    this.body.x = (this.tile.x + (this.tile.width * .5)) * l
                    this.body.y = (this.tile.y + (this.tile.height * .5)) * l
                    this.body.x += (this.path[Math.min(this.step + 1, this.path.length - 1)].x + (this.path[Math.min(this.step + 1, this.path.length - 1)].width * .5)) * this.cound
                    this.body.y += (this.path[Math.min(this.step + 1, this.path.length - 1)].y + (this.path[Math.min(this.step + 1, this.path.length - 1)].height * .5)) * this.cound
                    this.body.x *= 1 / this.rate
                    this.body.y *= 1 / this.rate
                    // //////////////////////////////////////////////////////////////console.log(this.tile)
                    this.tile.draw = (new Tile()).draw
                    // this.tile.color = "green"
                    // this.tile.draw()
                } else {

                    this.body.x = (this.tile.x + (this.tile.width * .5))
                    this.body.y = (this.tile.y + (this.tile.height * .5))

                    // this.tile.color = "red"
                    // this.tile.draw()
                }


                if (vessel.guys) {
                    if (vessel.guys.includes(this) || vessel.UI.systems[5].sto > 0) {
                        if (this.hostile != 1) {
                            canvas_context.drawImage(rs[this.type], 64 * (this.count % (rs[this.type].width / 64)), 0, 64, 64, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)
                        } else {
                            canvas_context.drawImage(ps[this.type], 64 * (this.count % (rs[this.type].width / 64)), 0, 64, 64, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)
                        }
                    }
                }
            } else if (this.energydeathtag > -1) {
                this.cound = 0
                if (Math.random() < .09) {
                    this.energydeathtag--
                }
                canvas_context.drawImage(energydeathimg, 64 * (this.energydeathtag % (energydeathimg.width / 64)), 0, 64, 64, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)
            } else if (this.hit > 4 || this.type != 17 && this.health > 0) {

                if (vessel.guys) {
                    if (vessel.guys.includes(this) || vessel.UI.systems[5].sto > 0) {
                        if (this.hostile != 1) {
                            canvas_context.drawImage(rs[this.type], 64 * (this.count % (rs[this.type].width / 64)), 0, 64, 64, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)
                        } else {
                            canvas_context.drawImage(ps[this.type], 64 * (this.count % (rs[this.type].width / 64)), 0, 64, 64, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)
                        }
                    }
                }
            } else if (this.health > 0) {
                if (Math.random() < .09) {
                    this.hit++
                }
                if (vessel.guys) {
                    if (vessel.guys.includes(this) || vessel.UI.systems[5].sto > 0) {
                        canvas_context.drawImage(runnyblast, 64 * (this.hit % (runnyblast.width / 64)), 0, 64, 64, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)
                    }
                }
            }


            if (this.oxygenating == 1) {
                this.tile.air += 11
                if (this.tile.air > 100) {
                    this.tile.air = 100
                }
            }
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
        UIdraw() {

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
        }
        draw() {

            if (this == vessel.shield) {
                this.level = Math.min(vessel.UI.systems[2].max, vessel.UI.systems[2].sto + vessel.UI.systems[2].fed)
                if (typeof vessel.hash != 'undefined') {
                    if (vessel.hash['shield'].integrity < 100 * (1 - (1 / (11 - vessel.UI.systems[2].max)))) {
                        this.state = 0
                    }
                }
                if (vessel.UI.systems[2].sto + vessel.UI.systems[2].fed <= 0) {
                    this.state = 0
                }
            } else {
                this.level = Math.min(enemy.UI.systems[2].max, enemy.UI.systems[2].sto + enemy.UI.systems[2].fed)
                if (typeof enemy.hash != 'undefined') {
                    if (enemy.hash['shield'].integrity < 100 * (1 - (1 / (11 - enemy.UI.systems[2].max)))) {
                        this.state = 0
                    }
                }
                if (enemy.UI.systems[2].sto + enemy.UI.systems[2].fed <= 0) {
                    this.state = 0
                }
            }
            let hrat = this.charge / this.maxout

            if (this.charge > this.maxout) {
                hrat = 1
            }

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
                    this.rings.push(new CircleR(vessel.body.x, vessel.body.y, 366 + (t * 12), "cyan"))
                } else {
                    this.rings.push(new CircleR(enemy.body.x, enemy.body.y, 220 + (t * 12), "cyan"))
                }
            }

            for (let t = 0; t < this.rings.length; t++) {
                this.rings[t].draw()
            }
        }
    }

    class System {
        constructor(type, v = 0) {
            this.type = type
            this.demand = 0
            this.max = 3
            this.fed = 0
            this.sto = 0
            this.bars = []

            if (v == 12) {

                if (this.type == 0) {
                    this.max = 1
                    this.sto = 1
                    this.demand = 1
                }
                if (this.type == 1) {
                    this.demand = 2
                    this.sto = 2
                    this.max = 3
                }
                if (this.type == 2) {
                    this.demand = 2
                    this.sto = 2
                    this.max = 3
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
                    this.max = 1
                }
                if (this.type == 7) {
                    this.max = 0
                }
                if (this.type == 8) {
                    this.max = 0
                }

            } else if (v == 11) {

                if (this.type == 0) {
                    this.max = 0
                    this.sto = 0
                    this.demand = 0
                }
                if (this.type == 1) {
                    this.demand = 3
                    this.sto = 3
                    this.max = 4
                }
                if (this.type == 2) {
                    this.demand = 1
                    this.sto = 1
                    this.max = 1
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
                    this.max = 1
                }
                if (this.type == 7) {
                    this.max = 0
                }
                if (this.type == 8) {
                    this.max = 0
                }

            } else if (v == 10) {


                if (this.type == 0) {
                    this.max = 0
                    this.sto = 0
                    this.demand = 0
                }
                if (this.type == 1) {
                    this.demand = 2
                    this.sto = 2
                    this.max = 3
                }
                if (this.type == 2) {
                    this.demand = 1
                    this.sto = 1
                    this.max = 1
                }
                if (this.type == 3) {
                    this.demand = 2
                    this.sto = 2
                    this.max = 2
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
                    this.max = 1
                }
                if (this.type == 7) {
                    this.max = 0
                }
                if (this.type == 8) {
                    this.max = 0
                }

            } else if (v == 8) {

                if (this.type == 0) {
                    this.max = 0
                    this.sto = 0
                    this.demand = 0
                }
                if (this.type == 1) {
                    this.demand = 2
                    this.sto = 2
                    this.max = 3
                }
                if (this.type == 2) {
                    this.demand = 1
                    this.sto = 1
                    this.max = 1
                }
                if (this.type == 3) {
                    this.demand = 2
                    this.sto = 2
                    this.max = 2
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
                    this.max = 3
                }
                if (this.type == 7) {
                    this.max = 0
                }
                if (this.type == 8) {
                    this.max = 0
                }

            } else if (v == 0 || v == 1 || v == 2 || v == 4 || v == 5 || v == 6 || v == 7 || v == 9) { //vessel.type ==

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

            } else {

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
                    this.max = 1
                    this.demand = 1
                    this.sto = 1
                }
                if (this.type == 8) {
                    this.max = 0
                }
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
    class CyanX {
        constructor(x, y) {
            const angle = Math.PI / 4
            this.point1 = new Point(x + (Math.cos(angle) * 10), y + (Math.sin(angle) * 10))
            this.point2 = new Point(x + (Math.cos(angle) * -10), y + (Math.sin(angle) * -10))
            this.point3 = new Point(x + (Math.cos(angle + Math.PI * .5) * 10), y + (Math.sin(angle + Math.PI * .5) * 10))
            this.point4 = new Point(x + (Math.cos(angle + Math.PI * .5) * -10), y + (Math.sin(angle + Math.PI * .5) * -10))

            this.link1 = new LineOP(this.point1, this.point2, "Cyan", 3)
            this.link2 = new LineOP(this.point3, this.point4, "Cyan", 3)
        }
        draw() {
            this.link1.draw()
            this.link2.draw()
        }
    }
    class X {
        constructor(x, y, color, size) {
            const angle = Math.PI / 4
            this.point1 = new Point(x + (Math.cos(angle) * size), y + (Math.sin(angle) * size))
            this.point2 = new Point(x + (Math.cos(angle) * -size), y + (Math.sin(angle) * -size))
            this.point3 = new Point(x + (Math.cos(angle + Math.PI * .5) * size), y + (Math.sin(angle + Math.PI * .5) * size))
            this.point4 = new Point(x + (Math.cos(angle + Math.PI * .5) * -size), y + (Math.sin(angle + Math.PI * .5) * -size))

            this.link1 = new LineOP(this.point1, this.point2, color, 3)
            this.link2 = new LineOP(this.point3, this.point4, color, 3)
        }
        draw() {
            this.link1.draw()
            this.link2.draw()
        }
    }
    class Asterisk {
        constructor(x, y, color, size, xmom, ymom) {
            const angle = Math.PI / 4
            this.xmom = xmom
            this.ymom = ymom
            this.x = x
            this.y = y
            this.point1 = new Point(x + (Math.cos(angle) * size), y + (Math.sin(angle) * size))
            this.point2 = new Point(x + (Math.cos(angle) * -size), y + (Math.sin(angle) * -size))
            this.point3 = new Point(x + (Math.cos(angle + Math.PI * .5) * size), y + (Math.sin(angle + Math.PI * .5) * size))
            this.point4 = new Point(x + (Math.cos(angle + Math.PI * .5) * -size), y + (Math.sin(angle + Math.PI * .5) * -size))
            this.point5 = new Point(x + (Math.cos(angle) * size), y + (Math.sin(angle) * size))
            this.point6 = new Point(x + (Math.cos(angle) * -size), y + (Math.sin(angle) * -size))
            this.point7 = new Point(x + (Math.cos(angle + Math.PI * .33) * size), y + (Math.sin(angle + Math.PI * .25) * size))
            this.point8 = new Point(x + (Math.cos(angle + Math.PI * .25) * -size), y + (Math.sin(angle + Math.PI * .33) * -size))

            this.link1 = new LineOP(this.point1, this.point2, color, 5)
            this.link2 = new LineOP(this.point3, this.point4, color, 5)
            this.link3 = new LineOP(this.point5, this.point6, color, 5)
            this.link4 = new LineOP(this.point7, this.point8, color, 5)
            this.radius = size
        }

        movex(zise) {
            this.x -= this.xmom / zise
            this.y -= this.ymom / zise

            this.point1.x -= (this.xmom * ((Math.random() / 10) + .95)) / zise
            this.point1.y -= (this.ymom * ((Math.random() / 10) + .95)) / zise
            this.point2.x -= (this.xmom * ((Math.random() / 10) + .95)) / zise
            this.point2.y -= (this.ymom * ((Math.random() / 10) + .95)) / zise

            this.point3.x -= (this.xmom * ((Math.random() / 10) + .95)) / zise
            this.point3.y -= (this.ymom * ((Math.random() / 10) + .95)) / zise
            this.point4.x -= (this.xmom * ((Math.random() / 10) + .95)) / zise
            this.point4.y -= (this.ymom * ((Math.random() / 10) + .95)) / zise

            this.point5.x -= (this.xmom * ((Math.random() / 10) + .95)) / zise
            this.point5.y -= (this.ymom * ((Math.random() / 10) + .95)) / zise
            this.point6.x -= (this.xmom * ((Math.random() / 10) + .95)) / zise
            this.point6.y -= (this.ymom * ((Math.random() / 10) + .95)) / zise

            this.point7.x -= (this.xmom * ((Math.random() / 10) + .95)) / zise
            this.point7.y -= (this.ymom * ((Math.random() / 10) + .95)) / zise
            this.point8.x -= (this.xmom * ((Math.random() / 10) + .95)) / zise
            this.point8.y -= (this.ymom * ((Math.random() / 10) + .95)) / zise
        }
        doesPerimeterTouch(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= ((this.radius + point.radius) * (this.radius + point.radius))) {
                return true
            }
            return false
        }
        isPointInside(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= ((this.radius + point.radius) * (this.radius + point.radius))) {
                return true
            }
            return false
        }
        draw() {
            this.link1.draw()
            this.link2.draw()
            this.link3.draw()
            this.link4.draw()
            this.move()
        }
        move() {
            this.x -= this.xmom
            this.y -= this.ymom
            this.point1.x -= this.xmom * ((Math.random() / 10) + .95)
            this.point1.y -= this.ymom * ((Math.random() / 10) + .95)
            this.point2.x -= this.xmom * ((Math.random() / 10) + .95)
            this.point2.y -= this.ymom * ((Math.random() / 10) + .95)

            this.point3.x -= this.xmom * ((Math.random() / 10) + .95)
            this.point3.y -= this.ymom * ((Math.random() / 10) + .95)
            this.point4.x -= this.xmom * ((Math.random() / 10) + .95)
            this.point4.y -= this.ymom * ((Math.random() / 10) + .95)

            this.point5.x -= this.xmom * ((Math.random() / 10) + .95)
            this.point5.y -= this.ymom * ((Math.random() / 10) + .95)
            this.point6.x -= this.xmom * ((Math.random() / 10) + .95)
            this.point6.y -= this.ymom * ((Math.random() / 10) + .95)

            this.point7.x -= this.xmom * ((Math.random() / 10) + .95)
            this.point7.y -= this.ymom * ((Math.random() / 10) + .95)
            this.point8.x -= this.xmom * ((Math.random() / 10) + .95)
            this.point8.y -= this.ymom * ((Math.random() / 10) + .95)
        }
    }
    class StarX {
        constructor(x, y, color, size, angle) {
            this.point1 = new Point(x + (Math.cos(angle) * size), y + (Math.sin(angle) * size))
            this.point2 = new Point(x + (Math.cos(angle) * -size), y + (Math.sin(angle) * -size))
            this.point3 = new Point(x + (Math.cos(angle + Math.PI * .5) * size), y + (Math.sin(angle + Math.PI * .5) * size))
            this.point4 = new Point(x + (Math.cos(angle + Math.PI * .5) * -size), y + (Math.sin(angle + Math.PI * .5) * -size))

            this.link1 = new LineOPX(this.point1, this.point2, color, size * .1)
            this.link2 = new LineOPX(this.point3, this.point4, color, size * .1)
        }
        draw() {
            this.link1.draw()
            this.link2.draw()
        }
    }

    class Weapon {
        constructor(type, crew = -1, gear = -1) {
            this.plate = new LineOP(new Point((0, 0), new Point(0, 0)))
            this.shotCount = 1
            this.shine = -1
            this.temp = -2
            this.tether = 0
            this.tile = {}
            this.gearType = gear
            this.bullets = []
            if (gear != -1) {

                let gearcheck = new Gear(gear, {})
                this.firing = -1
                this.gearType = gear
                this.crewType = -1
                this.crewType = -1
                this.name1 = gearcheck.name1
                this.name2 = gearcheck.name2
                this.metatarget = {}
                this.bullets = []
                this.center = new Circle(452, 95)
                this.frame = 0
                this.max = 50000000000000000000000
                this.beingchecked = 0
                this.auto = 1
                this.type = 200
                this.body = new RectangleR(270, 650, 100, 70, "#444444")
                this.charge = 0
                this.double = 1
                this.crew = 1
                this.puncture = 0
                this.fireChance = 0
                this.sap = 0
                if (mode == 1) {
                    this.buy = 50
                    this.sell = 10
                } else {
                    this.buy = 70
                    this.sell = 10
                }

            } else if (crew != -1) {
                // let crew2 = new Guy({}, crew)
                this.firing = -1
                this.crewType = crew
                if (this.crewType == 11) {
                    this.crewType = 10
                }
                this.name1 = "Hire"
                this.name2 = "Crewmen"
                this.metatarget = {}
                this.bullets = []
                this.center = new Circle(452, 95)
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
                this.sap = 0
                if (mode == 1) {

                    this.buy = 50
                    this.sell = 50
                } else {

                    this.buy = 100
                    this.sell = 50
                }
            } else {
                this.firing = -1
                this.crewType = -1
                this.metatarget = {}
                this.bullets = []
                this.center = new Circle(452 + 200, 95 + 150) //by god what
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
                this.sap = 0
                if (this.type == -1) {
                    this.buy = 0
                    this.sell = 0
                } if (this.type == 0) {
                    this.name1 = "Basic"
                    this.name2 = "Laser"
                    this.max = 500
                    this.damage = 35
                    this.real = 1
                    this.fireChance = 10
                    this.buy = 50
                    this.sell = 15
                    this.laser = 1
                } else if (this.type == 1) {
                    this.name1 = "Basic"
                    this.name2 = "Bomb"
                    this.max = 1000
                    this.damage = 90
                    this.bomb = 1
                    this.real = 1
                    this.fireChance = 20
                    this.buy = 40
                    this.sell = 12
                    this.double = 0
                } else if (this.type == 2) {
                    this.name1 = "Double"
                    this.name2 = "Laser"
                    this.max = 760 //900
                    this.damage = 80
                    this.real = 1
                    this.double = 2
                    this.fireChance = 20
                    this.buy = 60
                    this.sell = 30
                    this.laser = 1
                } else if (this.type == 3) {
                    this.name1 = "Triple"
                    this.name2 = "Laser"
                    this.max = 1000 //1300
                    this.damage = 135
                    this.real = 1
                    this.double = 3
                    this.fireChance = 30
                    this.buy = 80
                    this.sell = 40
                    this.laser = 1
                } else if (this.type == 4) {
                    this.name1 = "Crew"
                    this.name2 = "Laser"
                    this.max = 650
                    this.damage = 34
                    this.real = 1
                    this.double = 1
                    this.crew = 9
                    this.fireChance = 40
                    this.buy = 85
                    this.sell = 40
                    this.laser = 1
                } else if (this.type == 5) {
                    this.name1 = "Mega"
                    this.name2 = "Laser"
                    this.max = 1100 //1400
                    this.damage = 170 //140
                    this.real = 1
                    this.crew = 2
                    this.double = 2
                    this.fireChance = 35
                    this.buy = 100
                    this.sell = 45
                    this.laser = 1
                } else if (this.type == 6) {
                    this.name1 = "Medium"
                    this.name2 = "Bomb"
                    this.max = 1250
                    this.damage = 150
                    this.bomb = 1
                    this.real = 1
                    this.fireChance = 30
                    this.buy = 45
                    this.sell = 18
                    this.double = 0
                } else if (this.type == 7) {
                    this.name1 = "Big"
                    this.name2 = "Bomb"
                    this.max = 1500
                    this.damage = 210
                    this.bomb = 1
                    this.real = 1
                    this.crew = 1.5
                    this.buy = 55
                    this.sell = 24
                    this.fireChance = 45
                    this.double = 0
                } else if (this.type == 8) {
                    this.name1 = "Mega"
                    this.name2 = "Bomb"
                    this.max = 2000 //2900
                    this.damage = 300
                    this.bomb = 1
                    this.real = 1
                    this.crew = 1.8
                    this.puncture = 1
                    this.fireChance = 50
                    this.buy = 60
                    this.sell = 30
                    this.double = 0
                } else if (this.type == 9) {
                    this.name1 = "Heat"
                    this.name2 = "Beam II"
                    this.max = 1200
                    this.damage = 10
                    // this.bomb = 1
                    this.beam = 1
                    this.real = 1
                    this.crew = 1.8
                    // this.puncture = 1
                    this.fireChance = 300
                    this.double = 0
                    this.buy = 60
                    this.sell = 31
                } else if (this.type == 10) {
                    this.name1 = "Ion"
                    this.name2 = "Pellet I"
                    this.max = 200
                    this.damage = 1
                    this.real = 1
                    this.crew = .5
                    this.fireChance = 1
                    this.double = 1
                    this.buy = 45
                    this.sell = 20
                    this.shooter = 1
                } else if (this.type == 11) {
                    this.name1 = "Ion"
                    this.name2 = "Pellet II"
                    this.max = 300
                    this.damage = 5
                    this.real = 1
                    this.crew = 1
                    this.fireChance = 20
                    this.double = 2
                    this.buy = 55
                    this.sell = 22
                    this.shooter = 1
                } else if (this.type == 12) {
                    this.name1 = "Crew Ion"
                    this.name2 = "Pellet I"
                    this.max = 250
                    this.damage = 6
                    this.real = 1
                    this.crew = 18
                    this.fireChance = 40
                    this.double = 1
                    this.buy = 60
                    this.sell = 24
                    this.shooter = 1
                } else if (this.type == 13) {
                    this.name1 = "Crew Ion"
                    this.name2 = "Pellet II"
                    this.max = 375
                    this.damage = 12
                    this.real = 1
                    this.crew = 14
                    this.fireChance = 49
                    this.double = 1
                    this.buy = 70
                    this.sell = 30
                    this.shooter = 1
                } else if (this.type == 14) {
                    this.name1 = "Railgun"
                    this.name2 = "I"
                    this.railgun = 1
                    this.max = 420
                    this.damage = 18
                    this.real = 1
                    this.crew = 2
                    this.fireChance = 5
                    this.double = 1
                    this.buy = 40
                    this.sell = 19
                    this.shooter = 1
                } else if (this.type == 15) {
                    this.name1 = "Railgun"
                    this.name2 = "II"
                    this.shotCount = 2
                    this.railgun = 1
                    this.max = 720
                    this.damage = 32
                    this.real = 1
                    this.crew = 2
                    this.fireChance = 10
                    this.secretDouble = 2
                    this.double = 1
                    this.buy = 50
                    this.sell = 24
                    this.shooter = 1
                } else if (this.type == 16) {
                    this.name1 = "Railgun"
                    this.name2 = "Repeater I"
                    this.railgun = 1
                    this.max = 490 //520
                    this.damage = 27
                    this.real = 1
                    this.crew = 2
                    this.fireChance = 12
                    this.double = 1
                    this.buy = 60
                    this.sell = 29
                    this.shooter = 1
                } else if (this.type == 17) {
                    this.name1 = "Shield"
                    this.name2 = "Sap I"
                    this.sap = 1
                    this.railgun = 0
                    this.max = 600
                    this.damage = 5
                    this.real = 1
                    this.crew = .1
                    this.fireChance = 1
                    this.double = 0
                    this.buy = 30
                    this.sell = 10
                } else if (this.type == 18) {
                    this.name1 = "Shield"
                    this.name2 = "Sap II"
                    this.sap = 1
                    this.railgun = 0
                    this.max = 475
                    this.damage = 10
                    this.real = 1
                    this.crew = .1
                    this.fireChance = 1
                    this.double = 0
                    this.buy = 35
                    this.sell = 18
                } else if (this.type == 19) {
                    this.name1 = "Shield"
                    this.name2 = "Sap III"
                    this.sap = 2
                    this.railgun = 0
                    this.max = 620
                    this.damage = 15
                    this.real = 1
                    this.crew = .1
                    this.fireChance = 1
                    this.double = 0
                    this.buy = 40
                    this.sell = 22
                } else if (this.type == 20) {
                    this.name1 = "Hard"
                    this.name2 = "Beam I"
                    this.beam = 1
                    this.sap = 0
                    this.railgun = 0
                    this.max = 900
                    this.damage = 65 * 2
                    this.real = 1
                    this.crew = .5
                    this.fireChance = 10
                    this.double = 0
                    this.buy = 60
                    this.sell = 29
                    this.hard = 1
                } else if (this.type == 21) {
                    this.name1 = "Hard"
                    this.name2 = "Beam II"
                    this.beam = 1
                    this.sap = 0
                    this.railgun = 0
                    this.max = 1140
                    this.damage = 105 * 2
                    this.real = 1
                    this.crew = .5
                    this.fireChance = 20
                    this.double = 0
                    this.buy = 90
                    this.sell = 64
                    this.hard = 1
                } else if (this.type == 22) {
                    this.name1 = "Hard"
                    this.name2 = "Beam III"
                    this.beam = 1
                    this.sap = 0
                    this.railgun = 0
                    this.max = 1700
                    this.damage = 155 * 2
                    this.real = 1
                    this.crew = .5
                    this.fireChance = 30
                    this.double = 0
                    this.buy = 110
                    this.sell = 74
                    this.hard = 1
                } else if (this.type == 23) {
                    this.name1 = "Scrap"
                    this.name2 = "Cannon I"
                    // this.beam = 1
                    this.sap = 0
                    // this.railgun = 0
                    this.max = 460
                    this.damage = 80
                    this.real = 1
                    this.crew = 1
                    this.fireChance = 22
                    this.double = 1
                    this.secretDouble = 2
                    this.scrap = 1
                    this.buy = 55
                    this.sell = 26
                    this.shooter = 1
                    this.shotCount = 2
                    // this.hard = 1
                } else if (this.type == 24) {
                    this.name1 = "Scrap"
                    this.name2 = "Cannon II"
                    this.shooter = 1
                    // this.beam = 1
                    this.sap = 0
                    // this.railgun = 0
                    this.max = 600
                    this.damage = 150
                    this.real = 1
                    this.crew = 1
                    this.fireChance = 33
                    this.double = 1
                    this.secretDouble = 4
                    this.shotCount = 4
                    this.scrap = 2
                    this.buy = 65
                    this.sell = 34
                    // this.hard = 1
                } else if (this.type == 25) {
                    this.name1 = "Scrap"
                    this.name2 = "Cannon III"
                    this.shooter = 1
                    // this.beam = 1
                    this.sap = 0
                    // this.railgun = 0
                    this.max = 960
                    this.damage = 320
                    this.real = 1
                    this.crew = 1
                    this.fireChance = 44
                    this.double = 1
                    this.secretDouble = 6
                    this.shotCount = 6
                    this.buy = 77
                    this.sell = 42
                    this.scrap = 3
                    // this.hard = 1
                } else if (this.type == 26) {
                    this.name1 = "Heat"
                    this.name2 = "Beam I"
                    this.max = 405
                    this.damage = 5
                    // this.bomb = 1
                    this.beam = 1
                    this.real = 1
                    this.crew = 1.8
                    // this.puncture = 1
                    this.fireChance = 300
                    this.double = 0
                    this.buy = 45
                    this.sell = 20
                    this.mini = 1
                } else if (this.type == 27) {
                    this.name1 = "Mind"
                    this.name2 = "Control I"
                    this.max = 1020
                    this.damage = 0
                    // this.bomb = 1
                    this.beam = 0
                    this.real = 1
                    this.crew = 0
                    // this.puncture = 1
                    this.fireChance = 0
                    this.double = 0
                    this.buy = 65
                    this.sell = 45
                    this.mind = 1
                } else if (this.type == 28) {
                    this.name1 = "Mind"
                    this.name2 = "Control II"
                    this.max = 1420
                    this.damage = 0
                    // this.bomb = 1
                    this.beam = 0
                    this.real = 1
                    this.crew = 0
                    // this.puncture = 1
                    this.fireChance = 0
                    this.double = 0
                    this.buy = 70
                    this.sell = 55
                    this.mind = 2
                } else if (this.type == 29) {
                    this.name1 = "Ship"
                    this.name2 = "Tether I"
                    this.max = 195
                    this.damage = 5
                    // this.bomb = 1
                    this.tether = 1
                    this.beam = 0
                    this.real = 1
                    this.crew = 0
                    // this.puncture = 1
                    this.fireChance = 0
                    this.double = 0
                    this.buy = 30
                    this.sell = 15
                    // this.mind = 2
                } else if (this.type == 30) {
                    this.name1 = "Ship"
                    this.name2 = "Tether II"
                    this.max = 240
                    this.damage = 10
                    // this.bomb = 1
                    this.tether = 2
                    this.beam = 0
                    this.real = 1
                    this.crew = 0
                    // this.puncture = 1
                    this.fireChance = 0
                    this.double = 0
                    this.buy = 35
                    this.sell = 20
                    // this.mind = 2
                } else if (this.type == 31) {
                    this.name1 = "Ship"
                    this.name2 = "Tether III"
                    this.max = 280
                    this.damage = 15
                    this.tether = 3
                    this.beam = 0
                    this.real = 1
                    this.crew = 0
                    // this.puncture = 1
                    this.fireChance = 0
                    this.double = 0
                    this.buy = 40
                    this.sell = 25
                    // this.mind = 2
                } else if (this.type == 32) {
                    this.name1 = "Tractor"
                    this.name2 = "Beam I"
                    this.max = 205
                    this.damage = 0
                    this.tractor = 1
                    this.beam = 0
                    this.real = 1
                    this.crew = 0
                    // this.puncture = 1
                    this.fireChance = 0
                    this.double = 0
                    this.buy = 50
                    this.sell = 25
                    // this.mind = 2
                } else if (this.type == 33) {
                    this.name1 = "Tractor"
                    this.name2 = "Beam II"
                    this.max = 305
                    this.damage = 0
                    this.tractor = 1
                    this.fling = 1
                    this.beam = 0
                    this.real = 1
                    this.crew = 0
                    // this.puncture = 1
                    this.fireChance = 0
                    this.double = 0
                    this.buy = 60
                    this.sell = 35
                    // this.mind = 2
                } else if (this.type == 34) {
                    this.name1 = "Mirror"
                    this.name2 = "Shell I"
                    this.max = 560
                    this.damage = 0
                    this.mirror = 1
                    this.shineMax = 140
                    // this.fling = 1
                    this.beam = 0
                    this.real = 1
                    this.crew = 0
                    // this.puncture = 1
                    this.fireChance = 0
                    this.double = 0
                    this.buy = 40
                    this.sell = 22
                    // this.mind = 2
                } else if (this.type == 35) {
                    this.name1 = "Mirror"
                    this.name2 = "Shell II"
                    this.max = 820
                    this.damage = 0
                    this.mirror = 1
                    this.shineMax = 350
                    // this.fling = 1
                    this.beam = 0
                    this.real = 1
                    this.crew = 0
                    // this.puncture = 1
                    this.fireChance = 0
                    this.double = 0
                    this.buy = 50
                    this.sell = 28
                    // this.mind = 2
                }  else if (this.type == 36) {
                    this.name1 = "Capacitor"
                    this.name2 = "I"
                    this.max = 100
                    this.damage = 0
                    // this.mirror = 1
                    // this.shineMax = 350
                    // this.fling = 1
                    this.beam = 0
                    this.real = 1
                    this.crew = 0
                    // this.puncture = 1
                    this.fireChance = 0
                    this.double = 0
                    this.buy = 40
                    this.sell = 20
                    this.baseCharge = .05
                    this.capacitor = 1
                    // this.mind = 2
                }  else if (this.type == 37) {
                    this.name1 = "Capacitor"
                    this.name2 = "II"
                    this.max = 250
                    this.baseCharge = .15
                    this.damage = 0
                    // this.mirror = 1
                    // this.shineMax = 350
                    // this.fling = 1
                    this.capacitor = 1
                    this.beam = 0
                    this.real = 1
                    this.crew = 0
                    // this.puncture = 1
                    this.fireChance = 0
                    this.double = 0
                    this.buy = 50
                    this.sell = 28
                    // this.mind = 2
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
                    this.buy = 1
                    this.sell = 2
                } else if (this.type == 101) {
                    this.name1 = "Laser"
                    this.name2 = "IOU"
                    this.max = 9000000000
                    this.damage = 1
                    this.bomb = 0
                    this.real = 1
                    this.crew = 0
                    this.puncture = 1
                    this.wod = 1
                    this.double = 0
                    this.fireChance = 0
                    this.buy = 50
                    this.sell = 50
                }
                if (this.type == -11) {
                    this.name1 = "Secret"
                    this.name2 = "Testgun"
                    this.max = 1
                    this.damage = 99
                    this.real = 1
                    this.fireChance = 1000
                    this.buy = 50
                    this.sell = 15
                    this.type = 16
                }
                // this.fireChance = 0
                if (mode == 1) {

                } else {
                    this.buy *= 2
                }
            }
        }
        sold() {
            if (vessel.weapons.includes(this)) {
                vessel.weapons[vessel.weapons.indexOf(this)] = new Weapon(-1)
                let price = this.sell
                for (let t = 0; t < vessel.guys.length; t++) {
                    price *= vessel.guys[t].barter
                }
                price = Math.floor(price)
                vessel.scrap += price
                vessel.upgradeMenu.shopdraw = 0
            }
            if (vessel.upgradeMenu.wepsto.includes(this)) {
                vessel.upgradeMenu.wepsto[vessel.upgradeMenu.wepsto.indexOf(this)] = new Weapon(-1)
                let price = this.sell
                for (let t = 0; t < vessel.guys.length; t++) {
                    price *= vessel.guys[t].barter
                }
                price = Math.floor(price)
                vessel.scrap += price
                vessel.upgradeMenu.shopdraw = 0
            }
        }
        bought() {
            // if(shop.weapons.includes(this)){
            //     shop.weapons[shop.weapons.indexOf(this)] = new Weapon(this.type, this.crewType)
            //     vessel.scrap -= this.buy
            // }
            let f = 0
            let index = -1
            for (let t = 0; t < vessel.weapons.length; t++) {
                if (vessel.weapons[t].type == -1) {
                    index = t
                    f = 1
                    break
                }
            }
            if (stars.stars[vessel.star].weapons[stars.stars[vessel.star].weapons.indexOf(this)].gearType > -1) {
                f = 0
            }
            if (f == 0) {
                for (let t = 0; t < vessel.upgradeMenu.wepsto.length; t++) {
                    if (vessel.upgradeMenu.wepsto[t].type == -1) {
                        index = t
                        f = 2
                        break
                    }
                }
                if (f == 2) {
                    let price = this.buy
                    for (let t = 0; t < vessel.guys.length; t++) {
                        price /= vessel.guys[t].barter
                    }
                    price = Math.floor(price)
                    if (vessel.scrap >= price) {
                        if (stars.stars[vessel.star].weapons.includes(this)) {
                            vessel.upgradeMenu.wepsto[index] = new Weapon(this.type, this.crewType, this.gearType)
                            stars.stars[vessel.star].weapons[stars.stars[vessel.star].weapons.indexOf(this)] = new Weapon(-1, -1, -1)

                            vessel.scrap -= price
                            vessel.upgradeMenu.shopdraw = 0
                        }
                    }
                }

            } else {
                let price = this.buy
                for (let t = 0; t < vessel.guys.length; t++) {
                    price /= vessel.guys[t].barter
                }
                price = Math.floor(price)
                if (stars.stars[vessel.star].weapons.includes(this)) {
                    if (vessel.scrap >= price) {
                        vessel.weapons[index] = new Weapon(this.type, this.crewType)
                        stars.stars[vessel.star].weapons[stars.stars[vessel.star].weapons.indexOf(this)] = new Weapon(-1)

                        vessel.scrap -= price
                        vessel.upgradeMenu.shopdraw = 0
                    }
                }
            }
        }
        shrink(t) {
            let twet = 0
            if (this.bullets[t].dummy == 1) {
                for (let k = this.bullets.length - 1; k >= 0; k--) {
                    if (this.bullets[k].life <= 0) {
                        if (k < this.bullets.length - 1) {
                            if (this.bullets[k + 1].dummy == 1) {
                                this.bullets[k + 1].life = -1
                            }
                        }
                        this.bullets.splice(k, 1);
                        return true
                    }
                }
                return false
            }

            if (vessel.weapons.includes(this)) {
                if (enemy.shield.rings.length > 0) {
                    if (this.bullets[t].rope != 1) { //|| this.bullets[t].subly > 0
                        if (this.bullets[t].doesPerimeterTouch(enemy.shield.rings[enemy.shield.rings.length - 1])) {
                            this.bullets[t].stopped = 1
                            this.bullets[t].life -= 150
                            // this.bullets[t].x = -1000
                            // this.bullets[t].y = -1000
                            // enemy.shield.state -= 1
                            enemy.shield.charge = 0
                            enemy.shield.rings.splice(enemy.shield.rings.length - this.double, this.double)
                            if (enemy.shield.state < 0) {
                                enemy.shield.state = 0
                            }
                            return true
                        }
                    }
                }
            } else {
                if (vessel.shield.rings.length > 0) {
                    if (this.bullets[t].rope != 1) { //this.bullets[t].subly > 0 ??
                        if (this.bullets[t].doesPerimeterTouch(vessel.shield.rings[vessel.shield.rings.length - 1])) {
                            this.bullets[t].stopped = 1
                            this.bullets[t].life -= 150
                            // this.bullets[t].x = -1000
                            // this.bullets[t].y = -1000
                            // vessel.shield.state -= 1
                            vessel.shield.charge = 0
                            vessel.shield.rings.splice(vessel.shield.rings.length - this.double, this.double)
                            if (vessel.shield.state < 0) {
                                vessel.shield.state = 0
                            }
                            return true
                        }
                    }
                }

            }
            for (let k = this.bullets.length - 1; k >= 0; k--) {
                if (this.bullets[k].life <= 0) {
                    if (k < this.bullets.length - 1) {
                        if (this.bullets[k + 1].dummy == 1) {
                            this.bullets[k + 1].life = -1
                        }
                    }
                    // this.bullets.splice(k, 1);
                    // return true
                }
            }

            if (vessel.weapons.includes(this)) {
                if ((this.bullets[t].life <= 1 && this.bullets[t].stopped != 1) || this.bullets[t].goTo.isPointInside(this.bullets[t])) {

                    for (let g = 0; g < enemy.guys.length; g++) {
                        if (this.bullets[t].goTo.t == enemy.guys[g].tile.t && this.bullets[t].goTo.k == enemy.guys[g].tile.k) {
                            enemy.guys[g].health -= ((this.damage / this.shotCount) * this.crew) / (1 + enemy.guys[g].gearArmor)
                        }
                        if (enemy.guys[g].stretch == 1) {
                            for (let d = 0; d < enemy.guys[g].tiles.length; d++) {
                                if (this.bullets[t].goTo.t == enemy.guys[g].tiles[d].t && this.bullets[t].goTo.k == enemy.guys[g].tiles[d].k) {
                                    enemy.guys[g].health -= ((this.damage / this.shotCount) * this.crew) / (1 + enemy.guys[g].gearArmor)
                                }
                            }
                        }
                    }

                    if (this.bullets[t].rope != 1) {
                        this.bullets[t].life = -100
                    }
                    if (this.bullets[t].rope == 1) {
                        if (this.bullets[t].tap != 1) {
                            this.bullets[t].goTo.integrity -= this.damage / this.shotCount
                        }
                    } else {
                        this.bullets[t].goTo.integrity -= this.damage / this.shotCount

                    }


                    this.bullets[t].goTo.fire -= this.fireChance
                    if (Math.random() < (this.fireChance / 300)) {
                        this.bullets[t].goTo.onFire = 1
                        this.bullets[t].goTo.fire = 0
                    }
                    if (this.railgun == 1) {
                        this.bullets[t].goTo.integrity -= (this.damage * 3) / this.shotCount//5
                    }
                    if (this.puncture == 1) {
                        let n = enemy.neighbors(this.bullets[t].goTo)
                        for (let r = 0; r < n.length; r++) {
                            n[r].integrity -= this.damage
                        }
                    }
                    if (this.bullets[t].rope == 1) {
                        if (this.bullets[t].tap != 1) {
                            enemy.hull -= (this.damage * .1) / this.shotCount
                        }
                    } else {

                        enemy.hull -= (this.damage * .1) / this.shotCount
                    }
                    if (this.bullets[t].rope != 1) {
                        this.bullets[t].life -= 100
                    }
                    this.bullets[t].tap = 1
                }
            } else {

                if ((this.bullets[t].life <= 1 && this.bullets[t].stopped != 1) || this.bullets[t].goTo.isPointInside(this.bullets[t])) {

                    if (this.bullets[t].rope != 1) {
                        this.bullets[t].life = -100
                    }
                    for (let g = 0; g < vessel.guys.length; g++) {
                        if (this.bullets[t].goTo.t == vessel.guys[g].tile.t && this.bullets[t].goTo.k == vessel.guys[g].tile.k) {
                            vessel.guys[g].health -= (this.damage * this.crew) / (1 + vessel.guys[g].gearArmor)
                        }
                        if (vessel.guys[g].stretch == 1) {
                            for (let d = 0; d < vessel.guys[g].tiles.length; d++) {
                                if (this.bullets[t].goTo.t == vessel.guys[g].tiles[d].t && this.bullets[t].goTo.k == vessel.guys[g].tiles[d].k) {
                                    vessel.guys[g].health -= ((this.damage / this.shotCount) * this.crew) / (1 + vessel.guys[g].gearArmor)
                                }
                            }
                        }
                    }

                    if (this.bullets[t].rope == 1) {
                        if (this.bullets[t].tap != 1) {
                            this.bullets[t].goTo.integrity -= this.damage / this.shotCount
                        }
                    } else {

                        this.bullets[t].goTo.integrity -= this.damage / this.shotCount
                    }

                    this.bullets[t].goTo.fire -= this.fireChance
                    if (Math.random() < (this.fireChance / 300)) {
                        this.bullets[t].goTo.onFire = 1
                        this.bullets[t].goTo.fire = 0
                    }
                    if (this.railgun == 1) {
                        this.bullets[t].goTo.integrity -= (this.damage * 3) / this.shotCount//5
                    }
                    if (this.puncture == 1) {
                        let n = vessel.neighbors(this.bullets[t].goTo)
                        for (let r = 0; r < n.length; r++) {
                            n[r].integrity -= this.damage
                        }
                    }
                    if (this.bullets[t].rope == 1) {
                        if (this.bullets[t].tap != 1) {
                            vessel.hull -= (this.damage * .1) / this.shotCount
                        }
                    } else {

                        vessel.hull -= (this.damage * .1) / this.shotCount
                    }
                    if (this.bullets[t].rope != 1) {
                        this.bullets[t].life -= 100
                    }
                    this.bullets[t].tap = 1
                }
            }
        }
        fire(tile) {
            if (this.charge >= this.max) {
                if (vessel.weapons.includes(this)) {
                    if(this.capacitor == 1){
                        this.charge = this.max
                        let ixs = []
                        for(let t = 0;t<vessel.weapons.length;t++){
                            if(vessel.weapons[t].real == 1){
                                ixs.push(t)
                            }
                        }
                        let c = this.charge
                        for(let t = 0;t<ixs.length;t++){
                            vessel.weapons[ixs[t]].charge += c/ixs.length
                            this.charge-=c/ixs.length
                            if(vessel.weapons[ixs[t]].charge > vessel.weapons[ixs[t]].max){
                                this.charge += vessel.weapons[ixs[t]].charge - vessel.weapons[ixs[t]].max
                            } 
                        }
                        return
                    }
                }
                if (enemy.weapons.includes(this)) {
                    if(this.capacitor == 1){
                        this.charge = this.max
                        let ixs = []
                        for(let t = 0;t<enemy.weapons.length;t++){
                            if(enemy.weapons[t].real == 1){
                                ixs.push(t)
                            }
                        }
                        let c = this.charge
                        for(let t = 0;t<ixs.length;t++){
                            enemy.weapons[ixs[t]].charge += c/ixs.length
                            this.charge-=c/ixs.length
                            if(enemy.weapons[ixs[t]].charge > enemy.weapons[ixs[t]].max){
                                this.charge += enemy.weapons[ixs[t]].charge - enemy.weapons[ixs[t]].max
                            } 
                        }
                        return
                    }
                }

                if (vessel.weapons.includes(this)) {
                    if (enemy.hull <= 0 || enemy.guys.length == 0) {
                        return
                    }
                }
                if (enemy.weapons) {
                    if (enemy.weapons.includes(this)) {
                        if (vessel.hull <= 0) {
                            return
                        }
                    }
                }
                if (vessel.weapons.includes(this)) {
                    if (enemy.hull <= 0 || enemy.guys.length == 0) {
                        return
                    }
                    if (this.bomb == 1) {
                        if (vessel.bombs <= 0) {
                            return
                        }
                        blast.play()
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
                        blast.play()
                    }
                }
                if (this.beam == 1) {
                    this.angle = Math.random() * Math.PI * 2
                }

                if (vessel.weapons.includes(this)) {
                    if (this.scrap >= 1) {
                        if (vessel.scrap >= this.scrap) {
                            vessel.scrap -= this.scrap
                            // return
                        } else {
                            return
                        }
                    }
                }

                this.reflect = 0
                if (this.laser == 1) {
                    if (vessel.weapons.includes(this)) {
                        for (let t = 0; t < enemy.weapons.length; t++) {
                            if (enemy.weapons[t].mirror == 1) {
                                if (enemy.weapons[t].shine > 0) {
                                    let link = new LineOP(this.center, tile)
                                    if (link.intersects(enemy.weapons[t].plate)) {
                                        this.reflect = 1
                                        this.pointOut = t
                                        tile = vessel.supratiles[Math.floor(Math.random() * vessel.supratiles.length)]
                                    }
                                }
                            }
                        }
                    } else {
                        for (let t = 0; t < vessel.weapons.length; t++) {
                            if (vessel.weapons[t].mirror == 1) {
                                if (vessel.weapons[t].shine > 0) {
                                    let link = new LineOP(this.center, tile)
                                    if (link.intersects(vessel.weapons[t].plate)) {
                                        this.reflect = 1
                                        this.pointOut = t
                                        tile = enemy.supratiles[Math.floor(Math.random() * enemy.supratiles.length)]
                                    }
                                }
                            }
                        }

                    }
                }
                if (this.firing <= 0) {
                    this.firing = 10
                    this.target = tile
                    this.charge = 0
                } else {
                    this.target = tile
                    return
                }



                if ((vessel.weapons.includes(this) && !(this.reflect == 1)) || (enemy.weapons.includes(this) && (this.reflect == 1))) {
                    if (enemy.hull <= 0 || enemy.guys.length == 0) {
                        return
                    }
                    if (this.bomb == 1) {
                        if (vessel.bombs <= 0) {
                            return
                        }
                        vessel.bombs--
                    }

                    let enododge = 0
                    for (let t = 0; t < vessel.weapons.length; t++) {
                        for (let k = 0; k < vessel.weapons[t].bullets.length; k++) {
                            if (vessel.weapons[t].bullets[k].rope == 1) {
                                if (vessel.weapons[t].bullets[k].life > 10) {
                                    enododge++
                                }
                            }
                        }
                    }

                    if (this.mirror == 1) {
                        this.shine = this.shineMax
                        this.firing = -1
                        return
                    }

                    if (this.tractor == 1) {
                        let sweart = 0
                        for (let w = 0; w < enemy.weapons.length; w++) {
                            if (enemy.weapons[w].bullets.length > 0) {
                                sweart = 1
                                for (let f = 0; f < enemy.weapons[w].bullets.length; f++) {
                                    if (enemy.weapons[w].bullets[f].aura != 1 && enemy.weapons[w].bullets[f].dummy != 1) {
                                        enemy.weapons[w].bullets[f].xmom *= .8
                                        enemy.weapons[w].bullets[f].ymom *= .8
                                        enemy.weapons[w].bullets[f].life += 20
                                        enemy.weapons[w].bullets[f].aura = 1
                                        enemy.weapons[w].bullets[f].captain = this.center
                                        if (this.fling == 1) {
                                            enemy.weapons[w].bullets[f].fling = 1
                                        }
                                    } else if (enemy.weapons[w].bullets[f].dummy == 1) {
                                        enemy.weapons[w].bullets[f].life = -1
                                    }

                                }
                            }
                        }
                        if (sweart == 0) {
                            this.charge = this.max
                        }
                        this.firing = -1
                        return
                    }

                    if (Math.random() - (enododge / 10) < enemy.dodgeRate()) {
                        this.missed = 0
                        for (let t = 0; t < vessel.guys.length; t++) {
                            if (vessel.guys[t].tile.weapon == 1) {
                                vessel.guys[t].skillslist[1] += .01
                            }
                        }


                        if (enemy.shield.state > 0 && this.bomb != 1) {
                            if (this.shooter != 1) {

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
                                if (this.tether > 0) {
                                    let dxit = new Point(tile.x + (tile.width * .5), tile.y + (tile.height * .5))
                                    let bullet = new CircleR(this.center.x, this.center.y, 2, "#8D511899", (dxit.x - this.center.x), (dxit.y - this.center.y))
                                    bullet.rope = 1
                                    bullet.cx = (Math.random()-.5)*1
                                    bullet.cy = (Math.random()-.5)*1
                                    bullet.subfly = 10
                                    ropesound.play()
                                    bullet.goTo = this.target
                                    bullet.life = 100 * this.tether
                                    if (this.temp != -2) {
                                        this.temp += 100 * this.tether
                                        //////console.log(this.temp)
                                    }
                                    this.bullets.push(bullet)
                                    this.firing = 0
                                    return
                                }
                            } else {
                                //handle in bullet?
                            }

                        } else {
                            if (this.tether > 0) {
                                if (tile.weaponized == 1) {

                                    let dxit = new Point(tile.x + (tile.width * .5), tile.y + (tile.height * .5))
                                    let bullet = new CircleR(this.center.x, this.center.y, 2, "#8D511899", dxit.x - this.center.x, dxit.y - this.center.y)
                                    bullet.rope = 1
                                    bullet.cx = (Math.random()-.5)*1
                                    bullet.cy = (Math.random()-.5)*1
                                    bullet.subfly = 10
                                    ropesound.play()
                                    bullet.goTo = this.target
                                    bullet.life = 100 * this.tether
                                    if (this.temp != -2) {
                                        this.temp += 100 * this.tether
                                        //////console.log(this.temp)
                                    }
                                    this.bullets.push(bullet)
                                    this.firing = 0
                                    return
                                } else {
                                    let j = 0
                                    while (tile.weaponized != 1) {
                                        tile = enemy.supratiles[Math.floor(Math.random() * enemy.supratiles.length)]
                                        j++
                                        if (j > 1000) {
                                            break
                                        }
                                    }
                                    let dxit = new Point(tile.x + (tile.width * .5), tile.y + (tile.height * .5))
                                    let bullet = new CircleR(this.center.x, this.center.y, 2, "#8D511899", dxit.x - this.center.x, dxit.y - this.center.y)
                                    bullet.rope = 1
                                    bullet.cx = (Math.random()-.5)*1
                                    bullet.cy = (Math.random()-.5)*1
                                    bullet.subfly = 10
                                    ropesound.play()
                                    bullet.goTo = this.target
                                    bullet.life = 100 * this.tether
                                    if (this.temp != -2) {
                                        this.temp += 100 * this.tether
                                        //////console.log(this.temp)
                                    }
                                    this.bullets.push(bullet)
                                    this.firing = 0
                                    return
                                }
                            }
                            if (this.hard == 1) {

                                tile.integrity -= this.damage / 10
                            } else {

                                tile.integrity -= this.damage
                            }
                            tile.fire -= this.fireChance
                            if (Math.random() < (this.fireChance / 300)) {
                                tile.onFire = 1
                                tile.fire = 0
                            }
                            if (this.railgun == 1) {
                                tile.integrity -= this.damage * 3//5
                            }
                            if (this.puncture == 1) {
                                let n = enemy.neighbors(tile)
                                for (let r = 0; r < n.length; r++) {
                                    n[r].integrity -= this.damage
                                }
                            }
                            if (this.beam == 1) {
                                if (this.mini == 1) {

                                } else {
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
                            }
                            if (this.shooter == 1) {

                            } else {
                                enemy.hull -= this.damage * .1
                                if (this.sap <= 0) {
                                    for (let t = 0; t < enemy.guys.length; t++) {
                                        if (enemy.guys[t].tile == tile) {
                                            enemy.guys[t].health -= (this.damage * this.crew) / (1 + enemy.guys[t].gearArmor)
                                            enemy.guys[t].hit = 0
                                            if (this.mind > 0) {
                                                if (enemy.guys[t].type != 1 && enemy.guys[t].type != 8) { //psychic resistance
                                                    enemy.guys[t].hostile = 1
                                                    enemy.guys[t].hostileTimer = this.mind * 250 //400
                                                    enemy.guys[t].mindControlled = 1
                                                }
                                            }
                                        }
                                        if (enemy.guys[t].tiles) {
                                            if (enemy.guys[t].tiles.includes(tile)) {
                                                enemy.guys[t].health -= (this.damage * this.crew) / (1 + enemy.guys[t].gearArmor)
                                                enemy.guys[t].hit = 0
                                                if (this.mind > 0) {
                                                    if (enemy.guys[t].type != 1 && enemy.guys[t].type != 8) { //psychic resistance
                                                        enemy.guys[t].hostile = 1
                                                        enemy.guys[t].hostileTimer = this.mind * 250 //400
                                                        enemy.guys[t].mindControlled = 1
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        this.missed = 1
                        let j = 0
                        while (this.target.marked == 1) {
                            j++
                            if (j > 1000) {
                                break
                            }
                            this.target = enemy.blocks[Math.floor(Math.random() * enemy.blocks.length)][Math.floor(Math.random() * enemy.blocks[0].length)]
                        }

                        if (this.tether > 0) {
                            let dxit = new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5))
                            let bullet = new CircleR(this.center.x, this.center.y, 2, "#8D511899", dxit.x - this.center.x, dxit.y - this.center.y)
                            bullet.rope = 1
                                    bullet.cx = (Math.random()-.5)*1
                                    bullet.cy = (Math.random()-.5)*1
                            bullet.subfly = 10
                            ropesound.play()
                            bullet.goTo = this.target
                            bullet.life = 10
                            this.bullets.push(bullet)
                            this.firing = 0
                            return
                        }
                    }
                } else {
                    if (enemy.hull <= 0 || enemy.guys.length == 0) {
                        return
                    }
                    if (this.bomb == 1) {
                        if (enemy.bombs <= 0) {
                            return
                        }
                        enemy.bombs--
                        vessel.shake = 10
                        ////////////////////////console.log(vessel.shake)
                    }
                    // if (this.scrap >= 1) {
                    //     if (enemy.scrap <= this.scrap) {
                    //         return
                    //     }
                    //     enemy.scrap-=this.scrap
                    // }
                    let vnododge = 0
                    for (let t = 0; t < enemy.weapons.length; t++) {
                        for (let k = 0; k < enemy.weapons[t].bullets.length; k++) {
                            if (enemy.weapons[t].bullets[k].rope == 1) {
                                if (enemy.weapons[t].bullets[k].life > 10) {
                                    vnododge++
                                }
                            }
                        }
                    }


                    if (this.tractor == 1) {
                        let sweart = 0
                        for (let w = 0; w < vessel.weapons.length; w++) {
                            if (vessel.weapons[w].bullets.length > 0) {
                                sweart = 1
                                for (let f = 0; f < vessel.weapons[w].bullets.length; f++) {
                                    if (vessel.weapons[w].bullets[f].aura != 1 && vessel.weapons[w].bullets[f].dummy != 1) {
                                        vessel.weapons[w].bullets[f].xmom *= .8
                                        vessel.weapons[w].bullets[f].ymom *= .8
                                        vessel.weapons[w].bullets[f].life += 20
                                        vessel.weapons[w].bullets[f].aura = 1
                                        vessel.weapons[w].bullets[f].captain = this.center
                                        if (this.fling == 1) {
                                            vessel.weapons[w].bullets[f].fling = 1
                                        }
                                    } else if (vessel.weapons[w].bullets[f].dummy == 1) {
                                        vessel.weapons[w].bullets[f].life = -1
                                    }

                                }
                            }
                        }
                        if (sweart == 0) {
                            this.charge = this.max
                        }
                        this.firing = -1
                        return
                    }
                    if (Math.random() - (vnododge / 10) < vessel.dodgeRate()) {
                        this.missed = 0
                        for (let t = 0; t < enemy.guys.length; t++) {
                            if (enemy.guys[t].tile.weapon == 1) {
                                enemy.guys[t].skillslist[1] += .001
                            }
                        }




                        if (vessel.shield.state > 0 && this.bomb != 1) {
                            if (this.shooter != 1) {
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

                                if (this.tether > 0) {
                                    let dxit = new Point(tile.x + (tile.width * .5), tile.y + (tile.height * .5))
                                    let bullet = new CircleR(this.center.x, this.center.y, 2, "#8D511899", (dxit.x - this.center.x), (dxit.y - this.center.y))
                                    bullet.rope = 1
                                    bullet.cx = (Math.random()-.5)*1
                                    bullet.cy = (Math.random()-.5)*1
                                    bullet.subfly = 10
                                    ropesound.play()
                                    bullet.goTo = this.target
                                    bullet.life = 100 * this.tether
                                    if (this.temp != -2) {
                                        this.temp += 100 * this.tether
                                        //////console.log(this.temp)
                                    }
                                    this.bullets.push(bullet)
                                    this.firing = 0
                                    return
                                }
                            } else {
                                //handle in bullet
                            }

                        } else {
                            if (this.tether > 0) {
                                if (tile.weaponized == 1) {

                                    let dxit = new Point(tile.x + (tile.width * .5), tile.y + (tile.height * .5))
                                    let bullet = new CircleR(this.center.x, this.center.y, 2, "#8D511899", dxit.x - this.center.x, dxit.y - this.center.y)
                                    bullet.rope = 1
                                    bullet.cx = (Math.random()-.5)*1
                                    bullet.cy = (Math.random()-.5)*1
                                    bullet.subfly = 10
                                    ropesound.play()
                                    bullet.goTo = this.target
                                    bullet.life = 100 * this.tether
                                    if (this.temp != -2) {
                                        this.temp += 100 * this.tether
                                        //////console.log(this.temp)
                                    }
                                    this.bullets.push(bullet)
                                    this.firing = 0
                                    return
                                } else {
                                    let j = 0
                                    while (tile.weaponized != 1) {
                                        tile = vessel.supratiles[Math.floor(Math.random() * vessel.supratiles.length)]
                                        j++
                                        if (j > 1000) {
                                            break
                                        }
                                    }
                                    let dxit = new Point(tile.x + (tile.width * .5), tile.y + (tile.height * .5))
                                    let bullet = new CircleR(this.center.x, this.center.y, 2, "#8D511899", dxit.x - this.center.x, dxit.y - this.center.y)
                                    bullet.rope = 1
                                    bullet.cx = (Math.random()-.5)*1
                                    bullet.cy = (Math.random()-.5)*1
                                    bullet.subfly = 10
                                    ropesound.play()
                                    bullet.goTo = this.target
                                    bullet.life = 100 * this.tether
                                    if (this.temp != -2) {
                                        this.temp += 100 * this.tether
                                        //////console.log(this.temp)
                                    }
                                    this.bullets.push(bullet)
                                    this.firing = 0
                                    return
                                }
                            }


                            if (this.hard == 1) {

                                tile.integrity -= this.damage / 10
                            } else {

                                tile.integrity -= this.damage
                            }
                            tile.fire -= this.fireChance
                            if (this.railgun == 1) {
                                tile.integrity -= this.damage * 3 //5
                            }
                            if (this.puncture == 1) {
                                let n = vessel.neighbors(tile)
                                for (let r = 0; r < n.length; r++) {
                                    n[r].integrity -= this.damage
                                }
                            }
                            if (this.beam == 1) {
                                if (this.mini == 1) {

                                } else {
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
                            }
                            if (this.shooter == 1) {

                            } else {
                                vessel.hull -= this.damage * .1
                                if (this.sap <= 0) {
                                    for (let t = 0; t < vessel.guys.length; t++) {
                                        if (vessel.guys[t].tile == tile) {
                                            vessel.guys[t].health -= (this.damage * this.crew) / (1 + vessel.guys[t].gearArmor)
                                            vessel.guys[t].hit = 0
                                            if (this.mind > 0) {
                                                if (vessel.guys[t].type != 1 && vessel.guys[t].type != 8) { //psychic resistance
                                                    vessel.guys[t].hostile = 1
                                                    vessel.guys[t].hostileTimer = this.mind * 250 //400
                                                    vessel.guys[t].mindControlled = 1
                                                }
                                            }
                                        }
                                        if (vessel.guys[t].tiles) {
                                            if (vessel.guys[t].tiles.includes(tile)) {
                                                vessel.guys[t].health -= (this.damage * this.crew) / (1 + vessel.guys[t].gearArmor)
                                                vessel.guys[t].hit = 0
                                                if (this.mind > 0) {
                                                    if (vessel.guys[t].type != 1 && vessel.guys[t].type != 8) { //psychic resistance
                                                        vessel.guys[t].hostile = 1
                                                        vessel.guys[t].hostileTimer = this.mind * 250 //400
                                                        vessel.guys[t].mindControlled = 1
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    } else {

                        this.missed = 1
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
                        if (this.tether > 0) {
                            let dxit = new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5))
                            let bullet = new CircleR(this.center.x, this.center.y, 2, "#8D511899", dxit.x - this.center.x, dxit.y - this.center.y)
                            bullet.rope = 1
                                    bullet.cx = (Math.random()-.5)*1
                                    bullet.cy = (Math.random()-.5)*1
                            bullet.subfly = 10
                            ropesound.play()
                            bullet.goTo = this.target
                            bullet.life = 10
                            this.bullets.push(bullet)
                            this.firing = 0
                            return
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
                            if (keysPressed['Shift']) {
                                this.metatarget = enemy.blocks[t][k]
                            }
                            if (keysPressed[`${vessel.weapons.indexOf(this) + 1}`]) {
                                this.metatarget = enemy.blocks[t][k]
                            }
                            if (keysPressed['z']) {
                                this.metatarget = enemy.blocks[t][k]
                            }
                            if (keysPressed['q']) {
                                this.metatarget = enemy.blocks[t][k]
                            }
                            if (keysPressed['x']) {
                                this.metatarget = {}
                            }
                            if (keysPressed['w']) {
                                this.metatarget = {}
                            }
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
            if(this.baseCharge > 0){
                this.charge+=this.baseCharge
            }

            if (this.temp > 0) {
                if (this.bullets.length > 1) {
                    this.bullets = [this.bullets[0]]
                }
            }
            for (let t = 0; t < this.bullets.length; t++) {
                if (this.bullets[t].sxmom > -10000) {
                    this.bullets[t].xmom += this.bullets[t].sxmom
                    this.bullets[t].ymom += this.bullets[t].symom
                    this.bullets[t].life -= 5
                }
            }
            if (vessel.weapons.includes(this)) {
                if (enemy.hull <= 0) {
                    // this.bullets = []
                }
                if (enemy.guys) {
                    if (enemy.guys.length <= 0) {
                        // this.bullets = []
                    }
                }
            }
            for (let t = 0; t < this.bullets.length; t++) {
                if (!(this.bullets[t].goTo)) {
                    this.bullets[t].goTo = this.target
                }
                this.bullets[t].life--
            }
            for (let t = this.bullets.length - 1; t >= 0; t--) {
                if (this.bullets[t].life <= 0) {
                    if (t < this.bullets.length - 1) {
                        if (this.bullets[t + 1].dummy == 1) {
                            this.bullets[t + 1].life = -1
                        }
                    }
                    this.bullets.splice(t, 1);
                }
            }
            for (let t = 0; t < this.bullets.length; t++) {
                if (this.bullets[t].aura == 1) {
                    if (this.bullets[t].fling == 1) {
                        if (this.temp != -2) {
                            this.temp += 50
                        }
                        this.bullets[t].fling = 20
                        this.bullets[t].life = 100
                    }
                    if (this.bullets[t].fling == 2) {
                        this.bullets[t].fling = -10
                        if (enemy.weapons.includes(this)) {
                            let wep = new Weapon(this.type)
                            wep.temp = 10
                            let x = vessel.weapons.length
                            vessel.weapons[x] = wep
                            vessel.weapons[x].charge = 100000000000000
                            vessel.weapons[x].center.x = this.bullets[t].x
                            vessel.weapons[x].center.y = this.bullets[t].y
                            this.bullets[t].life = -1
                            this.bullets[t].aura = 0
                        } else {
                            let wep = new Weapon(this.type)
                            wep.temp = 10
                            let x = enemy.weapons.length
                            enemy.weapons[x] = wep
                            enemy.weapons[x].charge = 100000000000000
                            enemy.weapons[x].center.x = this.bullets[t].x
                            enemy.weapons[x].center.y = this.bullets[t].y
                            this.bullets[t].life = -1
                            this.bullets[t].aura = 0
                        }
                    }
                    if (this.bullets[t].fling > -1) {
                        this.bullets[t].fling--
                    }
                    this.bullets[t].xmom *= .55
                    this.bullets[t].ymom *= .55
                    let a = 0
                    let ring = []
                    for (let r = 0; r < 16; r++) {
                        let point = new Circle(this.bullets[t].x + (Math.cos(a) * 15 + (Math.random() * 8)), this.bullets[t].y + (Math.sin(a) * 15 + (Math.random() * 8)), 1, "red")
                        a += (Math.PI * 2) / 16
                        ring.push(point)
                    }
                    let max = 99999999999
                    let i = -1
                    for (let r = 1; r < 16; r++) {

                        if (this.bullets[t].fling > -1) {
                            let link = new LineOP(ring[r], ring[r - 1], "#ffff0088", 6)
                            link.draw()
                        } else {

                            let link = new LineOP(ring[r], ring[r - 1], "#00FFFF88", 3)
                            link.draw()
                        }
                        // link.draw()
                        let kink = new LineOP(this.bullets[t].captain, ring[r])
                        if (kink.hypotenuse() < max) {
                            max = kink.hypotenuse()
                            i = r
                        }
                    }

                    if (this.bullets[t].fling > -1) {
                        let links = new LineOP(ring[0], ring[15], "#ffff0088", 8)
                        links.draw()
                    } else {

                        let links = new LineOP(ring[0], ring[15], "#00FFFF88", 3)
                        links.draw()
                    }


                    if (this.bullets[t].fling > -1) {
                        let link = new LineOP(this.bullets[t].captain, ring[i], "#ffff0088", 8)
                        link.draw()
                    } else {
                        let link = new LineOP(this.bullets[t].captain, ring[i], "#00FFFF88", 4)
                        link.draw()

                    }

                    let o = new Point(this.bullets[t].x, this.bullets[t].y)
                    this.bullets[t].draw()
                    this.bullets[t].move()
                    this.bullets[t].draw()
                    let linkss = new LineOP(this.bullets[t], o, this.bullets[t].color, this.bullets[t].radius * 2)
                    linkss.draw()

                } else if (this.missed == 1) {
                    this.bullets[t].life += 10
                    if (this.bullets[t].x > canvas.width) {
                        this.bullets[t].life -= 100
                    }
                    if (this.bullets[t].x < 0) {
                        this.bullets[t].life -= 100
                    }
                    if (this.bullets[t].noline != 1) {
                        let o = new Point(this.bullets[t].x, this.bullets[t].y)
                        this.bullets[t].draw()
                        this.bullets[t].move()
                        this.bullets[t].draw()
                        let link = new LineOP(this.bullets[t], o, this.bullets[t].color, this.bullets[t].radius * 2)
                        link.draw()
                    } else {
                        this.bullets[t].move()
                        this.bullets[t].draw()
                    }
                } else if (this.bullets[t].stopshort == 1) {
                    if (this.bullets[t].x > canvas.width) {
                        this.bullets[t].life -= 100
                    }
                    if (this.bullets[t].x < 0) {
                        this.bullets[t].life -= 100
                    }
                    this.bullets[t].life++
                    let steps = 5
                    let o = new Point(this.bullets[t].x, this.bullets[t].y)
                    this.bullets[t].draw()
                    for (let h = 0; h < steps; h++) {

                        if (this.bullets[t].noline != 1) {
                            this.bullets[t].movex(10)

                            if (this.bullets[t].dummy == 1) {
                            } else {

                                if (vessel.weapons.includes(this)) {
                                    if (enemy.shield.rings.length > 0) {
                                        if (this.bullets[t].doesPerimeterTouch(enemy.shield.rings[enemy.shield.rings.length - 1])) {
                                            this.bullets[t].stopped = 1
                                            this.bullets[t].life -= 150
                                            enemy.shield.state -= this.double
                                            enemy.shield.charge = 0
                                            enemy.shield.rings.splice(enemy.shield.rings.length - this.double, this.double)
                                            if (enemy.shield.state < 0) {
                                                enemy.shield.state = 0
                                            }
                                            break
                                        }
                                    }
                                }
                            }
                            if (this.bullets[t].dummy == 1) {
                            } else {
                                if (enemy.weapons.includes(this)) {
                                    if (vessel.shield.rings.length > 0) {
                                        if (this.bullets[t].doesPerimeterTouch(vessel.shield.rings[vessel.shield.rings.length - 1])) {
                                            this.bullets[t].stopped = 1
                                            this.bullets[t].life -= 150
                                            vessel.shield.state -= this.double
                                            vessel.shield.charge = 0
                                            vessel.shield.rings.splice(vessel.shield.rings.length - this.double, this.double)
                                            if (vessel.shield.state < 0) {
                                                vessel.shield.state = 0
                                            }
                                            break
                                        }
                                    }
                                }
                            }
                        } else {
                            // this.bullets[t].move()
                            this.bullets[t].draw()
                            this.bullets[t].movex(10)
                            if (this.bullets[t].dummy == 1) {
                            } else {
                                if (vessel.weapons.includes(this)) {
                                    if (enemy.shield.rings.length > 0) {
                                        if (enemy.shield.rings[enemy.shield.rings.length - 1].doesPerimeterTouch(this.bullets[t])) {
                                            this.bullets[t].life -= 150
                                            enemy.shield.state -= this.double
                                            enemy.shield.charge = 0
                                            enemy.shield.rings.splice(enemy.shield.rings.length - this.double, this.double)
                                            if (enemy.shield.state < 0) {
                                                enemy.shield.state = 0
                                            }
                                            break
                                        }
                                    }
                                }
                                if (enemy.weapons.includes(this)) {
                                    if (vessel.shield.rings.length > 0) {
                                        if (vessel.shield.rings[vessel.shield.rings.length - 1].doesPerimeterTouch(this.bullets[t])) {
                                            this.bullets[t].life -= 150
                                            vessel.shield.state -= this.double
                                            vessel.shield.charge = 0
                                            vessel.shield.rings.splice(vessel.shield.rings.length - this.double, this.double)
                                            if (vessel.shield.state < 0) {
                                                vessel.shield.state = 0
                                            }
                                            break
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (this.shrink(t)) {
                        // t--
                        continue
                    }
                    if (this.bullets[t].noline != 1) {
                        let link = new LineOP(this.bullets[t], o, this.bullets[t].color, this.bullets[t].radius * 2)
                        link.draw()
                    }
                    this.bullets[t].draw()

                } else if (this.bullets[t].subfly > 0) {
                    this.bullets[t].subfly--
                    let xsto = this.bullets[t].xmom
                    let ysto = this.bullets[t].ymom
                    this.bullets[t].xmom = xsto / 10
                    this.bullets[t].ymom = ysto / 10
                    this.bullets[t].xmom *= (10 - this.bullets[t].subfly)
                    this.bullets[t].ymom *= (10 - this.bullets[t].subfly)
                    let o = new Point(this.bullets[t].x, this.bullets[t].y)
                    this.bullets[t].draw()
                    this.bullets[t].move()
                    this.bullets[t].draw()

                    canvas_context.beginPath()
                    this.median = new Point((o.x + this.bullets[t].x) * .5, (o.y + this.bullets[t].y) * .5)
                    canvas_context.bezierCurveTo(this.center.x, this.center.y, this.median.x + this.bullets[t].cx,  this.median.y + (this.bullets[t].cy*100), this.bullets[t].x, this.bullets[t].y)
                    canvas_context.fillStyle = this.bullets[t].color
                    canvas_context.strokeStyle =  this.bullets[t].color
                    canvas_context.lineWidth = 3
                    canvas_context.stroke()
                    
                    this.bullets[t].cx+=(Math.random()-.5)*5
                    this.bullets[t].cy*=.99
                    if(Math.abs(this.bullets[t].cy )< .001){
                        this.bullets[t].cy=.001
                    }

                    if (enemy.weapons.includes(this)) {

                        for (let k = 0; k < vessel.guys.length; k++) {
                            if (vessel.guys[k].body.doesPerimeterTouch(this.bullets[t])) {
                                this.bullets[t].life -= 25
                            }
                        }
                    } else {

                        for (let k = 0; k < enemy.guys.length; k++) {
                            if (enemy.guys[k].body.doesPerimeterTouch(this.bullets[t])) {
                                this.bullets[t].life -= 25
                            }
                        }
                        // for(let k = 0;k<)
                    }

                    if (this.shrink(t)) {
                        // t--
                        continue
                    }
                    if (this.bullets[t].noline != 1) {
                        let link = new LineOP(this.bullets[t], o, this.bullets[t].color, this.bullets[t].radius * 2)
                        // link.draw()
                    }

                    if (this.bullets[t].dummy == 1) {
                    } else {
                        if (vessel.weapons.includes(this)) {
                            if (enemy.shield.rings.length > 0) {
                                if (this.bullets[t].doesPerimeterTouch(enemy.shield.rings[enemy.shield.rings.length - 1])) {
                                    this.bullets[t].stopped = 1
                                    this.bullets[t].life -= 150
                                    break
                                    // enemy.shield.rings.splice(enemy.shield.rings.length-this.double,this.double)
                                    // this.bullets[t].xmom = 0
                                    // this.bullets[t].ymom = 0
                                }
                            }
                        }
                        if (enemy.weapons.includes(this)) {
                            if (vessel.shield.rings.length > 0) {
                                if (this.bullets[t].doesPerimeterTouch(vessel.shield.rings[vessel.shield.rings.length - 1])) {
                                    this.bullets[t].stopped = 1
                                    this.bullets[t].life -= 150
                                    break
                                    // vessel.shield.rings.splice(vessel.shield.rings.length-this.double,this.double)
                                    // this.bullets[t].xmom = 0
                                    // this.bullets[t].ymom = 0
                                }
                            }
                        }
                    }
                    
                    this.bullets[t].unmove()


                    this.bullets[t].xmom = xsto
                    this.bullets[t].ymom = ysto
                } else if (this.bullets[t].rope == 1) {
                    let xsto = this.bullets[t].xmom
                    let ysto = this.bullets[t].ymom
                    this.bullets[t].xmom = xsto / 10
                    this.bullets[t].ymom = ysto / 10
                    this.bullets[t].xmom *= (10 - this.bullets[t].subfly)
                    this.bullets[t].ymom *= (10 - this.bullets[t].subfly)
                    let o = new Point(this.bullets[t].x, this.bullets[t].y)
                    this.bullets[t].draw()
                    this.bullets[t].move()
                    this.bullets[t].draw()


                    this.median = new Point((o.x + this.bullets[t].x) * .5, (o.y + this.bullets[t].y) * .5)

                    canvas_context.beginPath()
                    canvas_context.bezierCurveTo(this.center.x, this.center.y, this.median.x + this.bullets[t].cx,  this.median.y + this.bullets[t].cy, this.bullets[t].x, this.bullets[t].y)
                    canvas_context.fillStyle = this.bullets[t].color
                    canvas_context.strokeStyle =  this.bullets[t].color
                    canvas_context.lineWidth = 3
                    canvas_context.stroke()
                    
                    this.bullets[t].cx+=(Math.random()-.5)*5
                    this.bullets[t].cy*=1.01
                    if(Math.abs(this.bullets[t].cy) > 300){
                        this.bullets[t].cy=300
                    }

                    if (enemy.weapons.includes(this)) {

                        for (let k = 0; k < vessel.guys.length; k++) {
                            if (vessel.guys[k].body.doesPerimeterTouch(this.bullets[t])) {
                                this.bullets[t].life -= 25
                            }
                        }
                    } else {

                        for (let k = 0; k < enemy.guys.length; k++) {
                            if (enemy.guys[k].body.doesPerimeterTouch(this.bullets[t])) {

                                this.bullets[t].life -= 25
                            }
                        }
                        // for(let k = 0;k<)
                    }

                    if (this.shrink(t)) {
                        t--
                        continue
                    }
                    if (this.bullets[t].noline != 1) {
                        let link = new LineOP(this.bullets[t], o, this.bullets[t].color, this.bullets[t].radius * 2)
                        // link.draw()
                    }
                    this.bullets[t].unmove()
                } else {

                    if (this.bullets[t].noline != 1) {
                        let o = new Point(this.bullets[t].x, this.bullets[t].y)
                        this.bullets[t].draw()
                        this.bullets[t].move()
                        this.bullets[t].draw()
                        if (this.bullets[t].noline != 1) {
                            let link = new LineOP(this.bullets[t], o, this.bullets[t].color, this.bullets[t].radius * 2)
                            link.draw()
                        }
                        if (this.bullets[t].dummy == 1) {
                        } else {
                            if (vessel.weapons.includes(this)) {
                                if (enemy.shield.rings.length > 0) {
                                    if (this.bullets[t].doesPerimeterTouch(enemy.shield.rings[enemy.shield.rings.length - 1])) {
                                        this.bullets[t].stopped = 1
                                        this.bullets[t].life -= 150
                                        // this.bullets[t].xmom = 0
                                        // this.bullets[t].ymom = 0
                                        enemy.shield.rings.splice(enemy.shield.rings.length - this.double, this.double)
                                        break
                                    }
                                }
                            }
                            if (enemy.weapons.includes(this)) {
                                if (vessel.shield.rings.length > 0) {
                                    if (this.bullets[t].doesPerimeterTouch(vessel.shield.rings[vessel.shield.rings.length - 1])) {
                                        this.bullets[t].stopped = 1
                                        this.bullets[t].life -= 150
                                        // this.bullets[t].xmom = 0
                                        // this.bullets[t].ymom = 0
                                        vessel.shield.rings.splice(vessel.shield.rings.length - this.double, this.double)
                                        break
                                    }
                                }
                            }
                        }
                        // //////////////////console.log(this.bullets[t])
                    } else {
                        // //////////////////console.log(this.bullets[t])
                        this.bullets[t].move()
                        this.bullets[t].draw()
                        if (vessel.weapons.includes(this)) {
                            if (enemy.shield.rings.length > 0) {
                                if (this.bullets[t].doesPerimeterTouch(enemy.shield.rings[enemy.shield.rings.length - 1])) {
                                    this.bullets[t].life -= 150
                                    this.bullets[t].stopped = 1
                                    enemy.shield.rings.splice(enemy.shield.rings.length - this.double, this.double)
                                    break
                                }
                            }
                        }
                        if (enemy.weapons.includes(this)) {
                            if (vessel.shield.rings.length > 0) {
                                if (this.bullets[t].doesPerimeterTouch(vessel.shield.rings[vessel.shield.rings.length - 1])) {
                                    this.bullets[t].life -= 150
                                    this.bullets[t].stopped = 1
                                    vessel.shield.rings.splice(vessel.shield.rings.length - this.double, this.double)
                                    break
                                }
                            }
                        }
                    }
                }
                if (this.bullets[t].aura == 1) {

                } else {

                    if (this.missed == 1) {

                    } else {

                        if (this.shrink(t)) {
                            t--
                            continue
                        }
                        if (this.bullets[t].noline != 1) {
                            if (this.bullets[t].goTo.isPointInside(this.bullets[t])) {
                                if (this.bullets[t].rope != 1) {
                                    this.bullets[t].life = -100
                                }
                            }
                        }
                    }
                }
                // this.bullets[t].move()
                // if (this.bullets[t].goTo.isPointInside(this.bullets[t])) {
                //     this.bullets[t].life = -100
                // }
                // this.bullets[t].unmove()
            }

            if (this.auto == 1) {
                if (vessel.weapons.includes(this)) {

                    if (this.metatarget.marked == 1) {
                        if (enemy) {
                            if (enemy.supratiles) {
                                if (enemy.supratiles.includes(this.metatarget)) {
                                    this.fire(this.metatarget)
                                } else {

                                    let io = Math.floor(Math.random() * enemy.supratiles.length)

                                    this.fire(enemy.supratiles[io])
                                }
                            }
                        }
                    } else {
                        if (enemy) {
                            if (enemy.supratiles) {
                                let io = Math.floor(Math.random() * enemy.supratiles.length)

                                this.fire(enemy.supratiles[io])
                            }
                        }
                    }



                    // for (let t = 0; t < enemy.blocks.length; t++) {
                    //     for (let k = 0; k < enemy.blocks.length; k++) {
                    //         if (enemy.blocks[t][k].marked == 1) {
                    //             if (Math.random() < .05) {
                    //                 this.fire(enemy.blocks[t][k])
                    //                 break
                    //             }
                    //         }
                    //     }
                    // }
                } else {


                    let io = Math.floor(Math.random() * vessel.supratiles.length)

                    this.fire(vessel.supratiles[io])

                    // for (let t = 0; t < vessel.blocks.length; t++) {
                    //     for (let k = 0; k < vessel.blocks.length; k++) {
                    //         if (vessel.blocks[t][k].marked == 1) {
                    //             if (Math.random() < .05) {
                    //                 this.fire(vessel.blocks[t][k])
                    //                 break
                    //             }
                    //         }
                    //     }
                    // }
                }

            }
            if (this.firing > 0) {
                if (this.type == 0) {
                    if (this.firing == 10) {
                        laser1.play()
                    }
                    if (this.reflect == 1) {

                        if (vessel.weapons.includes(this)) {
                            //basic laser
                            let link = new LineOP(this.center, enemy.weapons[this.pointOut].platecenter, "red", 7)
                            link.draw()
                            let lin2k = new LineOP(this.center, enemy.weapons[this.pointOut].platecenter, "white", 3)
                            lin2k.draw()
                            this.firing--
                            let link3 = new LineOP(this.target, enemy.weapons[this.pointOut].platecenter, "red", 7)
                            link3.draw()
                            let lin4k = new LineOP(this.target, enemy.weapons[this.pointOut].platecenter, "white", 3)
                            lin4k.draw()
                        } else {

                            let link = new LineOP(this.center, vessel.weapons[this.pointOut].platecenter, "red", 7)
                            link.draw()
                            let lin2k = new LineOP(this.center, vessel.weapons[this.pointOut].platecenter, "white", 3)
                            lin2k.draw()
                            this.firing--
                            let link3 = new LineOP(this.target, vessel.weapons[this.pointOut].platecenter, "red", 7)
                            link3.draw()
                            let lin4k = new LineOP(this.target, vessel.weapons[this.pointOut].platecenter, "white", 3)
                            lin4k.draw()

                        }
                    } else {

                        if (vessel.weapons.includes(this)) {
                            //basic laser
                            let link = new LineOP(this.center, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "red", 7)
                            link.draw()
                            let lin2k = new LineOP(this.center, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "white", 3)
                            lin2k.draw()
                            this.firing--
                        } else {

                            let link = new LineOP(this.center, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "red", 7)
                            link.draw()
                            let lin2k = new LineOP(this.center, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "white", 3)
                            lin2k.draw()
                            this.firing--
                        }
                    }
                } else if (this.type == 1) {
                    //basic bomb
                    let link = new Circle(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), 17 * ((10 - this.firing) / 8), "#FF0000")
                    link.draw()
                    let link2 = new Circle(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), 13 * ((10 - this.firing) / 8.05), "#FFAA00")
                    link2.draw()
                    let link3 = new Circle(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), 9 * ((10 - this.firing) / 8.1), "#FFFF00")
                    link3.draw()
                    this.firing -= 2
                } else if (this.type == 2) {
                    //double laser

                    if (this.firing == 10) {
                        laser2.play()
                    }
                    if (this.reflect == 1) {

                        if (vessel.weapons.includes(this)) {
                            if (this.firing < 4 || this.firing > 6) {
                                //double laser
                                let link = new LineOP(this.center, enemy.weapons[this.pointOut].platecenter, "#FFAA00", 9)
                                link.draw()
                                let lin2k = new LineOP(this.center, enemy.weapons[this.pointOut].platecenter, "#FFFFAA", 4)
                                lin2k.draw()
                                let link3 = new LineOP(this.target, enemy.weapons[this.pointOut].platecenter, "#FFAA00", 9)
                                link3.draw()
                                let lin4k = new LineOP(this.target, enemy.weapons[this.pointOut].platecenter, "#FFFFAA", 4)
                                lin4k.draw()
                            }
                            this.firing -= .7
                        } else {
                            if (this.firing < 4 || this.firing > 6) {
                                //double laser
                                let link = new LineOP(this.center, vessel.weapons[this.pointOut].platecenter, "#FFAA00", 9)
                                link.draw()
                                let lin2k = new LineOP(this.center, vessel.weapons[this.pointOut].platecenter, "#FFFFAA", 4)
                                lin2k.draw()
                                let link3 = new LineOP(this.target, vessel.weapons[this.pointOut].platecenter, "#FFAA00", 9)
                                link3.draw()
                                let lin4k = new LineOP(this.target, vessel.weapons[this.pointOut].platecenter, "#FFFFAA", 4)
                                lin4k.draw()
                            }
                            this.firing -= .7
                        }
                    } else {

                        if (vessel.weapons.includes(this)) {
                            if (this.firing < 4 || this.firing > 6) {
                                let link = new LineOP(this.center, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "#FFAA00", 9)
                                link.draw()
                                let lin2k = new LineOP(this.center, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "#FFFFAA", 4)
                                lin2k.draw()
                            }
                            this.firing -= .7
                        } else {
                            if (this.firing < 4 || this.firing > 6) {
                                let link = new LineOP(this.center, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "#FFAA00", 9)
                                link.draw()
                                let lin2k = new LineOP(this.center, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "#FFFFAA", 4)
                                lin2k.draw()
                            }
                            this.firing -= .7
                        }
                    }
                } else if (this.type == 3) {
                    //triple laser
                    if (this.firing == 10) {
                        laser3.play()
                    }
                    if (this.reflect == 1) {

                        if (vessel.weapons.includes(this)) {
                            if (this.firing < 2.5 || this.firing > 7.5 || (this.firing > 4 && this.firing < 6)) {
                                let link = new LineOP(this.center, enemy.weapons[this.pointOut].platecenter, "#AA00FF", 9)
                                link.draw()
                                let lin2k = new LineOP(this.center, enemy.weapons[this.pointOut].platecenter, "#FF00FF", 4)
                                lin2k.draw()
                                let link3 = new LineOP(this.target, enemy.weapons[this.pointOut].platecenter, "#AA00FF", 9)
                                link3.draw()
                                let lin4k = new LineOP(this.target, enemy.weapons[this.pointOut].platecenter, "#FF00FF", 4)
                                lin4k.draw()
                            }
                            this.firing -= .5
                        } else {
                            if (this.firing < 2.5 || this.firing > 7.5 || (this.firing > 4 && this.firing < 6)) {
                                let link = new LineOP(this.center, vessel.weapons[this.pointOut].platecenter, "#AA00FF", 9)
                                link.draw()
                                let lin2k = new LineOP(this.center, vessel.weapons[this.pointOut].platecenter, "#FF00FF", 4)
                                lin2k.draw()
                                let link3 = new LineOP(this.target, vessel.weapons[this.pointOut].platecenter, "#AA00FF", 9)
                                link3.draw()
                                let lin4k = new LineOP(this.target, vessel.weapons[this.pointOut].platecenter, "#FF00FF", 4)
                                lin4k.draw()
                            }
                            this.firing -= .5
                        }
                    } else {

                        if (vessel.weapons.includes(this)) {
                            if (this.firing < 2.5 || this.firing > 7.5 || (this.firing > 4 && this.firing < 6)) {
                                let link = new LineOP(this.center, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "#AA00FF", 9)
                                link.draw()
                                let lin2k = new LineOP(this.center, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "#FF00FF", 4)
                                lin2k.draw()
                            }
                            this.firing -= .5
                        } else {
                            if (this.firing < 2.5 || this.firing > 7.5 || (this.firing > 4 && this.firing < 6)) {
                                let link = new LineOP(this.center, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "#AA00FF", 9)
                                link.draw()
                                let lin2k = new LineOP(this.center, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "#FF00FF", 4)
                                lin2k.draw()
                            }
                            this.firing -= .5
                        }
                    }
                } else if (this.type == 4) {
                    //mega laser
                    if (this.firing == 10) {
                        crewlaseraud.play()
                    }
                    if (this.reflect == 1) {

                        if (vessel.weapons.includes(this)) {
                            let link = new LineOP(this.center, enemy.weapons[this.pointOut].platecenter, "#009000", 9)
                            link.draw()
                            let lin2k = new LineOP(this.center, enemy.weapons[this.pointOut].platecenter, "#AAAAFF", 4)
                            lin2k.draw()
                            this.firing -= .5
                            let link3 = new LineOP(this.target, enemy.weapons[this.pointOut].platecenter, "#009000", 9)
                            link3.draw()
                            let lin4k = new LineOP(this.target, enemy.weapons[this.pointOut].platecenter, "#AAAAFF", 4)
                            lin4k.draw()
                        } else {
                            let link = new LineOP(this.center, vessel.weapons[this.pointOut].platecenter, "#009000", 9)
                            link.draw()
                            let lin2k = new LineOP(this.center, vessel.weapons[this.pointOut].platecenter, "#AAAAFF", 4)
                            lin2k.draw()
                            this.firing -= .5
                            let link3 = new LineOP(this.target, vessel.weapons[this.pointOut].platecenter, "#009000", 9)
                            link3.draw()
                            let lin4k = new LineOP(this.target, vessel.weapons[this.pointOut].platecenter, "#AAAAFF", 4)
                            lin4k.draw()
                        }
                    } else {

                        if (vessel.weapons.includes(this)) {
                            let link = new LineOP(this.center, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "#009000", 11)
                            link.draw()
                            let lin2k = new LineOP(this.center, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "#AAAAFF", 9)
                            lin2k.draw()
                            this.firing -= .5
                        } else {
                            let link = new LineOP(this.center, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "#009000", 11)
                            link.draw()
                            let lin2k = new LineOP(this.center, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "#AAAAFF", 9)
                            lin2k.draw()
                            this.firing -= .5
                        }
                    }
                } else if (this.type == 5) {
                    //crewlaser
                    if (this.firing == 10) {
                        megalaseraud.play()
                    }
                    if (this.reflect == 1) {

                        if (vessel.weapons.includes(this)) {
                            let link = new LineOP(this.center, enemy.weapons[this.pointOut].platecenter, "#009000", 9)
                            link.draw()
                            let lin2k = new LineOP(this.center, enemy.weapons[this.pointOut].platecenter, "#AAAAFF", 4)
                            lin2k.draw()
                            this.firing -= .5
                            let link3 = new LineOP(this.target, enemy.weapons[this.pointOut].platecenter, "#009000", 9)
                            link3.draw()
                            let lin4k = new LineOP(this.target, enemy.weapons[this.pointOut].platecenter, "#AAAAFF", 4)
                            lin4k.draw()
                        } else {
                            let link = new LineOP(this.center, vessel.weapons[this.pointOut].platecenter, "#009000", 9)
                            link.draw()
                            let lin2k = new LineOP(this.center, vessel.weapons[this.pointOut].platecenter, "#AAAAFF", 4)
                            lin2k.draw()
                            this.firing -= .5
                            let link3 = new LineOP(this.target, vessel.weapons[this.pointOut].platecenter, "#009000", 9)
                            link3.draw()
                            let lin4k = new LineOP(this.target, vessel.weapons[this.pointOut].platecenter, "#AAAAFF", 4)
                            lin4k.draw()

                        }
                    } else {

                        if (vessel.weapons.includes(this)) {
                            let link = new LineOP(this.center, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "#009000", 12)
                            link.draw()
                            let lin2k = new LineOP(this.center, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "#AAAAFF", 9)
                            lin2k.draw()
                            this.firing -= 1
                        } else {
                            let link = new LineOP(this.center, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "#009000", 12)
                            link.draw()
                            let lin2k = new LineOP(this.center, new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5)), "#AAAAFF", 9)
                            lin2k.draw()
                            this.firing -= 1
                        }
                    }
                } else if (this.type == 6) {
                    //medium bobm?
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
                    //mega bomb
                    let link = new Circle(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), 26 * ((10 - this.firing) / 8), "#FF0000")
                    link.draw()
                    let link2 = new Circle(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), 20 * ((10 - this.firing) / 8.05), "#FFAA00")
                    link2.draw()
                    let link3 = new Circle(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), 16 * ((10 - this.firing) / 8.1), "#FFFFFF")
                    link3.draw()
                    this.firing -= 2
                } else if (this.type == 9) {
                    if (this.firing == 10) {
                        heatbeamaud.play()
                    }
                    //heatbeam
                    let site5 = new RedX(this.target.x + (Math.cos(this.angle) * (10 - this.firing) * 5), this.target.y + (Math.sin(this.angle) * (10 - this.firing) * 5))
                    site5.draw()
                    let site = new RedX(this.target.x + (Math.cos(this.angle) * (10 - this.firing) * 4), this.target.y + (Math.sin(this.angle) * (10 - this.firing) * 4))
                    site.draw()
                    let site2 = new RedX(this.target.x + (Math.cos(this.angle) * (10 - this.firing) * 3), this.target.y + (Math.sin(this.angle) * (10 - this.firing) * 3))
                    site2.draw()
                    let site3 = new RedX(this.target.x + (Math.cos(this.angle) * (10 - this.firing) * 2), this.target.y + (Math.sin(this.angle) * (10 - this.firing) * 2))
                    site3.draw()
                    this.firing -= .2
                } else if (this.type == 10) {
                    let site5 = new CyanX(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5))
                    site5.draw()

                    let ring = new CircleR(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), 20, "cyan")
                    ring.draw()
                    if (this.firing == 10) {
                        ion1aud.play()
                        let link = new LineOP()
                        if (vessel.weapons.includes(this)) {
                            link.target = ring
                            link.object = this.center
                        } else {
                            ////////////////////////////////////console.log("d")
                            link.target = ring
                            link.object = this.center
                        }

                        let xmom = Math.cos(link.angle())
                        let ymom = Math.sin(link.angle())

                        xmom *= link.hypotenuse() / 5
                        ymom *= link.hypotenuse() / 5

                        let bullet = new Circle(link.object.x, link.object.y, 5, "cyan", -xmom, -ymom)
                        ////////////////////////////////////console.log(bullet)
                        bullet.goTo = this.target
                        bullet.life = 6
                        this.bullets.push(bullet)
                        ////////////////////////////////////console.log(this.bullets)
                        if (vessel.weapons.includes(this) && enemy.shield.rings.length > 0) {
                            // bullet.goTo = this.target
                            bullet.life = 5
                            bullet.stopshort = 1
                        }
                        if (enemy.weapons.includes(this) && vessel.shield.rings.length > 0) {
                            // bullet.goTo = this.target
                            bullet.life = 5
                            bullet.stopshort = 1
                        }
                        if (this.target.walkable != 1) {
                            bullet.life += 100
                        }
                    }
                    this.firing -= 2


                    //ion1
                } else if (this.type == 11) {
                    let site5 = new X(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), "teal", 12)
                    site5.draw()

                    let ring = new CircleR(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), 24, "teal")
                    ring.draw()

                    if (this.firing == 10) {
                        ion2aud.play()
                        let link = new LineOP(ring, ring)
                        if (vessel.weapons.includes(this)) {
                            link.target = ring
                            link.object = this.center
                        } else {
                            link.target = ring
                            link.object = this.center
                        }

                        let xmom = Math.cos(link.angle())
                        let ymom = Math.sin(link.angle())

                        xmom *= link.hypotenuse() / 5
                        ymom *= link.hypotenuse() / 5

                        let bullet = new Circle(link.object.x, link.object.y, 6, "teal", -xmom, -ymom)
                        bullet.goTo = this.target
                        bullet.life = 6
                        this.bullets.push(bullet)
                        if (vessel.weapons.includes(this) && enemy.shield.rings.length > 0) {
                            // bullet.goTo = this.target
                            bullet.life = 5
                            bullet.stopshort = 1
                        }
                        if (enemy.weapons.includes(this) && vessel.shield.rings.length > 0) {
                            // bullet.goTo = this.target
                            bullet.life = 5
                            bullet.stopshort = 1
                        }
                        if (this.target.walkable != 1) {
                            bullet.life += 100
                        }
                    }
                    this.firing -= 2


                    //ion2
                } else if (this.type == 12) {
                    let site5 = new X(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), "#aaff00", 13)
                    site5.draw()

                    let ring = new CircleR(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), 26, "#aaff00")
                    ring.draw()
                    if (this.firing == 10) {
                        crewion1aud.play()
                        let link = new LineOP()
                        if (vessel.weapons.includes(this)) {
                            link.target = ring
                            link.object = this.center
                        } else {
                            link.target = ring
                            link.object = this.center
                        }

                        let xmom = Math.cos(link.angle())
                        let ymom = Math.sin(link.angle())

                        xmom *= link.hypotenuse() / 5
                        ymom *= link.hypotenuse() / 5

                        let bullet = new Circle(link.object.x, link.object.y, 7, "#aaff00", -xmom, -ymom)
                        bullet.goTo = this.target
                        bullet.life = 6
                        this.bullets.push(bullet)
                        if (vessel.weapons.includes(this) && enemy.shield.rings.length > 0) {
                            // bullet.goTo = this.target
                            bullet.life = 5
                            bullet.stopshort = 1
                        }
                        if (enemy.weapons.includes(this) && vessel.shield.rings.length > 0) {
                            // bullet.goTo = this.target
                            bullet.life = 5
                            bullet.stopshort = 1
                        }
                        if (this.target.walkable != 1) {
                            bullet.life += 100
                        }
                    }

                    this.firing -= 2
                } else if (this.type == 13) {
                    let site5 = new X(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), "#AA0000", 13)
                    site5.draw()

                    let ring = new CircleR(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), 26, "#AA0000")
                    ring.draw()
                    if (this.firing == 10) {
                        crewion2aud.play()
                        let link = new LineOP()
                        if (vessel.weapons.includes(this)) {
                            link.target = ring
                            link.object = this.center
                        } else {
                            link.target = ring
                            link.object = this.center
                        }

                        let xmom = Math.cos(link.angle())
                        let ymom = Math.sin(link.angle())

                        xmom *= link.hypotenuse() / 5
                        ymom *= link.hypotenuse() / 5

                        let bullet = new Circle(link.object.x, link.object.y, 7, "red", -xmom, -ymom)
                        bullet.goTo = this.target
                        bullet.life = 6
                        this.bullets.push(bullet)

                        let bullet2 = new Circle(link.object.x, link.object.y, 4, "black", -xmom, -ymom)
                        bullet2.life = 5
                        bullet2.dummy = 1
                        this.bullets.push(bullet2)
                        if (vessel.weapons.includes(this) && enemy.shield.rings.length > 0) {
                            // bullet.goTo = this.target
                            bullet.life = 5
                            // bullet2.life = 6
                            bullet.stopshort = 1
                            bullet2.stopshort = 1
                        }
                        if (enemy.weapons.includes(this) && vessel.shield.rings.length > 0) {
                            // bullet.goTo = this.target
                            bullet.life = 5
                            // bullet2.life = 6
                            bullet.stopshort = 1
                            bullet2.stopshort = 1
                        }
                        if (this.target.walkable != 1) {
                            bullet.life += 100
                        }
                    }

                    this.firing -= 2
                } else if (this.type == 14) {
                    let site5 = new X(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), "white", 13)
                    site5.draw()

                    let ring = new CircleR(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), Math.max((this.firing * 3.6) - 25, 1), "#AA0000")
                    ring.draw()
                    if (this.firing == 10) {
                        //rail1?
                        if (this.firing == 10) {
                            rail1aud.play()
                        }
                        let link = new LineOP()
                        if (vessel.weapons.includes(this)) {
                            link.target = ring
                            link.object = this.center
                        } else {
                            link.target = ring
                            link.object = this.center
                        }

                        let xmom = Math.cos(link.angle())
                        let ymom = Math.sin(link.angle())

                        xmom *= link.hypotenuse() / 3
                        ymom *= link.hypotenuse() / 3

                        let bullet = new Circle(link.object.x, link.object.y, 3, "white", -xmom, -ymom)
                        bullet.goTo = this.target
                        bullet.life = 4
                        this.bullets.push(bullet)

                        let bullet2 = new Circle(link.object.x, link.object.y, 1, "gray", -xmom, -ymom)
                        bullet2.life = 4
                        bullet2.dummy = 1
                        this.bullets.push(bullet2)
                        if (vessel.weapons.includes(this) && enemy.shield.rings.length > 0) {
                            // bullet.goTo = this.target
                            bullet.life = 3
                            // bullet2.life = 3
                            bullet.stopshort = 1
                            bullet2.stopshort = 1
                        }
                        if (enemy.weapons.includes(this) && vessel.shield.rings.length > 0) {
                            // bullet.goTo = this.target
                            bullet.life = 3
                            // bullet2.life = 3
                            bullet.stopshort = 1
                            bullet2.stopshort = 1
                        }

                        if (this.target.walkable != 1) {
                            bullet.life += 100
                        }
                    }

                    this.firing -= 1
                } else if (this.type == 15) {
                    let site5 = new X(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), "white", 13)
                    site5.draw()

                    let ring = new CircleR(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), Math.max((this.firing * 3.6) - 25, 1), "#AA0000")
                    ring.draw()
                    if (this.firing == 10 || this.firing == 5) {
                        if (this.firing == 10) {
                            rail2aud.play()
                        }
                        let link = new LineOP()
                        if (vessel.weapons.includes(this)) {
                            link.target = ring
                            link.object = this.center
                        } else {
                            link.target = ring
                            link.object = this.center
                        }

                        let xmom = Math.cos(link.angle())
                        let ymom = Math.sin(link.angle())

                        xmom *= link.hypotenuse() / 3
                        ymom *= link.hypotenuse() / 3

                        let bullet = new Circle(link.object.x, link.object.y, 3, "#FFAA88", -xmom, -ymom)
                        bullet.goTo = this.target
                        bullet.life = 4
                        this.bullets.push(bullet)

                        let bullet2 = new Circle(link.object.x, link.object.y, 1, "black", -xmom, -ymom)
                        bullet2.life = 4
                        bullet2.dummy = 1
                        this.bullets.push(bullet2)
                        if (vessel.weapons.includes(this) && enemy.shield.rings.length > 0) {
                            // bullet.goTo = this.target
                            bullet.life = 3
                            // bullet2.life = 3
                            bullet.stopshort = 1
                            bullet2.stopshort = 1
                        }
                        if (enemy.weapons.includes(this) && vessel.shield.rings.length > 0) {
                            // bullet.goTo = this.target
                            bullet.life = 3
                            // bullet2.life = 3
                            bullet.stopshort = 1
                            bullet2.stopshort = 1
                        }
                        if (this.target.walkable != 1) {
                            bullet.life += 100
                        }
                    }

                    this.firing -= 1
                } else if (this.type == 16) {
                    let site5 = new X(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), "white", 13)
                    site5.draw()

                    let ring = new CircleR(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), Math.max((this.firing * 3.6) - 25, 1), "#AA0000")
                    ring.draw()
                    if (this.firing == 10) { // || this.firing == 5
                        if (this.firing == 10) {
                            rail3aud.play()
                        }
                        let link = new LineOP()
                        if (vessel.weapons.includes(this)) {
                            link.target = ring
                            link.object = this.center
                        } else {
                            link.target = ring
                            link.object = this.center
                        }

                        let xmom = Math.cos(link.angle())
                        let ymom = Math.sin(link.angle())

                        xmom *= link.hypotenuse() / 3
                        ymom *= link.hypotenuse() / 3

                        let bullet = new Circle(link.object.x, link.object.y, 3, "red", -xmom, -ymom)
                        bullet.goTo = this.target
                        bullet.life = 4
                        this.bullets.push(bullet)

                        let bullet2 = new Circle(link.object.x, link.object.y, 1, "grey", -xmom, -ymom)
                        bullet2.life = 3
                        bullet2.dummy = 1
                        this.bullets.push(bullet2)
                        if (vessel.weapons.includes(this) && enemy.shield.rings.length > 0) {
                            // bullet.goTo = this.target
                            bullet.life = 3
                            // bullet2.life = 3
                            bullet.stopshort = 1
                            bullet2.stopshort = 1
                        }
                        if (enemy.weapons.includes(this) && vessel.shield.rings.length > 0) {
                            // bullet.goTo = this.target
                            bullet.life = 3
                            // bullet2.life = 3
                            bullet.stopshort = 1
                            bullet2.stopshort = 1
                        }
                        if (this.target.walkable != 1) {
                            bullet.life += 100
                        }
                    }

                    this.firing -= 1
                } else if (this.type == 17) {
                    if (this.firing == 10) {
                        sap1aud.play()
                    }
                    let ring = new Circle(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), Math.max(((Math.cos(this.firing) * 36)) - 20, 5), "#FF000044")
                    ring.draw()
                    let ring2 = new CircleR(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), Math.max(((Math.cos(this.firing) * 36)) - 20, 5), "#FF000044")
                    ring2.draw()
                    this.firing -= .2
                    if (this.firing <= 0) {
                        if (enemy.weapons.includes(this)) {
                            if (vessel.shield.state >= this.sap) {
                                enemy.shield.state += this.sap
                                vessel.shield.state -= this.sap
                            } else {
                                if (vessel.shield.state == 0) {
                                    for (let t = 0; t < vessel.guys.length; t++) {
                                        if (vessel.guys[t].body.doesPerimeterTouch(ring)) {
                                            vessel.guys[t].health -= (this.damage * this.crew) / (1 + vessel.guys[t].gearArmor)
                                            if (vessel.guys[t].energy > 0) {
                                                vessel.guys[t].health -= vessel.guys[t].health * 2
                                                vessel.guys[t].energydeathtag = 15
                                                enemy.energy.powersto += 1
                                            }
                                            vessel.guys[t].hit = 0
                                            if (this.mind > 0) {
                                                if (vessel.guys[t].type != 1 && vessel.guys[t].type != 8) { //psychic resistance
                                                    vessel.guys[t].hostile = 1
                                                    vessel.guys[t].hostileTimer = this.mind * 250 //400
                                                    vessel.guys[t].mindControlled = 1
                                                }
                                            }
                                        }
                                    }
                                }
                                enemy.shield.state += vessel.shield.state
                                vessel.shield.state = 0
                                vessel.shield.charge = 0
                            }
                        } else {
                            if (enemy.shield.state >= this.sap) {
                                vessel.shield.state += this.sap
                                enemy.shield.state -= this.sap
                            } else {
                                if (enemy.shield.state == 0) {
                                    for (let t = 0; t < enemy.guys.length; t++) {
                                        if (enemy.guys[t].body.doesPerimeterTouch(ring)) {
                                            enemy.guys[t].health -= (this.damage * this.crew) / (1 + enemy.guys[t].gearArmor)
                                            if (enemy.guys[t].energy > 0) {
                                                enemy.guys[t].health -= enemy.guys[t].health * 2
                                                enemy.guys[t].energydeathtag = 15
                                                if (vessel.menuBattery.powersto < 56) {
                                                    vessel.menuBattery.power += 1
                                                    vessel.menuBattery.powersto += 1
                                                }
                                            }
                                            enemy.guys[t].hit = 0
                                            if (this.mind > 0) {

                                                if (enemy.guys[t].type != 1 && enemy.guys[t].type != 8) { //psychic resistance
                                                    enemy.guys[t].hostile = 1
                                                    enemy.guys[t].hostileTimer = this.mind * 250 //400
                                                    enemy.guys[t].mindControlled = 1
                                                }
                                            }
                                        }
                                    }
                                }
                                vessel.shield.state += enemy.shield.state
                                enemy.shield.state = 0
                                enemy.shield.charge = 0
                            }


                        }
                    }
                } else if (this.type == 18) {
                    if (this.firing == 10) {
                        sap2aud.play()
                    }
                    let ring = new Circle(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), Math.max(((Math.cos(this.firing * 2) * 36)) - 15, 5), "#FF00FF44")
                    ring.draw()
                    let ring2 = new CircleR(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), Math.max(((Math.cos(this.firing * 2) * 36)) - 15, 5), "#FF00FF44")
                    ring2.draw()
                    this.firing -= .2
                    if (this.firing <= 0) {
                        if (enemy.weapons.includes(this)) {
                            if (vessel.shield.state >= this.sap) {
                                enemy.shield.state += this.sap
                                vessel.shield.state -= this.sap
                            } else {
                                if (vessel.shield.state == 0) {
                                    for (let t = 0; t < vessel.guys.length; t++) {
                                        if (vessel.guys[t].body.doesPerimeterTouch(ring)) {
                                            vessel.guys[t].health -= (this.damage * this.crew) / (1 + vessel.guys[t].gearArmor)
                                            if (vessel.guys[t].energy > 0) {
                                                vessel.guys[t].health -= vessel.guys[t].health * 2
                                                vessel.guys[t].energydeathtag = 15
                                                enemy.energy.powersto += 1
                                            }
                                            vessel.guys[t].hit = 0
                                            if (this.mind > 0) {
                                                if (vessel.guys[t].type != 1 && vessel.guys[t].type != 8) { //psychic resistance
                                                    vessel.guys[t].hostile = 1
                                                    vessel.guys[t].hostileTimer = this.mind * 250 //400
                                                    vessel.guys[t].mindControlled = 1
                                                }
                                            }
                                        }
                                    }
                                }
                                enemy.shield.state += vessel.shield.state
                                vessel.shield.state = 0
                                vessel.shield.charge = 0
                            }
                        } else {
                            if (enemy.shield.state >= this.sap) {
                                vessel.shield.state += this.sap
                                enemy.shield.state -= this.sap
                            } else {
                                if (enemy.shield.state == 0) {
                                    for (let t = 0; t < enemy.guys.length; t++) {
                                        if (enemy.guys[t].body.doesPerimeterTouch(ring)) {
                                            enemy.guys[t].health -= (this.damage * this.crew) / (1 + enemy.guys[t].gearArmor)
                                            if (enemy.guys[t].energy > 0) {
                                                enemy.guys[t].health -= enemy.guys[t].health * 2
                                                enemy.guys[t].energydeathtag = 15
                                                if (vessel.menuBattery.powersto < 56) {
                                                    vessel.menuBattery.power += 1
                                                    vessel.menuBattery.powersto += 1
                                                }
                                            }
                                            enemy.guys[t].hit = 0
                                            if (this.mind > 0) {
                                                if (enemy.guys[t].type != 1 && enemy.guys[t].type != 8) { //psychic resistance
                                                    enemy.guys[t].hostile = 1
                                                    enemy.guys[t].hostileTimer = this.mind * 250 //400
                                                    enemy.guys[t].mindControlled = 1
                                                }
                                            }
                                        }
                                    }
                                }
                                vessel.shield.state += enemy.shield.state
                                enemy.shield.state = 0
                                enemy.shield.charge = 0
                            }
                        }
                    }
                } else if (this.type == 19) {
                    if (this.firing == 10) {
                        sap3aud.play()
                    }
                    //////////////////////////console.log(this)
                    let ring = new Circle(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), Math.max(((Math.cos(this.firing * 3) * 36)) - 11, 5), "#0000FF44")
                    ring.draw()
                    let ring2 = new CircleR(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), Math.max(((Math.cos(this.firing * 3) * 36)) - 11, 5), "#0000FF44")
                    ring2.draw()
                    this.firing -= .2
                    if (this.firing <= 0) {
                        if (enemy.weapons.includes(this)) {
                            if (vessel.shield.state >= this.sap) {
                                enemy.shield.state += this.sap
                                vessel.shield.state -= this.sap
                            } else {
                                if (vessel.shield.state == 0) {
                                    for (let t = 0; t < vessel.guys.length; t++) {
                                        if (vessel.guys[t].body.doesPerimeterTouch(ring)) {
                                            vessel.guys[t].health -= (this.damage * this.crew) / (1 + vessel.guys[t].gearArmor)
                                            if (vessel.guys[t].energy > 0) {
                                                vessel.guys[t].health -= vessel.guys[t].health * 2
                                                vessel.guys[t].energydeathtag = 15
                                                enemy.energy.powersto += 1
                                            }
                                            vessel.guys[t].hit = 0
                                            if (this.mind > 0) {
                                                if (vessel.guys[t].type != 1 && vessel.guys[t].type != 8) { //psychic resistance
                                                    vessel.guys[t].hostile = 1
                                                    vessel.guys[t].hostileTimer = this.mind * 250 //400
                                                    vessel.guys[t].mindControlled = 1
                                                }
                                            }
                                        }
                                    }
                                }
                                enemy.shield.state += vessel.shield.state
                                vessel.shield.state = 0
                                vessel.shield.charge = 0
                            }
                        } else {
                            if (enemy.shield.state >= this.sap) {
                                vessel.shield.state += this.sap
                                enemy.shield.state -= this.sap
                            } else {
                                if (enemy.shield.state == 0) {
                                    for (let t = 0; t < enemy.guys.length; t++) {
                                        if (enemy.guys[t].body.doesPerimeterTouch(ring)) {
                                            enemy.guys[t].health -= (this.damage * this.crew) / (1 + enemy.guys[t].gearArmor)
                                            if (enemy.guys[t].energy > 0) {
                                                enemy.guys[t].health -= enemy.guys[t].health * 2
                                                enemy.guys[t].energydeathtag = 15
                                                if (vessel.menuBattery.powersto < 56) {
                                                    vessel.menuBattery.power += 1
                                                    vessel.menuBattery.powersto += 1
                                                }
                                            }
                                            enemy.guys[t].hit = 0
                                            if (this.mind > 0) {
                                                if (enemy.guys[t].type != 1 && enemy.guys[t].type != 8) { //psychic resistance
                                                    enemy.guys[t].hostile = 1
                                                    enemy.guys[t].hostileTimer = this.mind * 250 //400
                                                    enemy.guys[t].mindControlled = 1
                                                }
                                            }
                                        }
                                    }
                                }
                                vessel.shield.state += enemy.shield.state
                                enemy.shield.state = 0
                                enemy.shield.charge = 0
                            }
                        }
                    }
                } else if (this.type == 20) {

                    if (this.firing == 10) {
                        heatbeamaud.play()
                    }
                    //heatbeam
                    let site5 = new X(this.target.x + (Math.cos(this.angle) * (10 - this.firing) * 5), this.target.y + (Math.sin(this.angle) * (10 - this.firing) * 5), "#aaFF00", 8)
                    site5.draw()
                    let site = new X(this.target.x + (Math.cos(this.angle) * (10 - this.firing) * 4), this.target.y + (Math.sin(this.angle) * (10 - this.firing) * 4), "#aaFF00", 8)
                    site.draw()
                    let site2 = new X(this.target.x + (Math.cos(this.angle) * (10 - this.firing) * 3), this.target.y + (Math.sin(this.angle) * (10 - this.firing) * 3), "#aaFF00", 8)
                    site2.draw()
                    let site3 = new X(this.target.x + (Math.cos(this.angle) * (10 - this.firing) * 2), this.target.y + (Math.sin(this.angle) * (10 - this.firing) * 2), "#aaFF00", 8)
                    site3.draw()
                    this.firing -= .2

                } else if (this.type == 21) {

                    if (this.firing == 10) {
                        heatbeamaud.play()
                    }
                    //heatbeam
                    let site5 = new X(this.target.x + (Math.cos(this.angle) * (10 - this.firing) * 5), this.target.y + (Math.sin(this.angle) * (10 - this.firing) * 5), "#ffffff", 8)
                    site5.draw()
                    let site = new X(this.target.x + (Math.cos(this.angle) * (10 - this.firing) * 4), this.target.y + (Math.sin(this.angle) * (10 - this.firing) * 4), "#ffffff", 8)
                    site.draw()
                    let site2 = new X(this.target.x + (Math.cos(this.angle) * (10 - this.firing) * 3), this.target.y + (Math.sin(this.angle) * (10 - this.firing) * 3), "#ffffff", 8)
                    site2.draw()
                    let site3 = new X(this.target.x + (Math.cos(this.angle) * (10 - this.firing) * 2), this.target.y + (Math.sin(this.angle) * (10 - this.firing) * 2), "#ffffff", 8)
                    site3.draw()
                    this.firing -= .2

                } else if (this.type == 22) {

                    if (this.firing == 10) {
                        heatbeamaud.play()
                    }
                    //heatbeam
                    let site5 = new X(this.target.x + (Math.cos(this.angle) * (10 - this.firing) * 5), this.target.y + (Math.sin(this.angle) * (10 - this.firing) * 5), "#FF00FF", 12)
                    site5.draw()
                    let site = new X(this.target.x + (Math.cos(this.angle) * (10 - this.firing) * 4), this.target.y + (Math.sin(this.angle) * (10 - this.firing) * 4), "#FF00FF", 12)
                    site.draw()
                    let site2 = new X(this.target.x + (Math.cos(this.angle) * (10 - this.firing) * 3), this.target.y + (Math.sin(this.angle) * (10 - this.firing) * 3), "#FF00FF", 12)
                    site2.draw()
                    let site3 = new X(this.target.x + (Math.cos(this.angle) * (10 - this.firing) * 2), this.target.y + (Math.sin(this.angle) * (10 - this.firing) * 2), "#FF00FF", 12)
                    site3.draw()
                    this.firing -= .2
                } else if (this.type == 23) {
                    if (this.firing == 10) {
                        scrap.play()
                    }
                    let ring = new CircleR(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), Math.max((this.firing * 3.6) - 25, 1), "#AA0000")
                    if (this.firing % 5 == 1) { // || this.firing == 5
                        let link = new LineOP()
                        if (vessel.weapons.includes(this)) {
                            link.target = ring
                            link.object = this.center
                            let xmom = Math.cos(link.angle())
                            let ymom = Math.sin(link.angle())
                            xmom *= link.hypotenuse() / 6
                            ymom *= link.hypotenuse() / 6
                            let ast = new Asterisk(this.center.x, this.center.y, "gray", 10, xmom * .5, ymom * .5)

                            ast.goTo = this.target
                            ast.life = 7
                            ast.noline = 1
                            if (vessel.weapons.includes(this) && enemy.shield.rings.length > 0) {
                                ast.stopshort = 1
                            }
                            if (enemy.weapons.includes(this) && vessel.shield.rings.length > 0) {
                                ast.stopshort = 1
                            }
                            this.bullets.push(ast)
                        } else {
                            link.target = ring
                            link.object = this.center
                            let xmom = Math.cos(link.angle())
                            let ymom = Math.sin(link.angle())
                            xmom *= link.hypotenuse() / 6
                            ymom *= link.hypotenuse() / 6
                            let ast = new Asterisk(this.center.x, this.center.y, "gray", 10, xmom * .5, ymom * .5)

                            ast.goTo = this.target
                            ast.life = 7
                            ast.noline = 1
                            if (vessel.weapons.includes(this) && enemy.shield.rings.length > 0) {
                                ast.stopshort = 1
                            }
                            if (enemy.weapons.includes(this) && vessel.shield.rings.length > 0) {
                                ast.stopshort = 1
                            }
                            this.bullets.push(ast)
                        }
                    }
                    this.firing--
                } else if (this.type == 24) {
                    if (this.firing == 10) {
                        scrap.play()
                    }
                    let ring = new CircleR(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), Math.max((this.firing * 3.6) - 25, 1), "#AA0000")
                    if (this.firing % 3 == 1) { // || this.firing == 5
                        if (this.firing == 10) {
                            rail3aud.play()
                        }
                        let link = new LineOP()
                        if (vessel.weapons.includes(this)) {
                            link.target = ring
                            link.object = this.center
                            let xmom = Math.cos(link.angle())
                            let ymom = Math.sin(link.angle())
                            xmom *= link.hypotenuse() / 6
                            ymom *= link.hypotenuse() / 6
                            let ast = new Asterisk(this.center.x, this.center.y, "gray", 15, xmom * .5, ymom * .5)

                            ast.goTo = this.target
                            ast.life = 7
                            ast.noline = 1
                            if (vessel.weapons.includes(this) && enemy.shield.rings.length > 0) {
                                ast.stopshort = 1
                            }
                            if (enemy.weapons.includes(this) && vessel.shield.rings.length > 0) {
                                ast.stopshort = 1
                            }
                            this.bullets.push(ast)
                        } else {
                            link.target = ring
                            link.object = this.center
                            let xmom = Math.cos(link.angle())
                            let ymom = Math.sin(link.angle())
                            xmom *= link.hypotenuse() / 6
                            ymom *= link.hypotenuse() / 6
                            let ast = new Asterisk(this.center.x, this.center.y, "gray", 15, xmom * .5, ymom * .5)

                            ast.goTo = this.target
                            ast.life = 7
                            ast.noline = 1
                            if (vessel.weapons.includes(this) && enemy.shield.rings.length > 0) {
                                ast.stopshort = 1
                            }
                            if (enemy.weapons.includes(this) && vessel.shield.rings.length > 0) {
                                ast.stopshort = 1
                            }
                            this.bullets.push(ast)
                        }
                    }
                    this.firing--
                } else if (this.type == 25) {
                    if (this.firing == 10) {
                        scrap.play()
                    }
                    let ring = new CircleR(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), Math.max((this.firing * 3.6) - 25, 1), "#AA0000")
                    if (this.firing % 2 == 0) { // || this.firing == 5
                        if (this.firing == 10) {
                            rail3aud.play()
                        }
                        let link = new LineOP()
                        if (vessel.weapons.includes(this)) {
                            link.target = ring
                            link.object = this.center
                            let xmom = Math.cos(link.angle())
                            let ymom = Math.sin(link.angle())
                            xmom *= link.hypotenuse() / 6 //3
                            ymom *= link.hypotenuse() / 6
                            let ast = new Asterisk(this.center.x, this.center.y, "gray", 20, xmom * .5, ymom * .5)

                            ast.goTo = this.target
                            ast.life = 7 //4
                            ast.noline = 1
                            if (vessel.weapons.includes(this) && enemy.shield.rings.length > 0) {
                                ast.stopshort = 1
                            }
                            if (enemy.weapons.includes(this) && vessel.shield.rings.length > 0) {
                                ast.stopshort = 1
                            }
                            this.bullets.push(ast)
                        } else {
                            link.target = ring
                            link.object = this.center
                            let xmom = Math.cos(link.angle())
                            let ymom = Math.sin(link.angle())
                            xmom *= link.hypotenuse() / 6
                            ymom *= link.hypotenuse() / 6
                            let ast = new Asterisk(this.center.x, this.center.y, "gray", 20, xmom * .5, ymom * .5)

                            ast.goTo = this.target
                            ast.life = 7
                            ast.noline = 1
                            if (vessel.weapons.includes(this) && enemy.shield.rings.length > 0) {
                                ast.stopshort = 1
                            }
                            if (enemy.weapons.includes(this) && vessel.shield.rings.length > 0) {
                                ast.stopshort = 1
                            }
                            this.bullets.push(ast)
                        }
                    }
                    this.firing--
                } else if (this.type == 26) {
                    if (this.firing == 10) {
                        heatbeamaud.play()
                    }
                    //heatbeam
                    let site5 = new RedX(this.target.x + (Math.cos(this.angle) * (10 - this.firing) * 5), this.target.y + (Math.sin(this.angle) * (10 - this.firing) * 5))
                    site5.draw()
                    let site = new RedX(this.target.x + (Math.cos(this.angle) * (10 - this.firing) * 4), this.target.y + (Math.sin(this.angle) * (10 - this.firing) * 4))
                    site.draw()
                    let site2 = new RedX(this.target.x + (Math.cos(this.angle) * (10 - this.firing) * 3), this.target.y + (Math.sin(this.angle) * (10 - this.firing) * 3))
                    site2.draw()
                    let site3 = new RedX(this.target.x + (Math.cos(this.angle) * (10 - this.firing) * 2), this.target.y + (Math.sin(this.angle) * (10 - this.firing) * 2))
                    site3.draw()
                    this.firing -= 2
                } else if (this.type == 27) {
                    if (this.firing == 10) {
                        sap1aud.play()
                    }
                    let ring = new Circle(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), Math.max(((Math.cos(this.firing * 3) * 36)) - 11, 5), "#FFFFFF44")
                    ring.draw()
                    let ring2 = new CircleR(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), Math.max(((Math.cos(this.firing * 3) * 36)) - 11, 5), "#FFFFFF44")
                    ring2.draw()
                    this.firing -= .5
                } else if (this.type == 28) {
                    if (this.firing == 10) {
                        sap1aud.play()
                    }
                    let ring = new Circle(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), Math.max(((Math.cos(this.firing * 3) * 36)) - 11, 5), "#FFFFFF44")
                    ring.draw()
                    let ring2 = new CircleR(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), Math.max(((Math.cos(this.firing * 3) * 36)) - 11, 5), "#FFFFFF44")
                    ring2.draw()
                    this.firing -= .5
                } else if (this.type == 100) {


                    if (vessel.weapons.includes(this)) {
                        let g = Math.max(10 - this.firing)
                        for (let k = 0; k < g; k++) {
                            let link = new Circle(this.center.x, this.center.y, (260 - (30 * k)) * ((10 - this.firing) / 8), getRandomLightColor() + '22')
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

            if (vessel.weapons.includes(this)) {
                if (this.mirror == 1) {
                    if (this.shine > 0) {
                        this.beam1 = new LineOP(this.center, new Point(((vessel.body.x + enemy.body.x) * .5) - 50, vessel.body.y + 100), "gray", 2)
                        this.beam2 = new LineOP(this.center, new Point((((vessel.body.x + enemy.body.x) * .5) - 50), vessel.body.y - 200), "gray", 2)
                        this.plate = new LineOP(new Point((((vessel.body.x + enemy.body.x) * .5) - 50), vessel.body.y - 200), new Point(((vessel.body.x + enemy.body.x) * .5) - 50, vessel.body.y + 100), "gray", 6)
                        this.platecenter = new Circle((this.plate.object.x + this.plate.target.x) * .5, (this.plate.object.y + this.plate.target.y) * .5)
                        // this.beam1.draw()
                        // this.beam2.draw()
                        this.plate.draw()
                        this.shine--
                    } else {
                        this.plate = new LineOP(new Point((0, 0), new Point(0, 0)))
                    }
                }
            } else {
                if (this.mirror == 1) {
                    if (this.shine > 0) {
                        this.beam1 = new LineOP(this.center, new Point(((vessel.body.x + enemy.body.x) * .5) + 50, vessel.body.y + 100), "gray", 2)
                        this.beam2 = new LineOP(this.center, new Point((((vessel.body.x + enemy.body.x) * .5) + 50), vessel.body.y - 100), "gray", 2)
                        this.plate = new LineOP(new Point((((vessel.body.x + enemy.body.x) * .5) + 50), vessel.body.y - 200), new Point(((vessel.body.x + enemy.body.x) * .5) + 50, vessel.body.y + 100), "gray", 6)
                        this.platecenter = new Circle((this.plate.object.x + this.plate.target.x) * .5, (this.plate.object.y + this.plate.target.y) * .5)
                        // this.beam1.draw()
                        // this.beam2.draw()
                        this.plate.draw()
                        this.shine--
                    } else {
                        this.plate = new LineOP(new Point((0, 0), new Point(0, 0)))
                    }
                }
            }
            if (this.temp > 0) {
                this.temp--
                // return
            }
            if (this.temp <= 0 && this.temp > -2) {
                if (vessel.weapons.includes(this)) {
                    vessel.weapons.splice(vessel.weapons.indexOf(this), 1)
                }
                if (enemy.weapons.includes(this)) {
                    enemy.weapons.splice(enemy.weapons.indexOf(this), 1)
                }
                // return
            }
            if (vessel.weapons.includes(this)) {
                if (enemy.hull <= 0) {
                    // this.bullets = []
                    // for (let t = 0; t < enemy.blocks.length; t++) {
                    //     for (let k = 0; k < enemy.blocks[t].length; k++) {
                    for (let w = 0; w < this.bullets.length; w++) {
                        // if(enemy.blocks[t][k].isPointInside(this.bullets[w])){
                        this.bullets[w].sxmom = -this.bullets[w].xmom / 20
                        this.bullets[w].symom = -this.bullets[w].ymom / 20
                        // }
                    }
                    //     }
                    // }
                }
            }

            if (vessel.weapons.includes(this)) {
                if (this.crewType != -1) {
                    vessel.guys.push(new Guy(vessel.supratiles[Math.floor(Math.random() * vessel.supratiles.length)], this.crewType))
                    vessel.weapons[vessel.weapons.indexOf(this)] = new Weapon(-1)
                    return
                }
            }
            if (vessel.upgradeMenu.wepsto.includes(this)) {
                if (this.crewType != -1) {
                    vessel.guys.push(new Guy(vessel.supratiles[Math.floor(Math.random() * vessel.supratiles.length)], this.crewType))
                    vessel.upgradeMenu.wepsto[vessel.upgradeMenu.wepsto.indexOf(this)] = new Weapon(-1)
                    return
                }
            }
            if (vessel.weapons.includes(this)) {
                if (this.selected == 1) {
                    if (keysPressed['a']) {
                        this.auto *= -1
                        keysPressed['a'] = false
                    }
                }
            }

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
                this.body.y = 650 + 360
            } else if (vessel.upgradeMenu.wepsto.includes(this)) {
                this.body.x = (vessel.upgradeMenu.window.x + 400) + ((100 * vessel.upgradeMenu.wepsto.indexOf(this)) % 500)
                this.body.y = ((vessel.upgradeMenu.window.y + 10) + (70 * Math.floor(vessel.upgradeMenu.wepsto.indexOf(this) / 5)))
            } else {
                this.body.x = (vessel.upgradeMenu.window.x + 400) + ((100 * stars.stars[vessel.star].weapons.indexOf(this)) % 500)
                this.body.y = ((vessel.upgradeMenu.window.y + 10) + (70 * Math.floor(stars.stars[vessel.star].weapons.indexOf(this) / 5)))
            }
            if (this.selected == 1) {
                this.body.color = "#666666"
            } else {
                this.body.color = "#444444"
            }
            if (this.temp == -2) {
                this.body.draw()
            }
            if (this.type == -1) {
                return
            }
            if (this.temp == -2) {

                canvas_context.fillStyle = "white"
                canvas_context.font = "9px comic sans ms"
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
            }



            if (this.temp == -2) {
                if (this.crewType == -1 && (this.gearType < 0)) {

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
                    } else if (this.type == 10) {
                        canvas_context.drawImage(ion1, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 11) {
                        canvas_context.drawImage(ion2, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 12) {
                        canvas_context.drawImage(ion3, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 13) {
                        canvas_context.drawImage(ion4, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 14) {
                        canvas_context.drawImage(rail1, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 15) {
                        canvas_context.drawImage(rail2, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 16) {
                        canvas_context.drawImage(rail3, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 17) {
                        canvas_context.drawImage(shieldsap1, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 18) {
                        canvas_context.drawImage(shieldsap2, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 19) {
                        canvas_context.drawImage(shieldsap3, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 20) {
                        canvas_context.drawImage(hardbeam1, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 21) {
                        canvas_context.drawImage(hardbeam2, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 22) {
                        canvas_context.drawImage(hardbeam3, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 23) {
                        canvas_context.drawImage(scrapcannon1, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 24) {
                        canvas_context.drawImage(scrapcannon2, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 25) {
                        canvas_context.drawImage(scrapcannon3, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 26) {
                        canvas_context.drawImage(heatbeam2, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 27) {
                        canvas_context.drawImage(mindcontrol1, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 28) {
                        canvas_context.drawImage(mindcontrol2, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 29) {
                        canvas_context.drawImage(hook1, 0, 0, 64, 64, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 30) {
                        canvas_context.drawImage(hook2, 0, 0, 64, 64, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 31) {
                        canvas_context.drawImage(hook3, 0, 0, 64, 64, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 32) {
                        canvas_context.drawImage(tractor1, 0, 0, 64, 64, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 33) {
                        canvas_context.drawImage(tractor2, 0, 0, 64, 64, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 34) {
                        canvas_context.drawImage(mirror, 0, 0, 64, 64, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 35) {
                        canvas_context.drawImage(mirror2, 0, 0, 64, 64, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 36) {
                        canvas_context.drawImage(capacitor1, 0, 0, 64, 64, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 37) {
                        canvas_context.drawImage(capacitor2, 0, 0, 64, 64, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 100) {
                        this.frame++
                        canvas_context.drawImage(wodopomimg, (this.frame % 30) * 32, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
                    } else if (this.type == 101) {
                        // this.frame++
                        canvas_context.drawImage(iou, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
                    }
                } else if (this.gearType >= 0) {
                    if (this.gearType == 0) {
                        canvas_context.drawImage(armor1, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
                    }
                    if (this.gearType == 1) {
                        canvas_context.drawImage(shoes1, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
                    }
                    if (this.gearType == 2) {
                        canvas_context.drawImage(shoes2, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
                    }
                    if (this.gearType == 3) {
                        canvas_context.drawImage(shoes3, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
                    }
                    if (this.gearType == 4) {
                        canvas_context.drawImage(synth1, 0, 0, 32, 32, this.body.x, this.body.y + 10, 44, 44)
                    }

                } else {
                    canvas_context.drawImage(rs[this.crewType], 64 * (Math.floor(Math.random() * 1) % (rs[this.crewType].width / 64)), 0, 64, 64, this.body.x, this.body.y + 10, 44, 44)

                }

            }

        }
    }

    let fire = new Image()
    fire.src = "fire.png"

    let mirror = new Image()
    mirror.src = "mirror.png"

    let mirror2 = new Image()
    mirror2.src = "mirror2.png"
    let mirrorr2 = new Image()
    mirrorr2.src = "mirrorr2.png"
    let mirrorr = new Image()
    mirrorr.src = "mirrorr.png"


    let capacitorr2 = new Image()
    capacitorr2.src = "capacitorr2.png"
    let capacitor1 = new Image()
    capacitor1.src = "capacitor1.png"
    let capacitorr1 = new Image()
    capacitorr1.src = "capacitorr1.png"
    let capacitor2 = new Image()
    capacitor2.src = "capacitor2.png"





    let armor1 = new Image()
    armor1.src = "armor1.png"

    let shoes1 = new Image()
    shoes1.src = "shoes1.png"

    let shoes2 = new Image()
    shoes2.src = "shoes2.png"

    let shoes3 = new Image()
    shoes3.src = "shoes3.png"

    let synth1 = new Image()
    synth1.src = "synth1.png"




    let tractor1 = new Image()
    tractor1.src = "tractor1.png"
    let tractorr1 = new Image()
    tractorr1.src = "tractorr1.png"
    let tractorr2 = new Image()
    tractorr2.src = "tractorr2.png"
    let tractor2 = new Image()
    tractor2.src = "tractor2.png"

    let intruderimg = new Image()
    intruderimg.src = "intruder.png"

    let wepsysicon = new Image()
    wepsysicon.src = "wepsysicon.png"

    let shieldsysicon = new Image()
    shieldsysicon.src = "shieldsysicon.png"
    let helmsysicon = new Image()
    helmsysicon.src = "helmsysicon.png"
    let oxysysicon = new Image()
    oxysysicon.src = "oxysysicon.png"
    let securitysysicon = new Image()
    securitysysicon.src = "securitysysicon.png"
    let medsysicon = new Image()
    medsysicon.src = "medsysicon.png"
    let teleportersysicon = new Image()
    teleportersysicon.src = "teleportersysicon.png"
    let enginesysicon = new Image()
    enginesysicon.src = "enginesysicon.png"



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


    let mindcontrol1 = new Image()
    mindcontrol1.src = "mindcontrol1.png"
    let mindcontrol2 = new Image()
    mindcontrol2.src = "mindcontrol2.png"
    let mindcontrolr1 = new Image()
    mindcontrolr1.src = "mindcontrolr1.png"
    let mindcontrolr2 = new Image()
    mindcontrolr2.src = "mindcontrolr2.png"



    let hook1 = new Image()
    hook1.src = "hook1.png"


    let hook2 = new Image()
    hook2.src = "hook2.png"


    let hook3 = new Image()
    hook3.src = "hook3.png"

    let hookr1 = new Image()
    hookr1.src = "hookr1.png"


    let hookr2 = new Image()
    hookr2.src = "hookr2.png"


    let hookr3 = new Image()
    hookr3.src = "hookr3.png"


    let basiclaserr = new Image()
    basiclaserr.src = "basiclaserr.png"
    let basicbombr = new Image()
    basicbombr.src = "basicbombr.png"
    let doublelaserr = new Image()
    doublelaserr.src = "doublelaserr.png"
    let triplelaserr = new Image()
    triplelaserr.src = "triplelaserr.png"
    let megalaserr = new Image()
    megalaserr.src = "megalaserr.png"
    let crewlaserr = new Image()
    crewlaserr.src = "crewlaserr.png"
    let mediummissler = new Image()
    mediummissler.src = "mediummissler.png"
    let bigmissler = new Image()
    bigmissler.src = "bigmissler.png"
    let megamissler = new Image()
    megamissler.src = "megamissler.png"
    let heatbeamr = new Image()
    heatbeamr.src = "heatbeamr.png"
    let ion1r = new Image()
    ion1r.src = "iongunr1.png"
    let ion2r = new Image()
    ion2r.src = "iongunr2.png"
    let ion3r = new Image()
    ion3r.src = "iongunr3.png"
    let ion4r = new Image()
    ion4r.src = "iongunr4.png"

    let railgunr1 = new Image()
    railgunr1.src = "railgunr1.png"
    let railgunr2 = new Image()
    railgunr2.src = "railgunr2.png"
    let railgunr3 = new Image()
    railgunr3.src = "railgunr3.png"
    let shieldsapr1 = new Image()
    shieldsapr1.src = "shieldsapr.png"
    let shieldsapr2 = new Image()
    shieldsapr2.src = "shieldsapr2.png"
    let shieldsapr3 = new Image()
    shieldsapr3.src = "shieldsapr3.png"


    let hardbeamr1 = new Image()
    hardbeamr1.src = "hardbeamr1.png"
    let hardbeamr2 = new Image()
    hardbeamr2.src = "hardbeamr2.png"
    let hardbeamr3 = new Image()
    hardbeamr3.src = "hardbeamr3.png"

    let scrapcannonr1 = new Image()
    scrapcannonr1.src = "scrapcannonr1.png"

    let scrapcannonr2 = new Image()
    scrapcannonr2.src = "scrapcannonr2.png"

    let scrapcannonr3 = new Image()
    scrapcannonr3.src = "scrapcannonr3.png"





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



    let ion1 = new Image()
    ion1.src = "iongun1.png"
    let ion2 = new Image()
    ion2.src = "iongun2.png"
    let ion3 = new Image()
    ion3.src = "iongun3.png"
    let ion4 = new Image()
    ion4.src = "iongun4.png"


    let scrapcannon1 = new Image()
    scrapcannon1.src = "scrapcannon1.png"

    let scrapcannon2 = new Image()
    scrapcannon2.src = "scrapcannon2.png"

    let scrapcannon3 = new Image()
    scrapcannon3.src = "scrapcannon3.png"




    let rail1 = new Image()
    rail1.src = "railgun1.png"
    let rail2 = new Image()
    rail2.src = "railgun2.png"
    let rail3 = new Image()
    rail3.src = "railgun3.png"


    let shieldsap1 = new Image()
    shieldsap1.src = "shieldsap.png"
    let shieldsap2 = new Image()
    shieldsap2.src = "shieldsap2.png"
    let shieldsap3 = new Image()
    shieldsap3.src = "shieldsap3.png"


    let hardbeam1 = new Image()
    hardbeam1.src = "hardbeam1.png"
    let hardbeam2 = new Image()
    hardbeam2.src = "hardbeam2.png"
    let hardbeam3 = new Image()
    hardbeam3.src = "hardbeam3.png"


    let iou = new Image()
    iou.src = 'iou.png'

    let wodopomimg = new Image()
    wodopomimg.src = "wodopom.png"

    let heatbeam = new Image()
    heatbeam.src = "heatbeam.png"
    let heatbeam2 = new Image()
    heatbeam2.src = "heatbeam2.png"
    let heatbeamr2 = new Image()
    heatbeamr2.src = "heatbeamr2.png"


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

    let ship1img = new Image()
    ship1img.src = "ship1.png"



    let bat = new Image()
    bat.src = "bat.png"


    class ShipUI {
        constructor(level, v = 0) {
            if (level == -1) {
                this.body = new Rectangle(40, 580, 230, 140, "#444444")
                this.systems = []
                for (let t = 0; t < 9; t++) {
                    this.systems.push(new System(t, v))
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
                    // ////////////////////////////////////////////////////console.log("hit")
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
            this.body.y += 360
        }
        draw() {
            this.body.draw()
            for (let t = 0; t < this.systems.length; t++) {

                //////////////////////////console.log(this.systems[t].fed)
                if ((this.systems[t].demand + this.systems[t].fed) > this.systems[t].sto) {
                    this.systems[t].demand = Math.max(this.systems[t].sto - this.systems[t].fed, 0)
                } else {
                    this.systems[t].demand = Math.max(this.systems[t].sto - this.systems[t].fed, 0)
                }
                let box = new Rectangle((this.body.x + 5 + (t * 25)), ((this.body.y + this.body.height) - 135), 20, 135, "#999999")
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
                    if (typeof vessel.hash != 'undefined') {
                        if (vessel.hash[rooms[t]].integrity < 100 * (1 - (1 / (11 - this.systems[t].max)))) {
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
                // this.systems[t].fed = 0
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
                        //////////////////////////////////////////////console.log(this.systems[t].demand, this.systems[t].fed, k)
                        if (this.systems[t].sto > k) {
                            // this.systems[t].demand--
                            this.systems[t].sto--
                        } else {
                            if (vessel.energy.power > 0) {
                                // this.systems[t].demand++
                                this.systems[t].sto++
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
            // this.body.draw()
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
                    let wet = 0
                    if (this.systems[t].demand + this.systems[t].fed > k) {
                        this.systems[t].bars[k].color = "#FF0000"
                        wet = 1
                    }
                    if (this.systems[t].fed > k) {
                        this.systems[t].bars[k].color = "orange"
                        wet = 1
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
                if (this.systems[t].demand < 10) {
                    if (15 + (this.systems[t].demand * 5) <= vessel.scrap) {

                        canvas_context.fillStyle = "#00ff00"
                        canvas_context.font = "10px comic sans ms"
                        canvas_context.fillText(15 + (this.systems[t].demand * 5), box.x, box.y - 25)
                    } else {

                        canvas_context.fillStyle = "#FF0000"
                        canvas_context.font = "10px comic sans ms"
                        canvas_context.fillText(15 + (this.systems[t].demand * 5), box.x, box.y - 25)
                    }
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
        constructor(type) {
            this.type = type
            this.tab = -1
            this.shoptag = 0
            this.shopbox = new RectangleR(0, 0, 200, 100, "#88888888")
            this.wepsto = []
            // for(let t = 0;t<8;t++){
            //     let v = new Weapon(t)
            //     v.auto = 0
            //     this.wepsto.push(v)
            // }
            for (let t = 0; t < 15; t++) {
                if (t != 0) {
                    let v = new Weapon(-1)
                    v.auto = 0
                    this.wepsto.push(v)
                } else {
                    if (this.type == 0) {
                        let v = new Weapon(101)
                        v.auto = 0
                        this.wepsto.push(v)
                    } else {
                        let v = new Weapon(-1)
                        v.auto = 0
                        this.wepsto.push(v)
                    }
                }
            }

            this.button = new RectangleR(1, 900, 40, 40, "#444444")
            this.open = -1
            this.window = new RectangleR(280 * globalRat, 280 * globalRat, 910, 250, "#444444")
            this.levels = new MenuUI(this.window)

            this.repairButton = new RectangleR(this.window.x + 10, this.window.y + 10, 100, 50, "#FF000044")
            this.first = 0
        }
        draw() {
            if (this.first == 0) {
                this.first = 1
                this.wepsto[0].draw()
                this.buyBombs = new RectangleR(this.wepsto[0].body.x - 120, this.wepsto[0].body.y + 110, 110, 30, "#88888888")
                this.sellBombs = new RectangleR(this.wepsto[0].body.x - 120, this.wepsto[0].body.y + 145, 110, 30, "#88888888")
                this.buySlot = new RectangleR(this.wepsto[0].body.x - 120, this.wepsto[0].body.y + 180, 110, 30, "#88888888")
            }

            let c = 0
            if (enemy.guys) {
                for (let t = 0; t < enemy.guys.length; t++) {
                    if (enemy.guys[t].hostile == 1 && enemy.guys[t].mindControlled != 1) {
                        c++
                    }
                }
            }
            if (enemy.hull <= 0) {
                for (let t = 0; t < enemy.guys.length; t++) {
                    if (enemy.guys[t].hostile == 1 && enemy.guys[t].mindControlled != 1) {
                        // let w = {}
                        // for (let f = 0; f < vessel.blocks.length; f++) {
                        //     for (let k = 0; k < vessel.blocks[f].length; k++) {
                        //         if (typeof w.x == 'undefined') {
                        //             if (vessel.blocks[f][k].marked == 1) {
                        //                 if (vessel.blocks[f][k].walkable == true) {
                        //                     w = vessel.blocks[f][k]
                        //                 }
                        //             }
                        //         }
                        //     }
                        // }

                        let w = vessel.supratiles[t]
                        let newguy = new Guy(w, enemy.guys[t].type)
                        newguy.health = enemy.guys[t].health
                        newguy.meleeKills = enemy.guys[t].meleeKills
                        newguy.gear = []
                        for (let s = 0; s < enemy.guys[t].skillslist; s++) {
                            newguy.skillslist[s] = enemy.guys[t].skillslist[s]
                        }
                        for (let k = 0; k < enemy.guys[t].gear.length; k++) {
                            newguy.gear.push(new Gear(enemy.guys[t].gear[k].type, newguy))
                        }
                        vessel.guys.push(newguy)
                    }
                }

                vessel.copies = []
                enemy.guys = []
            } else if (enemy.guys) {
                // ////////////////////////console.log(c, enemy.guys.length)
                if (enemy.guys.length == 0 || c == enemy.guys.length) {

                    for (let t = 0; t < enemy.guys.length; t++) {

                        // let w = {}
                        // for (let f = 0; f < vessel.blocks.length; f++) {
                        //     for (let k = 0; k < vessel.blocks[f].length; k++) {
                        //         if (typeof w.x == 'undefined') {
                        //             if (vessel.blocks[f][k].marked == 1) {
                        //                 if (vessel.blocks[f][k].walkable == true) {
                        //                     w = vessel.blocks[f][k]
                        //                 }
                        //             }
                        //         }
                        //     }
                        // }
                        let w = vessel.supratiles[t]
                        let j = 0
                        while (w.walkable == false) {

                            w = vessel.supratiles[t + j]
                            j++
                            if (j > (vessel.supratiles.length - t) - 1) {
                                break
                            }
                        }
                        let newguy = new Guy(w, enemy.guys[t].type)
                        newguy.health = enemy.guys[t].health
                        newguy.meleeKills = enemy.guys[t].meleeKills
                        newguy.gear = []
                        for (let s = 0; s < enemy.guys[t].skillslist; s++) {
                            newguy.skillslist[s] = enemy.guys[t].skillslist[s]
                        }
                        for (let k = 0; k < enemy.guys[t].gear.length; k++) {
                            newguy.gear.push(new Gear(enemy.guys[t].gear[k].type, newguy))
                        }
                        vessel.guys.push(newguy)
                    }
                    vessel.copies = []
                    enemy.guys = []
                }
            }
            this.button.draw()
            canvas_context.drawImage(system, this.button.x, this.button.y)
            if (this.open == 1) {
                this.window.draw()
                this.levels.draw()
                vessel.menuBattery.draw()
                canvas_context.fillStyle = "white"
                canvas_context.font = "10px comic sans ms"
                // canvas_context.fillText("Money: " + vessel.money, this.window.x + 270, this.window.y + 20)
                canvas_context.fillText("Scrap: " + vessel.scrap, this.window.x + 270, this.window.y + 20)
                canvas_context.fillText("Hull: " + Math.ceil(vessel.hull), this.window.x + 270, this.window.y + 40)
                // canvas_context.fillText("Fuel: " + vessel.fuel, this.window.x + 270, this.window.y + 80)
                canvas_context.fillText("Bombs: " + vessel.bombs, this.window.x + 270, this.window.y + 60)
                this.cargo = new RectangleR(this.wepsto[0].body.x - 50, this.wepsto[0].body.y + 25, 50, 25, "#88888888")
                this.shopsquare = new RectangleR(this.wepsto[0].body.x - 50, this.wepsto[0].body.y, 50, 25, "#88888888")



                if (this.tab == 1) {
                    this.cargo.x = ((vessel.upgradeMenu.window.x + 400) + ((100 * 0) % 500)) - 50
                    this.cargo.y = ((vessel.upgradeMenu.window.y + 10) + (70 * Math.floor(0 / 5))) + 25
                    this.shopsquare.x = ((vessel.upgradeMenu.window.x + 400) + ((100 * 0) % 500)) - 50
                    this.shopsquare.y = ((vessel.upgradeMenu.window.y + 10) + (70 * Math.floor(0 / 5))) + 0
                } else {
                    this.cargo.x = ((vessel.upgradeMenu.window.x + 400) + ((100 * 0) % 500)) - 50
                    this.cargo.y = ((vessel.upgradeMenu.window.y + 10) + (70 * Math.floor(0 / 5))) + 0
                    this.shopsquare.x = ((vessel.upgradeMenu.window.x + 400) + ((100 * 0) % 500)) - 50
                    this.shopsquare.y = ((vessel.upgradeMenu.window.y + 10) + (70 * Math.floor(0 / 5))) + 25

                }

                if (stars.stars[vessel.star].shop == 1) {
                    this.buyBombs.draw()
                    this.sellBombs.draw()
                    if (vessel.weapons.length < 10) {
                        this.buySlot.draw()
                    }
                    canvas_context.fillStyle = "white"
                    canvas_context.font = "12px comic sans ms"
                    canvas_context.fillText("5 Scrap", this.buyBombs.x + 30, this.buyBombs.y + 24)
                    canvas_context.fillText("Buy Bomb", this.buyBombs.x + 25, this.buyBombs.y + 12)
                    canvas_context.fillText("Sell Bomb", this.sellBombs.x + 25, this.sellBombs.y + 12)
                    canvas_context.fillText("1 Scrap", this.sellBombs.x + 30, this.sellBombs.y + 24)

                    if (vessel.weapons.length < 10) {
                        canvas_context.fillText("Buy Weapon ", this.buySlot.x + 15, this.buySlot.y + 12)
                        canvas_context.fillText("Slot 500 Scrap", this.buySlot.x + 10, this.buySlot.y + 24)
                    }
                    this.cargo.draw()
                    canvas_context.fillStyle = "white"
                    canvas_context.font = "15px comic sans ms"
                    canvas_context.fillText("Cargo", this.cargo.x + 5, this.cargo.y + 15,)

                    this.shopsquare.draw()
                    canvas_context.fillStyle = "white"
                    canvas_context.font = "15px comic sans ms"
                    canvas_context.fillText("Shop", this.shopsquare.x + 5, this.shopsquare.y + 15,)
                } else {
                    this.tab = -1
                }
                if (this.tab == 1) {
                    // canvas_context.
                    // canvas_context.fillText()

                    for (let t = 0; t < stars.stars[vessel.star].weapons.length; t++) {
                        stars.stars[vessel.star].weapons[t].draw()
                        stars.stars[vessel.star].weapons[t].auto = 0
                    }

                } else {
                    for (let t = 0; t < this.wepsto.length; t++) {
                        this.wepsto[t].draw()
                        this.wepsto[t].auto = 0
                    }
                }

                if (enemy.guys) {
                    if (enemy.guys.length == 0 || c == enemy.guys.length) {

                        if (mode == 1) {

                            this.repairButton.color = "#00FF0044"
                            this.repairButton.draw()
                            canvas_context.fillStyle = "white"
                            canvas_context.font = "20px comic sans ms"
                            canvas_context.fillText("Repair", this.repairButton.x + 10, this.repairButton.y + 25)
                            canvas_context.font = "12px comic sans ms"
                            canvas_context.fillText("5 scrap = 5 hull", this.repairButton.x + 10, this.repairButton.y + 40)

                        } else {

                            if (vessel.star == 0) {

                                this.repairButton.color = "#00FF0044"
                                this.repairButton.draw()
                                canvas_context.fillStyle = "white"
                                canvas_context.font = "20px comic sans ms"
                                canvas_context.fillText("Repair", this.repairButton.x + 10, this.repairButton.y + 25)
                                canvas_context.font = "12px comic sans ms"
                                canvas_context.fillText("5 scrap = 5 hull", this.repairButton.x + 10, this.repairButton.y + 40)
                            }
                        }
                    } else if (enemy.hull <= 0) {
                        if (mode == 1) {

                            this.repairButton.color = "#00FF0044"
                            this.repairButton.draw()
                            canvas_context.fillStyle = "white"
                            canvas_context.font = "20px comic sans ms"
                            canvas_context.fillText("Repair", this.repairButton.x + 10, this.repairButton.y + 25)
                            canvas_context.font = "12px comic sans ms"
                            canvas_context.fillText("5 scrap = 5 hull", this.repairButton.x + 10, this.repairButton.y + 40)

                        } else {

                            if (vessel.star == 0) {

                                this.repairButton.color = "#00FF0044"
                                this.repairButton.draw()
                                canvas_context.fillStyle = "white"
                                canvas_context.font = "20px comic sans ms"
                                canvas_context.fillText("Repair", this.repairButton.x + 10, this.repairButton.y + 25)
                                canvas_context.font = "12px comic sans ms"
                                canvas_context.fillText("5 scrap = 5 hull", this.repairButton.x + 10, this.repairButton.y + 40)
                            }
                        }

                    } else {
                        if (mode == 1) {
                            this.repairButton.color = "#ff000044"
                            this.repairButton.draw()
                            canvas_context.fillStyle = "white"
                            canvas_context.font = "20px comic sans ms"
                            canvas_context.fillText("Repair", this.repairButton.x + 10, this.repairButton.y + 25)
                            canvas_context.font = "12px comic sans ms"
                            canvas_context.fillText("in combat", this.repairButton.x + 10, this.repairButton.y + 40)
                        }
                    }
                } else if (enemy.hull <= 0) {
                    if (mode == 1) {

                        this.repairButton.color = "#00FF0044"
                        this.repairButton.draw()
                        canvas_context.fillStyle = "white"
                        canvas_context.font = "20px comic sans ms"
                        canvas_context.fillText("Repair", this.repairButton.x + 10, this.repairButton.y + 25)
                        canvas_context.font = "12px comic sans ms"
                        canvas_context.fillText("5 scrap = 5 hull", this.repairButton.x + 10, this.repairButton.y + 40)

                    } else {

                        if (vessel.star == 0) {

                            this.repairButton.color = "#00FF0044"
                            this.repairButton.draw()
                            canvas_context.fillStyle = "white"
                            canvas_context.font = "20px comic sans ms"
                            canvas_context.fillText("Repair", this.repairButton.x + 10, this.repairButton.y + 25)
                            canvas_context.font = "12px comic sans ms"
                            canvas_context.fillText("5 scrap = 5 hull", this.repairButton.x + 10, this.repairButton.y + 40)
                        }
                    }

                } else {
                    if (mode == 1) {
                        this.repairButton.color = "#ff000044"
                        this.repairButton.draw()
                        canvas_context.fillStyle = "white"
                        canvas_context.font = "20px comic sans ms"
                        canvas_context.fillText("Repair", this.repairButton.x + 10, this.repairButton.y + 25)
                        canvas_context.font = "12px comic sans ms"
                        canvas_context.fillText("in combat", this.repairButton.x + 10, this.repairButton.y + 40)
                    }
                }

                this.ket = 0
                for (let t = 0; t < stars.stars[vessel.star].weapons.length; t++) {
                    if (stars.stars[vessel.star].weapons[t].selected == 1) {
                        if (stars.stars[vessel.star].weapons[t].type != -1) {
                            this.ket = 1
                        }
                    }
                }
                if (this.ket != 1) {
                    for (let t = 0; t < this.wepsto.length; t++) {
                        if (this.wepsto[t].selected == 1) {
                            if (this.wepsto[t].type != -1) {
                                this.ket = 2
                            }
                        }
                    }
                }

                if (stars.stars[vessel.star].shop == 1) {
                    if (this.shopdraw == 1 && this.ket == 2) {
                        this.shopbox.draw()
                        this.sellButton = new RectangleR(this.shopbox.x + 10, this.shopbox.y + 10, 80, 40, "#00ff00")
                        this.buyButton = new RectangleR(this.shopbox.x + 10, this.shopbox.y + 50, 80, 40, "#ff0000")
                        // this.buyButton.draw()
                        this.sellButton.draw()
                        canvas_context.fillStyle = "black"
                        canvas_context.font = "20px comic sans ms"
                        this.index = -1
                        for (let t = 0; t < this.wepsto.length; t++) {
                            if (this.wepsto[t].selected == 1) {
                                this.index = t
                            }
                        }
                        canvas_context.fillStyle = "white"
                        canvas_context.font = "20px comic sans ms"
                        let price = this.wepsto[this.index].sell
                        for (let t = 0; t < vessel.guys.length; t++) {
                            price *= vessel.guys[t].barter
                        }
                        price = Math.floor(price)
                        canvas_context.fillText(`${price} Scrap`, this.sellButton.x + 90, this.sellButton.y + 30)
                        // canvas_context.fillText(`${this.wepsto[this.index].buy} Scrap`, this.buyButton.x + 90, this.buyButton.y + 30)
                        canvas_context.fillStyle = "black"
                        canvas_context.font = "20px comic sans ms"
                        // canvas_context.fillText("Buy", this.buyButton.x + 23, this.buyButton.y + 30)
                        canvas_context.fillText("Sell", this.sellButton.x + 20, this.sellButton.y + 30)
                    } else if (this.shopdraw == 2 && this.ket == 1) {
                        this.shopbox.draw()
                        this.sellButton = new RectangleR(this.shopbox.x + 10, this.shopbox.y + 10, 80, 40, "#00ff00")
                        this.buyButton = new RectangleR(this.shopbox.x + 10, this.shopbox.y + 50, 80, 40, "#ff0000")
                        this.buyButton.draw()
                        // this.sellButton.draw()
                        canvas_context.fillStyle = "black"
                        canvas_context.font = "20px comic sans ms"
                        this.index = -1
                        for (let t = 0; t < stars.stars[vessel.star].weapons.length; t++) {
                            if (stars.stars[vessel.star].weapons[t].selected == 1) {
                                this.index = t
                            }
                        }
                        canvas_context.fillStyle = "white"
                        canvas_context.font = "20px comic sans ms"
                        // canvas_context.fillText(`${stars.stars[vessel.star].weapons[this.index].sell} Scrap`, this.sellButton.x + 90, this.sellButton.y + 30)
                        let price = stars.stars[vessel.star].weapons[this.index].buy
                        for (let t = 0; t < vessel.guys.length; t++) {
                            price /= vessel.guys[t].barter
                        }
                        price = Math.floor(price)
                        canvas_context.fillText(`${price} Scrap`, this.buyButton.x + 90, this.buyButton.y + 30)
                        canvas_context.fillStyle = "black"
                        canvas_context.font = "20px comic sans ms"
                        canvas_context.fillText("Buy", this.buyButton.x + 23, this.buyButton.y + 30)
                    }

                }
            } else {
                this.shopdraw = 0
            }
        }
        check(point) {
            if (this.open == 1) {

                if (stars.stars[vessel.star].shop == 1) {
                    if (this.shopsquare.isPointInside(point)) {
                        this.tab = 1
                        this.shopdraw = 0
                        return
                    }
                }
                if (this.cargo.isPointInside(point)) {
                    this.tab = -1
                    this.shopdraw = 0
                    return
                }
                if (this.buyBombs.isPointInside(point)) {
                    if (vessel.scrap >= 5) {
                        vessel.bombs++
                        vessel.scrap -= 5
                    }
                }
                if (this.sellBombs.isPointInside(point)) {
                    if (vessel.bombs >= 1) {
                        vessel.bombs--
                        vessel.scrap += 1
                    }
                }
                if (this.buySlot.isPointInside(point)) {
                    if (vessel.scrap >= 500) {
                        if (vessel.weapons.length < 10) {
                            vessel.weapons.push(new Weapon(-1))
                            vessel.scrap -= 500
                        }
                    }
                }


                //monsters
                for (let t = 0; t < this.wepsto.length; t++) {
                    if (this.wepsto[t].selected == 1) {
                        for (let g = 0; g < vessel.guys.length; g++) {
                            if (vessel.guys[g].zSelected == 1) {
                                for (let k = 0; k < vessel.guys[g].gear.length; k++) {
                                    if (vessel.guys[g].gear[k].body.isPointInside(TIP_engine)) {
                                        if (vessel.upgradeMenu.wepsto[t].gearType >= 0) {
                                            let f = vessel.guys[g].gear[k].type
                                            vessel.guys[g].gear[k] = new Gear(vessel.upgradeMenu.wepsto[t].gearType, vessel.guys[g])
                                            vessel.upgradeMenu.wepsto[t] = new Weapon(-1, -1, f)
                                            vessel.guys[g].gear[k].draw()
                                            break
                                        }
                                    }
                                }
                            }

                            for (let k = 0; k < vessel.guys[g].gear.length; k++) {
                                // vessel.guys[g].zSelected = 0
                            }
                        }
                    }
                }


                //end of monsters


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

                let gwet = 0
                for (let t = 0; t < this.wepsto.length; t++) {
                    if (this.wepsto[t].body.isPointInside(point)) {
                        for (let k = 0; k < vessel.weapons.length; k++) {
                            if (vessel.weapons[k].selected == 1) {
                                gwet = 1
                            }
                        }
                    }
                }
                for (let k = 0; k < vessel.weapons.length; k++) {
                    if (vessel.weapons[k].body.isPointInside(point)) {
                        for (let t = 0; t < this.wepsto.length; t++) {
                            if (this.wepsto[t].selected == 1) {
                                gwet = 2
                            }
                        }
                    }
                }

                if (stars.stars[vessel.star].shop == 1) {
                    if (this.tab == 1) {
                        for (let k = 0; k < stars.stars[vessel.star].weapons.length; k++) {
                            if (stars.stars[vessel.star].weapons[k].body.isPointInside(point)) {
                                gwet = 3
                            }
                        }
                    }
                }
                if (gwet == 3) {

                    for (let t = 0; t < stars.stars[vessel.star].weapons.length; t++) {
                        if (stars.stars[vessel.star].weapons[t].selectedSto == 1) {
                            stars.stars[vessel.star].weapons[t].selectedSto = 0
                        }
                        if (stars.stars[vessel.star].weapons[t].selected == 1) {
                            stars.stars[vessel.star].weapons[t].selectedSto = 1
                        }
                        stars.stars[vessel.star].weapons[t].selected = 0
                    }

                    for (let t = 0; t < stars.stars[vessel.star].weapons.length; t++) {
                        if (stars.stars[vessel.star].weapons[t].body.isPointInside(point)) {
                            stars.stars[vessel.star].weapons[t].selected = 1
                            if (stars.stars[vessel.star].weapons[t].selectedSto == 1 && stars.stars[vessel.star].weapons[t].type != -1) {
                                for (let w = 0; w < vessel.weapons.length; w++) {
                                    vessel.weapons[w].selected = 0
                                }
                                for (let w = 0; w < vessel.upgradeMenu.wepsto.length; w++) {
                                    vessel.upgradeMenu.wepsto[w].selected = 0
                                }
                                this.shopdraw = 2
                                this.shopbox.x = TIP_engine.x
                                this.shopbox.y = TIP_engine.y
                            } else {
                                this.shopdraw = 0
                            }
                        }
                    }


                } else if (gwet == 1) {
                    for (let t = 0; t < this.wepsto.length; t++) {
                        if (this.wepsto[t].body.isPointInside(point)) {
                            for (let k = 0; k < vessel.weapons.length; k++) {
                                if (vessel.weapons[k].selected == 1) {
                                    if (this.wepsto[t].gearType < 0) {
                                        let swap = new Weapon(this.wepsto[t].type)
                                        this.wepsto[t] = new Weapon(vessel.weapons[k].type)
                                        vessel.weapons[k] = swap
                                    }
                                }
                            }
                        }
                    }
                } else if (gwet == 2) {

                    for (let k = 0; k < vessel.weapons.length; k++) {
                        if (vessel.weapons[k].body.isPointInside(point)) {
                            for (let t = 0; t < this.wepsto.length; t++) {
                                if (this.wepsto[t].selected == 1) {
                                    if (this.wepsto[t].gearType < 0) {
                                        let swap = new Weapon(this.wepsto[t].type)
                                        this.wepsto[t] = new Weapon(vessel.weapons[k].type)
                                        vessel.weapons[k] = swap
                                    }
                                }
                            }
                        }
                    }
                } else {
                    for (let t = 0; t < this.wepsto.length; t++) {
                        if (this.wepsto[t].selectedSto == 1) {
                            this.wepsto[t].selectedSto = 0
                        }
                        if (this.wepsto[t].selected == 1) {
                            this.wepsto[t].selectedSto = 1
                        }
                        this.wepsto[t].selected = 0
                    }

                    for (let t = 0; t < this.wepsto.length; t++) {
                        if (this.wepsto[t].body.isPointInside(point)) {
                            this.wepsto[t].selected = 1

                            if (stars.stars[vessel.star].shop == 1) {
                                if (this.wepsto[t].selectedSto == 1 && this.wepsto[t].type != -1) {
                                    for (let w = 0; w < stars.stars[vessel.star].weapons.length; w++) {
                                        stars.stars[vessel.star].weapons[w].selected = 0
                                    }
                                    for (let w = 0; w < vessel.weapons.length; w++) {
                                        vessel.weapons[w].selected = 0
                                    }
                                    this.shopdraw = 1
                                    this.shopbox.x = TIP_engine.x
                                    this.shopbox.y = TIP_engine.y
                                } else {
                                    this.shopdraw = 0
                                }
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
            //////////////////////////////////////console.log(this.powersto)
            this.expenditure = 0
            this.systems = systems
        }
        balance() {
            if (this == vessel.energy) {
                // if(this == vessel.energy){
                this.powersto = vessel.menuBattery.power
                // }
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
                    this.power -= this.systems[t].sto
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
                    this.power -= this.systems[t].sto
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
            if (this == vessel.energy) {
                this.powersto = vessel.menuBattery.power
                this.power = this.powersto
                for (let t = 0; t < this.systems.length; t++) {
                    this.power -= this.systems[t].demand
                }
                for (let t = 0; t < this.systems.length; t++) {
                    // this.power += this.systems[t].fed
                }
                this.box = new RectangleR(1, 580 + 360, 40, 140, "#555555")
                this.box.draw()
                for (let t = 0; t < this.powersto; t++) {
                    let block = new RectangleR(2 + ((t % 4) * 10), 720 - (10 + (Math.floor(t / 4) * 10)) + 360, 10, 10, "#dd0000")
                    block.draw()
                }
                for (let t = 0; t < this.power; t++) {
                    let block = new RectangleR(2 + ((t % 4) * 10), 720 - (10 + (Math.floor(t / 4) * 10)) + 360, 10, 10, "#00dd00")
                    block.draw()
                }
            } else {
                // this.powersto = vessel.menuBattery.power
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

            if (vessel.energy.powersto <= vessel.scrap) {

                canvas_context.fillStyle = "#00ff00"
                canvas_context.font = "15px comic sans ms"
                canvas_context.fillText((vessel.energy.powersto), this.box.x + 8, this.box.y - 15)
            } else {

                canvas_context.fillStyle = "#FF0000"
                canvas_context.font = "15px comic sans ms"
                canvas_context.fillText((vessel.energy.powersto), this.box.x + 8, this.box.y - 15)
            }

        }
    }
    class Airlock {
        constructor(x, y) {
            this.body = new Circle(x, y, 10, "#00ff00")
            this.t = 0
            this.count = 0
            this.open = -1
        }
        draw() {
            // this.body.draw()
            this.count = 0
            for (let t = 0; t < vessel.blocks.length; t++) {
                for (let k = 0; k < vessel.blocks[t].length; k++) {
                    if (vessel.blocks[t][k].doesPerimeterTouch(this.body)) {
                        this.count++
                        if (this.open == 1) {
                            vessel.blocks[t][k].air = 0
                        }
                    }
                }
            }

            if (this.open == 1) {
                this.body.color = "#00ff00"
            } else {
                this.body.color = "#FF0000"
            }
            this.body.radius = Math.min(this.count * 7, 18)
            let vverts = [12, 13]
            if (vessel.type == 0) {

                //  vverts = [7,8,9]
                if (vessel.doors.includes(this)) {
                    this.body.x = doors[vessel.doors.indexOf(this)].body.x
                    this.body.y = doors[vessel.doors.indexOf(this)].body.y
                    // //////////console.log("s")
                }
            }
            if (vessel.type == 1) {

                //  vverts = [7,8,9]
                if (vessel.doors.includes(this)) {
                    this.body.x = ship2doors[vessel.doors.indexOf(this)].body.x - 40
                    this.body.y = ship2doors[vessel.doors.indexOf(this)].body.y + 10
                    // //////////console.log("s")
                }
            }
            if (vessel.type == 2) {

                //  vverts = [7,8,9]
                if (vessel.doors.includes(this)) {
                    this.body.x = ship2doors[vessel.doors.indexOf(this)].body.x
                    this.body.y = ship2doors[vessel.doors.indexOf(this)].body.y
                    // //////////console.log("s")
                }
            }
            if (vessel.type == 3) {
                vverts = [8, 9]
                if (vessel.doors.includes(this)) {
                    this.body.x = ship4doors[vessel.doors.indexOf(this)].body.x
                    this.body.y = ship4doors[vessel.doors.indexOf(this)].body.y
                    // //////////console.log("s")
                }
            }
            if (vessel.type == 4) {
                vverts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
                if (vessel.doors.includes(this)) {
                    this.body.x = ship5doors[vessel.doors.indexOf(this)].body.x
                    this.body.y = ship5doors[vessel.doors.indexOf(this)].body.y
                    // //////////console.log("s")
                }
            }
            if (vessel.type == 5) {
                vverts = []
                if (vessel.doors.includes(this)) {
                    this.body.x = ship6doors[vessel.doors.indexOf(this)].body.x + 50
                    this.body.y = ship6doors[vessel.doors.indexOf(this)].body.y
                    // //////////console.log("s")
                }
            }
            if (vessel.type == 6) {
                vverts = [13, 15]
                if (vessel.doors.includes(this)) {
                    this.body.x = ship7doors[vessel.doors.indexOf(this)].body.x
                    this.body.y = ship7doors[vessel.doors.indexOf(this)].body.y
                    // //////////console.log("s")
                }
            }
            if (vessel.type == 7) {
                vverts = [6, 7, 8, 9, 10]
                if (vessel.doors.includes(this)) {
                    this.body.x = ship8doors[vessel.doors.indexOf(this)].body.x + 40
                    this.body.y = ship8doors[vessel.doors.indexOf(this)].body.y + 40
                    // //////////console.log("s")
                }
            }
            if (vessel.type == 8) {
                vverts = [6, 7]
                if (vessel.doors.includes(this)) {
                    this.body.x = ship9doors[vessel.doors.indexOf(this)].body.x
                    this.body.y = ship9doors[vessel.doors.indexOf(this)].body.y
                    // //////////console.log("s")
                }
            }
            if (vessel.type == 9) {
                vverts = [7, 8, 9, 10, 11, 12, 13, 14]
                if (vessel.doors.includes(this)) {
                    this.body.x = ship10doors[vessel.doors.indexOf(this)].body.x
                    this.body.y = ship10doors[vessel.doors.indexOf(this)].body.y
                    // //////////console.log("s")
                }
            }
            if (vessel.type == 10) {
                vverts = [8, 9]
                if (vessel.doors.includes(this)) {
                    this.body.x = ship11doors[vessel.doors.indexOf(this)].body.x
                    this.body.y = ship11doors[vessel.doors.indexOf(this)].body.y
                    // //////////console.log("s")
                }
            }
            if (vessel.type == 11) {
                vverts = [11, 12]
                let drop = [1, 2]
                let up = [0, 3]
                if (vessel.doors.includes(this)) {
                    this.body.x = ship12doors[vessel.doors.indexOf(this)].body.x
                    this.body.y = ship12doors[vessel.doors.indexOf(this)].body.y
                }
            }
            if (vessel.type == 12) {
                vverts = []
                let drop = [1, 2]
                let up = [0, 3]
                if (vessel.doors.includes(this)) {
                    this.body.x = ship13doors[vessel.doors.indexOf(this)].body.x
                    this.body.y = ship13doors[vessel.doors.indexOf(this)].body.y
                }
            }
            if (vessel.type == 13) {
                vverts = [11,12,13,14]
                let drop = [1, 2]
                let up = [0, 3]
                if (vessel.doors.includes(this)) {
                    this.body.x = ship14doors[vessel.doors.indexOf(this)].body.x
                    this.body.y = ship14doors[vessel.doors.indexOf(this)].body.y
                }
            }
            this.body.x += 200
            this.body.y += 150
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
            if (vessel.hash) {
                if (vessel.hash['security'].integrity < 100 * (1 - (1 / (11 - vessel.UI.systems[5].max)))) {
                    return

                }
            }
            if (vessel.UI.systems[5].sto + vessel.UI.systems[5].fed <= 0) {
                return

            }
            if (vessel.upgradeMenu.open == 1) {
                return
            }
            if (start == 1) {
                return
            }
            this.t = 0
            if (vessel.doors.includes(this)) {
                if (vessel.UI.systems[5].sto <= 0) {
                    return
                }
                let wet = 0
                if (this.body.isPointInside(point)) {
                    this.open *= -1
                    if (this.open == 1) {
                        this.body.color = "#00ff00"
                        airlockopen.play()
                    } else {
                        this.body.color = "#FF0000"
                        doorclose.play()
                    }
                    wet = 1
                    // //////////////////////////////////////////////////console.log(vessel.doors.indexOf(this))
                    // for (let t = 0; t < vessel.blocks.length; t++) {
                    //     for (let k = 0; k < vessel.blocks[t].length; k++) {
                    //         if (vessel.blocks[t][k].doesPerimeterTouch(this.body)) {
                    //             vessel.blocks[t][k].doorway *= -1
                    //             wet = 1
                    //         }
                    //     }
                    // }
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
    class Door {
        constructor(x, y) {
            this.body = new Circle(x, y, 10, "#00ff00")
            this.t = 0
            this.count = 0
            this.link = new LineOP(this.body, this.body)
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
            if (vessel.type == 0) {

                //  vverts = [7,8,9]
                if (vessel.doors.includes(this)) {
                    this.body.x = doors[vessel.doors.indexOf(this)].body.x
                    this.body.y = doors[vessel.doors.indexOf(this)].body.y
                    // //////////console.log("s")
                }
            }
            if (vessel.type == 1) {

                vverts = [0, 1, 2, 3, 4, 5]
                let drop = [1, 2]
                let up = [0, 3]
                if (vessel.doors.includes(this)) {
                    this.body.x = ship2doors[vessel.doors.indexOf(this)].body.x - 40
                    this.body.y = ship2doors[vessel.doors.indexOf(this)].body.y + 10
                    if (drop.includes(vessel.doors.indexOf(this))) {
                        this.body.x = ship2doors[vessel.doors.indexOf(this)].body.x - 40
                        this.body.y = ship2doors[vessel.doors.indexOf(this)].body.y + 10 - (16 * rat)

                    }
                    if (up.includes(vessel.doors.indexOf(this))) {
                        this.body.x = ship2doors[vessel.doors.indexOf(this)].body.x - 40
                        this.body.y = ship2doors[vessel.doors.indexOf(this)].body.y + 10 + (16 * rat)

                    }
                    // //////////console.log("s")
                }
            }
            if (vessel.type == 2) {

                vverts = [6, 7, 8, 9, 10]
                let drop = [1, 2]
                let up = [0, 3]
                if (vessel.doors.includes(this)) {
                    this.body.x = ship3doors[vessel.doors.indexOf(this)].body.x
                    this.body.y = ship3doors[vessel.doors.indexOf(this)].body.y
                    // if (drop.includes(vessel.doors.indexOf(this))) {
                    //     this.body.x = ship2doors[vessel.doors.indexOf(this)].body.x-40
                    //     this.body.y = ship2doors[vessel.doors.indexOf(this)].body.y+10-(16*rat)

                    // }
                    // if (up.includes(vessel.doors.indexOf(this))) {
                    //     this.body.x = ship2doors[vessel.doors.indexOf(this)].body.x-40
                    //     this.body.y = ship2doors[vessel.doors.indexOf(this)].body.y+10+(16*rat)

                    // }
                    // //////////console.log("s")
                }
            }
            if (vessel.type == 3) {

                vverts = [0, 1, 2, 3]
                let drop = [1, 2]
                let up = [0, 3]
                if (vessel.doors.includes(this)) {
                    this.body.x = ship4doors[vessel.doors.indexOf(this)].body.x
                    this.body.y = ship4doors[vessel.doors.indexOf(this)].body.y
                    // if (drop.includes(vessel.doors.indexOf(this))) {
                    //     this.body.x = ship2doors[vessel.doors.indexOf(this)].body.x-40
                    //     this.body.y = ship2doors[vessel.doors.indexOf(this)].body.y+10-(16*rat)

                    // }
                    // if (up.includes(vessel.doors.indexOf(this))) {
                    //     this.body.x = ship2doors[vessel.doors.indexOf(this)].body.x-40
                    //     this.body.y = ship2doors[vessel.doors.indexOf(this)].body.y+10+(16*rat)

                    // }
                    // //////////console.log("s")
                }
            }
            if (vessel.type == 4) {

                vverts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
                let drop = [1, 2]
                let up = [0, 3]
                if (vessel.doors.includes(this)) {
                    this.body.x = ship5doors[vessel.doors.indexOf(this)].body.x
                    this.body.y = ship5doors[vessel.doors.indexOf(this)].body.y
                }
            }
            if (vessel.type == 5) {

                vverts = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
                let drop = [1, 2]
                let up = [0, 3]
                if (vessel.doors.includes(this)) {
                    this.body.x = ship6doors[vessel.doors.indexOf(this)].body.x + 50
                    this.body.y = ship6doors[vessel.doors.indexOf(this)].body.y
                }
            }
            if (vessel.type == 6) {

                vverts = [0, 1, 2, 3, 4, 5]
                let drop = [1, 2]
                let up = [0, 3]
                if (vessel.doors.includes(this)) {
                    this.body.x = ship7doors[vessel.doors.indexOf(this)].body.x
                    this.body.y = ship7doors[vessel.doors.indexOf(this)].body.y
                }
            }
            if (vessel.type == 7) {

                vverts = [0, 1, 2, 3, 4]
                let drop = [1, 2]
                let up = [0, 3]
                if (vessel.doors.includes(this)) {
                    this.body.x = ship8doors[vessel.doors.indexOf(this)].body.x + 40
                    this.body.y = ship8doors[vessel.doors.indexOf(this)].body.y + 40
                }
            }
            if (vessel.type == 8) {

                vverts = [0, 1]
                let drop = [1, 2]
                let up = [0, 3]
                if (vessel.doors.includes(this)) {
                    this.body.x = ship9doors[vessel.doors.indexOf(this)].body.x
                    this.body.y = ship9doors[vessel.doors.indexOf(this)].body.y
                }
            }
            if (vessel.type == 9) {

                vverts = [0, 1, 2, 3, 4, 5, 6, 7]
                let drop = [1, 2]
                let up = [0, 3]
                if (vessel.doors.includes(this)) {
                    this.body.x = ship10doors[vessel.doors.indexOf(this)].body.x
                    this.body.y = ship10doors[vessel.doors.indexOf(this)].body.y
                }
            }
            if (vessel.type == 10) {
                vverts = [6, 7]
                let drop = [1, 2]
                let up = [0, 3]
                if (vessel.doors.includes(this)) {
                    this.body.x = ship11doors[vessel.doors.indexOf(this)].body.x
                    this.body.y = ship11doors[vessel.doors.indexOf(this)].body.y
                }
            }
            if (vessel.type == 11) {
                vverts = [2, 4, 10, 0, 1, 5]
                let drop = [1, 2]
                let up = [0, 3]
                if (vessel.doors.includes(this)) {
                    this.body.x = ship12doors[vessel.doors.indexOf(this)].body.x
                    this.body.y = ship12doors[vessel.doors.indexOf(this)].body.y
                }
            }
            if (vessel.type == 12) {
                vverts = [0, 1, 2, 3]
                let drop = [1, 2]
                let up = [0, 3]
                if (vessel.doors.includes(this)) {
                    this.body.x = ship13doors[vessel.doors.indexOf(this)].body.x
                    this.body.y = ship13doors[vessel.doors.indexOf(this)].body.y
                }
            }
            if (vessel.type == 13) {
                vverts = [0, 1, 2, 3,4,5,6,7,8]
                let drop = [1, 2]
                let up = [0, 3]
                if (vessel.doors.includes(this)) {
                    this.body.x = ship14doors[vessel.doors.indexOf(this)].body.x
                    this.body.y = ship14doors[vessel.doors.indexOf(this)].body.y
                }
            }
            this.body.x += 200
            this.body.y += 150
            if (vverts.includes(vessel.doors.indexOf(this))) {
                if (this.body.color == "#00ff00") {
                    let rect = new RectangleR(this.body.x - 2, this.body.y - (this.count * 10), 4, 4, this.body.color)
                    rect.draw()
                    let rect2 = new RectangleR(this.body.x - 2, this.body.y + ((this.count * 10) - 4), 4, 4, this.body.color)
                    rect2.draw()
                    this.link = new LineOP(rect, rect2)
                } else {
                    let rect = new RectangleR(this.body.x - 2, this.body.y - (this.count * 10), 4, 20 * this.count, this.body.color)
                    rect.draw()
                }
            } else {
                if (this.body.color == "#00ff00") {
                    let rect = new RectangleR(this.body.x - (this.count * 10), this.body.y - 2, 4, 4, this.body.color)
                    rect.draw()
                    let rect2 = new RectangleR(this.body.x + ((this.count * 10) - 4), this.body.y - 2, 4, 4, this.body.color)
                    rect2.draw()
                    this.link = new LineOP(rect, rect2)
                } else {
                    let rect = new RectangleR(this.body.x - (this.count * 10), this.body.y - 2, 20 * this.count, 4, this.body.color)
                    rect.draw()
                }

            }
        }
        check(point) {
            if (vessel.hash) {
                if (vessel.hash['security'].integrity < 100 * (1 - (1 / (11 - vessel.UI.systems[5].max)))) {
                    return

                }
            }

            if (vessel.UI.systems[5].sto + vessel.UI.systems[5].fed <= 0) {
                return

            }
            this.t = 0
            let worm = 0
            if (vessel.guys) {
                for (let t = 0; t < vessel.guys.length; t++) {
                    if (vessel.guys[t].stretch == 1) {
                        //////////////////////////////console.log("33")
                        for (let l = 0; l < vessel.guys[t].lines.length; l++) {
                            ////////////////////////////////console.log(vessel.guys[t].lines)
                            if (vessel.guys[t].lines[l].intersects(this.link)) {
                                ////////////////////////////////console.log("dd")
                                worm = 1
                            }
                        }
                    }
                }
            }
            if (this.body.color == "#00ff00") {
                ////////////////////////////////console.log("gg")
                if (worm == 1) {
                    ////////////////////////////////console.log("ee")
                    return
                }
            }
            if (vessel.doors.includes(this)) {
                if (vessel.UI.systems[5].sto <= 0) {
                    return
                }
                let wet = 0
                if (this.body.isPointInside(point)) {
                    //////console.log(vessel.doors.indexOf(this))
                    // //////////////////////////////////////////////////console.log(vessel.doors.indexOf(this))
                    for (let t = 0; t < vessel.blocks.length; t++) {
                        for (let k = 0; k < vessel.blocks[t].length; k++) {
                            if (vessel.blocks[t][k].doesPerimeterTouch(this.body)) {
                                // //////console.log(vessel.doors.indexOf(this))
                                vessel.blocks[t][k].doorway *= -1
                                wet = 1
                                if (vessel.blocks[t][k].doorway == 1) {
                                    this.body.color = "#00ff00"
                                    dooropen.play()
                                } else {
                                    this.body.color = "#FF0000"
                                    doorclose.play()
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
    let mode = 1
    class Ship {
        constructor(type, width, height, posx, posy, gridPoints,) {
            this.web = []
            this.guys = []
            this.type = type
            this.wepDrawCount = 0
            this.engineCharge = 0
            this.angle = 0
            this.teleButton = new RectangleR(1 * globalRat, 860, 40, 40, "purple")
            this.shake = 0
            this.copies = []
            this.star = 0
            this.pulse = 0
            this.UI = new ShipUI(-1, this.type)
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
                    // //////////////////////////////////////////////////////////////console.log(baseShipTiles)

                    if (this.type == 0) {
                        let keys = Object.keys(baseShipTiles[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = baseShipTiles[t][k][keys[f]]
                        }
                    }
                    if (this.type == 1) {
                        let keys = Object.keys(ship2[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = ship2[t][k][keys[f]]
                        }
                    }
                    if (this.type == 2) {
                        let keys = Object.keys(ship3[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = ship3[t][k][keys[f]]
                        }
                    }
                    if (this.type == 3) {
                        let keys = Object.keys(ship4[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = ship4[t][k][keys[f]]
                        }
                    }
                    if (this.type == 4) {
                        let keys = Object.keys(ship5[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = ship5[t][k][keys[f]]
                        }
                    }
                    if (this.type == 5) {
                        let keys = Object.keys(ship6[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = ship6[t][k][keys[f]]
                        }
                    }
                    if (this.type == 6) {
                        let keys = Object.keys(ship7[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = ship7[t][k][keys[f]]
                        }
                    }
                    if (this.type == 7) {
                        let keys = Object.keys(ship8[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = ship8[t][k][keys[f]]
                        }
                    }
                    if (this.type == 8) {
                        let keys = Object.keys(ship9[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = ship9[t][k][keys[f]]
                        }
                    }
                    if (this.type == 9) {
                        let keys = Object.keys(ship10[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = ship10[t][k][keys[f]]
                        }
                    }
                    if (this.type == 10) {
                        let keys = Object.keys(ship11[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = ship11[t][k][keys[f]]
                        }
                    }
                    if (this.type == 11) {
                        let keys = Object.keys(ship12[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = ship12[t][k][keys[f]]
                        }
                    }
                    if (this.type == 12) {
                        let keys = Object.keys(ship13[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = ship13[t][k][keys[f]]
                        }
                    }
                    if (this.type == 13) {
                        let keys = Object.keys(ship14[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = ship14[t][k][keys[f]]
                        }
                    }
                    //////////////////////////////////////////////////////////////console.log(tile)
                    if (tile.color == "#ff000044") {
                        //////////////////////////////////////////////////////////////console.log("h")
                        tile.medbay = 1
                    }
                    if (tile.empty == 1) {
                        //////////////////////////////////////////////////////////////console.log("h")
                        tile.color = "#FFFFFF44"
                    }
                    if (tile.special == 1) {
                        //////////////////////////////////////////////////////////////console.log("h")
                        tile.color = "#AA00FF44"
                    }
                    if (tile.engine == 1) {
                        //////////////////////////////////////////////////////////////console.log("h")
                        tile.color = "#ffaa0044"
                    }
                    if (tile.marked == 1) {
                        //////////////////////////////////////////////////////////////console.log("w")
                        tile.walkable = true
                    }

                    if (this.type == 1) {
                        tile.x -= 40
                        tile.y += 10
                    }

                    if (this.type == 5) {
                        tile.x += 50
                        // tile.y += 10
                    }
                    if (this.type == 7) {
                        tile.x += 40
                        tile.y += 40
                    }
                    // tile.x*=globalRat
                    // tile.y*=globalRat
                    tile.x += 200
                    tile.y += 150
                    // tile.x-=(tile.width*.5*t)
                    // tile.y-=(tile.height*.5*k)

                    if (tile.engine > 0 || tile.medbay > 0 || tile.oxygen > 0 || tile.weapon > 0 || tile.helm > 0 || tile.security > 0 || tile.special > 0 || tile.empty > 0 || tile.doorway > 0 || tile.shield > 0 || tile.empty > 0) {
                        tile.marked = 1
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
                        if (tile.shield > 0) {
                            tile.color = "#00ffff44"
                        }
                        if (tile.weapon > 0) {
                            tile.color = "#ff00FF44"
                            // if (this.type == 7) {
                            //     tile.shield = 1
                            //     tile.color = "#AA88FF44"
                            // }
                        }
                        if (tile.helm > 0) {
                            tile.color = "#ffff0044"
                        }
                        if (tile.security > 0) {
                            tile.color = "#88888844"
                            // if (this.type == 3 || this.type == 6 || this.type == 10) {
                            //     tile.medbay = 1
                            //     tile.color = "#88FF8844"
                            // }
                        }
                        if (tile.engine > 0) {
                            tile.color = "#FFAA0044"
                        }
                        if (tile.special > 0) {
                            tile.color = "#aa00ff44"
                        }
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

            this.body = new Circle((256 * rat) + 200, (256 * rat) + 150, (256 * rat), "white")
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
            this.supratiles = []
            for (let t = 0; t < this.blocks.length; t++) {
                for (let k = 0; k < this.blocks[t].length; k++) {
                    if (this.blocks[t][k].marked == 1) {

                        this.blocks[t][k].draw = (new Tile()).draw
                        this.supratiles.push(this.blocks[t][k])
                    }
                }
            }
            this.supratiles.sort((a, b) => a.x > b.x ? 1 : -1)
            if (this.type == 0) {
                this.supratiles[0].left = 1
                this.supratiles[2].left = 1
                this.supratiles[3].left = 1
                this.supratiles[1].left = 1
            }
            if (this.type == 5) {
                this.supratiles[0].left = 1
                this.supratiles[1].left = 1
            }
            if (this.type == 6) {
                this.supratiles[0].left = 1
                this.supratiles[1].left = 1
                this.supratiles[2].left = 1
            }
            if (this.type == 1 || this.type == 2 || this.type == 3) {
                this.supratiles[0].left = 1
                this.supratiles[2].left = 1
                this.supratiles[3].left = 1
                this.supratiles[4].left = 1
                this.supratiles[1].left = 1
            }
            if (this.type == 4) {
                this.supratiles[0].left = 1
                this.supratiles[2].left = 1
                this.supratiles[3].left = 1
                this.supratiles[4].left = 1
                this.supratiles[5].left = 1
                this.supratiles[6].left = 1
                this.supratiles[1].left = 1
            }
            if (this.type == 7) {
                this.supratiles[0].left = 1
                this.supratiles[2].left = 1
                this.supratiles[3].left = 1
                this.supratiles[4].left = 1
                this.supratiles[5].left = 1
                this.supratiles[6].left = 1
                this.supratiles[7].left = 1
                this.supratiles[1].left = 1
            }
            if (this.type == 11) {
                this.supratiles[0].left = 1
                this.supratiles[2].left = 1
                this.supratiles[3].left = 1
                this.supratiles[4].left = 1
                this.supratiles[5].left = 1
                this.supratiles[6].left = 1
                this.supratiles[7].left = 1
                this.supratiles[1].left = 1
            }
            if (this.type == 12) {
                this.supratiles[0].left = 1
                this.supratiles[1].left = 1
            }
            if (this.type == 13) {
                this.supratiles[0].left = 1
                this.supratiles[1].left = 1
                this.supratiles[2].left = 1
                this.supratiles[3].left = 1
                this.supratiles[4].left = 1
            }
            if (this.type == 8) {
                this.supratiles[0].left = 1
                this.supratiles[2].left = 1
                // this.supratiles[3].left = 1
                this.supratiles[4].left = 1
                // this.supratiles[5].left = 1
                this.supratiles[6].left = 1
                // this.supratiles[7].left = 1
                this.supratiles[8].left = 1
                // this.supratiles[1].left = 1
            }
            if (this.type == 9) {
                this.supratiles[0].left = 1
                this.supratiles[2].left = 1
                this.supratiles[3].left = 1
                this.supratiles[4].left = 1
                // this.supratiles[5].left = 1
                // this.supratiles[6].left = 1
                // this.supratiles[7].left = 1
                // this.supratiles[8].left = 1
                this.supratiles[1].left = 1
            }
            if (this.type == 10) {
                this.supratiles[0].left = 1
                this.supratiles[2].left = 1
                this.supratiles[3].left = 1
                this.supratiles[8].left = 1
                // this.supratiles[5].left = 1
                // this.supratiles[6].left = 1
                // this.supratiles[7].left = 1
                // this.supratiles[8].left = 1
                this.supratiles[1].left = 1
                this.supratiles[9].left = 1
            }
            this.first = 0

            this.wepmax = 0
            this.supratiles.sort((a, b) => a.y > b.y ? -1 : 1)
            if (this.type == 1 || this.type == 2 || this.type == 3 || this.type == 4 || this.type == 5 || this.type == 6 || this.type == 7 || this.type == 8 || this.type == 9 || this.type == 10 || this.type == 11 || this.type == 12|| this.type == 13) {
                this.supratiles.sort((a, b) => a.y > b.y ? 1 : -1)
                this.supratiles.sort((a, b) => a.x > b.x ? -1 : 1)

                for (let t = 0; t < this.supratiles.length; t++) {
                    if (this.type == 5) {
                        if (this.supratiles[t].x == this.supratiles[0].x - this.supratiles[0].width && this.supratiles[t].y != this.supratiles[0].y) {
                            this.supratiles[t].weaponized = 1
                        }
                    }

                    if (this.supratiles[t].x == this.supratiles[0].x) {
                        // if (this.supratiles[t].y == this.supratiles[0].y) {
                        this.supratiles[t].weaponized = 1
                        this.wepmax++
                        // }
                    }
                    // let n = enemy.neighbors(this.supratiles[t])
                    let wet = 0
                    for (let k = 0; k < this.supratiles.length; k++) {
                        if (k == t) {
                            continue
                        }
                        if (this.supratiles[t].x == this.supratiles[k].x - this.supratiles[k].width) {
                            if (this.supratiles[k].y == this.supratiles[t].y) {
                                wet = 1
                            }
                        }
                        if (this.supratiles[t].x == this.supratiles[k].x + this.supratiles[k].width) {
                            if (this.supratiles[k].y == this.supratiles[t].y) {
                                wet = 1
                            }
                        }
                    }
                    if (wet == 0) {
                        if (this.type == 5) {

                            // this.supratiles[t].weaponized = 1
                        }
                        this.wepmax++
                    }
                }
            } else {

                for (let t = 0; t < this.supratiles.length; t++) {
                    if (this.supratiles[t].x == this.supratiles[(this.supratiles.length - 1)].x) {
                        if (this.supratiles[t].y == this.supratiles[(this.supratiles.length - 1)].y) {
                            this.supratiles[t].weaponized = 1
                            this.wepmax++
                        }
                    }
                    // let n = enemy.neighbors(this.supratiles[t])
                    let wet = 0
                    for (let k = 0; k < this.supratiles.length; k++) {
                        if (k == t) {
                            continue
                        }
                        if (this.supratiles[k].x == this.supratiles[t].x + this.supratiles[t].width) {
                            if (this.supratiles[k].y == this.supratiles[t].y) {
                                wet = 1
                            }
                        }
                    }
                    if (wet == 0) {
                        this.supratiles[t].weaponized = 1
                        this.wepmax++
                    }
                }
            }
            ////////////////console.log(this.wepmax, this.supratiles)
            this.weapons = []
            this.doors = []
            if (this.type == 0) {
                for (let t = 0; t < doors.length; t++) {
                    if (t < 12) {
                        this.doors.push(new Door(doors[t].body.x, doors[t].body.y))
                    } else {
                        this.doors.push(new Airlock(doors[t].body.x, doors[t].body.y))

                    }
                }
            }
            if (this.type == 1) {
                for (let t = 0; t < ship2doors.length; t++) {
                    if (t <= 7) {


                        this.doors.push(new Door(ship2doors[t].body.x - 40, ship2doors[t].body.y + 10))
                    } else {
                        this.doors.push(new Airlock(ship2doors[t].body.x - 40, ship2doors[t].body.y + 10))

                    }
                }
            }
            if (this.type == 2) {
                for (let t = 0; t < ship3doors.length; t++) {
                    if (t <= 7) {


                        this.doors.push(new Door(ship3doors[t].body.x - 40, ship3doors[t].body.y + 10))
                    } else {
                        if (t <= 9) {
                            this.doors.push(new Airlock(ship3doors[t].body.x - 40, ship3doors[t].body.y + 10))
                        } else {
                            // this.doors.push(new Door(ship3doors[t].body.x-40, doors[t].body.y+10))
                        }

                    }
                }
            }
            if (this.type == 3) {
                for (let t = 0; t < ship4doors.length; t++) {
                    if (t <= 7) {


                        this.doors.push(new Door(ship4doors[t].body.x - 40, ship4doors[t].body.y + 10))
                    } else {
                        // if (t <= 9) {
                        this.doors.push(new Airlock(ship4doors[t].body.x - 40, ship4doors[t].body.y + 10))
                        // } else {
                        //     // this.doors.push(new Door(ship3doors[t].body.x-40, doors[t].body.y+10))
                        // }

                    }
                }
            }
            if (this.type == 4) {
                for (let t = 0; t < ship5doors.length; t++) {
                    if (t <= 8) {
                        this.doors.push(new Door(ship5doors[t].body.x - 40, ship5doors[t].body.y + 10))
                    } else {
                        this.doors.push(new Airlock(ship5doors[t].body.x - 40, ship5doors[t].body.y + 10))
                    }
                }
            }
            if (this.type == 5) {
                for (let t = 0; t < ship6doors.length; t++) {
                    if (t <= 6) {
                        this.doors.push(new Door(ship6doors[t].body.x - 40, ship6doors[t].body.y + 10))
                    } else {
                        this.doors.push(new Airlock(ship6doors[t].body.x - 40, ship6doors[t].body.y + 10))
                    }
                }
            }
            if (this.type == 6) {
                for (let t = 0; t < ship7doors.length; t++) {
                    if (t <= 11) {
                        this.doors.push(new Door(ship7doors[t].body.x - 40, ship7doors[t].body.y + 10))
                    } else {
                        this.doors.push(new Airlock(ship7doors[t].body.x - 40, ship7doors[t].body.y + 10))
                    }
                }
            }
            if (this.type == 7) {
                for (let t = 0; t < ship8doors.length; t++) {
                    if (t <= 6) {
                        this.doors.push(new Door(ship8doors[t].body.x - 40, ship8doors[t].body.y + 10))
                    } else {
                        this.doors.push(new Airlock(ship8doors[t].body.x - 40, ship8doors[t].body.y + 10))
                    }
                }
            }
            if (this.type == 8) {
                for (let t = 0; t < ship9doors.length; t++) {
                    if (t <= 5) {
                        this.doors.push(new Door(ship9doors[t].body.x - 40, ship9doors[t].body.y + 10))
                    } else {
                        this.doors.push(new Airlock(ship9doors[t].body.x - 40, ship9doors[t].body.y + 10))
                    }
                }
            }
            if (this.type == 9) {
                for (let t = 0; t < ship10doors.length; t++) {
                    if (t <= 6) {
                        this.doors.push(new Door(ship10doors[t].body.x - 40, ship10doors[t].body.y + 10))
                    } else {
                        this.doors.push(new Airlock(ship10doors[t].body.x - 40, ship10doors[t].body.y + 10))
                    }
                }
            }
            if (this.type == 10) {
                for (let t = 0; t < ship11doors.length; t++) {
                    if (t <= 7) {
                        this.doors.push(new Door(ship11doors[t].body.x - 40, ship11doors[t].body.y + 10))
                    } else {
                        this.doors.push(new Airlock(ship11doors[t].body.x - 40, ship11doors[t].body.y + 10))
                    }
                }
            }
            if (this.type == 11) {
                for (let t = 0; t < ship12doors.length; t++) {
                    if (t <= 10) {
                        this.doors.push(new Door(ship12doors[t].body.x - 40, ship12doors[t].body.y + 10))
                    } else {
                        this.doors.push(new Airlock(ship12doors[t].body.x - 40, ship12doors[t].body.y + 10))
                    }
                }
            }
            if (this.type == 12) {
                for (let t = 0; t < ship13doors.length; t++) {
                    if (t <= 5) {
                        this.doors.push(new Door(ship13doors[t].body.x - 40, ship13doors[t].body.y + 10))
                    } else {
                        this.doors.push(new Airlock(ship13doors[t].body.x - 40, ship13doors[t].body.y + 10))
                    }
                }
            }
            if (this.type == 13) {
                for (let t = 0; t < ship14doors.length; t++) {
                    if (t <= 8) {
                        this.doors.push(new Door(ship14doors[t].body.x - 40, ship14doors[t].body.y + 10))
                    } else {
                        this.doors.push(new Airlock(ship14doors[t].body.x - 40, ship14doors[t].body.y + 10))
                    }
                }
            }
            //////////console.log(ship2doors)
            //////////console.log(this.doors)
            this.upgradeMenu = new UpgradeMenu(this.type)
            this.menuBattery = new BatteryMenu(9, this.upgradeMenu.levels)
        }
        UIdraw() {
            this.teleButton.draw()
            canvas_context.drawImage(energydeathimg, 64 * (12 % (energydeathimg.width / 64)), 0, 64, 64, this.teleButton.x, this.teleButton.y, 40, 40)

            this.hrat = this.hull / this.maxhull
            this.healthbar = new RectangleR(180, 10, 250, 10, "transparent")
            this.healthbar.draw()
            canvas_context.drawImage(shiphealth, 0, 0, 250 * this.hrat, 10, this.healthbar.x, 10, 250 * this.hrat, 10)

            if (this.boosts) {
                vessel.engineCharge += Math.sqrt(1 - this.dodgeRate()) * 10
                this.jumper = new RectangleR(this.healthbar.x + (this.healthbar.width) + 100, this.healthbar.y, 200 * (vessel.engineCharge / 10000), 40, "#FFFFFF44")
                this.jumper2 = new RectangleR(this.healthbar.x + (this.healthbar.width) + 100, this.healthbar.y, 200, 40, "#FFFFFF44")
                this.jumper.draw()
                this.jumper2.draw()
                if (vessel.engineCharge >= 10000) {
                    vessel.engineCharge = 10000
                    canvas_context.fillStyle = "#00FF00"
                    canvas_context.font = "20px comic sans ms"
                    canvas_context.fillText("Jump", this.jumper.x + (65), this.jumper.y + 22)
                } else {
                    let wet = 0
                    if (this.hash['engine'].integrity < 100 * (1 - (1 / (11 - this.UI.systems[6].max)))) {
                        wet = 1
                    }
                    if (this.hash['helm'].integrity < 100 * (1 - (1 / (11 - this.UI.systems[3].max)))) {
                        wet = 1
                    }
                    if (wet == 1) {
                        canvas_context.fillStyle = "#FF0000"
                        canvas_context.font = "20px comic sans ms"
                        canvas_context.fillText("Broken System", this.jumper.x + (25), this.jumper.y + 22)
                    } else if ((1 - this.dodgeRate()) > 0) {
                        canvas_context.fillStyle = "#FFFF00"
                        canvas_context.font = "20px comic sans ms"
                        canvas_context.fillText("Charging Jump", this.jumper.x + (25), this.jumper.y + 22)
                    } else {
                        canvas_context.fillStyle = "#FFAA00"
                        canvas_context.font = "20px comic sans ms"
                        canvas_context.fillText("Stalled", this.jumper.x + (55), this.jumper.y + 22)
                    }
                }
            }




            for (let t = 0; t < this.weapons.length; t++) {
                this.weapons[t].draw()
            }
            for (let t = 0; t < this.guys.length; t++) {
                this.guys[t].bodydraw()
            }
            this.UI.draw()
            this.energy.draw()
            // enemy.UI.draw()

            this.shield.UIdraw()
            this.upgradeMenu.draw()
        }
        shaker() {
            shake_context.clearRect(0, 0, 1920, 1080)
            if (vessel.shake % 2 == 0) {
                shake_context.drawImage(canvas, (Math.cos(vessel.shake) * vessel.shake) - (vessel.shake * .5), (Math.cos(vessel.shake) * vessel.shake) - (vessel.shake * .5), shake.width, shake.height)
            } else {
                shake_context.drawImage(canvas, (Math.sin(vessel.shake) * vessel.shake) - (vessel.shake * .5), (Math.cos(vessel.shake) * vessel.shake) - (vessel.shake * .5), shake.width, shake.height)
            }
            canvas_context.clearRect(0, 0, canvas.width, canvas.height)
            canvas_context.drawImage(shake, 0, 0, 1920, 1080, 0, 0, 1920, 1080)
        }
        dodgeRate() {
            if (this.first == 0) {
                return 0
            }
            let dodgerate = (Math.sqrt(this.boosts[3]) + Math.sqrt(this.boosts[6])) * 4
            // //////////////////////////////////////////////////console.log( 1-(1/(11-this.UI.systems[6].max)))
            if (this.hash['engine'].integrity < 100 * (1 - (1 / (11 - this.UI.systems[6].max)))) {
                dodgerate = 0
                this.boosts[3] = 0
                this.boosts[6] = 0
            }
            if (this.hash['helm'].integrity < 100 * (1 - (1 / (11 - this.UI.systems[3].max)))) {
                dodgerate = 0
                this.boosts[3] = 0
                this.boosts[6] = 0
            }
            if (this.boosts[3] == 0 || this.boosts[6] == 0) {
                dodgerate *= .5
            }

            if (this.boosts[3] == 0 && this.boosts[6] == 0) {
                dodgerate *= 0
            }
            if (dodgerate == 0) {
                return 1
            } else {
                return Math.max(.90 - (dodgerate / 80), .1)
            }
        }
        draw() {
            if (this.star == 0) {
                if (stars) {
                    if (stars.stars) {
                        vessel.web = [stars.stars[0].body]
                    }
                }
            }

            if (start == 2) {
                this.shield.draw()
                for (let t = 0; t < this.blocks.length; t++) {
                    for (let k = 0; k < this.blocks[t].length; k++) {
                        // let hrat = this.blocks[t][k].integrity / 100
                        if (this.blocks[t][k].marked == 1) {
                            // this.blocks[t][k].color = `rgba(${255 - (255 * hrat)}, ${0 + (255 * hrat)}, ${80}, .3)`
                            this.blocks[t][k].subdraw()
                            // this.blocks[t][k].hole()
                        }
                    }
                }
            }
            if (this.type == 1) {
                if (start == 2) {
                    canvas_context.drawImage(crabship, -40 + 200, 10 + 150)

                }
            }

            if (mode == 1) {

            } else {
                if (start == 1) {
                    for (let t = 0; t < this.web.length - 1; t++) {
                        let art = t / this.web.length
                        let link = new LineOP(this.web[t], this.web[t + 1], `rgb(${255 - (art * 255)}, ${art * 255}, ${128})`, 4)
                        link.draw()
                    }
                    let art = 1
                    let link = new LineOP(this.web[this.web.length - 1], stars.stars[this.star].body, `rgb(${255 - (art * 255)}, ${art * 255}, ${128})`, 4)
                    link.draw()


                    if (mode == 1) {

                    } else {
                        if (this.first == 1) {
                            if (stars) {
                                this.starLink = new LineOP(stars.stars[this.star].body, stars.stars[0].body, "yellow", 1)
                                this.starLink.draw()
                            }
                        }
                    }


                }
            }

            let swet = 1
            for (let t = 0; t < this.blocks.length; t++) {
                for (let k = 0; k < this.blocks[t].length; k++) {
                    if (this.blocks[t][k].onFire == 1) {
                        swet = 0
                    }
                }
            }

            if (swet == 1) {
                for (let s = 0; s < firesounds.length; s++) {
                    firesounds[s].pause()
                }
            }


            for (let t = 0; t < this.UI.systems.length; t++) {
                this.UI.systems[t].fed = 0
            }

            let rooms = ["medbay", "weapon", "shield", "helm", "oxygen", "security", "engine", "special", "empty"]
            // 0 medbay, 1 weapons, 2 shield, 3 helm, 4 oxygen, 5 security, 6 engine, 7 special, 8 empty
            if (this.guys) {
                for (let t = 0; t < this.guys.length; t++) {
                    for (let k = 0; k < rooms.length; k++) {
                        if (this.guys[t].tile[rooms[k]] == 1) {
                            this.UI.systems[k].fed += this.guys[t].energy
                        }
                    }
                }
            }



            if (start == 1) {
                vessel.angle += .01
                if (this.type == 1) {
                    canvas_context.drawImage(crabshipsmall, 0, 0, 64, 64, stars.stars[this.star].body.x - (Math.cos(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.y - (Math.sin(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.radius * 1, stars.stars[this.star].body.radius * 1)

                } else if (this.type == 0) {
                    canvas_context.drawImage(shipimage, 0, 0, 256, 256, stars.stars[this.star].body.x - (Math.cos(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.y - (Math.sin(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.radius * 1, stars.stars[this.star].body.radius * 1)

                } else if (this.type == 2) {
                    canvas_context.drawImage(shipimage3, 0, 0, 64, 64, stars.stars[this.star].body.x - (Math.cos(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.y - (Math.sin(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.radius * 1, stars.stars[this.star].body.radius * 1)

                } else if (this.type == 3) {
                    canvas_context.drawImage(shipimage4, 0, 0, 64, 64, stars.stars[this.star].body.x - (Math.cos(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.y - (Math.sin(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.radius * 1, stars.stars[this.star].body.radius * 1)

                } else if (this.type == 4) {
                    canvas_context.drawImage(shipimage5, 0, 0, 64, 64, stars.stars[this.star].body.x - (Math.cos(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.y - (Math.sin(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.radius * 1, stars.stars[this.star].body.radius * 1)

                } else if (this.type == 5) {
                    canvas_context.drawImage(shipimage6, 0, 0, 64, 64, stars.stars[this.star].body.x - (Math.cos(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.y - (Math.sin(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.radius * 1, stars.stars[this.star].body.radius * 1)

                } else if (this.type == 6) {
                    canvas_context.drawImage(shipimage7, 0, 0, 64, 64, stars.stars[this.star].body.x - (Math.cos(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.y - (Math.sin(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.radius * 1, stars.stars[this.star].body.radius * 1)

                } else if (this.type == 7) {
                    canvas_context.drawImage(shipimage8, 0, 0, 64, 64, stars.stars[this.star].body.x - (Math.cos(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.y - (Math.sin(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.radius * 1, stars.stars[this.star].body.radius * 1)

                } else if (this.type == 8) {
                    canvas_context.drawImage(shipimage9, 0, 0, 64, 64, stars.stars[this.star].body.x - (Math.cos(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.y - (Math.sin(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.radius * 1, stars.stars[this.star].body.radius * 1)

                } else if (this.type == 9) {
                    canvas_context.drawImage(shipimage10, 0, 0, 64, 64, stars.stars[this.star].body.x - (Math.cos(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.y - (Math.sin(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.radius * 1, stars.stars[this.star].body.radius * 1)

                } else if (this.type == 10) {
                    canvas_context.drawImage(beanshipsmall, 0, 0, 64, 64, stars.stars[this.star].body.x - (Math.cos(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.y - (Math.sin(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.radius * 1, stars.stars[this.star].body.radius * 1)

                } else if (this.type == 11) {
                    canvas_context.drawImage(mumshipsmall, 0, 0, 64, 64, stars.stars[this.star].body.x - (Math.cos(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.y - (Math.sin(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.radius * 1, stars.stars[this.star].body.radius * 1)

                } else if (this.type == 12) {
                    canvas_context.drawImage(joshipsmall, 0, 0, 64, 64, stars.stars[this.star].body.x - (Math.cos(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.y - (Math.sin(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.radius * 1, stars.stars[this.star].body.radius * 1)
                    //newship
                } else if (this.type == 13) {
                    canvas_context.drawImage(energyshipsmall, 0, 0, 64, 64, stars.stars[this.star].body.x - (Math.cos(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.y - (Math.sin(vessel.angle) * (stars.stars[this.star].body.radius * 1)) - (stars.stars[this.star].body.radius * .5), stars.stars[this.star].body.radius * 1, stars.stars[this.star].body.radius * 1)
                    //newship
                }

                // //////////////////////console.log("hif")
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

                //ui was here check UIdraw
                enemy.energy.balance()

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
                canvas_context.fillText(Math.round(ac) + '% ship air', 75, 55)
                canvas_context.fillText(this.bombs + ' Bombs', 75, 75)
                canvas_context.fillText(this.scrap + ' Scrap', 75, 95)
                let vnododge = 0
                if (enemy) {
                    if (enemy.weapons) {


                        for (let t = 0; t < enemy.weapons.length; t++) {
                            for (let k = 0; k < enemy.weapons[t].bullets.length; k++) {
                                if (enemy.weapons[t].bullets[k].rope == 1) {
                                    if (enemy.weapons[t].bullets[k].life > 10) {
                                        vnododge++
                                    }
                                }
                            }
                        }
                    }

                }

                canvas_context.fillText(Math.round((1 - (this.dodgeRate() + (vnododge / 10))) * 100) + '% dodge', 75, 115)

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
                                //////////////////////////////////////////////////////////////console.log("r")
                                tiles.push(this.blocks[t][k])
                            }
                        }
                    }
                    //guyjump
                    if (this.type == 1) {
                        this.guys = [new Guy(tiles[0], 5), new Guy(tiles[20], 5), new Guy(tiles[31], 5), new Guy(tiles[32], 5)]
                    } else if (this.type == 2) {
                        this.guys = [new Guy(tiles[0], 0), new Guy(tiles[20], 0), new Guy(tiles[21], 0)]
                    } else if (this.type == 3) {
                        this.guys = [new Guy(tiles[0], 19), new Guy(tiles[2], 19), new Guy(tiles[3], 19)]
                    } else if (this.type == 4) {
                        this.guys = [new Guy(tiles[0], 4), new Guy(tiles[2], 10), new Guy(tiles[3], 4), new Guy(tiles[10], 10)]
                    } else if (this.type == 5) {
                        this.guys = [new Guy(tiles[20], 9), new Guy(tiles[30], 9), new Guy(tiles[31], 9)]
                    } else if (this.type == 6) {
                        this.guys = [new Guy(tiles[20], 18), new Guy(tiles[30], 18), new Guy(tiles[31], 18)]
                    } else if (this.type == 7) {
                        this.guys = [new Guy(tiles[4], 16), new Guy(tiles[26], 6), new Guy(tiles[37], 6), new Guy(tiles[45], 16)]
                    } else if (this.type == 8) {
                        this.guys = [new Guy(tiles[26], 21), new Guy(tiles[13], 2), new Guy(tiles[33], 17)]
                    } else if (this.type == 9) {
                        this.guys = [new Guy(tiles[0], 7), new Guy(tiles[1], 7), new Guy(tiles[3], 7)]
                    } else if (this.type == 10) {
                        this.guys = [new Guy(tiles[12], 1), new Guy(tiles[14], 1), new Guy(tiles[23], 1)]
                    } else if (this.type == 11) {
                        this.guys = [new Guy(tiles[12], 3), new Guy(tiles[14], 3), new Guy(tiles[23], 3)]
                    } else if (this.type == 12) {
                        this.guys = [new Guy(tiles[12], 8), new Guy(tiles[14], 8), new Guy(tiles[23], 8)]
                    } else if (this.type == 13) {
                        this.guys = [new Guy(tiles[12], 13), new Guy(tiles[14], 15), new Guy(tiles[23], 20), new Guy(tiles[3], 19)]
                    } else {
                        this.guys = [new Guy(tiles[0], 12), new Guy(tiles[34], 1), new Guy(tiles[91], 11)]
                        for (let g = 0; g < this.guys.length; g++) {
                            this.guys[g].gear = []
                            for (let t = 0; t < 1; t++) {
                                this.guys[g].gear.push(new Gear(0, this.guys[g]))
                            }
                            for (let t = 0; t < 1; t++) {
                                this.guys[g].gear.push(new Gear(2, this.guys[g]))
                            }
                            for (let t = 0; t < 4; t++) {
                                this.guys[g].gear.push(new Gear(-1, this.guys[g]))
                            }
                        }


                    }
                    // this.guys = [new Guy(tiles[10]), new Guy(tiles[12]), new Guy(tiles[14]), new Guy(tiles[16]), new Guy(tiles[20]), new Guy(tiles[11]), new Guy(tiles[13]), new Guy(tiles[15]), new Guy(tiles[17])]
                    // this.guys = [new Guy(tiles[0])]
                    // this.guys = []
                    this.first = 1


                    this.weapons = []
                    if (this.type == 1) {
                        // for(let t= 0;t<31;t++){
                        //     this.weapons.push(new Weapon(t))
                        // }
                        //wepjump = 1
                        let wep1 = new Weapon(10)
                        let wep2 = new Weapon(20)
                        let wep3 = new Weapon(-1)
                        let wep4 = new Weapon(-1)
                        let wep5 = new Weapon(-1)
                        this.weapons.push(wep1)
                        this.weapons.push(wep2)
                        this.weapons.push(wep3)
                        this.weapons.push(wep4)
                        // this.weapons.push(wep5)
                        // this.weapons.push(new Weapon(16))
                        // this.weapons.push(new Weapon(19))
                        // this.weapons.push(new Weapon(33))
                        // this.weapons.push(new Weapon(0))
                        // this.weapons.push(new Weapon(3))
                        // this.weapons.push(new Weapon(4))
                        // this.weapons.push(new Weapon(5))
                        // this.weapons.push(new Weapon(6))
                        // this.weapons.push(new Weapon(7))
                        // this.weapons.push(new Weapon(8))
                        // this.weapons.push(new Weapon(9))
                    }
                    if (this.type == 0) {
                        let wep1 = new Weapon(0)
                        let wep2 = new Weapon(1)
                        let wep3 = new Weapon(-1)
                        let wep4 = new Weapon(-1)
                        this.weapons.push(wep1)
                        this.weapons.push(wep2)
                        this.weapons.push(wep3)
                        this.weapons.push(wep4)
                    }

                    if (this.type == 2) {
                        let wep1 = new Weapon(12)
                        let wep2 = new Weapon(1)
                        let wep3 = new Weapon(-1)
                        let wep4 = new Weapon(-1)
                        this.weapons.push(wep1)
                        this.weapons.push(wep2)
                        this.weapons.push(wep3)
                        this.weapons.push(wep4)
                    }
                    if (this.type == 3) {
                        let wep1 = new Weapon(26)
                        let wep2 = new Weapon(0)
                        let wep3 = new Weapon(-1)
                        let wep4 = new Weapon(-1)
                        this.weapons.push(wep1)
                        this.weapons.push(wep2)
                        this.weapons.push(wep3)
                        this.weapons.push(wep4)
                    }
                    if (this.type == 4) {
                        let wep1 = new Weapon(17)
                        let wep2 = new Weapon(2)
                        let wep3 = new Weapon(-1)
                        let wep4 = new Weapon(-1)
                        this.weapons.push(wep1)
                        this.weapons.push(wep2)
                        this.weapons.push(wep3)
                        this.weapons.push(wep4)
                    }
                    if (this.type == 5) {
                        let wep1 = new Weapon(16)
                        let wep2 = new Weapon(-1)
                        let wep3 = new Weapon(-1)
                        let wep4 = new Weapon(-1)
                        this.weapons.push(wep1)
                        this.weapons.push(wep2)
                        this.weapons.push(wep3)
                        this.weapons.push(wep4)
                    }
                    if (this.type == 6) {
                        let wep1 = new Weapon(4)
                        let wep2 = new Weapon(-1)
                        let wep3 = new Weapon(-1)
                        let wep4 = new Weapon(-1)
                        this.weapons.push(wep1)
                        this.weapons.push(wep2)
                        this.weapons.push(wep3)
                        this.weapons.push(wep4)
                    }
                    if (this.type == 7) {
                        let wep1 = new Weapon(18)
                        let wep2 = new Weapon(21)
                        let wep3 = new Weapon(-1)
                        // let wep4 = new Weapon(-1)
                        this.weapons.push(wep1)
                        this.weapons.push(wep2)
                        this.weapons.push(wep3)
                        this.scrap += 100
                        // this.weapons.push(wep4)
                    }
                    if (this.type == 8) {
                        let wep1 = new Weapon(23)
                        let wep2 = new Weapon(34)
                        let wep3 = new Weapon(-1)
                        let wep4 = new Weapon(-1)
                        let wep5 = new Weapon(-1)
                        this.weapons.push(wep1)
                        this.weapons.push(wep2)
                        this.weapons.push(wep3)
                        this.scrap = 55
                        this.weapons.push(wep4)
                        this.weapons.push(wep5)
                    }
                    if (this.type == 9) {
                        let wep1 = new Weapon(1)
                        let wep2 = new Weapon(6)
                        let wep3 = new Weapon(-1)
                        let wep4 = new Weapon(-1)
                        // let wep5 = new Weapon(-1)
                        this.weapons.push(wep1)
                        this.weapons.push(wep2)
                        this.weapons.push(wep3)
                        this.scrap = 50
                        this.bombs = 32
                        this.weapons.push(wep4)
                        // this.weapons.push(wep5)
                    }
                    if (this.type == 10) {
                        let wep1 = new Weapon(0)
                        let wep2 = new Weapon(27)
                        let wep3 = new Weapon(-1)
                        let wep4 = new Weapon(-1)
                        // let wep5 = new Weapon(-1)
                        this.weapons.push(wep1)
                        this.weapons.push(wep2)
                        this.weapons.push(wep3)
                        this.scrap = 50
                        this.bombs = 20
                        this.weapons.push(wep4)
                        // this.weapons.push(wep5)
                    }
                    if (this.type == 11) {
                        let wep1 = new Weapon(2)
                        let wep2 = new Weapon(29)
                        let wep3 = new Weapon(33)
                        let wep4 = new Weapon(-1)
                        // let wep5 = new Weapon(-1)
                        this.weapons.push(wep1)
                        this.weapons.push(wep2)
                        this.weapons.push(wep3)
                        this.scrap = 50
                        this.bombs = 20
                        this.weapons.push(wep4)
                        // this.weapons.push(wep5)
                    }
                    if (this.type == 12) {
                        let wep1 = new Weapon(0)
                        let wep2 = new Weapon(0)
                        let wep3 = new Weapon(1)
                        let wep4 = new Weapon(-1)
                        // let wep5 = new Weapon(-1)
                        this.weapons.push(wep1)
                        this.weapons.push(wep2)
                        this.weapons.push(wep3)
                        this.scrap += 50
                        this.bombs += 20
                        this.weapons.push(wep4)
                        // this.weapons.push(wep5)
                    }
                    if (this.type == 13) {
                        let wep1 = new Weapon(37)
                        let wep2 = new Weapon(0)
                        let wep3 = new Weapon(-1)
                        let wep4 = new Weapon(-1)
                        let wep5 = new Weapon(-1)
                        this.weapons.push(wep1)
                        this.weapons.push(wep2)
                        this.weapons.push(wep3)
                        this.weapons.push(wep4)
                        this.weapons.push(wep5)
                    }


                    // wep2.name1 = "Basic"
                    // wep2.name2 = "Bomb"
                    // wep2.max = 1000
                    // wep2.damage = 90
                    // wep2.bomb = 1
                    // wep2.real = 1
                    // wep2.type = 1

                    // this.weapons.push(new Weapon(5))
                    // this.weapons.push(new Weapon(6))
                    // this.weapons.push(new Weapon(7))
                    // this.weapons.push(new Weapon(8))
                    // this.weapons.push(new Weapon(9))
                    // this.weapons.push(new Weapon(10))
                    // this.weapons.push(new Weapon(11))
                    // for(let t = 4;t<25;t++){
                    // this.weapons.push(new Weapon(0))
                    // }
                }
                // canvas_context.drawImage(shipimage, 0, 0, 256, 256, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)


                this.wepDrawCount = 0
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
                    if (this.guys[t].health <= 0 && this.guys[t].energydeathtag <= 0) {
                        this.guys[t].tile.walkable = true
                        if (this.guys[t].stretch == 1) {
                            for (let k = 0; k < this.guys[t].tiles.length; k++) {
                                this.guys[t].tiles[k].walkable = true
                            }
                        }
                        this.guys.splice(t, 1)
                    } else {
                        this.guys[t].energydeathtag--
                    }
                }

                this.boosts = [0, 0, 0, 0, 0, 0, 0, 0, 0]
                //0 medbay, 1 weapons, 2 shield, 3 helm, 4 oxygen, 5 security, 6 engine, 7 special, 8 empty

                let c = 0
                for (let t = 0; t < this.guys.length; t++) {
                    if (this.guys[t].hostile == 1 && this.guys[t].mindControlled != 1) {
                        c++
                    }
                    this.guys[t].bodydraw()
                }

                for (let t = 0; t < this.guys.length; t++) {
                    this.guys[t].fight()
                }

                for (let t = this.guys.length - 1; t >= 0; t--) {
                    this.guys[t].draw()

                }
                for (let t = 0; t < this.guys.length; t++) {
                    if (this.guys[t].hostile == 1) {
                        continue
                    }
                    // this.guys[t].draw()
                    this.guys[t].tile.integrity += this.guys[t].repair
                    if (this.guys[t].tile.integrity > 100) {
                        this.guys[t].tile.integrity = 100
                    }
                    // //////////////////////////////////////////////////////////////console.log(this.guys[t].tile)
                    if (this.guys[t].tile.medbay == 1) {
                        if (this.UI.systems[0].sto + this.UI.systems[0].fed > 0) {
                            this.guys[t].health += Math.sqrt((this.UI.systems[0].sto + this.UI.systems[0].fed)) * .33
                        }
                        if (this.guys[t].health > this.guys[t].maxhealth) {
                            this.guys[t].health = this.guys[t].maxhealth
                        }
                        this.boosts[0] += (this.guys[t].stats[0] * this.guys[t].skillslist[0] * Math.min((this.UI.systems[0].sto + this.UI.systems[0].fed), this.UI.systems[0].max))
                        this.UI.systems[0].fed += 0 //this.guys[t].energy
                        for (let w = 0; w < vessel.guys.length; w++) {
                            if (vessel.guys[w].tile.medbay == 1) {
                                vessel.guys[w].skillslist[0] += .000003
                            }
                        }
                    }
                    if (this.guys[t].tile.weapon == 1) {
                        this.boosts[1] += (this.guys[t].stats[1] * this.guys[t].skillslist[1] * Math.min(this.guys[t].weaponPower + (this.UI.systems[1].sto + this.UI.systems[1].fed), this.guys[t].weaponPower + this.UI.systems[1].max))
                        this.UI.systems[1].fed += 0 //this.guys[t].energy
                        for (let w = 0; w < vessel.guys.length; w++) {
                            if (vessel.guys[w].tile.weapon == 1) {
                                vessel.guys[w].skillslist[1] += .000003
                            }
                        }
                    }
                    if (this.guys[t].tile.shield == 1) {
                        this.boosts[2] += (this.guys[t].stats[2] * this.guys[t].skillslist[2] * Math.min(this.guys[t].shieldPower + (this.UI.systems[2].sto + this.UI.systems[2].fed), this.guys[t].shieldPower + this.UI.systems[2].max))
                        this.UI.systems[2].fed += 0 //this.guys[t].energy
                        for (let w = 0; w < vessel.guys.length; w++) {
                            if (vessel.guys[w].tile.shield == 1) {
                                vessel.guys[w].skillslist[2] += .000003
                            }
                        }
                    }
                    if (this.guys[t].tile.helm == 1) {
                        this.boosts[3] += (this.guys[t].stats[3] * this.guys[t].skillslist[3] * Math.min(this.guys[t].helmPower + (this.UI.systems[3].sto + this.UI.systems[3].fed), this.guys[t].helmPower + this.UI.systems[3].max))
                        this.UI.systems[3].fed += 0 //this.guys[t].energy
                        for (let w = 0; w < vessel.guys.length; w++) {
                            if (vessel.guys[w].tile.helm == 1) {
                                vessel.guys[w].skillslist[3] += .000003
                            }
                        }
                    }
                    if (this.guys[t].tile.oxygen == 1) {
                        this.boosts[4] += (this.guys[t].stats[4] * this.guys[t].skillslist[4] * Math.min((this.UI.systems[4].sto + this.UI.systems[4].fed), this.UI.systems[4].max))
                        this.UI.systems[4].fed += 0 //this.guys[t].energy

                        for (let w = 0; w < vessel.guys.length; w++) {
                            if (vessel.guys[w].tile.oxygen == 1) {
                                if (vessel.ac < 95) {
                                    vessel.guys[w].skillslist[4] += .00051
                                }
                            }
                        }


                    }
                    if (this.guys[t].tile.security == 1) {
                        this.boosts[5] += (this.guys[t].stats[5] * this.guys[t].skillslist[5] * Math.min((this.UI.systems[5].sto + this.UI.systems[5].fed), this.UI.systems[5].max))
                        this.UI.systems[5].fed += 0 //this.guys[t].energy

                        for (let w = 0; w < vessel.guys.length; w++) {
                            if (vessel.guys[w].tile.security == 1) {
                                vessel.guys[w].skillslist[5] += .00003
                            }
                        }


                    }
                    if (this.guys[t].tile.engine == 1) {
                        this.boosts[6] += (this.guys[t].stats[6] * this.guys[t].skillslist[6] * Math.min((this.UI.systems[6].sto + this.UI.systems[6].fed), this.UI.systems[6].max))
                        this.UI.systems[6].fed += 0 //this.guys[t].energy
                        for (let w = 0; w < vessel.guys.length; w++) {
                            if (vessel.guys[w].tile.engine == 1) {
                                vessel.guys[w].skillslist[6] += .000003
                            }
                        }
                    } else if (this.guys[t].tile.special == 1) {
                        this.boosts[7] += (this.guys[t].stats[7] * this.guys[t].skillslist[7] * Math.min((this.UI.systems[7].sto + this.UI.systems[7].fed), this.UI.systems[7].max))
                        this.UI.systems[7].fed += 0 //this.guys[t].energy
                        for (let w = 0; w < vessel.guys.length; w++) {
                            if (vessel.guys[w].tile.special == 1) {
                                vessel.guys[w].skillslist[7] += .00003
                            }
                        }
                    }
                    if (this.guys[t].tile.empty == 1) {
                        this.boosts[8] += (this.guys[t].stats[8] * this.guys[t].skillslist[8] * Math.min((this.UI.systems[8].sto + this.UI.systems[8].fed), this.UI.systems[8].max))
                        this.UI.systems[8].fed += 0 //this.guys[t].energy
                        for (let w = 0; w < vessel.guys.length; w++) {
                            if (vessel.guys[w].tile.empty == 1) {
                                vessel.guys[w].skillslist[8] += .00003
                            }
                        }

                    }

                    if (this.guys[t].stretch == 1) {

                        for (let q = 0; q < this.guys[t].tiles.length; q++) {

                            // this.guys[t].draw()
                            this.guys[t].tiles[q].integrity += (1 / 6) * this.guys[t].repair
                            if (this.guys[t].tiles[q].integrity > 100) {
                                this.guys[t].tiles[q].integrity = 100
                            }
                            // //////////////////////////////////////////////////////////////console.log(this.guys[t].tiles[q])
                            if (this.guys[t].tiles[q].medbay == 1) {
                                if (this.UI.systems[0].sto + this.UI.systems[0].fed > 0) {
                                    this.guys[t].health += (1 / 6) * Math.sqrt((this.UI.systems[0].sto + this.UI.systems[0].fed)) * .33
                                }
                                if (this.guys[t].health > this.guys[t].maxhealth) {
                                    this.guys[t].health = this.guys[t].maxhealth
                                }
                                this.boosts[0] += (1 / 6) * (this.guys[t].stats[0] * this.guys[t].skillslist[0] * Math.min((this.UI.systems[0].sto + this.UI.systems[0].fed), this.UI.systems[0].max))
                                this.UI.systems[0].fed += (1 / 6) * 0 //this.guys[t].energy
                                for (let w = 0; w < vessel.guys.length; w++) {
                                    if (vessel.guys[w].tile.medbay == 1) {
                                        vessel.guys[w].skillslist[0] += (1 / 6) * .000003
                                    }
                                }
                            } else if (this.guys[t].tiles[q].weapon == 1) {
                                this.boosts[1] += (1 / 6) * (this.guys[t].stats[1] * this.guys[t].skillslist[1] * Math.min(this.guys[t].weaponPower + (this.UI.systems[1].sto + this.UI.systems[1].fed), this.guys[t].weaponPower + this.UI.systems[1].max))
                                this.UI.systems[1].fed += (1 / 6) * 0 //this.guys[t].energy
                                for (let w = 0; w < vessel.guys.length; w++) {
                                    if (vessel.guys[w].tile.weapon == 1) {
                                        vessel.guys[w].skillslist[1] += (1 / 6) * .000003
                                    }
                                }
                            } else if (this.guys[t].tiles[q].shield == 1) {
                                this.boosts[2] += (1 / 6) * (this.guys[t].stats[2] * this.guys[t].skillslist[2] * Math.min(this.guys[t].shieldPower + (this.UI.systems[2].sto + this.UI.systems[2].fed), this.guys[t].shieldPower + this.UI.systems[2].max))
                                this.UI.systems[2].fed += (1 / 6) * 0 //this.guys[t].energy
                                for (let w = 0; w < vessel.guys.length; w++) {
                                    if (vessel.guys[w].tile.shield == 1) {
                                        vessel.guys[w].skillslist[2] += (1 / 6) * .000003
                                    }
                                }
                            } else if (this.guys[t].tiles[q].helm == 1) {
                                this.boosts[3] += (1 / 6) * (this.guys[t].stats[3] * this.guys[t].skillslist[3] * Math.min(this.guys[t].helmPower + (this.UI.systems[3].sto + this.UI.systems[3].fed), this.guys[t].helmPower + this.UI.systems[3].max))
                                this.UI.systems[3].fed += (1 / 6) * 0 //this.guys[t].energy
                                for (let w = 0; w < vessel.guys.length; w++) {
                                    if (vessel.guys[w].tile.helm == 1) {
                                        vessel.guys[w].skillslist[3] += (1 / 6) * .000003
                                    }
                                }
                            } else if (this.guys[t].tiles[q].oxygen == 1) {
                                this.boosts[4] += (1 / 6) * (this.guys[t].stats[4] * this.guys[t].skillslist[4] * Math.min((this.UI.systems[4].sto + this.UI.systems[4].fed), this.UI.systems[4].max))
                                this.UI.systems[4].fed += (1 / 6) * 0 //this.guys[t].energy

                                for (let w = 0; w < vessel.guys.length; w++) {
                                    if (vessel.guys[w].tile.oxygen == 1) {
                                        if (vessel.ac < 95) {
                                            vessel.guys[w].skillslist[4] += (1 / 6) * .00051
                                        }
                                    }
                                }


                            } else if (this.guys[t].tiles[q].security == 1) {
                                this.boosts[5] += (1 / 6) * (this.guys[t].stats[5] * this.guys[t].skillslist[5] * Math.min((this.UI.systems[5].sto + this.UI.systems[5].fed), this.UI.systems[5].max))
                                this.UI.systems[5].fed += (1 / 6) * 0 //this.guys[t].energy

                                for (let w = 0; w < vessel.guys.length; w++) {
                                    if (vessel.guys[w].tile.security == 1) {
                                        vessel.guys[w].skillslist[5] += (1 / 6) * .00003
                                    }
                                }


                            } else if (this.guys[t].tiles[q].engine == 1) {
                                this.boosts[6] += (1 / 6) * (this.guys[t].stats[6] * this.guys[t].skillslist[6] * Math.min((this.UI.systems[6].sto + this.UI.systems[6].fed), this.UI.systems[6].max))
                                this.UI.systems[6].fed += (1 / 6) * 0 //this.guys[t].energy
                                for (let w = 0; w < vessel.guys.length; w++) {
                                    if (vessel.guys[w].tile.engine == 1) {
                                        vessel.guys[w].skillslist[6] += (1 / 6) * .000003
                                    }
                                }
                            } else if (this.guys[t].tiles[q].special == 1) {
                                this.boosts[7] += (1 / 6) * (this.guys[t].stats[7] * this.guys[t].skillslist[7] * Math.min((this.UI.systems[7].sto + this.UI.systems[7].fed), this.UI.systems[7].max))
                                this.UI.systems[7].fed += (1 / 6) * 0 //this.guys[t].energy
                                for (let w = 0; w < vessel.guys.length; w++) {
                                    if (vessel.guys[w].tile.special == 1) {
                                        vessel.guys[w].skillslist[7] += (1 / 6) * .00003
                                    }
                                }
                            } else if (this.guys[t].tiles[q].empty == 1) {
                                this.boosts[8] += (1 / 6) * (this.guys[t].stats[8] * this.guys[t].skillslist[8] * Math.min((this.UI.systems[8].sto + this.UI.systems[8].fed), this.UI.systems[8].max))
                                this.UI.systems[8].fed += (1 / 6) * 0 //this.guys[t].energy
                                for (let w = 0; w < vessel.guys.length; w++) {
                                    if (vessel.guys[w].tile.empty == 1) {
                                        vessel.guys[w].skillslist[8] += (1 / 6) * .00003
                                    }
                                }

                            }


                        }
                    }

                }



                // let rooms = ["medbay", "weapon", "shield", "helm", "oxygen", "security", "engine", "special", "empty"]
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
                    if (this.hash["weapon"].integrity >= 100 * (1 - (1 / (11 - this.UI.systems[1].max)))) {
                        //////////////////////////////////////////////////////////////console.log( this.boosts[1])////////////////console.log( this.boosts[1])
                        if (this.weapons[w].temp == -2) {

                            this.weapons[w].charge += Math.sqrt(this.boosts[1])
                        }
                    }
                }

                if (this.hash["shield"].integrity >= 100 * (1 - (1 / (11 - this.UI.systems[2].max)))) {
                    this.shield.charge += Math.sqrt(this.boosts[2])
                }

                let oat = 0
                if (this.UI.systems[4].sto + this.UI.systems[4].fed < 1 || !(this.hash["oxygen"].integrity >= 100 * (1 - (1 / (11 - this.UI.systems[4].max))))) {
                    oat = 1
                } else if (this.hash["oxygen"].integrity >= 100 * (1 - (1 / (11 - this.UI.systems[4].max)))) {
                    for (let t = 0; t < this.blocks.length; t++) {
                        for (let k = 0; k < this.blocks[t].length; k++) {
                            this.blocks[t][k].air += (this.boosts[4] + this.UI.systems[4].sto + this.UI.systems[4].fed) / 10
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
                            if (this.UI.systems[5].sto >= 7) {
                                this.blocks[t][k].fire -= ((100 - this.blocks[t][k].fire) / 50) * .5
                            } else {
                                this.blocks[t][k].fire -= (100 - this.blocks[t][k].fire) / 50
                            }
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
                                if (n.length > 0) {
                                    sum /= n.length * 2
                                    fsum /= n.length * 2
                                } else {
                                    sum = this.blocks[t][k].air
                                    fsum = this.blocks[t][k].fire
                                }
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

                for (let t = 0; t < this.doors.length; t++) {
                    this.doors[t].draw()
                }


            }

            if (start == 0) {


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
                if (grid[x - 1][y].type == node.type || (node.type2 == -1 && grid[x - 1][y].type2 == -1)) {
                    if (grid[x - 1][y].marked == 1) {
                        ret.push(grid[x - 1][y]);
                    }
                }
            }

            // East
            if (grid[x + 1] && grid[x + 1][y]) {
                if (grid[x + 1][y].type == node.type || (node.type2 == -1 && grid[x + 1][y].type2 == -1)) {
                    if (grid[x + 1][y].marked == 1) {
                        ret.push(grid[x + 1][y]);
                    }
                }
            }

            // South
            if (grid[x] && grid[x][y - 1]) {
                if (grid[x][y - 1].type == node.type || (node.type2 == -1 && grid[x][y - 1].type2 == -1)) {
                    if (grid[x][y - 1].marked == 1) {
                        ret.push(grid[x][y - 1]);
                    }
                }
            }

            // North
            if (grid[x] && grid[x][y + 1]) {
                if (grid[x][y + 1].type == node.type || (node.type2 == -1 && grid[x][y + 1].type2 == -1)) {
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
                    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////console.log(countNodes)
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
                    // //   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////console.log("wallSet had countNodes!")
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

    let zz = 38
    class EnemyShip {
        constructor(type, level) {
            this.wepDrawCount = 0
            this.copies = []
            this.angle = 0
            this.now = Date.now()
            this.type = type
            // zz++
            if (mode == 1) {
                this.level = level
            } else {
                let link = new LineOP(stars.stars[0].body, stars.stars[stars.to].body)
                if (stars.collapsed == 1) {
                    this.level = Math.floor(link.hypotenuse() / 7.5)
                } else {
                    this.level = Math.floor(link.hypotenuse() / 150)
                }
            }
            if (mode == 1) {
                this.loot = Math.floor((Math.floor(((Math.sqrt(this.level * 2) * 3.33) + (this.level * .33) + 1.4)) * .5) + (Math.floor(((Math.sqrt(this.level * 2) * 3.33) + (this.level * .33) + 1.4)) * .5 * Math.random()))       //Math.floor((this.level * 1.11) + (Math.random() * (Math.sqrt(this.level) * 3.33)) + 1.4) //2 //1  //sqrt on cap is new //1.11 -> 3.33 because past level 10 you will get less but before 10 you get more
            } else {
                // let link = new LineOP(stars.stars[0].body, stars.stars[vessel.star].body)
                // if(stars.collapsed == 1){
                //     this.loot = Math.floor(link.hypotenuse() / 6) + 1
                // }else{
                //     this.loot = Math.floor(link.hypotenuse() / 120) + 1
                // }
                this.loot = Math.floor((Math.floor(((Math.sqrt(this.level * 2) * 3.33) + (this.level * .33) + 1.4)) * .5) + (Math.floor(((Math.sqrt(this.level * 2) * 3.33) + (this.level * .33) + 1.4)) * .5 * Math.random()))       //Math.floor((this.level * 1.11) + (Math.random() * (Math.sqrt(this.level) * 3.33)) + 1.4) //2 //1  //sqrt on cap is new //1.11 -> 3.33 because past level 10 you will get less but before 10 you get more

            }
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
            if (this.mode == 1) {
                this.bombs = 6 + Math.floor(this.level / 3) //5    /2
            } else {
                this.bombs = 4 + Math.floor(this.level / 4) //5    /2
            }
            this.fuel = 10
            this.shield = new Shields()
            this.shield.state = this.UI.systems[2].max
            this.hull = 25 + (this.level * 6) //7
            this.maxhull = this.hull
            this.body = new Circle(1000 + 400, 360 + 150, 100, "red")
            this.deathbox = new RectangleR(this.body.x - this.body.radius, this.body.y - (this.body.radius * .2), this.body.radius * 2, this.body.radius * .4, "#FF000044")
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
                    } else if (this.type == 2) {
                        let keys = Object.keys(enemyship3[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship3[t][k][keys[f]]
                        }
                    } else if (this.type == 3) {
                        let keys = Object.keys(enemyship4[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship4[t][k][keys[f]]
                        }
                    } else if (this.type == 4) {
                        let keys = Object.keys(enemyship5[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship5[t][k][keys[f]]
                        }
                    } else if (this.type == 5) {
                        let keys = Object.keys(enemyship6[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship6[t][k][keys[f]]
                        }
                    } else if (this.type == 6) {
                        let keys = Object.keys(enemyship7[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship7[t][k][keys[f]]
                        }
                    } else if (this.type == 7) {
                        let keys = Object.keys(enemyship8[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship8[t][k][keys[f]]
                        }
                    } else if (this.type == 8) {
                        let keys = Object.keys(enemyship9[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship9[t][k][keys[f]]
                        }
                    } else if (this.type == 9) {
                        let keys = Object.keys(enemyship10[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship10[t][k][keys[f]]
                        }
                    } else if (this.type == 10) {
                        let keys = Object.keys(enemyship11[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship11[t][k][keys[f]]
                        }
                    } else if (this.type == 11) {
                        let keys = Object.keys(enemyship12[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship12[t][k][keys[f]]
                        }
                    } else if (this.type == 12) {
                        let keys = Object.keys(enemyship13[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship13[t][k][keys[f]]
                        }
                    } else if (this.type == 13) {
                        let keys = Object.keys(enemyship14[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship14[t][k][keys[f]]
                        }
                    } else if (this.type == 14) {
                        let keys = Object.keys(enemyship15[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship15[t][k][keys[f]]
                        }
                    } else if (this.type == 15) {
                        let keys = Object.keys(enemyship16[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship16[t][k][keys[f]]
                        }
                    } else if (this.type == 16) {
                        let keys = Object.keys(enemyship17[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship17[t][k][keys[f]]
                        }
                    } else if (this.type == 17) {
                        let keys = Object.keys(enemyship18[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship18[t][k][keys[f]]
                        }
                    } else if (this.type == 18) {
                        let keys = Object.keys(enemyship19[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship19[t][k][keys[f]]
                        }
                    } else if (this.type == 19) {
                        let keys = Object.keys(enemyship20[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship20[t][k][keys[f]]
                        }
                    } else if (this.type == 20) {
                        let keys = Object.keys(enemyship21[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship21[t][k][keys[f]]
                        }
                    } else if (this.type == 21) {
                        let keys = Object.keys(enemyship22[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship22[t][k][keys[f]]
                        }
                    } else if (this.type == 22) {
                        let keys = Object.keys(enemyship23[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship23[t][k][keys[f]]
                        }
                    } else if (this.type == 23) {
                        let keys = Object.keys(enemyship24[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship24[t][k][keys[f]]
                        }
                    } else if (this.type == 24) {
                        let keys = Object.keys(enemyship25[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship25[t][k][keys[f]]
                        }
                    } else if (this.type == 25) {
                        let keys = Object.keys(enemyship26[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship26[t][k][keys[f]]
                        }
                    } else if (this.type == 26) {
                        let keys = Object.keys(enemyship27[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship27[t][k][keys[f]]
                        }
                    } else if (this.type == 27) {
                        let keys = Object.keys(enemyship28[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship28[t][k][keys[f]]
                        }
                    } else if (this.type == 28) {
                        let keys = Object.keys(enemyship29[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship29[t][k][keys[f]]
                        }
                    } else if (this.type == 29) {
                        let keys = Object.keys(enemyship30[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship30[t][k][keys[f]]
                        }
                    } else if (this.type == 30) {
                        let keys = Object.keys(enemyship31[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship31[t][k][keys[f]]
                        }
                    } else if (this.type == 31) {
                        let keys = Object.keys(enemyship32[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship32[t][k][keys[f]]
                        }
                    } else if (this.type == 32) {
                        let keys = Object.keys(enemyship33[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship33[t][k][keys[f]]
                        }
                    } else if (this.type == 33) {
                        let keys = Object.keys(enemyship34[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship34[t][k][keys[f]]
                        }
                    } else if (this.type == 34) {
                        let keys = Object.keys(enemyship35[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship35[t][k][keys[f]]
                        }
                    } else if (this.type == 35) {
                        let keys = Object.keys(enemyship36[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship36[t][k][keys[f]]
                        }
                    } else if (this.type == 36) {
                        let keys = Object.keys(enemyship37[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship37[t][k][keys[f]]
                        }
                    } else if (this.type == 37) {
                        let keys = Object.keys(enemyship38[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship38[t][k][keys[f]]
                        }
                    } else if (this.type == 38) {
                        let keys = Object.keys(enemyship39[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship39[t][k][keys[f]]
                        }
                    } else if (this.type == 39) {
                        let keys = Object.keys(enemyship40[t][k])
                        for (let f = 0; f < keys.length; f++) {
                            tile[keys[f]] = enemyship40[t][k][keys[f]]
                        }
                    }
                    tile.x += 400
                    tile.y += 150
                    tile.air = 100
                    tile.fire = 100
                    tile.newfire = 100
                    tile.onFire = 0
                    tile.xmom = (Math.random() - .5) * 30
                    tile.ymom = (Math.random() - .5) * 30
                    tile.color = "#8888FF44"
                    if (tile.engine > 0 || tile.medbay > 0 || tile.oxygen > 0 || tile.weapon > 0 || tile.helm > 0 || tile.security > 0 || tile.special > 0 || tile.empty > 0 || tile.doorway > 0 || tile.shield > 0 || tile.empty > 0) {
                        tile.marked = 1
                        //////////////////////////////////////////////////////////////console.log("w")
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
                        if (tile.shield > 0) {
                            tile.color = "#00ffff44"
                        }
                        if (tile.weapon > 0) {
                            tile.color = "#ff00FF44"
                            if (this.type == 7) {
                                tile.shield = 1
                                tile.color = "#AA88FF44"
                            }
                        }
                        if (tile.helm > 0) {
                            tile.color = "#ffff0044"
                        }
                        if (tile.security > 0) {
                            tile.color = "#88888844"
                            if (this.type == 3 || this.type == 6 || this.type == 10) {
                                tile.medbay = 1
                                tile.color = "#88FF8844"
                            }
                        }
                        if (tile.engine > 0) {
                            tile.color = "#FFAA0044"
                        }
                        if (tile.special > 0) {
                            tile.color = "#aa00ff44"
                        }
                    } else {
                        tile.marked = -1
                        //////////////////////////////////////////////////////////////console.log("w")
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
                    this.doors.push(new Door(enemyship1doors[t].body.x + 400, enemyship1doors[t].body.y + 150))
                }
            } else if (this.type == 1) {
                for (let t = 0; t < enemyship2doors.length; t++) {
                    this.doors.push(new Door(enemyship2doors[t].body.x + 400, enemyship2doors[t].body.y + 150))
                }
            } else if (this.type == 2) {
                for (let t = 0; t < enemyship3doors.length; t++) {
                    this.doors.push(new Door(enemyship3doors[t].body.x + 400, enemyship3doors[t].body.y + 150))
                }
            } else if (this.type == 3) {
                for (let t = 0; t < enemyship4doors.length; t++) {
                    this.doors.push(new Door(enemyship4doors[t].body.x + 400, enemyship4doors[t].body.y + 150))
                }
            } else if (this.type == 4) {
                for (let t = 0; t < enemyship5doors.length; t++) {
                    this.doors.push(new Door(enemyship5doors[t].body.x + 400, enemyship5doors[t].body.y + 150))
                }
            } else if (this.type == 5) {
                for (let t = 0; t < enemyship6doors.length; t++) {
                    this.doors.push(new Door(enemyship6doors[t].body.x + 400, enemyship6doors[t].body.y + 150))
                }
            } else if (this.type == 6) {
                for (let t = 0; t < enemyship7doors.length; t++) {
                    this.doors.push(new Door(enemyship7doors[t].body.x + 400, enemyship7doors[t].body.y + 150))
                }
            } else if (this.type == 7) {
                for (let t = 0; t < enemyship8doors.length; t++) {
                    this.doors.push(new Door(enemyship8doors[t].body.x + 400, enemyship8doors[t].body.y + 150))
                }
            } else if (this.type == 8) {
                for (let t = 0; t < enemyship9doors.length; t++) {
                    this.doors.push(new Door(enemyship9doors[t].body.x + 400, enemyship9doors[t].body.y + 150))
                }
            } else if (this.type == 9) {
                for (let t = 0; t < enemyship10doors.length; t++) {
                    this.doors.push(new Door(enemyship10doors[t].body.x + 400, enemyship10doors[t].body.y + 150))
                }
            } else if (this.type == 10) {
                for (let t = 0; t < enemyship11doors.length; t++) {
                    this.doors.push(new Door(enemyship11doors[t].body.x + 400, enemyship11doors[t].body.y + 150))
                }
            } else if (this.type == 11) {
                for (let t = 0; t < enemyship12doors.length; t++) {
                    this.doors.push(new Door(enemyship12doors[t].body.x + 400, enemyship12doors[t].body.y + 150))
                }
            } else if (this.type == 12) {
                for (let t = 0; t < enemyship13doors.length; t++) {
                    this.doors.push(new Door(enemyship13doors[t].body.x + 400, enemyship13doors[t].body.y + 150))
                }
            } else if (this.type == 13) {
                for (let t = 0; t < enemyship14doors.length; t++) {
                    this.doors.push(new Door(enemyship14doors[t].body.x + 400, enemyship14doors[t].body.y + 150))
                }
            } else if (this.type == 14) {
                for (let t = 0; t < enemyship15doors.length; t++) {
                    this.doors.push(new Door(enemyship15doors[t].body.x + 400, enemyship15doors[t].body.y + 150))
                }
            } else if (this.type == 15) {
                for (let t = 0; t < enemyship16doors.length; t++) {
                    this.doors.push(new Door(enemyship16doors[t].body.x + 400, enemyship16doors[t].body.y + 150))
                }
            } else if (this.type == 16) {
                for (let t = 0; t < enemyship17doors.length; t++) {
                    this.doors.push(new Door(enemyship17doors[t].body.x + 400, enemyship17doors[t].body.y + 150))
                }
            } else if (this.type == 17) {
                for (let t = 0; t < enemyship18doors.length; t++) {
                    this.doors.push(new Door(enemyship18doors[t].body.x + 400, enemyship18doors[t].body.y + 150))
                }
            } else if (this.type == 18) {
                for (let t = 0; t < enemyship19doors.length; t++) {
                    this.doors.push(new Door(enemyship19doors[t].body.x + 400, enemyship19doors[t].body.y + 150))
                }
            } else if (this.type == 19) {
                for (let t = 0; t < enemyship20doors.length; t++) {
                    this.doors.push(new Door(enemyship20doors[t].body.x + 400, enemyship20doors[t].body.y + 150))
                }
            } else if (this.type == 20) {
                for (let t = 0; t < enemyship21doors.length; t++) {
                    this.doors.push(new Door(enemyship21doors[t].body.x + 400, enemyship21doors[t].body.y + 150))
                }
            } else if (this.type == 21) {
                for (let t = 0; t < enemyship22doors.length; t++) {
                    this.doors.push(new Door(enemyship22doors[t].body.x + 400, enemyship22doors[t].body.y + 150))
                }
            } else if (this.type == 22) {
                for (let t = 0; t < enemyship23doors.length; t++) {
                    this.doors.push(new Door(enemyship23doors[t].body.x + 400, enemyship23doors[t].body.y + 150))
                }
            } else if (this.type == 23) {
                for (let t = 0; t < enemyship24doors.length; t++) {
                    this.doors.push(new Door(enemyship24doors[t].body.x + 400, enemyship24doors[t].body.y + 150))
                }
            } else if (this.type == 24) {
                for (let t = 0; t < enemyship25doors.length; t++) {
                    this.doors.push(new Door(enemyship25doors[t].body.x + 400, enemyship25doors[t].body.y + 150))
                }
            } else if (this.type == 25) {
                for (let t = 0; t < enemyship26doors.length; t++) {
                    this.doors.push(new Door(enemyship26doors[t].body.x + 400, enemyship26doors[t].body.y + 150))
                }
            } else if (this.type == 26) {
                for (let t = 0; t < enemyship27doors.length; t++) {
                    this.doors.push(new Door(enemyship27doors[t].body.x + 400, enemyship27doors[t].body.y + 150))
                }
            } else if (this.type == 27) {
                for (let t = 0; t < enemyship28doors.length; t++) {
                    this.doors.push(new Door(enemyship28doors[t].body.x + 400, enemyship28doors[t].body.y + 150))
                }
            } else if (this.type == 28) {
                for (let t = 0; t < enemyship29doors.length; t++) {
                    this.doors.push(new Door(enemyship29doors[t].body.x + 400, enemyship29doors[t].body.y + 150))
                }
            } else if (this.type == 29) {
                for (let t = 0; t < enemyship30doors.length; t++) {
                    this.doors.push(new Door(enemyship30doors[t].body.x + 400, enemyship30doors[t].body.y + 150))
                }
            } else if (this.type == 30) {
                for (let t = 0; t < enemyship31doors.length; t++) {
                    this.doors.push(new Door(enemyship31doors[t].body.x + 400, enemyship31doors[t].body.y + 150))
                }
            } else if (this.type == 31) {
                for (let t = 0; t < enemyship32doors.length; t++) {
                    this.doors.push(new Door(enemyship32doors[t].body.x + 400, enemyship32doors[t].body.y + 150))
                }
            } else if (this.type == 32) {
                for (let t = 0; t < enemyship33doors.length; t++) {
                    this.doors.push(new Door(enemyship33doors[t].body.x + 400, enemyship33doors[t].body.y + 150))
                }
            } else if (this.type == 33) {
                for (let t = 0; t < enemyship34doors.length; t++) {
                    this.doors.push(new Door(enemyship34doors[t].body.x + 400, enemyship34doors[t].body.y + 150))
                }
            } else if (this.type == 34) {
                for (let t = 0; t < enemyship35doors.length; t++) {
                    this.doors.push(new Door(enemyship35doors[t].body.x + 400, enemyship35doors[t].body.y + 150))
                }
            } else if (this.type == 35) {
                for (let t = 0; t < enemyship36doors.length; t++) {
                    this.doors.push(new Door(enemyship36doors[t].body.x + 400, enemyship36doors[t].body.y + 150))
                }
            } else if (this.type == 36) {
                for (let t = 0; t < enemyship37doors.length; t++) {
                    this.doors.push(new Door(enemyship37doors[t].body.x + 400, enemyship37doors[t].body.y + 150))
                }
            } else if (this.type == 37) {
                for (let t = 0; t < enemyship38doors.length; t++) {
                    this.doors.push(new Door(enemyship38doors[t].body.x + 400, enemyship38doors[t].body.y + 150))
                }
            } else if (this.type == 38) {
                for (let t = 0; t < enemyship39doors.length; t++) {
                    this.doors.push(new Door(enemyship39doors[t].body.x + 400, enemyship39doors[t].body.y + 150))
                }
            } else if (this.type == 39) {
                for (let t = 0; t < enemyship40doors.length; t++) {
                    this.doors.push(new Door(enemyship40doors[t].body.x + 400, enemyship40doors[t].body.y + 150))
                }
            }
            this.weapons = []

            this.state = 0
        }
        dodgeRate() {
            if (this.first == 0) {
                return 0
            }
            let dodgerate = (Math.sqrt(this.boosts[3]) + Math.sqrt(this.boosts[6])) * 4

            if (this.hash['engine'].integrity < 100 * (1 - (1 / (11 - this.UI.systems[6].max)))) {
                dodgerate = 0
            }
            if (this.hash['helm'].integrity < 100 * (1 - (1 / (11 - this.UI.systems[3].max)))) {
                dodgerate = 0
            }
            if (this.boosts[3] == 0 || this.boosts[6] == 0) {
                dodgerate *= .5
            }

            if (this.boosts[3] == 0 && this.boosts[6] == 0) {
                dodgerate *= 0
            }

            if (dodgerate == 0) {
                return 1
            } else {
                return Math.max(.90 - (dodgerate / 80), .1)
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

            //////////////////////////////////////////////////////////console.log(ret.length)
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
            if (this.first == 0) {
                this.now = Date.now()
            }


            for (let t = 0; t < this.UI.systems.length; t++) {
                this.UI.systems[t].fed = 0
            }

            let rooms = ["medbay", "weapon", "shield", "helm", "oxygen", "security", "engine", "special", "empty"]
            // 0 medbay, 1 weapons, 2 shield, 3 helm, 4 oxygen, 5 security, 6 engine, 7 special, 8 empty
            if (this.guys) {
                for (let t = 0; t < this.guys.length; t++) {
                    if (this.guys[t].hostile == 1) {
                        continue
                    }
                    for (let k = 0; k < rooms.length; k++) {
                        if (this.guys[t].tile[rooms[k]] == 1) {
                            this.UI.systems[k].fed += this.guys[t].energy
                        }
                    }
                }
            }


            if (Date.now() - this.now > (1000 * 3 * 60) + (this.level * 1000)) {
                if (enemy.guys.length > 0 && enemy.hull > 0) {
                    vessel.fuel--
                    start = 1
                    enemy = new EnemyShip(Math.floor(Math.random() * 40), this.level + 1)
                }
            } else {
                canvas_context.fillStyle = "white"
                canvas_context.font = "10px comic sans ms"
                if (enemy.guys) {
                    if (enemy.guys.length > 0 && enemy.hull > 0) {
                        if (mode == 1) {
                            canvas_context.fillText("Powering leap: " + Math.floor(((1000 * 3 * 60 + (this.level * 1000)) - Math.floor(Date.now() - this.now)) / 1000), 1450, 50)

                        } else {
                            canvas_context.fillText("Powering leap: " + Math.floor(((1000 * 3 * 60 + (this.level * 1000)) - Math.floor(Date.now() - this.now)) / 1000) + ` Ship Level: ${this.level}`, 1450, 50)

                        }
                    }
                }
            }



            this.hrat = this.hull / this.maxhull
            this.healthbar = new RectangleR(1440, 10, 250, 10, "transparent")
            if (vessel.UI.systems[5].sto > 0) {
                this.healthbar.draw()
                canvas_context.drawImage(shiphealth, 0, 0, 250 * this.hrat, 10, this.healthbar.x, 10, 250 * this.hrat, 10)

            }


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
                this.supratiles = []
                for (let t = 0; t < this.blocks.length; t++) {
                    for (let k = 0; k < this.blocks[t].length; k++) {
                        if (this.blocks[t][k].marked == 1) {
                            this.blocks[t][k].walkable = true
                            //////////////////////////////////////////////////////////////console.log("r")
                            tiles.push(this.blocks[t][k])
                            this.supratiles.push(this.blocks[t][k])
                        }
                    }
                }

                this.supratiles.sort((a, b) => a.x > b.x ? -1 : 1)
                for (let t = 0; t < this.supratiles.length; t++) {
                    if (this.supratiles[t].x == this.supratiles[0].x) {
                        this.supratiles[t].right = 1
                    }
                }
                this.wepmax = 0
                this.supratiles.sort((a, b) => a.x > b.x ? 1 : -1)
                for (let t = 0; t < this.supratiles.length; t++) {
                    if (this.supratiles[t].x == this.supratiles[0].x) {
                        this.supratiles[t].weaponized = 1
                        this.wepmax += 2
                        continue
                    }
                    // let n = enemy.neighbors(this.supratiles[t])
                    let wet = 0
                    for (let k = 0; k < this.supratiles.length; k++) {
                        if (k == t) {
                            continue
                        }
                        if (this.supratiles[k].x == this.supratiles[t].x - this.supratiles[t].width) {
                            if (this.supratiles[k].y == this.supratiles[t].y) {
                                wet = 1
                            }
                        }
                    }
                    if (wet == 0) {
                        this.supratiles[t].weaponized = 1
                        this.wepmax += 2
                    }
                }


                if (this.level < 8) {
                    this.guys = [new Guy(tiles[1])]
                } else if (this.level < 16) {
                    this.guys = [new Guy(tiles[1]), new Guy(tiles[2])]
                } else if (this.level < 24) {
                    this.guys = [new Guy(tiles[1]), new Guy(tiles[2]), new Guy(tiles[3])]
                } else if (this.level < 32) {
                    this.guys = [new Guy(tiles[1]), new Guy(tiles[2]), new Guy(tiles[3]), new Guy(tiles[4])]
                } else {
                    this.guys = [new Guy(tiles[1]), new Guy(tiles[2]), new Guy(tiles[3]), new Guy(tiles[4]), new Guy(tiles[5])]
                }

                if (this.level <= 3) {

                } else {
                    if (Math.random() < this.level / 50) {
                        this.guys.push(new Guy(tiles[0]))
                    }
                    if (Math.random() < this.level / 100) {
                        this.guys.push(new Guy(tiles[6]))
                    }
                    if (Math.random() < this.level / 150) {
                        this.guys.push(new Guy(tiles[7]))
                    }
                    if (Math.random() < this.level / 200) {
                        this.guys.push(new Guy(tiles[8]))
                    }
                }

                // this.guys = [new Guy(tiles[10]), new Guy(tiles[12]), new Guy(tiles[14]), new Guy(tiles[16]), new Guy(tiles[20]), new Guy(tiles[11]), new Guy(tiles[13]), new Guy(tiles[15]), new Guy(tiles[17])]
                // this.guys = [new Guy(tiles[10]), new Guy(tiles[12]), new Guy(tiles[14])]

                if (stars.stars[vessel.star].shop == 1) {
                    this.guys = []
                    this.shop = 1
                }


                // this.guys = []
                this.first = 1
                this.weapons = []
                if (this.level < 7) {

                    //enemjump
                    // //////////////console.log(this.wepmax)
                    // for(let  k = 0;k<this.wepmax;k++){
                    // this.weapons.push(new Weapon(k))
                    // }
                    let wep1 = new Weapon(0)
                    let wep2 = new Weapon(-1)
                    let wep3 = new Weapon(-1)
                    let wep4 = new Weapon(-1)
                    // let wep5 = new Weapon(4)
                    this.weapons.push(wep1)
                    this.weapons.push(wep2)
                    this.weapons.push(wep3)
                    this.weapons.push(wep4)
                    // this.weapons.push(wep5)
                    // this.weapons.push(new Weapon(16))
                    // this.weapons.push(new Weapon(19))
                    // this.weapons.push(new Weapon(33))
                    // let wep1 = new Weapon(0)
                    // let wep2 = new Weapon(-1)
                    // let wep3 = new Weapon(-1)
                    // let wep4 = new Weapon(-1)
                    // // let wep5 = new Weapon(5)
                    // this.weapons.push(wep1)
                    // this.weapons.push(wep2)
                    // this.weapons.push(wep3)
                    // this.weapons.push(wep4)
                    // this.weapons.push(wep5)
                    if (Math.random() < .05) {
                        // let wep5 = new Weapon(Math.floor(Math.random() * 38))
                        let wep5 = new Weapon(0)
                        this.weapons.push(wep5)
                    }
                    if (Math.random() < .01) {
                        let wep5 = new Weapon(10 + Math.floor(Math.random() * 2))
                        this.weapons.push(wep5)
                    }
                } else if (this.level < 14) {

                    let wep1 = new Weapon(0)
                    let wep2 = new Weapon(1)
                    let wep3 = new Weapon(-1)
                    let wep4 = new Weapon(-1)
                    this.weapons.push(wep1)
                    this.weapons.push(wep2)
                    this.weapons.push(wep3)
                    this.weapons.push(wep4)
                    if (Math.random() < .1) {
                        let wep5 = new Weapon(Math.floor(Math.random() * 38))
                        this.weapons.push(wep5)
                    }
                    if (Math.random() < .05) {
                        let wep5 = new Weapon(10 + Math.floor(Math.random() * 2))
                        this.weapons.push(wep5)
                    }
                } else if (this.level < 21) {

                    let wep1 = new Weapon(0)
                    let wep2 = new Weapon(1)
                    let wep3 = new Weapon(0)
                    let wep4 = new Weapon(-1)
                    this.weapons.push(wep1)
                    this.weapons.push(wep2)
                    this.weapons.push(wep3)
                    this.weapons.push(wep4)
                    if (Math.random() < .5) {
                        let wep5 = new Weapon(Math.floor(Math.random() * 38))
                        this.weapons.push(wep5)
                    }
                    if (Math.random() < .05) {
                        let wep5 = new Weapon(10 + Math.floor(Math.random() * 2))
                        this.weapons.push(wep5)
                    }
                } else if (this.level < 29) {

                    let wep1 = new Weapon(2)
                    let wep2 = new Weapon(1)
                    let wep3 = new Weapon(0)
                    let wep4 = new Weapon(Math.floor(Math.random() * 2))
                    this.weapons.push(wep1)
                    this.weapons.push(wep2)
                    this.weapons.push(wep3)
                    this.weapons.push(wep4)
                    if (Math.random() < .9) {
                        if (this.wepmax > this.weapons.length) {
                            let wep5 = new Weapon(Math.floor(Math.random() * 38))
                            this.weapons.push(wep5)
                        }
                    }
                    if (Math.random() < this.level / 100) {
                        if (this.wepmax > this.weapons.length) {
                            let wep5 = new Weapon(Math.floor(Math.random() * 38))
                            this.weapons.push(wep5)
                        }
                    }
                    if (Math.random() < this.level / 500) {
                        if (this.wepmax > this.weapons.length) {
                            let wep5 = new Weapon(Math.floor(Math.random() * 38))
                            this.weapons.push(wep5)
                        }
                    }
                    if (Math.random() < .05) {
                        if (this.wepmax > this.weapons.length) {
                            let wep5 = new Weapon(10 + Math.floor(Math.random() * 2))
                            this.weapons.push(wep5)
                        }
                    }
                } else {
                    let wep1 = new Weapon(2)
                    let wep2 = new Weapon(1)
                    let wep3 = new Weapon(2)
                    let wep4 = new Weapon(Math.floor(Math.random() * 3))
                    this.weapons.push(wep1)
                    this.weapons.push(wep2)
                    this.weapons.push(wep3)
                    this.weapons.push(wep4)
                    if (Math.random() < .9) {
                        if (this.wepmax > this.weapons.length) {
                            let wep5 = new Weapon(Math.floor(Math.random() * 38))
                            this.weapons.push(wep5)
                        }
                    }
                    if (Math.random() < this.level / 100) {
                        if (this.wepmax > this.weapons.length) {
                            let wep5 = new Weapon(Math.floor(Math.random() * 38))
                            this.weapons.push(wep5)
                        }
                    }
                    if (Math.random() < this.level / 500) {
                        if (this.wepmax > this.weapons.length) {
                            let wep5 = new Weapon(Math.floor(Math.random() * 38))
                            this.weapons.push(wep5)
                        }
                    }
                    if (Math.random() < this.level / 500) {
                        if (this.wepmax > this.weapons.length) {
                            let wep5 = new Weapon(Math.floor(Math.random() * 38))
                            this.weapons.push(wep5)
                        }
                    }
                    if (Math.random() < this.level / 500) {
                        if (this.wepmax > this.weapons.length) {
                            let wep5 = new Weapon(Math.floor(Math.random() * 38))
                            this.weapons.push(wep5)
                        }
                    }
                    if (Math.random() < this.level / 500) {
                        if (this.wepmax > this.weapons.length) {
                            let wep5 = new Weapon(Math.floor(Math.random() * 38))
                            this.weapons.push(wep5)
                        }
                    }

                    if (Math.random() < .05) {
                        if (this.wepmax > this.weapons.length) {
                            let wep5 = new Weapon(10 + Math.floor(Math.random() * 2))
                            this.weapons.push(wep5)
                        }
                    }
                }
            }
            // this.body.draw()


            // canvas_context.drawImage(ship1img, 0, 0, 512, 512, this.blocks[0][0].x, this.blocks[0][0].y, 512, 512)

            this.wepDrawCount = 0
            for (let t = 0; t < this.blocks.length; t++) {
                for (let k = 0; k < this.blocks[t].length; k++) {
                    if (this.blocks[t][k].marked == 1) {
                        this.blocks[t][k].subdraw()
                        this.blocks[t][k].draw()
                    }
                    if (this.hull <= 0) {
                        this.shield.state = 0
                        // ////////////////////////////////////////////////////////console.log(this.blocks)
                        // return

                        if (this.crewless != 1) {
                            this.guys = []
                            this.blocks[t][k].move()
                        }
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
                // if(this.guys[t].hostile == 1) {
                //     continue
                // }
                if (this.guys[t].health <= 0 && this.guys[t].energydeathtag <= 0) {
                    this.guys[t].tile.walkable = true
                    if (this.guys[t].stretch == 1) {
                        for (let k = 0; k < this.guys[t].tiles.length; k++) {
                            this.guys[t].tiles[k].walkable = true
                        }
                    }
                    this.guys.splice(t, 1)
                } else {
                    this.guys[t].energydeathtag--
                }
            }
            this.boosts = [0, 0, 0, 0, 0, 0, 0, 0, 0]
            //0 medbay, 1 weapons, 2 shield, 3 helm, 4 oxygen, 5 security, 6 engine, 7 special, 8 empty
            for (let t = 0; t < this.guys.length; t++) {
                if (this.guys[t].hostile == 1) {
                    // this.guys[t].tile.integrity += this.guys[t].repair
                    // if (this.guys[t].tile.integrity > 100) {
                    //     this.guys[t].tile.integrity = 100
                    // }
                    // //////////////////////////////////////////////////////////////console.log(this.guys[t].tile)
                    if (this.guys[t].tile.medbay == 1) {
                        if (this.UI.systems[0].sto + this.UI.systems[0].fed > 0) {
                            this.guys[t].health += Math.sqrt((this.UI.systems[0].sto + this.UI.systems[0].fed)) * .33
                        }
                        if (this.guys[t].health > this.guys[t].maxhealth) {
                            this.guys[t].health = this.guys[t].maxhealth
                        }
                        // this.boosts[0] += (this.guys[t].stats[0] * this.guys[t].skillslist[0] * Math.min((this.UI.systems[0].sto + this.UI.systems[0].fed), this.UI.systems[0].max))
                        // this.UI.systems[0].fed += 0 //this.guys[t].energy
                    }
                } else {

                    this.guys[t].tile.integrity += this.guys[t].repair
                    if (this.guys[t].tile.integrity > 100) {
                        this.guys[t].tile.integrity = 100
                    }
                    // //////////////////////////////////////////////////////////////console.log(this.guys[t].tile)
                    if (this.guys[t].tile.medbay == 1) {
                        if (this.UI.systems[0].sto + this.UI.systems[0].fed > 0) {
                            this.guys[t].health += Math.sqrt((this.UI.systems[0].sto + this.UI.systems[0].fed)) * .33
                        }
                        if (this.guys[t].health > this.guys[t].maxhealth) {
                            this.guys[t].health = this.guys[t].maxhealth
                        }
                        this.boosts[0] += (this.guys[t].stats[0] * this.guys[t].skillslist[0] * Math.min((this.UI.systems[0].sto + this.UI.systems[0].fed), this.UI.systems[0].max))
                        this.UI.systems[0].fed += 0 //this.guys[t].energy
                    }
                }
                // this.guys[t].draw()


                if (this.guys[t].hostile == 1) {
                    continue
                }


                if (this.guys[t].tile.weapon == 1) {
                    // this.UI.systems[1].demand = 1
                    this.boosts[1] += (this.guys[t].stats[1] * this.guys[t].skillslist[1] * Math.min(this.guys[t].weaponPower + (this.UI.systems[1].sto + this.UI.systems[1].fed), this.guys[t].weaponPower + this.UI.systems[1].max))
                    this.UI.systems[1].fed += 0 //this.guys[t].energy
                } if (this.guys[t].tile.shield == 1) {
                    // this.UI.systems[2].demand = 1
                    this.boosts[2] += (this.guys[t].stats[2] * this.guys[t].skillslist[2] * Math.min(this.guys[t].shieldPower + (this.UI.systems[2].sto + this.UI.systems[2].fed), this.guys[t].shieldPower + this.UI.systems[2].max))
                    this.UI.systems[2].fed += 0 //this.guys[t].energy
                } if (this.guys[t].tile.helm == 1) {
                    this.boosts[3] += (this.guys[t].stats[3] * this.guys[t].skillslist[3] * Math.min(this.guys[t].helmPower + (this.UI.systems[3].sto + this.UI.systems[3].fed), this.guys[t].helmPower + this.UI.systems[3].max))
                    this.UI.systems[3].fed += 0 //this.guys[t].energy
                } if (this.guys[t].tile.oxygen == 1) {
                    this.boosts[4] += (this.guys[t].stats[4] * this.guys[t].skillslist[4] * Math.min((this.UI.systems[4].sto + this.UI.systems[4].fed), this.UI.systems[4].max))
                    this.UI.systems[4].fed += 0 //this.guys[t].energy
                } if (this.guys[t].tile.security == 1) {
                    this.boosts[5] += (this.guys[t].stats[5] * this.guys[t].skillslist[5] * Math.min((this.UI.systems[5].sto + this.UI.systems[5].fed), this.UI.systems[5].max))
                    this.UI.systems[5].fed += 0 //this.guys[t].energy
                } if (this.guys[t].tile.engine == 1) {
                    this.boosts[6] += (this.guys[t].stats[6] * this.guys[t].skillslist[6] * Math.min((this.UI.systems[6].sto + this.UI.systems[6].fed), this.UI.systems[6].max))
                    this.UI.systems[6].fed += 0 //this.guys[t].energy
                } if (this.guys[t].tile.special == 1) {
                    this.boosts[7] += (this.guys[t].stats[7] * this.guys[t].skillslist[7] * Math.min((this.UI.systems[7].sto + this.UI.systems[7].fed), this.UI.systems[7].max))
                    this.UI.systems[7].fed += 0 //this.guys[t].energy
                } if (this.guys[t].tile.empty == 1) {
                    this.boosts[8] += (this.guys[t].stats[8] * this.guys[t].skillslist[8] * Math.min((this.UI.systems[8].sto + this.UI.systems[8].fed), this.UI.systems[8].max))
                    this.UI.systems[8].fed += 0 //this.guys[t].energy
                }


                if (this.guys[t].stretch == 1) {

                    for (let q = 0; q < this.guys[t].tiles.length; q++) {
                        if (this.guys[t].hostile == 1) {
                            continue
                        }

                        // this.guys[t].draw()
                        this.guys[t].tiles[q].integrity += (1 / 6) * this.guys[t].repair
                        if (this.guys[t].tiles[q].integrity > 100) {
                            this.guys[t].tiles[q].integrity = 100
                        }
                        // //////////////////////////////////////////////////////////////console.log(this.guys[t].tiles[q])
                        if (this.guys[t].tiles[q].medbay == 1) {
                            if (this.UI.systems[0].sto + this.UI.systems[0].fed > 0) {
                                this.guys[t].health += (1 / 6) * Math.sqrt((this.UI.systems[0].sto + this.UI.systems[0].fed)) * .33
                            }
                            if (this.guys[t].health > this.guys[t].maxhealth) {
                                this.guys[t].health = this.guys[t].maxhealth
                            }
                            this.boosts[0] += (1 / 6) * (this.guys[t].stats[0] * this.guys[t].skillslist[0] * Math.min((this.UI.systems[0].sto + this.UI.systems[0].fed), this.UI.systems[0].max))
                            this.UI.systems[0].fed += (1 / 6) * 0 //this.guys[t].energy
                            for (let w = 0; w < vessel.guys.length; w++) {
                                if (vessel.guys[w].tile.medbay == 1) {
                                    vessel.guys[w].skillslist[0] += (1 / 6) * .000003
                                }
                            }
                        } else if (this.guys[t].tiles[q].weapon == 1) {
                            this.boosts[1] += (1 / 6) * (this.guys[t].stats[1] * this.guys[t].skillslist[1] * Math.min(this.guys[t].weaponPower + (this.UI.systems[1].sto + this.UI.systems[1].fed), this.guys[t].weaponPower + this.UI.systems[1].max))
                            this.UI.systems[1].fed += (1 / 6) * 0 //this.guys[t].energy
                            for (let w = 0; w < vessel.guys.length; w++) {
                                if (vessel.guys[w].tile.weapon == 1) {
                                    vessel.guys[w].skillslist[1] += (1 / 6) * .000003
                                }
                            }
                        } else if (this.guys[t].tiles[q].shield == 1) {
                            this.boosts[2] += (1 / 6) * (this.guys[t].stats[2] * this.guys[t].skillslist[2] * Math.min(this.guys[t].shieldPower + (this.UI.systems[2].sto + this.UI.systems[2].fed), this.guys[t].shieldPower + this.UI.systems[2].max))
                            this.UI.systems[2].fed += (1 / 6) * 0 //this.guys[t].energy
                            for (let w = 0; w < vessel.guys.length; w++) {
                                if (vessel.guys[w].tile.shield == 1) {
                                    vessel.guys[w].skillslist[2] += (1 / 6) * .000003
                                }
                            }
                        } else if (this.guys[t].tiles[q].helm == 1) {
                            this.boosts[3] += (1 / 6) * (this.guys[t].stats[3] * this.guys[t].skillslist[3] * Math.min(this.guys[t].helmPower + (this.UI.systems[3].sto + this.UI.systems[3].fed), this.guys[t].helmPower + this.UI.systems[3].max))
                            this.UI.systems[3].fed += (1 / 6) * 0 //this.guys[t].energy
                            for (let w = 0; w < vessel.guys.length; w++) {
                                if (vessel.guys[w].tile.helm == 1) {
                                    vessel.guys[w].skillslist[3] += (1 / 6) * .000003
                                }
                            }
                        } else if (this.guys[t].tiles[q].oxygen == 1) {
                            this.boosts[4] += (1 / 6) * (this.guys[t].stats[4] * this.guys[t].skillslist[4] * Math.min((this.UI.systems[4].sto + this.UI.systems[4].fed), this.UI.systems[4].max))
                            this.UI.systems[4].fed += (1 / 6) * 0 //this.guys[t].energy

                            for (let w = 0; w < vessel.guys.length; w++) {
                                if (vessel.guys[w].tile.oxygen == 1) {
                                    if (vessel.ac < 95) {
                                        vessel.guys[w].skillslist[4] += (1 / 6) * .00051
                                    }
                                }
                            }


                        } else if (this.guys[t].tiles[q].security == 1) {
                            this.boosts[5] += (1 / 6) * (this.guys[t].stats[5] * this.guys[t].skillslist[5] * Math.min((this.UI.systems[5].sto + this.UI.systems[5].fed), this.UI.systems[5].max))
                            this.UI.systems[5].fed += (1 / 6) * 0 //this.guys[t].energy

                            for (let w = 0; w < vessel.guys.length; w++) {
                                if (vessel.guys[w].tile.security == 1) {
                                    vessel.guys[w].skillslist[5] += (1 / 6) * .00003
                                }
                            }


                        } else if (this.guys[t].tiles[q].engine == 1) {
                            this.boosts[6] += (1 / 6) * (this.guys[t].stats[6] * this.guys[t].skillslist[6] * Math.min((this.UI.systems[6].sto + this.UI.systems[6].fed), this.UI.systems[6].max))
                            this.UI.systems[6].fed += (1 / 6) * 0 //this.guys[t].energy
                            if (vessel.guys) {
                                for (let w = 0; w < vessel.guys.length; w++) {
                                    if (vessel.guys[w].tile.engine == 1) {
                                        vessel.guys[w].skillslist[6] += (1 / 6) * .000003
                                    }
                                }
                            }
                        } else if (this.guys[t].tiles[q].special == 1) {
                            this.boosts[7] += (1 / 6) * (this.guys[t].stats[7] * this.guys[t].skillslist[7] * Math.min((this.UI.systems[7].sto + this.UI.systems[7].fed), this.UI.systems[7].max))
                            this.UI.systems[7].fed += (1 / 6) * 0 //this.guys[t].energy
                            for (let w = 0; w < vessel.guys.length; w++) {
                                if (vessel.guys[w].tile.special == 1) {
                                    vessel.guys[w].skillslist[7] += (1 / 6) * .00003
                                }
                            }
                        } else if (this.guys[t].tiles[q].empty == 1) {
                            this.boosts[8] += (1 / 6) * (this.guys[t].stats[8] * this.guys[t].skillslist[8] * Math.min((this.UI.systems[8].sto + this.UI.systems[8].fed), this.UI.systems[8].max))
                            this.UI.systems[8].fed += (1 / 6) * 0 //this.guys[t].energy
                            for (let w = 0; w < vessel.guys.length; w++) {
                                if (vessel.guys[w].tile.empty == 1) {
                                    vessel.guys[w].skillslist[8] += (1 / 6) * .00003
                                }
                            }

                        }


                    }
                }

                //worm king code ^^^
            }
            ////////////////////////////////////////////////////////////console.log(this.boosts[2])

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

            // this.energy.balance()
            for (let r = 0; r < rooms.length; r++) {
                if (this.hash[rooms[r]].occupied == 0) {
                    // ////////////////////////////////////////////////////console.log("hit")
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
                    if (rooms[r] == "medbay") {
                        // if(this.energy.power > 0 && this.UI.systems[0].sto <  this.UI.systems[0].max){
                        //     // this.UI.systems[r].sto++
                        //     continue
                        // }
                        if (this.UI.systems[r].sto == 1) {
                            continue
                        }
                    }
                    // if (rooms[r] == "medbay") {

                    // }else{
                    this.UI.systems[r].sto--
                    if (this.UI.systems[r].sto <= 0) {
                        this.UI.systems[r].sto = 0
                    }
                    // }
                } else {
                    // if (rooms[r] == "medbay") {

                    if (rooms[r] == "medbay") {
                        if (this.energy.power > 0 && this.UI.systems[0].sto < this.UI.systems[0].max) {
                            this.UI.systems[r].sto++
                            // //////////////////////////////////////console.log(this.energy.power,this.UI.systems[0].sto, this.UI.systems[0].max )
                            // //////////////////////////////////////console.log("med")
                            continue
                        }
                        if (this.UI.systems[r].sto == 1) {
                            // //////////////////////////////////////console.log(this.energy.power,this.UI.systems[0].sto, this.UI.systems[0].max )
                            continue
                        }
                    }

                    if (this.energy.power > 0) {
                        this.UI.systems[r].sto++
                        if (this.UI.systems[r].sto >= this.UI.systems[r].max) {
                            this.UI.systems[r].sto = this.UI.systems[r].max
                        }
                    }
                    // }
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
            if (this.guys.length > 0) {
                if (this.guys[this.guys.length - 1].health / this.guys[this.guys.length - 1].maxhealth < .75) {
                    this.medflag = 1
                }
            }


            let c = 0
            // for (let t = 0; t < enemy.guys.length; t++) {
            //     if (enemy.guys[t].hostile == 1) {
            //         c++
            //     }
            // }

            this.energy.balance()
            if (this.medflag == 0) {
                if (this.UI.systems[0].sto + this.UI.systems[0].fed > 0) {
                    // this.UI.systems[0].sto--
                    if (this.UI.systems[0].sto <= 0) {
                        this.UI.systems[0].sto = 0
                    }
                }
            } else {
                if (this.UI.systems[0].sto < this.UI.systems[0].max) {
                    if (this.energy.power > 0) {
                        this.UI.systems[0].sto++
                    }
                }
            }
            if (Math.random() < .14) { //.14


                if (Math.random() < .1) {
                    this.guys.sort((a, b) => a.health / a.maxhealth <= b.health / b.maxhealth ? 1 : -1)
                    enemy.guys.sort((a, b) => a.selected > b.selected ? -1 : 1)
                }


                for (let t = 0; t < this.guys.length; t++) {

                    if (this.guys[t].hostile == 1 && this.guys[t].mindControlled != 1) {
                        c++
                    }
                    if (this.guys[t].path.length > 1 || this.guys[t].hostile == 1) {
                        continue
                    }
                    if (this.guys[t].tile.special == 1) {
                        this.guys[t].teleflag = 1
                        intruder.play()
                    }
                    if (this.guys[t].cound > 0) { //.14 connect
                        // ////////////////////////////////////////////////console.log(t)
                        continue
                    }
                    this.wet = 0
                    for (let b = 0; b < this.blocks.length; b++) {
                        for (let k = 0; k < this.blocks[b].length; k++) {
                            if (this.blocks[b][k].holed == 1 || this.blocks[b][k].onFire == 1) {
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
                    let specialcheck = 0
                    for (let b = 0; b < this.blocks.length; b++) {
                        for (let k = 0; k < this.blocks[b].length; k++) {
                            if (this.blocks[b][k].marked == 1) {
                                bc++
                                ac += this.blocks[b][k].air
                                if (this.blocks[b][k].special == 1) {
                                    specialcheck = 1
                                }
                            }
                        }
                    }
                    ac /= bc
                    this.ac = ac

                    // ////////////////////////////////////////////////////////console.log(ac)
                    for (let b = 0; b < this.blocks.length; b++) {
                        for (let k = 0; k < this.blocks[b].length; k++) {
                            if (this.wet == 1) {
                                if (this.blocks[b][k].holed == 1) {
                                    hole = 1
                                    holecount++
                                    //         tiles.push(this.blocks[b][k])
                                }
                                if (this.blocks[b][k].onFire == 1) {
                                    fire = 1
                                    firecount++
                                    //         tiles.push(this.blocks[b][k])
                                }
                            }
                            // } else {
                            if (this.blocks[b][k].marked == 1) {
                                tiles.push(this.blocks[b][k])
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

                    if (this.guys[t].health < this.guys[t].maxhealth * .25) {
                        if (this.UI.systems[0].sto < this.UI.systems[0].max) {
                            if (this.energy.power > 0) {
                                this.UI.systems[0].sto++
                                // this.UI.systems[0].sto = this.UI.systems[0].demand
                            }
                        }

                        let priorities = ['medbay', 'medbay', 'medbay', 'medbay', 'medbay', 'medbay', 'medbay', 'medbay', 'medbay', 'medbay', 'medbay', 'medbay', 'medbay', 'medbay', 'medbay']
                        tile = tiles[Math.floor(Math.random() * tiles.length)]
                        let j = 0
                        let kiles = []
                        for (let g = 0; g < this.guys.length; g++) {
                            if (t == g) {
                                continue
                            } else {
                                kiles.push(this.guys[g].tile)
                            }
                            if (this.guys[g].stretch == 1) {
                                for (let ghy = 0; ghy < this.guys[g].tiles.length - 1; ghy++) {
                                    kiles.push(this.guys[g].tiles[ghy])
                                }
                            }
                        }
                        if (this.guys[this.guys.length - 1].health / this.guys[this.guys.length - 1].maxhealth < .75 && this.guys.length > 1) {
                            priorities[this.guys.length - 1] = 'medbay'
                        }

                        while ((tile[priorities[t - c]] != 1 || kiles.includes(tile))) {
                            j++
                            if (j > 1000) {
                                break
                            }
                            tile = tiles[Math.floor(Math.random() * tiles.length)]
                        }
                        if (this.guys[t].tile[priorities[t - c]] == 1) {
                            tile = this.guys[t].tile
                            if (priorities[t - c] != "holed") {
                                let index = rooms.indexOf(priorities[t])
                                if (index >= 0) {
                                    if (this.UI.systems[index].demand + this.UI.systems[index].fed < this.UI.systems[index].max) {
                                        if (this.energy.power > 0) {
                                            this.UI.systems[index].demand++
                                            this.UI.systems[index].sto = this.UI.systems[index].demand
                                        }
                                    }
                                }
                            }
                        }

                    } else {
                        // if (this.medflag == 0) {
                        //     if (this.UI.systems[0].demand > 0) {
                        //         this.UI.systems[0].demand--
                        //     }
                        // }
                        // //////////////////////////////console.log(this.guys)
                        if (fire == 1) {
                            if (this.state == 0) {
                                let priorities = ['weapon', 'shield', 'helm', 'weapon', 'shield', 'engine', 'helm', 'weapon', 'shield', 'engine', 'helm']
                                for (let h = 0; h < (firecount * 2); h++) { //*2?
                                    priorities.unshift("onFire")
                                }
                                if (this.guys[this.guys.length - 1].health / this.guys[this.guys.length - 1].maxhealth < .75 && this.guys.length > 1) {
                                    priorities[this.guys.length - 1] = 'medbay'
                                }
                                // ////////////////////////////////////////////////console.log(priorities, t)

                                tile = tiles[Math.floor(Math.random() * tiles.length)]
                                let j = 0
                                let kiles = []
                                for (let g = 0; g < this.guys.length; g++) {
                                    if (t == g) {
                                        continue
                                    } else {
                                        kiles.push(this.guys[g].tile)
                                    }
                                    if (this.guys[g].stretch == 1) {
                                        for (let ghy = 0; ghy < this.guys[g].tiles.length - 1; ghy++) {
                                            kiles.push(this.guys[g].tiles[ghy])
                                        }
                                    }
                                }

                                while ((tile[priorities[t - c]] != 1 || kiles.includes(tile))) {
                                    j++
                                    if (j > 1000) {
                                        break
                                    }
                                    tile = tiles[Math.floor(Math.random() * tiles.length)]
                                }
                                if (this.guys[t].tile[priorities[t - c]] == 1) {
                                    tile = this.guys[t].tile
                                    if (priorities[t - c] != "onFire") {
                                        let index = rooms.indexOf(priorities[t])
                                        if (index >= 0) {
                                            if (this.UI.systems[index].demand + this.UI.systems[index].fed < this.UI.systems[index].max) {
                                                if (this.energy.power > 0) {
                                                    ////////////////////////////////////////////////////console.log(priorities[t])
                                                    this.UI.systems[index].demand++
                                                    this.UI.systems[index].sto = this.UI.systems[index].demand
                                                }
                                            }
                                        }
                                    }
                                }


                            } else if (this.state == 1) {

                                let priorities = ["oxygen", 'weapon', 'shield', 'helm', 'weapon', 'shield', 'engine', 'helm', 'weapon', 'shield', 'engine', 'helm']
                                for (let h = 0; h < (firecount * 2); h++) { //*2?
                                    priorities.unshift("onFire")
                                }
                                if (this.guys[this.guys.length - 1].health / this.guys[this.guys.length - 1].maxhealth < .75 && this.guys.length > 1) {
                                    priorities[this.guys.length - 1] = 'medbay'
                                }
                                tile = tiles[Math.floor(Math.random() * tiles.length)]
                                let j = 0
                                let kiles = []
                                for (let g = 0; g < this.guys.length; g++) {
                                    if (t == g) {
                                        continue
                                    } else {
                                        kiles.push(this.guys[g].tile)
                                    }
                                    if (this.guys[g].stretch == 1) {
                                        for (let ghy = 0; ghy < this.guys[g].tiles.length - 1; ghy++) {
                                            kiles.push(this.guys[g].tiles[ghy])
                                        }
                                    }
                                }

                                while ((tile[priorities[t - c]] != 1 || kiles.includes(tile))) {
                                    j++
                                    if (j > 1000) {
                                        break
                                    }
                                    tile = tiles[Math.floor(Math.random() * tiles.length)]
                                }

                                if (this.guys[t].tile[priorities[t - c]] == 1) {
                                    tile = this.guys[t].tile
                                    if (priorities[t - c] != "onFire") {
                                        let index = rooms.indexOf(priorities[t])
                                        if (index >= 0) {
                                            if (this.UI.systems[index].demand + this.UI.systems[index].fed < this.UI.systems[index].max) {
                                                if (this.energy.power > 0) {
                                                    ////////////////////////////////////////////////////console.log(priorities[t])
                                                    this.UI.systems[index].demand++
                                                    this.UI.systems[index].sto = this.UI.systems[index].demand
                                                }
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
                                if (this.guys[this.guys.length - 1].health / this.guys[this.guys.length - 1].maxhealth < .75 && this.guys.length > 1) {
                                    priorities[this.guys.length - 1] = 'medbay'
                                }
                                tile = tiles[Math.floor(Math.random() * tiles.length)]
                                let j = 0
                                let kiles = []
                                for (let g = 0; g < this.guys.length; g++) {
                                    if (t == g) {
                                        continue
                                    } else {
                                        kiles.push(this.guys[g].tile)
                                    }
                                    if (this.guys[g].stretch == 1) {
                                        for (let ghy = 0; ghy < this.guys[g].tiles.length - 1; ghy++) {
                                            kiles.push(this.guys[g].tiles[ghy])
                                        }
                                    }
                                }

                                while ((tile[priorities[t - c]] != 1 || kiles.includes(tile))) {
                                    j++
                                    if (j > 1000) {
                                        break
                                    }
                                    tile = tiles[Math.floor(Math.random() * tiles.length)]
                                }
                                if (this.guys[t].tile[priorities[t - c]] == 1) {
                                    tile = this.guys[t].tile
                                    if (priorities[t - c] != "holed") {
                                        let index = rooms.indexOf(priorities[t])
                                        if (index >= 0) {
                                            if (this.UI.systems[index].demand + this.UI.systems[index].fed < this.UI.systems[index].max) {
                                                if (this.energy.power > 0) {
                                                    ////////////////////////////////////////////////////console.log(priorities[t])
                                                    this.UI.systems[index].demand++
                                                    this.UI.systems[index].sto = this.UI.systems[index].demand
                                                }
                                            }
                                        }
                                    }
                                }


                            } else if (this.state == 1) {

                                let priorities = ["oxygen", 'weapon', 'shield', 'helm', 'weapon', 'shield', 'engine', 'helm', 'weapon', 'shield', 'engine', 'helm']
                                for (let h = 0; h < holecount; h++) {
                                    priorities.unshift("holed")
                                }
                                if (this.guys[this.guys.length - 1].health / this.guys[this.guys.length - 1].maxhealth < .75 && this.guys.length > 1) {
                                    priorities[this.guys.length - 1] = 'medbay'
                                }
                                tile = tiles[Math.floor(Math.random() * tiles.length)]
                                let j = 0
                                let kiles = []
                                for (let g = 0; g < this.guys.length; g++) {
                                    if (t == g) {
                                        continue
                                    } else {
                                        kiles.push(this.guys[g].tile)
                                    }
                                    if (this.guys[g].stretch == 1) {
                                        for (let ghy = 0; ghy < this.guys[g].tiles.length - 1; ghy++) {
                                            kiles.push(this.guys[g].tiles[ghy])
                                        }
                                    }
                                }

                                while ((tile[priorities[t - c]] != 1 || kiles.includes(tile))) {
                                    j++
                                    if (j > 1000) {
                                        break
                                    }
                                    tile = tiles[Math.floor(Math.random() * tiles.length)]
                                }

                                if (this.guys[t].tile[priorities[t - c]] == 1) {
                                    tile = this.guys[t].tile
                                    if (priorities[t - c] != "holed") {
                                        let index = rooms.indexOf(priorities[t])
                                        if (index >= 0) {
                                            if (this.UI.systems[index].demand + this.UI.systems[index].fed < this.UI.systems[index].max) {
                                                if (this.energy.power > 0) {
                                                    ////////////////////////////////////////////////////console.log(priorities[t])
                                                    this.UI.systems[index].demand++
                                                    this.UI.systems[index].sto = this.UI.systems[index].demand
                                                }
                                            }
                                        }
                                    }
                                }

                            }

                        } else {

                            if (this.state == 0) {
                                let priorities = ['weapon', 'shield', 'helm', 'weapon', "shield", 'engine', 'helm', 'weapon', 'shield', 'engine', 'helm']
                                if (specialcheck == 1) {
                                    if (this.guys.length >= 2) {
                                        if (Math.random() < .01) {
                                            priorities.unshift('special')
                                        }
                                    }
                                }
                                tile = tiles[Math.floor(Math.random() * tiles.length)]
                                let j = 0
                                let kiles = []
                                for (let g = 0; g < this.guys.length; g++) {
                                    if (t == g) {
                                        continue
                                    } else {
                                        kiles.push(this.guys[g].tile)
                                    }
                                    if (this.guys[g].stretch == 1) {
                                        for (let ghy = 0; ghy < this.guys[g].tiles.length - 1; ghy++) {
                                            kiles.push(this.guys[g].tiles[ghy])
                                        }
                                    }
                                }

                                if (this.guys[this.guys.length - 1].health / this.guys[this.guys.length - 1].maxhealth < .75 && this.guys.length > 1) {
                                    priorities[this.guys.length - 1] = 'medbay'
                                }
                                while ((tile[priorities[t - c]] != 1 || kiles.includes(tile))) {
                                    j++
                                    if (j > 1000) {
                                        break
                                    }
                                    tile = tiles[Math.floor(Math.random() * tiles.length)]
                                }
                                ////////////////////////////////////////////////////console.log(kiles, !kiles.includes(tile))
                                if (this.guys[t].tile[priorities[t - c]] == 1) {
                                    tile = this.guys[t].tile
                                    if (priorities[t - c] != "holed") {
                                        let index = rooms.indexOf(priorities[t])
                                        if (index >= 0) {
                                            if (this.UI.systems[index].demand + this.UI.systems[index].fed < this.UI.systems[index].max) {
                                                if (this.energy.power > 0) {
                                                    ////////////////////////////////////////////////////console.log(this.UI.systems[index].max, this.energy.power)
                                                    this.UI.systems[index].demand++
                                                    this.UI.systems[index].sto = this.UI.systems[index].demand
                                                }
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
                                    if (t == g) {
                                        continue
                                    } else {
                                        kiles.push(this.guys[g].tile)
                                    }
                                    if (this.guys[g].stretch == 1) {
                                        for (let ghy = 0; ghy < this.guys[g].tiles.length - 1; ghy++) {
                                            kiles.push(this.guys[g].tiles[ghy])
                                        }
                                    }
                                }

                                if (this.guys[this.guys.length - 1].health / this.guys[this.guys.length - 1].maxhealth < .75 && this.guys.length > 1) {
                                    priorities[this.guys.length - 1] = 'medbay'
                                }


                                while ((tile[priorities[t - c]] != 1 || kiles.includes(tile))) {
                                    j++
                                    if (j > 1000) {
                                        break
                                    }
                                    tile = tiles[Math.floor(Math.random() * tiles.length)]
                                }

                                if (this.guys[t].tile[priorities[t - c]] == 1) {
                                    tile = this.guys[t].tile
                                    if (priorities[t - c] != "holed") {
                                        let index = rooms.indexOf(priorities[t])
                                        if (index >= 0) {
                                            if (this.UI.systems[index].demand + this.UI.systems[index].fed < this.UI.systems[index].max) {
                                                if (this.energy.power > 0) {
                                                    ////////////////////////////////////////////////////console.log(priorities[t])
                                                    this.UI.systems[index].demand++
                                                    this.UI.systems[index].sto = this.UI.systems[index].demand
                                                }
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }

                    if (this.guys[t].fighting < 0) {
                        if (this.guys[t].cound > 0) {
                            this.guys[t].turning = 1
                            this.guys[t].flagpath = astar.search(this, this.guys[t].tile, tile)
                            this.guys[t].stogo = tile
                            if (this.guys[t].flagpath.length > 1) {
                                this.guys[t].selected = 0
                            }
                        } else {
                            if (this.guys[t].fighting < 0) {
                                this.guys[t].path = astar.search(enemy, this.guys[t].tile, tile)
                            }
                        }
                        this.guys[t].stogo = tile
                    }
                }
            }


            for (let t = 0; t < this.guys.length; t++) {
                this.guys[t].fight()
            }


            for (let t = 0; t < this.guys.length; t++) {
                this.guys[t].draw()
            }

            for (let t = 0; t < this.guys.length; t++) {
                this.guys[t].bodydraw()
            }


            for (let w = 0; w < this.weapons.length; w++) {
                if (this.hash["weapon"].integrity >= 100 * (1 - (1 / (11 - this.UI.systems[1].max)))) {
                    //////////////////////////////////////////////////////////////console.log( this.boosts[1])
                    if (this.weapons[w].temp == -2) {

                        this.weapons[w].charge += Math.sqrt(this.boosts[1]) // * 5
                    }
                }
            }

            if (this.hash["shield"].integrity >= 100 * (1 - (1 / (11 - this.UI.systems[2].max)))) {
                this.shield.charge += Math.sqrt(this.boosts[2])
            }




            let oat = 0
            if (this.UI.systems[4].sto + this.UI.systems[4].fed < 1 || !(this.hash["oxygen"].integrity >= 100 * (1 - (1 / (11 - this.UI.systems[4].max))))) {
                oat = 1
            } else if (this.hash["oxygen"].integrity >= 100 * (1 - (1 / (11 - this.UI.systems[4].max)))) {
                for (let t = 0; t < this.blocks.length; t++) {
                    for (let k = 0; k < this.blocks[t].length; k++) {
                        this.blocks[t][k].air += (this.boosts[4] + this.UI.systems[4].sto + this.UI.systems[4].fed) / 10
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
                        if (this.UI.systems[5].sto >= 7) {
                            this.blocks[t][k].fire -= ((100 - this.blocks[t][k].fire) / 50) * .5
                        } else {
                            this.blocks[t][k].fire -= (100 - this.blocks[t][k].fire) / 50
                        }
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
                            if (n.length > 0) {
                                sum /= n.length * 2
                                fsum /= n.length * 2
                            } else {
                                sum = this.blocks[t][k].air
                                fsum = this.blocks[t][k].fire
                            }
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
            if (this.ondeath != 1 || this.shop == 1) {

                if (this.shop == 1) {
                    this.crewless = 1
                    this.shop = 2
                }
                this.ondeath--
                if (this.hull <= 0) {
                    if (this.ondeath < 0) {
                        this.ondeath = 14
                    }
                }
                let ret = 0
                for (let r = 0; r < vessel.guys.length; r++) {
                    if (vessel.guys[r].hostile == 1) {
                        ret++
                    }
                }
                if (ret == 0) {
                    if (this.guys.length <= 0) {
                        if (this.ondeath < 0) {
                            this.ondeath = 14
                            this.crewless = 1
                        }
                    }
                }
                if (this.ondeath > 0) {
                    if (this.crewless != 1) {
                        let link = new Circle(this.body.x, this.body.y, 100 * ((14 - this.ondeath) / 8), "#FF000088")
                        link.draw()
                        let link2 = new Circle(this.body.x, this.body.y, 80 * ((14 - this.ondeath) / 8.05), "#FFAA0088")
                        link2.draw()
                        let link3 = new Circle(this.body.x, this.body.y, 60 * ((14 - this.ondeath) / 8.1), "#FFFF0088")
                        link3.draw()
                    }
                }
            } else {
                if (typeof this.spread == "undefined") {
                    this.spread = 0

                    if (mode == 1) {



                        this.loot = Math.floor((Math.floor(((Math.sqrt(this.level * 2) * 3.33) + (this.level * .33) + 1.4)) * .5) + (Math.floor(((Math.sqrt(this.level * 2) * 3.33) + (this.level * .33) + 1.4)) * .5 * Math.random()))       //Math.floor((this.level * 1.11) + (Math.random() * (Math.sqrt(this.level) * 3.33)) + 1.4) //2 //1  //sqrt on cap is new //1.11 -> 3.33 because past level 10 you will get less but before 10 you get more
                    } else {
                        // let link = new LineOP(stars.stars[0].body, stars.stars[vessel.star].body)
                        // this.loot = Math.floor(link.hypotenuse() / 120) + 1



                        this.loot = Math.floor((Math.floor(((Math.sqrt(this.level * 2) * 3.33) + (this.level * .33) + 1.4)) * .5) + (Math.floor(((Math.sqrt(this.level * 2) * 3.33) + (this.level * .33) + 1.4)) * .5 * Math.random()))       //Math.floor((this.level * 1.11) + (Math.random() * (Math.sqrt(this.level) * 3.33)) + 1.4) //2 //1  //sqrt on cap is new //1.11 -> 3.33 because past level 10 you will get less but before 10 you get more

                    }

                    let enododge = 0
                    for (let t = 0; t < vessel.weapons.length; t++) {
                        for (let k = 0; k < vessel.weapons[t].bullets.length; k++) {
                            if (vessel.weapons[t].bullets[k].rope == 1) {
                                // if (vessel.weapons[t].bullets[k].life > 10) {
                                enododge++
                                // }
                            }
                        }
                    }
                    ////console.log(enododge)
                    this.loot += enododge
                    // this.loot = Math.floor((Math.floor(((Math.sqrt(this.level * 2) * 3.33) + (this.level * .33) + 1.4)) * .5) + (Math.floor(((Math.sqrt(this.level * 2) * 3.33) + (this.level * .33) + 1.4)) * .5 * Math.random()))   //Math.floor((this.level * 1.11) + (Math.random() * (this.level * 1.11)) + 1.5) //2 //1
                    this.wegflag = Math.random()
                    this.crewflag = Math.random()
                    this.bombflag = Math.random()
                    this.fuelflag = Math.random()
                    if (this.shop == 2) {

                        this.loot = 0
                        this.wegflag = 1
                        this.crewflag = 1
                        this.bombflag = 1
                        this.fuelflag = 1
                    }
                    vessel.scrap += this.loot

                    if (this.bombflag < .3) {
                        vessel.bombs += this.bombs + 1
                    }
                    if (this.fuelflag < .5) {
                        vessel.fuel += 3
                    }
                    if (mode == 1) {

                        if (this.crewflag < Math.min((this.level + 33) / 300, .125)) {
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
                    } else {

                        if (this.crewflag < Math.min((this.level + 33) / 1200, .05)) {
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
                    }

                    if (mode == 1) {
                        let index = -1
                        if (this.wegflag < Math.min((this.level + 15) / 500, .125)) {
                            for (let t = 0; t < vessel.weapons.length; t++) {
                                if (vessel.weapons[t].real != 1) {
                                    index = t
                                    break
                                }
                            }
                            if (index > -1) {
                                vessel.weapons[index] = (new Weapon(Math.floor(Math.random() * 38)))
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
                                    vessel.upgradeMenu.wepsto[index] = (new Weapon(Math.floor(Math.random() * 38)))
                                } else {
                                    this.wegflag = 1
                                }

                            }
                        }
                    } else {

                        let index = -1
                        if (this.wegflag < Math.min((this.level + 15) / 1000, .05)) {
                            for (let t = 0; t < vessel.weapons.length; t++) {
                                if (vessel.weapons[t].real != 1) {
                                    index = t
                                    break
                                }
                            }
                            if (index > -1) {
                                vessel.weapons[index] = (new Weapon(Math.floor(Math.random() * 38)))
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
                                    vessel.upgradeMenu.wepsto[index] = (new Weapon(Math.floor(Math.random() * 38)))
                                } else {
                                    this.wegflag = 1
                                }

                            }
                        }
                    }



                }
                canvas_context.fillStyle = "white"
                canvas_context.font = "30px comic sans ms"
                if (this.shop == 2) {
                    canvas_context.font = "20px comic sans ms"
                    canvas_context.fillText("Welcome to my emporium!", 1280, 70)
                    canvas_context.fillText("Check your inventory to shop.", 1280, 100)
                    canvas_context.fillText("Double click items to open buy/sell menu.", 1280, 130)
                    canvas_context.fillText("Or simply rest a while.", 1280, 160)
                } else {

                    canvas_context.fillText('+' + this.loot + " Scrap!", 1280, 200)
                }
                if (mode == 1) {
                    if (this.crewflag < Math.min((this.level + 33) / 300, .125) && vessel.guys.length < 9) {
                        canvas_context.fillText("+1 Crew!", 1280, 240)
                    }

                    if (this.wegflag < Math.min((this.level + 15) / 500, .125)) {
                        canvas_context.fillText("+1 Weapon!", 1280, 280)
                    }
                } else {

                    if (this.crewflag < Math.min((this.level + 33) / 1200, .05)) {
                        canvas_context.fillText("+1 Crew!", 1280, 240)
                    }
                    1
                    if (this.wegflag < Math.min((this.level + 15) / 1000, .05)) {
                        canvas_context.fillText("+1 Weapon!", 1280, 280)
                    }
                }
                if (this.bombflag < .3) {
                    canvas_context.fillText((this.bombs + 1) + " Bombs!", 1280, 320)
                }
                // if (this.fuelflag < .5) {
                //     // canvas_context.fillText(3 + " fuel!", 720, 360)
                // }



                // this.body.draw()
                this.deathbox.draw()
                canvas_context.fillStyle = "white"
                canvas_context.font = "30px comic sans ms"
                canvas_context.fillText("Jump", this.body.x - (this.body.radius * .45), this.body.y + 8)



                if (this.spread >= 30) {
                    for (let t = 0; t < vessel.weapons.length; t++) {
                        vessel.weapons[t].charge = 0
                    }
                    vessel.fuel--
                    start = 1
                    starfirst = 0
                    enemy = new EnemyShip(Math.floor(Math.random() * 40), this.level + 1)
                }
            }


        }
    }

    class Star {
        constructor(x, y, shop = 0) {
            this.shop = 0
            this.name = getRandomColor() + " System"
            if (mode == 1) {
                if (Math.random() < .1 && shop == 0) {
                    this.shop = 1
                    this.name = getRandomColor() + " Emporium"
                }
            } else {
                if (Math.random() < .05 || shop == 1) {
                    this.shop = 1
                    this.name = getRandomColor() + " Emporium"
                }
            }
            if (mode == 1) {
                this.body = new Circle(x * 20, (y) + 20, 50, "white")
                this.spot = new Polygon(x * 20, ((y) + 20), 6, getRandomLightColor(), 4 + (Math.random() * 10), (Math.random() * 2) + .2, (Math.random() * 2) + .2)
            } else {
                this.body = new Circle(x * 20, (y - 360) * 20, 130, "white")
                this.spot = new Polygon(x * 20, ((y - 360) * 20), 10, getRandomLightColor(), 4 + (Math.random() * 10), (Math.random() * 2) + .2, (Math.random() * 2) + .2)
                this.link = new LineOP(this.body, this.body)
            }
            this.weapons = []
            if (Math.random() < .12) {
                for (let t = 0; t < 2; t++) {
                    this.weapons.push(new Weapon(-1, -1, Math.floor(Math.random() * 5)))
                }
                for (let t = 0; t < 1; t++) {
                    this.weapons.push(new Weapon(Math.floor(Math.random() * 38)))
                }
                for (let t = 0; t < 12; t++) {
                    this.weapons.push(new Weapon(-1))
                }

            } else {

                if (Math.random() < .5) {

                    for (let t = 0; t < 3; t++) {
                        this.weapons.push(new Weapon(Math.floor(Math.random() * 38)))
                    }
                    for (let t = 0; t < 12; t++) {
                        this.weapons.push(new Weapon(-1))
                    }
                } else {
                    if (Math.random() < .2) {
                        for (let t = 0; t < 3; t++) {
                            this.weapons.push(new Weapon(Math.floor(Math.random() * 23), (new Guy({}, Math.floor(Math.random() * 20)).type)))
                        }
                        for (let t = 0; t < 12; t++) {
                            this.weapons.push(new Weapon(-1))
                        }
                    } else {
                        if (Math.random() < .8) {

                            for (let t = 0; t < 2; t++) {
                                this.weapons.push(new Weapon(Math.floor(Math.random() * 38)))
                            }
                            for (let t = 0; t < 1; t++) {
                                this.weapons.push(new Weapon(Math.floor(Math.random() * 23), (new Guy({}, Math.floor(Math.random() * 20)).type)))
                            }
                            for (let t = 0; t < 12; t++) {
                                this.weapons.push(new Weapon(-1))
                            }
                        } else {

                            for (let t = 0; t < 1; t++) {
                                this.weapons.push(new Weapon(Math.floor(Math.random() * 38)))
                            }
                            for (let t = 0; t < 2; t++) {
                                this.weapons.push(new Weapon(Math.floor(Math.random() * 23), (new Guy({}, Math.floor(Math.random() * 20)).type)))
                            }
                            for (let t = 0; t < 12; t++) {
                                this.weapons.push(new Weapon(-1))
                            }
                        }
                    }
                }
            }

        }
        expand() {
            this.body.x -= 640 * globalRat
            this.body.y -= 360 * globalRat
            this.body.x *= 25
            this.body.y *= 25
            this.body.x += 640 * globalRat
            this.body.y += 360 * globalRat


            this.spot.body.x -= 640 * globalRat
            this.spot.body.y -= 360 * globalRat
            this.spot.body.x *= 25
            this.spot.body.y *= 25
            this.spot.body.x += 640 * globalRat
            this.spot.body.y += 360 * globalRat
            this.spot.size *= 5

        }
        collapse() {
            this.body.x -= 640 * globalRat
            this.body.y -= 360 * globalRat
            this.body.x *= .05
            this.body.y *= .05
            this.body.x += 640 * globalRat
            this.body.y += 360 * globalRat

            this.spot.body.x -= 640 * globalRat
            this.spot.body.y -= 360 * globalRat
            this.spot.body.x *= .05
            this.spot.body.y *= .05
            this.spot.body.x += 640 * globalRat
            this.spot.body.y += 360 * globalRat
            this.spot.size *= .2
        }
        draw() {
            if (mode == 1) {

            } else {
                this.link.target = stars.stars[vessel.star].body
                if (this.link.hypotenuse() > 1280) {
                    return
                }
            }
            // this.body.draw()
            // control(this.spot, 10)
            if (mode == 1) {
                if (this.body.x < (640 * globalRat) && vessel.star > 0) {
                    return false
                }
            }
            if (mode == 1) {
                if (this.spot.body.x < 1920 && this.spot.body.x > 0) {
                    if (stars.collapsed == 1) {
                        this.body.radius = 2
                        this.body.draw()
                    } else {
                        this.spot.draw()
                        this.body.radius = 30
                    }
                }
            } else {
                if (stars.collapsed == 1) {

                    canvas_context.fillStyle = this.spot.color
                    canvas_context.fillRect(this.body.x - 2, this.body.y - 2, 4, 4)


                    this.body.radius = 6
                    // this.body.draw()
                } else {
                    this.spot.draw()
                    this.body.radius = 50
                }
            }
            if (stars.to == stars.stars.indexOf(this)) {

                if (stars.to != vessel.star) {
                    if (this.shop == 1) {
                        let link = new LineOP(this.body, new Point(this.body.x - 20, this.body.y), "white", 1)
                        link.draw()
                        let rect = new RectangleR(this.body.x - 80, this.body.y - 20, 60, 40, "#FFFF8844")
                        rect.draw()
                        canvas_context.fillStyle = "white"
                        canvas_context.font = "20px comic sans ms"
                        canvas_context.fillText("Shop", rect.x + 5, rect.y + 20)
                    } else {
                        let link = new LineOP(this.body, new Point(this.body.x - 20, this.body.y), "white", 1)
                        link.draw()
                        let rect = new RectangleR(this.body.x - 60, this.body.y - 12, 40, 24, "#FF888844")
                        rect.draw()
                        canvas_context.fillStyle = "white"
                        canvas_context.font = "10px comic sans ms"
                        canvas_context.fillText("Fight", rect.x + 10, rect.y + 16)
                    }
                }
            }
        }
        check(point) {
            if (mode == 1) {
                if (this.body.x < 640) {
                    return false
                }
            }
            if (this.body.isPointInside(point)) {
                vessel.star = stars.stars.indexOf(this)
                let subx = this.body.x
                let suby = this.body.y
                start = 2
                if (mode == 1) {

                } else {
                    enemy = new EnemyShip(Math.floor(Math.random() * 40), 1)
                }
                vessel.engineCharge = 0

                starfirst = 0
                for (let t = 0; t < stars.stars.length; t++) {
                    stars.stars[t].body.x -= subx - (640 * globalRat)
                    stars.stars[t].spot.body.x -= subx - (640 * globalRat)
                    if (mode == 1) {
                    } else {
                        stars.stars[t].body.y -= suby - (360 * globalRat)
                        stars.stars[t].spot.body.y -= suby - (360 * globalRat)

                    }
                }
                return true
            }
            return false
        }
        hover(point) {
            // if (this.body.x < 200) {
            //     return false
            // }
            if (this.body.isPointInside(point)) {
                stars.to = stars.stars.indexOf(this)
            }
        }
    }

    class Stars {
        constructor() {
            this.to = 0
            if (mode == 1) {


                this.stars = [new Star((130 / 4), (360), 1)]
                if (mode == 1) {

                } else {
                    this.stars[0].shop = 1
                }
                for (let t = 0; this.stars.length < 580; t++) {

                    let star = new Star(((130 / 4) + (Math.random() * (1280))), Math.random() * (canvas.height - 40))
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


            } else {
                this.stars = [new Star((190 / 4), 385.5, 1)]

                if (mode == 1) {

                } else {
                    this.stars[0].shop = 1
                }
                for (let t = 0; this.stars.length < 1380; t++) {

                    let star = new Star((((140 / 4) * globalRat) + (Math.random() * (canvas.width))) * (Math.random() - .5), ((Math.random() * (1280)) * (Math.random() - .5)) + 360)
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
        }
        draw() {
            this.link = new LineOP(this.stars[vessel.star].body, this.stars[this.to].body, "red", 2)
            if (mode == 1) {

                if (this.link.hypotenuse() < 420 * 1.5) {
                    this.link.color = "#00FF00"
                    if (stars.collapsed == 1) {
                        if (this.link.hypotenuse() < 7) {
                            this.link.color = "#00FF00"
                            this.flag = 1
                        } else {
                            this.link.color = "#ff0000"
                            this.flag = 0
                        }
                    } else {
                        this.flag = 1
                    }
                    if (this.to == vessel.star) {
                        this.flag = 0
                        this.link.color = "#FF0000"
                    }
                } else {
                    this.flag = 0
                    this.link.color = "#FF0000"
                }
                if (mode == 1) {
                    if (this.link.object.x < this.link.target.x) {
                        this.link.draw()
                    }
                } else {
                    this.link.draw()
                }
                for (let t = 0; t < this.stars.length; t++) {
                    this.stars[t].draw()
                }
            } else {

                if (this.link.hypotenuse() < (Math.sqrt((vessel.UI.systems[6].max) + 1) + 1) * (30 - (10 - vessel.UI.systems[6].max)) * 20) {
                    this.link.color = "#00FF00"
                    if (stars.collapsed == 1) {
                        if (this.link.hypotenuse() < (Math.sqrt((vessel.UI.systems[6].max) + 1) + 1) * (30 - (10 - vessel.UI.systems[6].max))) {
                            this.link.color = "#00FF00"
                            this.flag = 1
                        } else {
                            this.link.color = "#ff0000"
                            this.flag = 0
                        }
                    } else {
                        this.flag = 1
                    }
                    if (this.to == vessel.star) {
                        this.flag = 0
                        this.link.color = "#FF0000"
                    }
                } else {
                    this.flag = 0
                    this.link.color = "#FF0000"
                }
                if (mode == 1) {
                    if (this.link.object.x < this.link.target.x) {
                        this.link.draw()
                    }
                } else {
                    this.link.draw()
                }
                for (let t = 0; t < this.stars.length; t++) {
                    this.stars[t].draw()
                }
            }
        }
        check(point) {
            if (this.flag == 1) {
                for (let t = 0; t < this.stars.length; t++) {
                    if (this.stars[t].check(point)) {
                        vessel.star = t
                        vessel.web.push(this.stars[t].body)
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
    let vessel = new Ship(0)
    let enemy = new EnemyShip(Math.floor(Math.random() * 40), 1)

    vessel.draw()
    stars = new Stars()
    let starFirst = 0

    class Labels {
        constructor() {
            this.text = ''
        }
        draw() {
            if (!keysPressed['Shift'] && !keysPressed['z']) {
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
                        //////////////////////////////////////////////////////console.log(dim)
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

            let rooms = ['Medbay', 'Weapons', 'Shield', 'Helm', 'Oxygen', 'Security', 'Engine', 'Teleporter', 'Empty']
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
                        //////////////////////////////////////////////////////console.log(dim)
                        let rect = new RectangleR(TIP_engine.x, TIP_engine.y - (dim.h + 20), dim.w + 20, dim.h + 20, "#55555588")
                        rect.draw()
                        canvas_context.fillStyle = "white"
                        let py = TIP_engine.y + 5
                        canvas_context.fillText(this.text1, rect.x + 10, py - (dim.h + 10))
                        py += 12
                        canvas_context.fillText(this.text2, rect.x + 10, py - (dim.h + 10))
                        py += 12
                        canvas_context.fillText(this.text3, rect.x + 10, py - (dim.h + 10))
                        py += 12
                        canvas_context.fillText(this.text4, rect.x + 10, py - (dim.h + 10))
                    }
                    vessel.UI.systems[t].bars[k].y += 2
                    vessel.UI.systems[t].bars[k].height -= 4
                }
            }


            for (let t = 0; t < vessel.guys.length; t++) {
                if (vessel.guys[t].zSelected == 1) {
                    for (let k = 0; k < vessel.guys[t].gear.length; k++) {
                        if (vessel.guys[t].gear[k].type < 0) {
                            continue
                        }
                        if (vessel.guys[t].gear[k].body.isPointInside(TIP_engine)) {

                            this.text1 = `Armor ${vessel.guys[t].gear[k].armor + 1}x`
                            this.text2 = `Damage + ${Math.round((vessel.guys[t].gear[k].damage - (1 / 6)) * 100)}%`
                            this.text3 = `Speed + ${Math.abs(vessel.guys[t].gear[k].speed)}`
                            this.text4 = `Regen ${Math.abs(vessel.guys[t].gear[k].regen)}`
                            let sys = ["medbay", "weapon", "shield", "helm", "oxygen", "security", "engine", "special", "empty"]

                            // this.text4 = "System: "
                            // for (let s = 0; s < sys.length; s++) {
                            //     if (vessel.guys[t].tile[sys[s]] == 1) {
                            //         let sys2 = sys[s].charAt(0).toUpperCase() + sys[s].slice(1);
                            //         this.text4 += ' ' + sys2
                            //     }
                            // }


                            let dim = {}
                            canvas_context.font = "12px comic sans ms"
                            dim.w = Math.max(170, Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width))
                            dim.h = 44
                            //////////////////////////////////////////////////////console.log(dim)
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
                        }
                    }
                }
                if (vessel.guys[t].healthbox.isPointInside(TIP_engine)) {
                    this.text1 = `Crewman ${vessel.guys[t].name}`
                    this.text2 = `Skills: ${vessel.guys[t].skills}`
                    this.text3 = `Health: ${Math.round(vessel.guys[t].health)}/${vessel.guys[t].maxhealth}, Kills: ${vessel.guys[t].meleeKills}`
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
                    //////////////////////////////////////////////////////console.log(dim)
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

            for (let t = 0; t < enemy.guys.length; t++) {
                if (enemy.guys[t].healthbox.isPointInside(TIP_engine)) {
                    this.text1 = `Crewman ${enemy.guys[t].name}`
                    this.text2 = `Skills: ${enemy.guys[t].skills}`
                    this.text3 = `Health: ${Math.round(enemy.guys[t].health)}/${enemy.guys[t].maxhealth}`
                    let sys = ["medbay", "weapon", "shield", "helm", "oxygen", "security", "engine", "special", "empty"]

                    this.text4 = "System: "
                    for (let s = 0; s < sys.length; s++) {
                        if (enemy.guys[t].tile[sys[s]] == 1) {
                            let sys2 = sys[s].charAt(0).toUpperCase() + sys[s].slice(1);
                            this.text4 += ' ' + sys2
                        }
                    }


                    let dim = {}
                    canvas_context.font = "12px comic sans ms"
                    dim.w = Math.max(170, Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width))
                    dim.h = 154
                    //////////////////////////////////////////////////////console.log(dim)
                    if (vessel.UI.systems[5].sto >= 3) {


                        let rect = new RectangleR(TIP_engine.x - (dim.w + 20), TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#555555dd")
                        if (vessel.UI.systems[5].sto >= 6) {

                        } else {
                            rect.height -= 110
                        }
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
                        for (let r = 0; r < enemy.guys[t].skillslist.length; r++) {
                            if (vessel.UI.systems[5].sto >= 6) {
                                let box1 = new RectangleR(TIP_engine.x + 5 - (dim.w + 20), py + 10, 130, 5, "#88888844")
                                canvas_context.fillStyle = "white"
                                canvas_context.font = "9px comic sans ms"
                                canvas_context.fillText(sys[r], box1.x + box1.width + 10, py + 15)
                                box1.draw()
                                let box4 = new RectangleR(TIP_engine.x + 5 - (dim.w + 20), py + 10, ((enemy.guys[t].skillslist[r] - 1.5) / .25) * (130), 5, "#FF0000")
                                let box3 = new RectangleR(TIP_engine.x + 5 - (dim.w + 20), py + 10, ((enemy.guys[t].skillslist[r] - 1.25) / .25) * (130), 5, "#FFFF00")
                                let box2 = new Rectangle(TIP_engine.x + 5 - (dim.w + 20), py + 10, ((enemy.guys[t].skillslist[r] - 1) / .25) * (130), 5, "#00FF00")

                                if (enemy.guys[t].skillslist[r] > 1.75) {
                                    box4.width = 130
                                }
                                if (enemy.guys[t].skillslist[r] > 1.5) {
                                    box3.width = 130
                                } else {
                                    box4.width = 0
                                }
                                if (enemy.guys[t].skillslist[r] >= 1.25) {
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
                }
            }

            for (let t = 0; t < vessel.weapons.length; t++) {
                if (vessel.weapons[t].body.isPointInside(TIP_engine) && vessel.weapons[t].type != -1) {
                    this.text1 = `Weapon: ${vessel.weapons[t].name1 + ' ' + vessel.weapons[t].name2}`
                    this.text2 = `Charge: ${Math.round(vessel.weapons[t].charge)}/${vessel.weapons[t].max}`
                    let lsrt = "Tile harm: " + vessel.weapons[t].damage + ', ' + "Ship harm: " + (vessel.weapons[t].damage / 10)
                    let str = 'Idle'
                    if (vessel.weapons[t].hard != 1) {
                        let lsrt = "Tile harm: " + vessel.weapons[t].damage + ', ' + "Ship harm: " + (vessel.weapons[t].damage / 10)

                    } else {
                        let lsrt = "Tile harm: " + Math.round(vessel.weapons[t].damage / 10) + ', ' + "Ship harm: " + (vessel.weapons[t].damage / 10)

                    }

                    if (vessel.weapons[t].railgun == 1) {
                        lsrt = "Fire Chance: " + Math.floor((vessel.weapons[t].fireChance / 300) * 100) + "% High Pierce"
                    } else if (vessel.weapons[t].scrap > 0) {
                        lsrt = "Fire Chance: " + Math.floor((vessel.weapons[t].fireChance / 300) * 100) + `% Costs ${vessel.weapons[t].scrap} Scrap`
                    } else if (vessel.weapons[t].bomb == 1) {
                        lsrt = "Fire Chance: " + Math.floor((vessel.weapons[t].fireChance / 300) * 100) + "% Shield Bypass"
                    } else if (vessel.weapons[t].mind > 0) {
                        lsrt = "Fire Chance: " + Math.floor((vessel.weapons[t].fireChance / 300) * 100) + "% Command Enemy Crew"
                    } else if (vessel.weapons[t].beam == 1 || vessel.weapons[t].type == 101) {
                        if (vessel.weapons[t].hard != 1) {
                            lsrt = "Tile harm: " + vessel.weapons[t].damage + ', ' + "Ship harm: " + (vessel.weapons[t].damage / 10)

                        } else {
                            lsrt = "Tile harm: " + Math.round(vessel.weapons[t].damage / 10) + ', ' + "Ship harm: " + (vessel.weapons[t].damage / 10)

                        }

                    } else if (vessel.weapons[t].sap >= 1) {
                        lsrt = "Fire Chance: " + Math.floor((vessel.weapons[t].fireChance / 300) * 100) + "% Steals Shields"
                    } else if (vessel.weapons[t].capacitor >= 1) {
                        lsrt = "Fire Chance: " + Math.floor((vessel.weapons[t].fireChance / 300) * 100) + "% Builds Charge For Other Weapons"
                    } else if (vessel.weapons[t].tractor >= 1) {
                        lsrt = "Fire Chance: " + Math.floor((vessel.weapons[t].fireChance / 300) * 100) + "% Stops Projectiles"
                    } else if (vessel.weapons[t].mirror >= 1) {
                        lsrt = "Fire Chance: " + Math.floor((vessel.weapons[t].fireChance / 300) * 100) + "% Stops Lasers"
                    } else if (vessel.weapons[t].tether >= 1) {
                        lsrt = "Fire Chance: " + Math.floor((vessel.weapons[t].fireChance / 300) * 100) + "% Reduces Dodge"
                    } else if (vessel.weapons[t].crew > 1) {
                        lsrt = "Fire Chance: " + Math.floor((vessel.weapons[t].fireChance / 300) * 100) + "% Crew Damage: " + vessel.weapons[t].crew + "x"
                    } else {
                        if (vessel.weapons[t].hard != 1) {
                            lsrt = "Tile harm: " + vessel.weapons[t].damage + ', ' + "Ship harm: " + (vessel.weapons[t].damage / 10)

                        } else {
                            lsrt = "Tile harm: " + Math.round(vessel.weapons[t].damage / 10) + ', ' + "Ship harm: " + (vessel.weapons[t].damage / 10)

                        }

                    }
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
                    dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(lsrt).width)
                    dim.h = 68
                    //////////////////////////////////////////////////////console.log(dim)
                    let rect = new RectangleR(TIP_engine.x, TIP_engine.y - (dim.h + 20), dim.w + 20, dim.h + 20, "#555555dd")
                    if (rect.width + rect.x > 1280) {
                        rect.x += 1280 - (rect.width + rect.x)
                    }
                    rect.draw()
                    canvas_context.fillStyle = "white"
                    let py = TIP_engine.y + 5
                    canvas_context.fillText(this.text1, rect.x + 10, py - (dim.h + 10))
                    py += 13
                    canvas_context.fillText(this.text2, rect.x + 10, py - (dim.h + 10))
                    py += 13
                    canvas_context.fillText(this.text3, rect.x + 10, py - (dim.h + 10))
                    py += 13
                    if (vessel.weapons[t].hard != 1) {
                        canvas_context.fillText("Tile harm: " + vessel.weapons[t].damage + ', ' + "Ship harm: " + (vessel.weapons[t].damage / 10), rect.x + 10, py - (dim.h + 10))

                    } else {
                        canvas_context.fillText("Tile harm: " + Math.round(vessel.weapons[t].damage / 10) + ', ' + "Ship harm: " + (vessel.weapons[t].damage / 10), rect.x + 10, py - (dim.h + 10))

                    }

                    py += 13
                    if (vessel.weapons[t].railgun == 1) {
                        canvas_context.fillText("Fire Chance: " + Math.floor((vessel.weapons[t].fireChance / 300) * 100) + "% High Pierce", rect.x + 10, py - (dim.h + 10))
                    } else if (vessel.weapons[t].scrap > 0) {
                        canvas_context.fillText("Fire Chance: " + Math.floor((vessel.weapons[t].fireChance / 300) * 100) + `% Costs ${vessel.weapons[t].scrap} Scrap`, rect.x + 10, py - (dim.h + 10))
                        // "Fire Chance: " + Math.floor((vessel.weapons[t].fireChance / 300) * 100) + "% Stops Projectiles"
                    } else if (vessel.weapons[t].tractor > 0) {
                        canvas_context.fillText("Fire Chance: " + Math.floor((vessel.weapons[t].fireChance / 300) * 100) + "% Stops Projectiles", rect.x + 10, py - (dim.h + 10))

                    } else if (vessel.weapons[t].mirror > 0) {
                        canvas_context.fillText("Fire Chance: " + Math.floor((vessel.weapons[t].fireChance / 300) * 100) + "% Stops Lasers", rect.x + 10, py - (dim.h + 10))

                    } else if (vessel.weapons[t].mind > 0) {
                        canvas_context.fillText("Fire Chance: " + Math.floor((vessel.weapons[t].fireChance / 300) * 100) + "% Command Enemy Crew", rect.x + 10, py - (dim.h + 10))

                    } else if (vessel.weapons[t].bomb == 1) {
                        canvas_context.fillText("Fire Chance: " + Math.floor((vessel.weapons[t].fireChance / 300) * 100) + "% Shield Bypass", rect.x + 10, py - (dim.h + 10))
                    } else if (vessel.weapons[t].beam == 1) {
                        canvas_context.fillText("Fire Chance: " + Math.floor((vessel.weapons[t].fireChance / 300) * 100) + "%", rect.x + 10, py - (dim.h + 10))
                    } else if (vessel.weapons[t].tether >= 1) {
                        canvas_context.fillText("Fire Chance: " + Math.floor((vessel.weapons[t].fireChance / 300) * 100) + "% Reduces Dodge", rect.x + 10, py - (dim.h + 10))
                    } else if (vessel.weapons[t].sap >= 1) {
                        canvas_context.fillText("Fire Chance: " + Math.floor((vessel.weapons[t].fireChance / 300) * 100) + "% Steals Shields", rect.x + 10, py - (dim.h + 10))
                    } else if (vessel.weapons[t].capacitor >= 1) {
                        canvas_context.fillText("Fire Chance: " + Math.floor((vessel.weapons[t].fireChance / 300) * 100) + "% Builds Charge For Other Weapons", rect.x + 10, py - (dim.h + 10))
                    } else if (vessel.weapons[t].crew > 1) {
                        canvas_context.fillText("Fire Chance: " + Math.floor((vessel.weapons[t].fireChance / 300) * 100) + "% Crew Damage: " + vessel.weapons[t].crew + "x", rect.x + 10, py - (dim.h + 10))
                    } else {
                        canvas_context.fillText("Fire Chance: " + Math.floor((vessel.weapons[t].fireChance / 300) * 100) + "%", rect.x + 10, py - (dim.h + 10))
                    }
                    py += 13
                    if (vessel.weapons[t].secretDouble > 0) {
                        canvas_context.fillText("Breaks " + Math.floor((vessel.weapons[t].secretDouble / 1) * 1) + " Shield", rect.x + 10, py - (dim.h + 10))

                    } else {
                        canvas_context.fillText("Breaks " + Math.floor((vessel.weapons[t].double / 1) * 1) + " Shield", rect.x + 10, py - (dim.h + 10))

                    }

                    
                    // canvas_context.fillText(, rect.x + 10, py-  (dim.h + 10))
                    // py += 12
                    // canvas_context.fillText(this.text4, rect.x + 10, py)
                }
            }

            if (vessel.upgradeMenu.open == 1) {

                if (stars.stars[vessel.star].shop == 1) {
                    if (vessel.upgradeMenu.tab == 1) {
                        for (let t = 0; t < stars.stars[vessel.star].weapons.length; t++) {
                            if (stars.stars[vessel.star].weapons[t].body.isPointInside(TIP_engine) && stars.stars[vessel.star].weapons[t].type != -1) {
                                this.text1 = `Weapon: ${stars.stars[vessel.star].weapons[t].name1 + ' ' + stars.stars[vessel.star].weapons[t].name2}`
                                this.text2 = `Charge: ${Math.round(stars.stars[vessel.star].weapons[t].charge)}/${stars.stars[vessel.star].weapons[t].max}`
                                let lsrt = "Tile harm: " + stars.stars[vessel.star].weapons[t].damage + ', ' + "Ship harm: " + (stars.stars[vessel.star].weapons[t].damage / 10)
                                let str = 'Idle'
                                if (stars.stars[vessel.star].weapons[t].hard != 1) {
                                    let lsrt = "Tile harm: " + stars.stars[vessel.star].weapons[t].damage + ', ' + "Ship harm: " + (stars.stars[vessel.star].weapons[t].damage / 10)

                                } else {
                                    let lsrt = "Tile harm: " + Math.round(stars.stars[vessel.star].weapons[t].damage / 10) + ', ' + "Ship harm: " + (stars.stars[vessel.star].weapons[t].damage / 10)

                                }

                                if (stars.stars[vessel.star].weapons[t].railgun == 1) {
                                    lsrt = "Fire Chance: " + Math.floor((stars.stars[vessel.star].weapons[t].fireChance / 300) * 100) + "% High Pierce"
                                } else if (stars.stars[vessel.star].weapons[t].scrap > 0) {
                                    lsrt = "Fire Chance: " + Math.floor((stars.stars[vessel.star].weapons[t].fireChance / 300) * 100) + `% Costs ${stars.stars[vessel.star].weapons[t].scrap} Scrap`
                                } else if (stars.stars[vessel.star].weapons[t].bomb == 1) {
                                    lsrt = "Fire Chance: " + Math.floor((stars.stars[vessel.star].weapons[t].fireChance / 300) * 100) + "% Shield Bypass"
                                } else if (stars.stars[vessel.star].weapons[t].beam == 1 || stars.stars[vessel.star].weapons[t].type == 101) {
                                    if (stars.stars[vessel.star].weapons[t].hard != 1) {
                                        lsrt = "Tile harm: " + stars.stars[vessel.star].weapons[t].damage + ', ' + "Ship harm: " + (stars.stars[vessel.star].weapons[t].damage / 10)

                                    } else {
                                        lsrt = "Tile harm: " + Math.round(stars.stars[vessel.star].weapons[t].damage / 10) + ', ' + "Ship harm: " + (stars.stars[vessel.star].weapons[t].damage / 10)

                                    }

                                } else if (stars.stars[vessel.star].weapons[t].sap >= 1) {
                                    lsrt = "Fire Chance: " + Math.floor((stars.stars[vessel.star].weapons[t].fireChance / 300) * 100) + "% Steals Shields"
                                } else if (stars.stars[vessel.star].weapons[t].crew > 1) {
                                    lsrt = "Fire Chance: " + Math.floor((stars.stars[vessel.star].weapons[t].fireChance / 300) * 100) + "% Crew Damage: " + stars.stars[vessel.star].weapons[t].crew + "x"
                                } else {
                                    if (stars.stars[vessel.star].weapons[t].hard != 1) {
                                        lsrt = "Tile harm: " + stars.stars[vessel.star].weapons[t].damage + ', ' + "Ship harm: " + (stars.stars[vessel.star].weapons[t].damage / 10)

                                    } else {
                                        lsrt = "Tile harm: " + Math.round(stars.stars[vessel.star].weapons[t].damage / 10) + ', ' + "Ship harm: " + (stars.stars[vessel.star].weapons[t].damage / 10)

                                    }

                                }
                                if (stars.stars[vessel.star].weapons[t].charge >= stars.stars[vessel.star].weapons[t].max) {
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
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(lsrt).width)
                                dim.h = 68
                                //////////////////////////////////////////////////////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - (dim.h + 20), dim.w + 20, dim.h + 20, "#555555dd")
                                rect.draw()
                                canvas_context.fillStyle = "white"
                                let py = TIP_engine.y + 5
                                canvas_context.fillText(this.text1, rect.x + 10, py - (dim.h + 10))
                                py += 13
                                canvas_context.fillText(this.text2, rect.x + 10, py - (dim.h + 10))
                                py += 13
                                canvas_context.fillText(this.text3, rect.x + 10, py - (dim.h + 10))
                                py += 13
                                if (stars.stars[vessel.star].weapons[t].hard != 1) {
                                    canvas_context.fillText("Tile harm: " + stars.stars[vessel.star].weapons[t].damage + ', ' + "Ship harm: " + (stars.stars[vessel.star].weapons[t].damage / 10), rect.x + 10, py - (dim.h + 10))

                                } else {
                                    canvas_context.fillText("Tile harm: " + Math.round(stars.stars[vessel.star].weapons[t].damage / 10) + ', ' + "Ship harm: " + (stars.stars[vessel.star].weapons[t].damage / 10), rect.x + 10, py - (dim.h + 10))

                                }

                                py += 13
                                if (stars.stars[vessel.star].weapons[t].railgun == 1) {
                                    canvas_context.fillText("Fire Chance: " + Math.floor((stars.stars[vessel.star].weapons[t].fireChance / 300) * 100) + "% High Pierce", rect.x + 10, py - (dim.h + 10))
                                } else if (stars.stars[vessel.star].weapons[t].scrap > 0) {
                                    canvas_context.fillText("Fire Chance: " + Math.floor((stars.stars[vessel.star].weapons[t].fireChance / 300) * 100) + `% Costs ${stars.stars[vessel.star].weapons[t].scrap} Scrap`, rect.x + 10, py - (dim.h + 10))

                                } else if (stars.stars[vessel.star].weapons[t].bomb == 1) {
                                    canvas_context.fillText("Fire Chance: " + Math.floor((stars.stars[vessel.star].weapons[t].fireChance / 300) * 100) + "% Shield Bypass", rect.x + 10, py - (dim.h + 10))
                                } else if (stars.stars[vessel.star].weapons[t].beam == 1) {
                                    canvas_context.fillText("Fire Chance: " + Math.floor((stars.stars[vessel.star].weapons[t].fireChance / 300) * 100) + "%", rect.x + 10, py - (dim.h + 10))
                                } else if (stars.stars[vessel.star].weapons[t].sap >= 1) {
                                    canvas_context.fillText("Fire Chance: " + Math.floor((stars.stars[vessel.star].weapons[t].fireChance / 300) * 100) + "% Steals Shields", rect.x + 10, py - (dim.h + 10))
                                } else if (stars.stars[vessel.star].weapons[t].crew > 1) {
                                    canvas_context.fillText("Fire Chance: " + Math.floor((stars.stars[vessel.star].weapons[t].fireChance / 300) * 100) + "% Crew Damage: " + stars.stars[vessel.star].weapons[t].crew + "x", rect.x + 10, py - (dim.h + 10))
                                } else {
                                    canvas_context.fillText("Fire Chance: " + Math.floor((stars.stars[vessel.star].weapons[t].fireChance / 300) * 100) + "%", rect.x + 10, py - (dim.h + 10))
                                }
                                py += 13

                                if (stars.stars[vessel.star].weapons[t].secretDouble > 0) {
                                    canvas_context.fillText("Breaks " + Math.floor((stars.stars[vessel.star].weapons[t].secretDouble / 1) * 1) + " Shield", rect.x + 10, py - (dim.h + 10))

                                } else {
                                    canvas_context.fillText("Breaks " + Math.floor((stars.stars[vessel.star].weapons[t].double / 1) * 1) + " Shield", rect.x + 10, py - (dim.h + 10))

                                }
                                // canvas_context.fillText(, rect.x + 10, py-  (dim.h + 10))
                                // py += 12
                                // canvas_context.fillText(this.text4, rect.x + 10, py)
                            }
                        }
                    } else {

                        for (let t = 0; t < vessel.upgradeMenu.wepsto.length; t++) {
                            if (vessel.upgradeMenu.wepsto[t].body.isPointInside(TIP_engine) && vessel.upgradeMenu.wepsto[t].type != -1) {
                                this.text1 = `Weapon: ${vessel.upgradeMenu.wepsto[t].name1 + ' ' + vessel.upgradeMenu.wepsto[t].name2}`
                                this.text2 = `Charge: ${Math.round(vessel.upgradeMenu.wepsto[t].charge)}/${vessel.upgradeMenu.wepsto[t].max}`
                                let lsrt = "Tile harm: " + vessel.upgradeMenu.wepsto[t].damage + ', ' + "Ship harm: " + (vessel.upgradeMenu.wepsto[t].damage / 10)
                                let str = 'Idle'
                                if (vessel.upgradeMenu.wepsto[t].hard != 1) {
                                    let lsrt = "Tile harm: " + vessel.upgradeMenu.wepsto[t].damage + ', ' + "Ship harm: " + (vessel.upgradeMenu.wepsto[t].damage / 10)

                                } else {
                                    let lsrt = "Tile harm: " + Math.round(vessel.upgradeMenu.wepsto[t].damage / 10) + ', ' + "Ship harm: " + (vessel.upgradeMenu.wepsto[t].damage / 10)

                                }

                                if (vessel.upgradeMenu.wepsto[t].railgun == 1) {
                                    lsrt = "Fire Chance: " + Math.floor((vessel.upgradeMenu.wepsto[t].fireChance / 300) * 100) + "% High Pierce"
                                } else if (vessel.upgradeMenu.wepsto[t].scrap > 0) {
                                    lsrt = "Fire Chance: " + Math.floor((vessel.upgradeMenu.wepsto[t].fireChance / 300) * 100) + `% Costs ${vessel.upgradeMenu.wepsto[t].scrap} Scrap`
                                } else if (vessel.upgradeMenu.wepsto[t].bomb == 1) {
                                    lsrt = "Fire Chance: " + Math.floor((vessel.upgradeMenu.wepsto[t].fireChance / 300) * 100) + "% Shield Bypass"
                                } else if (vessel.upgradeMenu.wepsto[t].beam == 1 || vessel.upgradeMenu.wepsto[t].type == 101) {
                                    if (vessel.upgradeMenu.wepsto[t].hard != 1) {
                                        lsrt = "Tile harm: " + vessel.upgradeMenu.wepsto[t].damage + ', ' + "Ship harm: " + (vessel.upgradeMenu.wepsto[t].damage / 10)

                                    } else {
                                        lsrt = "Tile harm: " + Math.round(vessel.upgradeMenu.wepsto[t].damage / 10) + ', ' + "Ship harm: " + (vessel.upgradeMenu.wepsto[t].damage / 10)

                                    }

                                } else if (vessel.upgradeMenu.wepsto[t].sap >= 1) {
                                    lsrt = "Fire Chance: " + Math.floor((vessel.upgradeMenu.wepsto[t].fireChance / 300) * 100) + "% Steals Shields"
                                } else if (vessel.upgradeMenu.wepsto[t].crew > 1) {
                                    lsrt = "Fire Chance: " + Math.floor((vessel.upgradeMenu.wepsto[t].fireChance / 300) * 100) + "% Crew Damage: " + vessel.upgradeMenu.wepsto[t].crew + "x"
                                } else {
                                    if (vessel.upgradeMenu.wepsto[t].hard != 1) {
                                        lsrt = "Tile harm: " + vessel.upgradeMenu.wepsto[t].damage + ', ' + "Ship harm: " + (vessel.upgradeMenu.wepsto[t].damage / 10)

                                    } else {
                                        lsrt = "Tile harm: " + Math.round(vessel.upgradeMenu.wepsto[t].damage / 10) + ', ' + "Ship harm: " + (vessel.upgradeMenu.wepsto[t].damage / 10)

                                    }

                                }
                                if (vessel.upgradeMenu.wepsto[t].charge >= vessel.upgradeMenu.wepsto[t].max) {
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
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(lsrt).width)
                                dim.h = 68
                                //////////////////////////////////////////////////////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - (dim.h + 20), dim.w + 20, dim.h + 20, "#555555dd")
                                rect.draw()
                                canvas_context.fillStyle = "white"
                                let py = TIP_engine.y + 5
                                canvas_context.fillText(this.text1, rect.x + 10, py - (dim.h + 10))
                                py += 13
                                canvas_context.fillText(this.text2, rect.x + 10, py - (dim.h + 10))
                                py += 13
                                canvas_context.fillText(this.text3, rect.x + 10, py - (dim.h + 10))
                                py += 13
                                if (vessel.upgradeMenu.wepsto[t].hard != 1) {
                                    canvas_context.fillText("Tile harm: " + vessel.upgradeMenu.wepsto[t].damage + ', ' + "Ship harm: " + (vessel.upgradeMenu.wepsto[t].damage / 10), rect.x + 10, py - (dim.h + 10))

                                } else {
                                    canvas_context.fillText("Tile harm: " + Math.round(vessel.upgradeMenu.wepsto[t].damage / 10) + ', ' + "Ship harm: " + (vessel.upgradeMenu.wepsto[t].damage / 10), rect.x + 10, py - (dim.h + 10))

                                }

                                py += 13
                                if (vessel.upgradeMenu.wepsto[t].railgun == 1) {
                                    canvas_context.fillText("Fire Chance: " + Math.floor((vessel.upgradeMenu.wepsto[t].fireChance / 300) * 100) + "% High Pierce", rect.x + 10, py - (dim.h + 10))
                                } else if (vessel.upgradeMenu.wepsto[t].scrap > 0) {
                                    canvas_context.fillText("Fire Chance: " + Math.floor((vessel.upgradeMenu.wepsto[t].fireChance / 300) * 100) + `% Costs ${vessel.upgradeMenu.wepsto[t].scrap} Scrap`, rect.x + 10, py - (dim.h + 10))

                                } else if (vessel.upgradeMenu.wepsto[t].bomb == 1) {
                                    canvas_context.fillText("Fire Chance: " + Math.floor((vessel.upgradeMenu.wepsto[t].fireChance / 300) * 100) + "% Shield Bypass", rect.x + 10, py - (dim.h + 10))
                                } else if (vessel.upgradeMenu.wepsto[t].beam == 1) {
                                    canvas_context.fillText("Fire Chance: " + Math.floor((vessel.upgradeMenu.wepsto[t].fireChance / 300) * 100) + "%", rect.x + 10, py - (dim.h + 10))
                                } else if (vessel.upgradeMenu.wepsto[t].sap >= 1) {
                                    canvas_context.fillText("Fire Chance: " + Math.floor((vessel.upgradeMenu.wepsto[t].fireChance / 300) * 100) + "% Steals Shields", rect.x + 10, py - (dim.h + 10))
                                } else if (vessel.upgradeMenu.wepsto[t].crew > 1) {
                                    canvas_context.fillText("Fire Chance: " + Math.floor((vessel.upgradeMenu.wepsto[t].fireChance / 300) * 100) + "% Crew Damage: " + vessel.upgradeMenu.wepsto[t].crew + "x", rect.x + 10, py - (dim.h + 10))
                                } else {
                                    canvas_context.fillText("Fire Chance: " + Math.floor((vessel.upgradeMenu.wepsto[t].fireChance / 300) * 100) + "%", rect.x + 10, py - (dim.h + 10))
                                }
                                py += 13
                                if (vessel.upgradeMenu.wepsto[t].secretDouble > 0) {
                                    canvas_context.fillText("Breaks " + Math.floor((vessel.upgradeMenu.wepsto[t].secretDouble / 1) * 1) + " Shield", rect.x + 10, py - (dim.h + 10))

                                } else {
                                    canvas_context.fillText("Breaks " + Math.floor((vessel.upgradeMenu.wepsto[t].double / 1) * 1) + " Shield", rect.x + 10, py - (dim.h + 10))

                                }
                                // canvas_context.fillText(, rect.x + 10, py-  (dim.h + 10))
                                // py += 12
                                // canvas_context.fillText(this.text4, rect.x + 10, py)
                            }
                        }

                    }
                } else {

                    for (let t = 0; t < vessel.upgradeMenu.wepsto.length; t++) {
                        if (vessel.upgradeMenu.wepsto[t].body.isPointInside(TIP_engine) && vessel.upgradeMenu.wepsto[t].type != -1) {
                            this.text1 = `Weapon: ${vessel.upgradeMenu.wepsto[t].name1 + ' ' + vessel.upgradeMenu.wepsto[t].name2}`
                            this.text2 = `Charge: ${Math.round(vessel.upgradeMenu.wepsto[t].charge)}/${vessel.upgradeMenu.wepsto[t].max}`
                            let lsrt = "Tile harm: " + vessel.upgradeMenu.wepsto[t].damage + ', ' + "Ship harm: " + (vessel.upgradeMenu.wepsto[t].damage / 10)
                            let str = 'Idle'
                            if (vessel.upgradeMenu.wepsto[t].hard != 1) {
                                let lsrt = "Tile harm: " + vessel.upgradeMenu.wepsto[t].damage + ', ' + "Ship harm: " + (vessel.upgradeMenu.wepsto[t].damage / 10)

                            } else {
                                let lsrt = "Tile harm: " + Math.round(vessel.upgradeMenu.wepsto[t].damage / 10) + ', ' + "Ship harm: " + (vessel.upgradeMenu.wepsto[t].damage / 10)

                            }

                            if (vessel.upgradeMenu.wepsto[t].railgun == 1) {
                                lsrt = "Fire Chance: " + Math.floor((vessel.upgradeMenu.wepsto[t].fireChance / 300) * 100) + "% High Pierce"
                            } else if (vessel.upgradeMenu.wepsto[t].scrap > 0) {
                                lsrt = "Fire Chance: " + Math.floor((vessel.upgradeMenu.wepsto[t].fireChance / 300) * 100) + `% Costs ${vessel.upgradeMenu.wepsto[t].scrap} Scrap`
                            } else if (vessel.upgradeMenu.wepsto[t].bomb == 1) {
                                lsrt = "Fire Chance: " + Math.floor((vessel.upgradeMenu.wepsto[t].fireChance / 300) * 100) + "% Shield Bypass"
                            } else if (vessel.upgradeMenu.wepsto[t].beam == 1 || vessel.upgradeMenu.wepsto[t].type == 101) {
                                if (vessel.upgradeMenu.wepsto[t].hard != 1) {
                                    lsrt = "Tile harm: " + vessel.upgradeMenu.wepsto[t].damage + ', ' + "Ship harm: " + (vessel.upgradeMenu.wepsto[t].damage / 10)

                                } else {
                                    lsrt = "Tile harm: " + Math.round(vessel.upgradeMenu.wepsto[t].damage / 10) + ', ' + "Ship harm: " + (vessel.upgradeMenu.wepsto[t].damage / 10)

                                }

                            } else if (vessel.upgradeMenu.wepsto[t].sap >= 1) {
                                lsrt = "Fire Chance: " + Math.floor((vessel.upgradeMenu.wepsto[t].fireChance / 300) * 100) + "% Steals Shields"
                            } else if (vessel.upgradeMenu.wepsto[t].crew > 1) {
                                lsrt = "Fire Chance: " + Math.floor((vessel.upgradeMenu.wepsto[t].fireChance / 300) * 100) + "% Crew Damage: " + vessel.upgradeMenu.wepsto[t].crew + "x"
                            } else {
                                if (vessel.upgradeMenu.wepsto[t].hard != 1) {
                                    lsrt = "Tile harm: " + vessel.upgradeMenu.wepsto[t].damage + ', ' + "Ship harm: " + (vessel.upgradeMenu.wepsto[t].damage / 10)

                                } else {
                                    lsrt = "Tile harm: " + Math.round(vessel.upgradeMenu.wepsto[t].damage / 10) + ', ' + "Ship harm: " + (vessel.upgradeMenu.wepsto[t].damage / 10)

                                }

                            }
                            if (vessel.upgradeMenu.wepsto[t].charge >= vessel.upgradeMenu.wepsto[t].max) {
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
                            dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(lsrt).width)
                            dim.h = 68
                            //////////////////////////////////////////////////////console.log(dim)
                            let rect = new RectangleR(TIP_engine.x, TIP_engine.y - (dim.h + 20), dim.w + 20, dim.h + 20, "#555555dd")
                            rect.draw()
                            canvas_context.fillStyle = "white"
                            let py = TIP_engine.y + 5
                            canvas_context.fillText(this.text1, rect.x + 10, py - (dim.h + 10))
                            py += 13
                            canvas_context.fillText(this.text2, rect.x + 10, py - (dim.h + 10))
                            py += 13
                            canvas_context.fillText(this.text3, rect.x + 10, py - (dim.h + 10))
                            py += 13
                            if (vessel.upgradeMenu.wepsto[t].hard != 1) {
                                canvas_context.fillText("Tile harm: " + vessel.upgradeMenu.wepsto[t].damage + ', ' + "Ship harm: " + (vessel.upgradeMenu.wepsto[t].damage / 10), rect.x + 10, py - (dim.h + 10))

                            } else {
                                canvas_context.fillText("Tile harm: " + Math.round(vessel.upgradeMenu.wepsto[t].damage / 10) + ', ' + "Ship harm: " + (vessel.upgradeMenu.wepsto[t].damage / 10), rect.x + 10, py - (dim.h + 10))

                            }

                            py += 13
                            if (vessel.upgradeMenu.wepsto[t].railgun == 1) {
                                canvas_context.fillText("Fire Chance: " + Math.floor((vessel.upgradeMenu.wepsto[t].fireChance / 300) * 100) + "% High Pierce", rect.x + 10, py - (dim.h + 10))
                            } else if (vessel.upgradeMenu.wepsto[t].scrap > 0) {
                                canvas_context.fillText("Fire Chance: " + Math.floor((vessel.upgradeMenu.wepsto[t].fireChance / 300) * 100) + `% Costs ${vessel.upgradeMenu.wepsto[t].scrap} Scrap`, rect.x + 10, py - (dim.h + 10))

                            } else if (vessel.upgradeMenu.wepsto[t].bomb == 1) {
                                canvas_context.fillText("Fire Chance: " + Math.floor((vessel.upgradeMenu.wepsto[t].fireChance / 300) * 100) + "% Shield Bypass", rect.x + 10, py - (dim.h + 10))
                            } else if (vessel.upgradeMenu.wepsto[t].beam == 1) {
                                canvas_context.fillText("Fire Chance: " + Math.floor((vessel.upgradeMenu.wepsto[t].fireChance / 300) * 100) + "%", rect.x + 10, py - (dim.h + 10))
                            } else if (vessel.upgradeMenu.wepsto[t].sap >= 1) {
                                canvas_context.fillText("Fire Chance: " + Math.floor((vessel.upgradeMenu.wepsto[t].fireChance / 300) * 100) + "% Steals Shields", rect.x + 10, py - (dim.h + 10))
                            } else if (vessel.upgradeMenu.wepsto[t].crew > 1) {
                                canvas_context.fillText("Fire Chance: " + Math.floor((vessel.upgradeMenu.wepsto[t].fireChance / 300) * 100) + "% Crew Damage: " + vessel.upgradeMenu.wepsto[t].crew + "x", rect.x + 10, py - (dim.h + 10))
                            } else {
                                canvas_context.fillText("Fire Chance: " + Math.floor((vessel.upgradeMenu.wepsto[t].fireChance / 300) * 100) + "%", rect.x + 10, py - (dim.h + 10))
                            }
                            py += 13
                            if (vessel.upgradeMenu.wepsto[t].secretDouble > 0) {
                                canvas_context.fillText("Breaks " + Math.floor((vessel.upgradeMenu.wepsto[t].secretDouble / 1) * 1) + " Shield", rect.x + 10, py - (dim.h + 10))

                            } else {
                                canvas_context.fillText("Breaks " + Math.floor((vessel.upgradeMenu.wepsto[t].double / 1) * 1) + " Shield", rect.x + 10, py - (dim.h + 10))

                            }
                            // canvas_context.fillText(, rect.x + 10, py-  (dim.h + 10))
                            // py += 12
                            // canvas_context.fillText(this.text4, rect.x + 10, py)
                        }
                    }

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
                //////////////////////////////////////////////////////console.log(dim)
                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - (dim.h + 20), dim.w + 20, dim.h + 20, "#55555588")
                rect.draw()
                canvas_context.fillStyle = "white"
                let py = TIP_engine.y - (dim.h + 5)
                canvas_context.fillText(this.text1, rect.x + 10, py)
                py += 12
                canvas_context.fillText(this.text2, rect.x + 10, py)
                py += 12
                canvas_context.fillText(this.text3, rect.x + 10, py)
                py += 12
                canvas_context.fillText(this.text4, rect.x + 10, py)
            }
            if (vessel.upgradeMenu.button.isPointInside(TIP_engine)) {
                this.text1 = "Upgrade Menu"
                let dim = {}
                canvas_context.font = "12px comic sans ms"
                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                dim.h = 10
                //////////////////////////////////////////////////////console.log(dim)
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
            if (vessel.teleButton.isPointInside(TIP_engine)) {
                this.text1 = "Teleport Crew"
                let dim = {}
                canvas_context.font = "12px comic sans ms"
                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                dim.h = 10
                //////////////////////////////////////////////////////console.log(dim)
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
                this.text2 = `Charge: ${Math.round(vessel.shield.charge)}/${vessel.shield.maxout}`
                this.text3 = "Current: " + vessel.shield.state
                this.text4 = "Max: " + vessel.shield.level
                let dim = {}
                canvas_context.font = "12px comic sans ms"
                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                dim.h = 44
                //////////////////////////////////////////////////////console.log(dim)
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


            if (vessel.UI.systems[5].sto >= 4) {

                if (enemy.healthbar.isPointInside(TIP_engine)) {
                    this.text1 = "Enemy Hull"
                    this.text2 = `Integrity: ${Math.ceil(enemy.hull)}/${Math.ceil(enemy.maxhull)}`
                    this.text3 = "Current Shield: " + enemy.shield.state
                    this.text4 = "Max: " + enemy.shield.level
                    let dim = {}
                    canvas_context.font = "12px comic sans ms"
                    dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                    dim.h = 36
                    //////////////////////////////////////////////////////console.log(dim)
                    let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
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

            if (vessel.healthbar.isPointInside(TIP_engine)) {
                this.text1 = "Hull"
                this.text2 = `Integrity: ${Math.floor(vessel.hull)}/${Math.floor(vessel.maxhull)}`
                this.text3 = "Current: " + vessel.shield.state
                this.text4 = "Max: " + vessel.shield.level
                let dim = {}
                canvas_context.font = "12px comic sans ms"
                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                dim.h = 24
                //////////////////////////////////////////////////////console.log(dim)
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

            // let sys = ["medbay", "weapon", "shield", "helm", "oxygen", "security", "engine", "special", "empty"]
            if (vessel.upgradeMenu.open == 1) {
                return
            }
            for (let t = 0; t < enemy.blocks.length; t++) {
                for (let k = 0; k < enemy.blocks[t].length; k++) {
                    if (enemy.blocks[t][k].marked == 1) {
                        this.text1 = ''
                        this.text3 = ''
                        if (enemy.blocks[t][k].isPointInside(TIP_engine)) {
                            if (enemy.blocks[t][k].weapon == 1) {
                                this.text1 += "Weapons"



                                if (vessel.UI.systems[5].sto >= 2) {
                                    this.text2 = `Hull: ${Math.floor(enemy.blocks[t][k].integrity)}, Air: ${Math.round(enemy.blocks[t][k].air)}`
                                } else {
                                    this.text2 = ''
                                }

                                if (vessel.UI.systems[5].sto <= 4) {
                                    this.text3 = ''
                                } else {
                                    this.text3 = `Power ${enemy.UI.systems[1].sto}`
                                }

                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                if (vessel.UI.systems[5].sto > 4) {
                                    dim.h = 24 + 12
                                }
                                if (vessel.UI.systems[5].sto < 2) {
                                    dim.h = 24 - 12
                                }
                                //////////////////////////////////////////////////////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                                rect.draw()
                            }
                            if (enemy.blocks[t][k].engine == 1) {
                                this.text1 += "Engines"

                                if (vessel.UI.systems[5].sto >= 2) {
                                    this.text2 = `Hull: ${Math.floor(enemy.blocks[t][k].integrity)}, Air: ${Math.round(enemy.blocks[t][k].air)}`
                                } else {
                                    this.text2 = ''
                                }

                                if (vessel.UI.systems[5].sto <= 4) {
                                    this.text3 = ''
                                } else {
                                    this.text3 = `Power ${enemy.UI.systems[6].sto}`
                                }

                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                if (vessel.UI.systems[5].sto > 4) {
                                    dim.h = 24 + 12
                                }
                                if (vessel.UI.systems[5].sto < 2) {
                                    dim.h = 24 - 12
                                }
                                //////////////////////////////////////////////////////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                                rect.draw()
                            }
                            if (enemy.blocks[t][k].medbay == 1) {
                                this.text1 += "Medbay"

                                if (vessel.UI.systems[5].sto >= 2) {
                                    this.text2 = `Hull: ${Math.floor(enemy.blocks[t][k].integrity)}, Air: ${Math.round(enemy.blocks[t][k].air)}`
                                } else {
                                    this.text2 = ''
                                }

                                if (vessel.UI.systems[5].sto <= 4) {
                                    this.text3 = ''
                                } else {
                                    this.text3 = `Power ${enemy.UI.systems[0].sto}`
                                }

                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                if (vessel.UI.systems[5].sto > 4) {
                                    dim.h = 24 + 12
                                }
                                if (vessel.UI.systems[5].sto < 2) {
                                    dim.h = 24 - 12
                                }
                                // //////////////////////////////////////////////////////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                                rect.draw()
                            }
                            if (enemy.blocks[t][k].helm == 1) {
                                this.text1 += "Helm"

                                if (vessel.UI.systems[5].sto >= 2) {
                                    this.text2 = `Hull: ${Math.floor(enemy.blocks[t][k].integrity)}, Air: ${Math.round(enemy.blocks[t][k].air)}`
                                } else {
                                    this.text2 = ''
                                }

                                if (vessel.UI.systems[5].sto <= 4) {
                                    this.text3 = ''
                                } else {
                                    this.text3 = `Power ${enemy.UI.systems[3].sto}`
                                }

                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                if (vessel.UI.systems[5].sto > 4) {
                                    dim.h = 24 + 12
                                }
                                if (vessel.UI.systems[5].sto < 2) {
                                    dim.h = 24 - 12
                                }
                                //////////////////////////////////////////////////////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                                rect.draw()
                            }
                            if (enemy.blocks[t][k].shield == 1) {
                                if (this.text1.length < 3) {
                                } else {
                                    this.text1 += '-'
                                }
                                this.text1 += "Shield"

                                if (vessel.UI.systems[5].sto >= 2) {
                                    this.text2 = `Hull: ${Math.floor(enemy.blocks[t][k].integrity)}, Air: ${Math.round(enemy.blocks[t][k].air)}`
                                } else {
                                    this.text2 = ''
                                }

                                if (vessel.UI.systems[5].sto <= 4) {
                                    this.text3 = ''
                                } else {
                                    this.text3 = `Power ${enemy.UI.systems[2].sto}`
                                }

                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                if (vessel.UI.systems[5].sto > 4) {
                                    dim.h = 24 + 12
                                }
                                if (vessel.UI.systems[5].sto < 2) {
                                    dim.h = 24 - 12
                                }
                                //////////////////////////////////////////////////////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                                rect.draw()
                            }
                            if (enemy.blocks[t][k].empty == 1) {
                                this.text1 += "Empty"

                                if (vessel.UI.systems[5].sto >= 2) {
                                    this.text2 = `Hull: ${Math.floor(enemy.blocks[t][k].integrity)}, Air: ${Math.round(enemy.blocks[t][k].air)}`
                                } else {
                                    this.text2 = ''
                                }

                                if (vessel.UI.systems[5].sto <= 4) {
                                    this.text3 = ''
                                } else {
                                    this.text3 = `Power ${enemy.UI.systems[8].sto}`
                                }

                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                if (vessel.UI.systems[5].sto > 4) {
                                    dim.h = 24 + 12
                                }
                                if (vessel.UI.systems[5].sto < 2) {
                                    dim.h = 24 - 12
                                }
                                //////////////////////////////////////////////////////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                                rect.draw()
                            }
                            if (enemy.blocks[t][k].special == 1) {
                                this.text1 += "Teleporter"

                                if (vessel.UI.systems[5].sto >= 2) {
                                    this.text2 = `Hull: ${Math.floor(enemy.blocks[t][k].integrity)}, Air: ${Math.round(enemy.blocks[t][k].air)}`
                                } else {
                                    this.text2 = ''
                                }

                                if (vessel.UI.systems[5].sto <= 4) {
                                    this.text3 = ''
                                } else {
                                    this.text3 = `Power ${enemy.UI.systems[8].sto}`
                                }

                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                if (vessel.UI.systems[5].sto > 4) {
                                    dim.h = 24 + 12
                                }
                                if (vessel.UI.systems[5].sto < 2) {
                                    dim.h = 24 - 12
                                }
                                //////////////////////////////////////////////////////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                                rect.draw()
                            }
                            if (enemy.blocks[t][k].oxygen == 1) {
                                this.text1 += "Oxygen Systems"

                                if (vessel.UI.systems[5].sto >= 2) {
                                    this.text2 = `Hull: ${Math.floor(enemy.blocks[t][k].integrity)}, Air: ${Math.round(enemy.blocks[t][k].air)}`
                                } else {
                                    this.text2 = ''
                                }

                                if (vessel.UI.systems[5].sto <= 4) {
                                    this.text3 = ''
                                } else {
                                    this.text3 = `Power ${enemy.UI.systems[4].sto}`
                                }

                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                if (vessel.UI.systems[5].sto > 4) {
                                    dim.h = 24 + 12
                                }
                                if (vessel.UI.systems[5].sto < 2) {
                                    dim.h = 24 - 12
                                }
                                //////////////////////////////////////////////////////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                                rect.draw()
                            }
                            if (enemy.blocks[t][k].security == 1) {
                                if (this.text1.length < 3) {
                                } else {
                                    this.text1 += '-'
                                }
                                this.text1 += "Security"

                                if (vessel.UI.systems[5].sto >= 2) {
                                    this.text2 = `Hull: ${Math.floor(enemy.blocks[t][k].integrity)}, Air: ${Math.round(enemy.blocks[t][k].air)}`
                                } else {
                                    this.text2 = ''
                                }

                                if (vessel.UI.systems[5].sto <= 4) {
                                    this.text3 = ''
                                } else {
                                    this.text3 = `Power ${enemy.UI.systems[5].sto}`
                                }


                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                if (vessel.UI.systems[5].sto > 4) {
                                    dim.h = 24 + 12
                                }
                                if (vessel.UI.systems[5].sto < 2) {
                                    dim.h = 24 - 12
                                }
                                //////////////////////////////////////////////////////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                                rect.draw()
                            }

                            canvas_context.fillStyle = "white"
                            let py = TIP_engine.y + 5
                            canvas_context.fillText(this.text1, TIP_engine.x + 10, py)
                            py += 12
                            canvas_context.fillText(this.text2, TIP_engine.x + 10, py)
                            py += 12
                            canvas_context.fillText(this.text3, TIP_engine.x + 10, py)


                        }
                    }
                }
            }


            for (let t = 0; t < vessel.blocks.length; t++) {
                for (let k = 0; k < vessel.blocks[t].length; k++) {
                    if (vessel.blocks[t][k].marked == 1) {
                        if (vessel.blocks[t][k].isPointInside(TIP_engine)) {
                            if (vessel.blocks[t][k].weapon == 1) {
                                this.text1 += "Weapons"
                                if (vessel.blocks[t][k].medbay == 1) {
                                    this.text1 += "-Medbay"
                                }
                                if (vessel.blocks[t][k].shield == 1) {
                                    this.text1 += "-Shields"
                                }
                                this.text2 = `Hull: ${Math.floor(vessel.blocks[t][k].integrity)}, Air: ${Math.round(vessel.blocks[t][k].air)}`
                                this.text3 = '1'
                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                //////////////////////////////////////////////////////console.log(dim)
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
                                this.text1 += "Engines"
                                if (vessel.blocks[t][k].helm == 1) {
                                    this.text1 += "-Helm"
                                }
                                this.text2 = `Hull: ${Math.floor(vessel.blocks[t][k].integrity)}, Air: ${Math.round(vessel.blocks[t][k].air)}`
                                this.text3 = '1'
                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                //////////////////////////////////////////////////////console.log(dim)
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
                                if (vessel.blocks[t][k].oxygen == 1) {
                                    this.text1 += "-Oxygen"
                                }
                                if (vessel.blocks[t][k].helm == 1) {
                                    this.text1 += "-Helm"
                                }
                                this.text2 = `Hull: ${Math.floor(vessel.blocks[t][k].integrity)}, Air: ${Math.round(vessel.blocks[t][k].air)}`
                                this.text3 = '1'
                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                //////////////////////////////////////////////////////console.log(dim)
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

                                if (vessel.blocks[t][k].medbay == 1) {
                                    this.text1 += "-Medbay"
                                }
                                this.text2 = `Hull: ${Math.floor(vessel.blocks[t][k].integrity)}, Air: ${Math.round(vessel.blocks[t][k].air)}`
                                this.text3 = '1'
                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                //////////////////////////////////////////////////////console.log(dim)
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
                                //////////////////////////////////////////////////////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                                rect.draw()
                                canvas_context.fillStyle = "white"
                                let py = TIP_engine.y + 5
                                canvas_context.fillText(this.text1, rect.x + 10, py)
                                py += 12
                                canvas_context.fillText(this.text2, rect.x + 10, py)
                                //py += 12
                                //canvas_context.fillText(this.text3, rect.x + 10, py)
                            } else if (vessel.blocks[t][k].empty == 1) {
                                this.text1 = "Empty"
                                this.text2 = `Hull: ${Math.floor(vessel.blocks[t][k].integrity)}, Air: ${Math.round(vessel.blocks[t][k].air)}`
                                this.text3 = '1'
                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                //////////////////////////////////////////////////////console.log(dim)
                                let rect = new RectangleR(TIP_engine.x, TIP_engine.y - 10, dim.w + 20, dim.h + 20, "#55555588")
                                rect.draw()
                                canvas_context.fillStyle = "white"
                                let py = TIP_engine.y + 5
                                canvas_context.fillText(this.text1, rect.x + 10, py)
                                py += 12
                                canvas_context.fillText(this.text2, rect.x + 10, py)
                                //py += 12
                                //canvas_context.fillText(this.text3, rect.x + 10, py)
                            } else if (vessel.blocks[t][k].special == 1) {
                                this.text1 = "Teleporter"
                                this.text2 = `Hull: ${Math.floor(vessel.blocks[t][k].integrity)}, Air: ${Math.round(vessel.blocks[t][k].air)}`
                                this.text3 = '1'
                                let dim = {}
                                canvas_context.font = "12px comic sans ms"
                                dim.w = Math.max(canvas_context.measureText(this.text1).width, canvas_context.measureText(this.text2).width)
                                dim.h = 24
                                //////////////////////////////////////////////////////console.log(dim)
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
                                //////////////////////////////////////////////////////console.log(dim)
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
                                //////////////////////////////////////////////////////console.log(dim)
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

    let starss = []
    let worldroot = new Point(0, 0)
    let tut = -1
    let tutButton = new RectangleR(100 * globalRat, 600 * globalRat, 100 * globalRat, 50 * globalRat, "#FF000044")
    let modeButton = new RectangleR(100 * globalRat, 650 * globalRat, 150 * globalRat, 50 * globalRat, "#FF000044")
    let crabButton = new RectangleR(900 * globalRat, 600 * globalRat, 150 * globalRat, 50 * globalRat, "#FF000044")
    let energyButton = new RectangleR((900 * globalRat)-(150 * globalRat), 600 * globalRat, 150 * globalRat, 50 * globalRat, "#FF000044")
    let shieldButton = new RectangleR(900 * globalRat, 550 * globalRat, 200 * globalRat, 50 * globalRat, "#FF000044")
    let fireButton = new RectangleR(900 * globalRat, 500 * globalRat, 200 * globalRat, 50 * globalRat, "#FF000044")
    let beanButton = new RectangleR(1100 * globalRat, 500 * globalRat, 120 * globalRat, 50 * globalRat, "#FF000044")
    let fishButton = new RectangleR(900 * globalRat, 450 * globalRat, 150 * globalRat, 50 * globalRat, "#FF000044")
    let combButton = new RectangleR(1050 * globalRat, 450 * globalRat, 150 * globalRat, 50 * globalRat, "#FF000044")
    let normButton = new RectangleR(900 * globalRat, 400 * globalRat, 200 * globalRat, 50 * globalRat, "#FF000044")
    let mumButton = new RectangleR(1100 * globalRat, 400 * globalRat, 140 * globalRat, 50 * globalRat, "#FF000044")
    let joButton = new RectangleR((900 * globalRat) - (140 * globalRat), 650 * globalRat, 140 * globalRat, 50 * globalRat, "#FF000044")
    let numButton = new RectangleR(900 * globalRat, 650 * globalRat, 200 * globalRat, 50 * globalRat, "#FF000044")
    let plantButton = new RectangleR(1100 * globalRat, 650 * globalRat, 150 * globalRat, 50 * globalRat, "#FF000044")
    let gumButton = new RectangleR(1050 * globalRat, 600 * globalRat, 160 * globalRat, 50 * globalRat, "#FF000044")
    let blobButton = new RectangleR(1100 * globalRat, 550 * globalRat, 140 * globalRat, 50 * globalRat, "#FF000044")
    let stframe = 0
    let starfirst = 0
    canvas_context.clearRect(0, 0, canvas.width, canvas.height)  // refreshes the image
    function main() {
        wodopomsong.play()
        if (starfirst == 0) {
            starss = []
            starcanvas_context.clearRect(0, 0, starcanvas.width, starcanvas.height)
            for (let t = 0; t < 500; t++) {
                let starb = new StarX(Math.random() * 1280, Math.random() * 720, getRandomLightColor(), Math.random() + 1, Math.random() * Math.PI * 2)
                starb.draw()
                starss.push(starb)
                if (Math.random() < .05) {

                    let starb = new StarX(Math.random() * 1280, Math.random() * 720, getRandomLightColor(), Math.random() * 5, Math.random() * Math.PI * 2)
                    starb.draw()
                    starss.push(starb)
                }
                if (Math.random() < .01) {

                    let starb = new StarX(Math.random() * 1280, Math.random() * 720, getRandomLightColor(), Math.random() * 10, Math.random() * Math.PI * 2)
                    starb.draw()
                    starss.push(starb)
                }
            }
            starfirst = 1
            for (let t = 0; t < starss.length; t++) {
                starss[t].draw()
            }
        }
        // canvas_context.drawImage(starcanvas, 0, 0, 640, 360, 0, 0, 1920, 1080)
        if (vessel.hull <= 0) {
            vessel = new Ship(0)
            start = 0
        }
        // CanvasC
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
            if (tut == 1) {
                stframe += 1
                canvas_context.clearRect(0, 0, canvas.width, canvas.height)  // refreshes the image
                canvas_context.drawImage(tut1, (tut1.width / 116) * (stframe % 116), 0, tut1.width / 116, tut1.height, 50, 0, tut1.width / 116, tut1.height)
                canvas_context.drawImage(tut2, (tut2.width / 88) * (stframe % 88), 0, tut2.width / 88, tut2.height, 50, tut1.height + 20, tut2.width / 88, tut2.height)
                canvas_context.drawImage(tut3, (tut3.width / 83) * (stframe % 83), 0, tut3.width / 83, tut3.height, 50, tut1.height + tut2.height + 40, tut3.width / 83, tut3.height)
                // canvas_context.drawImage(tut4, (tut4.width/55)*(stframe%55), 0, tut4.width/55, tut4.height,50, tut1.height+tut2.height+40, tut4.width/55, tut4.height)

                canvas_context.font = "20px comic sans ms"
                canvas_context.fillStyle = "white"
                canvas_context.fillText("Control the power levels of your ship systems with the ship power menu.", 350, 150)
                canvas_context.fillText("The button with a wrench on it is your inventory and upgrade menu.", 350, 180)
                canvas_context.fillText("Click to select your crew, click again to direct them to move.", 350, 320)
                canvas_context.fillText("You can open doors and airlocks by clicking on them.", 350, 500)


                canvas_context.fillText("Click to advance.", 1100, 680)
            } else if (tut == 2) {
                stframe += 1
                canvas_context.clearRect(0, 0, canvas.width, canvas.height)  // refreshes the image
                canvas_context.drawImage(tut4, (tut4.width / 55) * (stframe % 55), 0, tut4.width / 55, tut4.height, 50, 0, tut4.width / 55, tut4.height)
                canvas_context.drawImage(tut5, (tut5.width / 53) * (stframe % 53), 0, tut5.width / 53, tut5.height, 100, tut4.height + 10, tut5.width / 53, tut5.height)
                canvas_context.drawImage(tut6, (tut6.width / 105) * (stframe % 105), 0, tut6.width / 105, tut6.height, -50, tut4.height + 10 + tut5.height + 10, tut6.width / 105, tut6.height)

                canvas_context.font = "20px comic sans ms"
                canvas_context.fillStyle = "white"
                canvas_context.fillText("Put crew in the weapons room (Magenta) to charge weapons to fire.", 350, 150)
                canvas_context.fillText("Put crew in the shield room (Cyan) to charge shields for protection.", 350, 350)
                canvas_context.fillText("Put crew in the engine room and helm", 620, 550)
                canvas_context.fillText("(Orange and Yellow) to increase dodge.", 620, 580)


                canvas_context.fillText("Click to advance.", 1100, 680)
            } else if (tut == 3) {
                canvas_context.clearRect(0, 0, canvas.width, canvas.height)  // refreshes the image
                canvas_context.font = "20px comic sans ms"
                canvas_context.fillStyle = "white"
                canvas_context.fillText("General tips:", 50, 50)
                canvas_context.fillText("Holding shift (or z) and mousing over almost anything in the game will give you more information.", 100, 100)
                canvas_context.fillText("The oxygen system is dark blue, if it breaks put a crewmen inside to fix it soon, or your ship will depressurize.", 100, 130)
                canvas_context.fillText("Weapons are hotkeyed to the number keys in the order they appear at the bottom of the screen in combat.", 100, 160)
                canvas_context.fillText("Holding a weapon's select key and clicking the enemy ship will set the autofire target for that weapon.", 100, 190)
                canvas_context.fillText("You can turn autofire on and off with right-click.", 100, 220)
                canvas_context.fillText("Clicking on the title screen will start the game at the star-map.", 100, 250)
                canvas_context.fillText("Clicking a star with a green link in the star-map will jump you to combat.", 100, 280)
                canvas_context.fillText("Clicking the crew healthbars whild holding z will open the gear menu.", 100, 310)

                canvas_context.fillText("Specific tips:", 50, 450)
                canvas_context.fillText("Holding shift (or z) over the crew health-plate (found in the top left during combat), will tell you their skills and job ranking.", 100, 500)
                canvas_context.fillText("Try not to run out of bombs, you'll regret it.", 100, 530)
                canvas_context.fillText("A fire on your ship can be vented using the airlocks at each end of the ship.", 100, 560)
                canvas_context.fillText("Holes in your ship must be fixed by a crewmen by placing them on top of them.", 100, 590)
                canvas_context.fillText("The medbay (green) can heal your crew, if it is powered on.", 100, 620)
                canvas_context.fillText("Remember to upgrade your ship with the scrap you get from combat.", 100, 650)
                canvas_context.fillText("You will need to upgrade your teleporter at least once to use it.", 100, 680)

                canvas_context.fillText("Click to advance.", 1100, 680)

            } else {
                canvas_context.drawImage(title, 0, 0, 1280, 720, 0, 0, 1920, 1080)
                tutButton.draw()
                canvas_context.font = "20px comic sans ms"
                canvas_context.fillStyle = "white"
                canvas_context.fillText("Tutorial", tutButton.x + 10, tutButton.y + 30)
                modeButton.draw()
                canvas_context.font = "20px comic sans ms"
                canvas_context.fillStyle = "white"
                if (mode == 1) {
                    canvas_context.fillText(`Mode: Run!`, modeButton.x + 10, modeButton.y + 30)
                }
                if (mode == -1) {
                    canvas_context.fillText(`Mode: Explore`, modeButton.x + 10, modeButton.y + 30)
                    canvas_context.fillText(`In explore mode, use c+click and e+click to collapse and expand the starmap`, modeButton.x + 30, modeButton.y - 180)
                }

                crabButton.draw()

                canvas_context.font = "20px comic sans ms"
                canvas_context.fillStyle = "white"
                canvas_context.fillText("Play As Crabs", crabButton.x + 10, crabButton.y + 30)

                energyButton.draw()

                canvas_context.font = "20px comic sans ms"
                canvas_context.fillStyle = "white"
                canvas_context.fillText("Play As Energy", energyButton.x + 10, energyButton.y + 30)

                gumButton.draw()

                canvas_context.font = "20px comic sans ms"
                canvas_context.fillStyle = "white"
                canvas_context.fillText("Play As Gumnut", gumButton.x + 10, gumButton.y + 30)

                numButton.draw()

                canvas_context.font = "20px comic sans ms"
                canvas_context.fillStyle = "white"
                canvas_context.fillText("Play As Numberfolk", numButton.x + 10, numButton.y + 30)
                plantButton.draw()
                canvas_context.font = "20px comic sans ms"
                canvas_context.fillStyle = "white"
                canvas_context.fillText("Play As Plants", plantButton.x + 10, plantButton.y + 30)

                blobButton.draw()
                canvas_context.font = "20px comic sans ms"
                canvas_context.fillStyle = "white"
                canvas_context.fillText("Play As Blobs", blobButton.x + 10, blobButton.y + 30)

                shieldButton.draw()
                canvas_context.font = "18px comic sans ms"
                canvas_context.fillStyle = "white"
                canvas_context.fillText("Play As Shieldabeasts", shieldButton.x + 10, shieldButton.y + 30)

                fireButton.draw()
                canvas_context.font = "18px comic sans ms"
                canvas_context.fillStyle = "white"
                canvas_context.fillText("Play As Fireknives", fireButton.x + 10, fireButton.y + 30)
                beanButton.draw()
                canvas_context.font = "17px comic sans ms"
                canvas_context.fillStyle = "white"
                canvas_context.fillText("Play As Beans", beanButton.x + 8, beanButton.y + 30)

                fishButton.draw()
                canvas_context.font = "18px comic sans ms"
                canvas_context.fillStyle = "white"
                canvas_context.fillText("Play As Fish", fishButton.x + 10, fishButton.y + 30)




                combButton.draw()
                canvas_context.font = "18px comic sans ms"
                canvas_context.fillStyle = "white"
                canvas_context.fillText("Play As Hops", combButton.x + 10, combButton.y + 30)

                normButton.draw()
                canvas_context.font = "18px comic sans ms"
                canvas_context.fillStyle = "white"
                canvas_context.fillText("Play As Pomao's Crew", normButton.x + 10, normButton.y + 30)

                mumButton.draw()
                canvas_context.font = "18px comic sans ms"
                canvas_context.fillStyle = "white"
                canvas_context.fillText("Play As Mummies", mumButton.x + 10, mumButton.y + 30)

                joButton.draw()
                canvas_context.font = "18px comic sans ms"
                canvas_context.fillStyle = "white"
                canvas_context.fillText("Play As Echomites", joButton.x + 10, joButton.y + 30)


            }


            // canvas_context.drawImage(starcanvas, 0, 0, 640, 360, 0, 0, 1920, 1080)
            // shipcanvas_context.drawImage(canvas, 0,0,1280,720,0,0,1280,720)
            // canvas_context.clearRect(0, 0, canvas.width, canvas.height)  // refreshes the image
            // canvas_context.drawImage(shipcanvas, 0,0,1280,720,0,0,1920,1080)
            // shipcanvas_context.clearRect(0,0,1280,720)
            return
        } else if (start == 1) {
            canvas_context.clearRect(0, 0, canvas.width, canvas.height)  // refreshes the image


            if (starFirst == 0) {
                starFirst = 1

                vessel.web = [stars.stars[0].body]
            }
            canvas_context.drawImage(starcanvas, 0, 0, 640, 360, 0, 0, 1920, 1080)
            canvas_context.drawImage(starcanvas, 0, 0, 640, 360, 0, 0, 1919, 1079)
            var grd = canvas_context.createLinearGradient(0, 0, stars.stars[vessel.star].body.x, 0);
            grd.addColorStop(0, "#888888");
            // grd.addColorStop(.5, "#88888888");
            grd.addColorStop(1, "#00000000");
            canvas_context.fillStyle = grd;
            if (mode == 1) {
                canvas_context.fillRect(0, 0, stars.stars[vessel.star].body.x, 1080);
            }

            stars.draw()
            vessel.draw()
            labels.draw()
            let wet = 0
            for (let t = 0; t < vessel.guys.length; t++) {
                if (vessel.guys[t].hostile == 1) {
                    wet = 1
                }
            }
            if (wet == 1) {

                // canvas_context.drawImage(intruderimg, 0, 0, intruderimg.width, intruderimg.height, 0, 0, 700, 250)
            }
            if (mode == 1) {

            } else {

                if (stars.collapsed == 1) {
                    let cango = new CircleR(stars.stars[vessel.star].body.x, stars.stars[vessel.star].body.y, (Math.sqrt((vessel.UI.systems[6].max) + 1) + 1) * (30 - (10 - vessel.UI.systems[6].max)), "#00ff0044")
                    cango.draw()
                } else {
                    let cango = new CircleR(stars.stars[vessel.star].body.x, stars.stars[vessel.star].body.y, 20 * (Math.sqrt((vessel.UI.systems[6].max) + 1) + 1) * (30 - (10 - vessel.UI.systems[6].max)), "#00ff0044")
                    cango.draw()
                }
            }
            // }
            // shipcanvas_context.drawImage(canvas, 0,0,1280,720,0,0,1280,720)
            // canvas_context.clearRect(0, 0, canvas.width, canvas.height)  // refreshes the image
            // canvas_context.drawImage(shipcanvas, 0,0,1280,720,0,0,1920,1080)
            // shipcanvas_context.clearRect(0,0,1280,720)
        } else {

            // enemy = new EnemyShip(Math.floor(Math.random()*2))
            canvas_context.clearRect(0, 0, canvas.width, canvas.height)  // refreshes the image
            if (vessel.shake > 0) {
                vessel.shake--
                canvas_context.drawImage(starcanvas, 0, 0, 640, 360, 0, 0, 1920, 1080)
                canvas_context.drawImage(starcanvas, 0, 0, 640, 360, 0, 0, 1919, 1079)
                enemy.draw()
                vessel.draw()

                let wet = 0
                for (let t = 0; t < vessel.guys.length; t++) {
                    if (vessel.guys[t].hostile == 1) {
                        wet = 1
                    }
                }
                if (wet == 1) {

                    // canvas_context.drawImage(intruderimg, 0, 0, intruderimg.width, intruderimg.height, 0, 0, 700, 250)
                }

                canvas_context.drawImage(starcanvas, 0, 0, 640, 360, 0, 0, 1919, 1079)
                if (enemy.supratiles) {
                    if (enemy.hull > 0) {

                        for (let w = 0; w < vessel.weapons.length; w++) {
                            if (enemy.supratiles.includes(vessel.weapons[w].metatarget)) {
                                let bead = new CircleR(vessel.weapons[w].metatarget.x + (vessel.weapons[w].metatarget.width * .5), vessel.weapons[w].metatarget.y + (vessel.weapons[w].metatarget.height * .5), 10, "black")
                                bead.draw()
                                // let beadX = new X(vessel.weapons[w].metatarget.x+(vessel.weapons[w].metatarget.width*.5), vessel.weapons[w].metatarget.y+(vessel.weapons[w].metatarget.height*.5), "yellow", 10)
                                // beadX.draw()
                                canvas_context.fillStyle = "yellow"
                                canvas_context.font = "10px comic sans ms"
                                canvas_context.fillText(w + 1, bead.x - 3, bead.y + 3)
                            }
                        }
                    }
                }
                for (let w = 0; w < enemy.weapons.length; w++) {
                    enemy.weapons[w].work()
                }
                vessel.shaker()
                vessel.UIdraw()
                labels.draw()
                // shipcanvas_context.drawImage(canvas, 0,0,1280,720,0,0,1280,720)
                // canvas_context.clearRect(0, 0, canvas.width, canvas.height)  // refreshes the image
                // canvas_context.drawImage(shipcanvas, 0,0,1280,720,0,0,1920,1080)
                // shipcanvas_context.clearRect(0,0,1280,720)
            } else {
                canvas_context.drawImage(starcanvas, 0, 0, 640, 360, 0, 0, 1920, 1080)
                canvas_context.drawImage(starcanvas, 0, 0, 640, 360, 0, 0, 1919, 1079)
                enemy.draw()
                vessel.draw()

                let wet = 0
                for (let t = 0; t < vessel.guys.length; t++) {
                    if (vessel.guys[t].hostile == 1) {
                        wet = 1
                    }
                }
                if (wet == 1) {

                    canvas_context.drawImage(intruderimg, 0, 0, intruderimg.width, intruderimg.height, 650, 150, 150, 64)
                }
                for (let t = 0; t < vessel.upgradeMenu.wepsto.length; t++) {
                    if (vessel.upgradeMenu.wepsto[t].crewType != -1) {
                        vessel.guys.push(new Guy(vessel.supratiles[Math.floor(Math.random() * vessel.supratiles.length)], vessel.upgradeMenu.wepsto[t].crewType))
                        vessel.upgradeMenu.wepsto[vessel.upgradeMenu.wepsto.indexOf(vessel.upgradeMenu.wepsto[t])] = new Weapon(-1)
                        // return
                    }
                }
                if (enemy.supratiles) {
                    if (enemy.hull > 0) {
                        for (let w = 0; w < vessel.weapons.length; w++) {
                            if (enemy.supratiles.includes(vessel.weapons[w].metatarget)) {
                                let bead = new CircleR(vessel.weapons[w].metatarget.x + (vessel.weapons[w].metatarget.width * .5), vessel.weapons[w].metatarget.y + (vessel.weapons[w].metatarget.height * .5), 10, "black")
                                bead.draw()
                                // let beadX = new X(vessel.weapons[w].metatarget.x+(vessel.weapons[w].metatarget.width*.5), vessel.weapons[w].metatarget.y+(vessel.weapons[w].metatarget.height*.5), "yellow", 10)
                                // beadX.draw()

                                canvas_context.fillStyle = "yellow"
                                canvas_context.font = "10px comic sans ms"
                                canvas_context.fillText(w + 1, bead.x - 3, bead.y + 3)

                            }
                        }
                    }
                }
                for (let w = 0; w < enemy.weapons.length; w++) {
                    enemy.weapons[w].work()
                }

                vessel.UIdraw()
                labels.draw()
                // shipcanvas_context.drawImage(canvas, 0,0,1280,720,0,0,1280,720)
                // canvas_context.clearRect(0, 0, canvas.width, canvas.height)  // refreshes the image
                // canvas_context.drawImage(shipcanvas, 0,0,1280,720,0,0,1920,1080)
                // shipcanvas_context.clearRect(0,0,1280,720)
            }
        }

    }

})
