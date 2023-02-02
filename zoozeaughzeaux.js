
window.addEventListener('DOMContentLoaded', (event) => {

    function empty() { }

    let NODESIZE = 4
    let endPoint = {}

    let rectstart = {}
    rectstart.x = 0
    rectstart.y = 0
    let selectrect = {}
    selectrect.x = 0
    selectrect.y = 0
    selectrect.width = 0
    selectrect.height = 0
    selectrect.color = "transparent"
    selectrect.draw = empty
    selectrect.isPointInside = empty

    // let interrogna = new Image()
    // interrogna.src = 'interrogna.png'

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
    const gamepadAPI = {
        controller: {},
        turbo: true,
        connect: function (evt) {
            if (navigator.getGamepads()[0] != null) {
                gamepadAPI.controller = navigator.getGamepads()[0]
                gamepadAPI.turbo = true;
            } else if (navigator.getGamepads()[1] != null) {
                gamepadAPI.controller = navigator.getGamepads()[0]
                gamepadAPI.turbo = true;
            } else if (navigator.getGamepads()[2] != null) {
                gamepadAPI.controller = navigator.getGamepads()[0]
                gamepadAPI.turbo = true;
            } else if (navigator.getGamepads()[3] != null) {
                gamepadAPI.controller = navigator.getGamepads()[0]
                gamepadAPI.turbo = true;
            }
            for (let i = 0; i < gamepads.length; i++) {
                if (gamepads[i] === null) {
                    continue;
                }
                if (!gamepads[i].connected) {
                    continue;
                }
            }
        },
        disconnect: function (evt) {
            gamepadAPI.turbo = false;
            delete gamepadAPI.controller;
        },
        update: function () {
            gamepadAPI.controller = navigator.getGamepads()[0]
            gamepadAPI.buttonsCache = [];// clear the buttons cache
            for (var k = 0; k < gamepadAPI.buttonsStatus.length; k++) {// move the buttons status from the previous frame to the cache
                gamepadAPI.buttonsCache[k] = gamepadAPI.buttonsStatus[k];
            }
            gamepadAPI.buttonsStatus = [];// clear the buttons status
            var c = gamepadAPI.controller || {}; // get the gamepad object
            var pressed = [];
            if (c.buttons) {
                for (var b = 0, t = c.buttons.length; b < t; b++) {// loop through buttons and push the pressed ones to the array
                    if (c.buttons[b].pressed) {
                        pressed.push(gamepadAPI.buttons[b]);
                    }
                }
            }
            var axes = [];
            if (c.axes) {
                for (var a = 0, x = c.axes.length; a < x; a++) {// loop through axes and push their values to the array
                    axes.push(c.axes[a].toFixed(2));
                }
            }
            gamepadAPI.axesStatus = axes;// assign received values
            gamepadAPI.buttonsStatus = pressed;
            // //////console.log(pressed); // return buttons for debugging purposes
            return pressed;
        },
        buttonPressed: function (button, hold) {
            var newPress = false;
            for (var i = 0, s = gamepadAPI.buttonsStatus.length; i < s; i++) {// loop through pressed buttons
                if (gamepadAPI.buttonsStatus[i] == button) {// if we found the button we're looking for...
                    newPress = true;// set the boolean variable to true
                    if (!hold) {// if we want to check the single press
                        for (var j = 0, p = gamepadAPI.buttonsCache.length; j < p; j++) {// loop through the cached states from the previous frame
                            if (gamepadAPI.buttonsCache[j] == button) { // if the button was already pressed, ignore new press
                                newPress = false;
                            }
                        }
                    }
                }
            }
            return newPress;
        },
        buttons: [
            'A', 'B', 'X', 'Y', 'LB', 'RB', 'Left-Trigger', 'Right-Trigger', 'Back', 'Start', 'Axis-Left', 'Axis-Right', 'DPad-Up', 'DPad-Down', 'DPad-Left', 'DPad-Right', "Power"
        ],
        buttonsCache: [],
        buttonsStatus: [],
        axesStatus: []
    };
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
        draw3() {
            let linewidthstorage = canvas_context.lineWidth
            canvas_context.strokeStyle = this.color
            canvas_context.lineWidth = this.width
            canvas_context.beginPath()
            canvas_context.moveTo(this.object.z, this.object.y)
            canvas_context.lineTo(this.target.z, this.target.y)
            canvas_context.stroke()
            canvas_context.lineWidth = linewidthstorage
        }
    }
    class TileLineOP {
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
            let linewidthstorage = map_context.lineWidth
            map_context.strokeStyle = this.color
            map_context.lineWidth = this.width
            map_context.beginPath()
            map_context.moveTo(this.object.x, this.object.y)
            map_context.lineTo(this.target.x, this.target.y)
            map_context.stroke()
            map_context.lineWidth = linewidthstorage
        }
        draw3() {
            let linewidthstorage = canvas_context.lineWidth
            canvas_context.strokeStyle = this.color
            canvas_context.lineWidth = this.width
            canvas_context.beginPath()
            canvas_context.moveTo(this.object.z, this.object.y)
            canvas_context.lineTo(this.target.z, this.target.y)
            canvas_context.stroke()
            canvas_context.lineWidth = linewidthstorage
        }
    }
    class xTileLineOP {
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
            // let linewidthstorage = map_context.lineWidth
            map_context.strokeStyle = this.color
            map_context.moveTo(this.object.x, this.object.y)
            map_context.lineTo(this.target.x, this.target.y)
            // map_context.lineWidth = linewidthstorage
        }
        draw3() {
            let linewidthstorage = canvas_context.lineWidth
            canvas_context.strokeStyle = this.color
            canvas_context.lineWidth = this.width
            canvas_context.beginPath()
            canvas_context.moveTo(this.object.z, this.object.y)
            canvas_context.lineTo(this.target.z, this.target.y)
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
    class Circle {
        constructor(x, y, radius, color, xmom = 0, ymom = 0, friction = 1, reflect = 0, strokeWidth = 0, strokeColor = "transparent") {
            this.x = x
            this.y = y
            this.ox = x
            this.oy = y
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
            this.sxmom = 0
            this.symom = 0
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
                //////console.log("The circle is below a radius of 0, and has not been drawn. The circle is:", this)
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
        smove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.sxmom > 0) {
                        this.sxmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.symom > 0) {
                        this.symom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.sxmom < 0) {
                        this.sxmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.symom < 0) {
                        this.symom *= -1
                    }
                }
            }
            this.x += this.sxmom
            this.y += this.symom
            this.sxmom *= .97
            this.symom *= .97
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
    class TileCircle {
        constructor(x, y, radius, color, xmom = 0, ymom = 0, friction = 1, reflect = 0, strokeWidth = 6, strokeColor = "transparent") {
            this.x = x
            this.y = y
            this.ox = x
            this.oy = y
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
            this.sxmom = 0
            this.symom = 0
            this.friction = friction
            this.reflect = reflect
            this.strokeWidth = strokeWidth
            this.strokeColor = strokeColor
        }
        draw() {
            map_context.lineWidth = this.strokeWidth
            map_context.strokeStyle = this.color
            map_context.beginPath();
            if (this.radius > 0) {
                map_context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)
                map_context.fillStyle = this.color
                map_context.fill()
                map_context.stroke();
            } else {
                //////console.log("The circle is below a radius of 0, and has not been drawn. The circle is:", this)
            }
        }
        sdraw() {
            map_context.lineWidth = 1
            map_context.strokeStyle = "black"
            map_context.beginPath();
            map_context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)
            map_context.fillStyle = this.color
            map_context.fill()
            map_context.stroke();

            map_context.lineWidth = 1
            map_context.strokeStyle = "black"
            map_context.beginPath();
            map_context.arc(this.x - (this.radius * .4), this.y - (this.radius * .4), this.radius * .1, 0, (Math.PI * 2), true)
            map_context.fillStyle = this.color
            map_context.fill()
            map_context.stroke();
            map_context.beginPath();
            map_context.arc(this.x + (this.radius * .4), this.y - (this.radius * .4), this.radius * .1, 0, (Math.PI * 2), true)
            map_context.fillStyle = this.color
            map_context.fill()
            map_context.stroke();
            map_context.beginPath();
            map_context.arc(this.x, this.y + (this.radius * .1), this.radius * .1, 0, (Math.PI * 1), true)
            // map_context.fillStyle = this.color
            // map_context.fill()
            map_context.stroke();



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
        smove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.sxmom > 0) {
                        this.sxmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.symom > 0) {
                        this.symom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.sxmom < 0) {
                        this.sxmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.symom < 0) {
                        this.symom *= -1
                    }
                }
            }
            this.x += this.sxmom
            this.y += this.symom
            this.sxmom *= .97
            this.symom *= .97
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
    class ContCircle {
        constructor(x, y, radius, color, xmom = 0, ymom = 0, friction = 1, reflect = 0, strokeWidth = 0, strokeColor = "transparent") {
            this.x = x
            this.y = y
            this.ox = x
            this.oy = y
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
            this.sxmom = 0
            this.symom = 0
            this.friction = friction
            this.reflect = reflect
            this.strokeWidth = strokeWidth
            this.strokeColor = strokeColor
        }
        draw(context) {
            context.lineWidth = this.strokeWidth
            context.strokeStyle = this.color
            context.beginPath();
            if (this.radius > 0) {
                context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)
                context.fillStyle = this.color
                context.fill()
                context.stroke();
            } else {
                //////console.log("The circle is below a radius of 0, and has not been drawn. The circle is:", this)
            }
        }
        sdraw() {
            map_context.lineWidth = 1
            map_context.strokeStyle = "black"
            map_context.beginPath();
            map_context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)
            map_context.fillStyle = this.color
            map_context.fill()
            map_context.stroke();

            map_context.lineWidth = 1
            map_context.strokeStyle = "black"
            map_context.beginPath();
            map_context.arc(this.x - (this.radius * .4), this.y - (this.radius * .4), this.radius * .1, 0, (Math.PI * 2), true)
            map_context.fillStyle = this.color
            map_context.fill()
            map_context.stroke();
            map_context.beginPath();
            map_context.arc(this.x + (this.radius * .4), this.y - (this.radius * .4), this.radius * .1, 0, (Math.PI * 2), true)
            map_context.fillStyle = this.color
            map_context.fill()
            map_context.stroke();
            map_context.beginPath();
            map_context.arc(this.x, this.y + (this.radius * .1), this.radius * .1, 0, (Math.PI * 1), true)
            // map_context.fillStyle = this.color
            // map_context.fill()
            map_context.stroke();



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
        smove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.sxmom > 0) {
                        this.sxmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.symom > 0) {
                        this.symom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.sxmom < 0) {
                        this.sxmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.symom < 0) {
                        this.symom *= -1
                    }
                }
            }
            this.x += this.sxmom
            this.y += this.symom
            this.sxmom *= .97
            this.symom *= .97
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
    
    class Polygon {
        constructor(x, y, size, color, sides = 3, xmom = 0, ymom = 0, angle = 0, reflect = 0) {
            if (sides < 2) {
                sides = 2
            }
            this.reflect = reflect
            this.xmom = xmom
            this.ymom = ymom
            this.body = new Circle(x, y, size - (size * .293), "transparent")
            this.x = this.body.x
            this.y = this.body.y
            this.radius = this.body.radius
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
        doesPerimeterTouch(point) { // rough approximation

            this.body.radius = this.size - (this.size * .293)
            this.x = this.body.x
            this.y = this.body.y
            this.radius = this.body.radius
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
        isPointInside(point) { // rough approximation

            this.body.radius = this.size - (this.size * .293)
            this.x = this.body.x
            this.y = this.body.y
            this.radius = this.body.radius
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
            this.x = this.body.x
            this.y = this.body.y
            this.radius = this.body.radius
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
            this.ymom += .1
            // this.xmom *= 1.001
            // this.ymom *= 1.001
            // let vec = new Vector(this.body, this.xmom, this.ymom)
            // vec.normalize(5)
            this.body.x += this.xmom
            this.body.y += this.ymom
        }
        draw() {
            this.x = this.body.x
            this.y = this.body.y
            this.radius = this.body.radius
            this.nodes = []
            this.angleIncrement = (Math.PI * 2) / this.sides
            this.body.radius = this.size - (this.size * .293)
            for (let t = 0; t < this.sides; t++) {
                let node = new TileCircle(this.body.x + (this.size * (Math.cos(this.angle))), this.body.y + (this.size * (Math.sin(this.angle))), 1, "transparent")
                node.superx = this.body.x + ((this.size * (Math.cos(this.angle)))*1.5)
                node.supery = this.body.y + ((this.size * (Math.sin(this.angle)))*1.5)
                this.nodes.push(node)
                this.angle += this.angleIncrement
            }
            map_context.strokeStyle = "white"
            map_context.fillStyle = this.color
            map_context.lineWidth = 2
            map_context.beginPath()
            map_context.moveTo(this.nodes[0].x, this.nodes[0].y)
            for (let t = 1; t < this.nodes.length; t++) {
                map_context.lineTo(this.nodes[t].x, this.nodes[t].y)
            }
            map_context.lineTo(this.nodes[0].x, this.nodes[0].y)
            map_context.fill()
            map_context.stroke()
            map_context.closePath()
        }
    }
    class ZPolygon {
        constructor(x, y, size, color, sides = 3, xmom = 0, ymom = 0, angle = 0, reflect = 0) {
            if (sides < 2) {
                sides = 2
            }
            this.reflect = reflect
            this.xmom = xmom
            this.ymom = ymom
            this.body = new Circle(x, y, size - (size * .293), "transparent")
            this.x = this.body.x
            this.y = this.body.y
            this.radius = this.body.radius
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
        doesPerimeterTouch(point) { // rough approximation

            this.body.radius = this.size - (this.size * .293)
            this.x = this.body.x
            this.y = this.body.y
            this.radius = this.body.radius
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
        isPointInside(point) { // rough approximation

            this.body.radius = this.size - (this.size * .293)
            this.x = this.body.x
            this.y = this.body.y
            this.radius = this.body.radius
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
            this.x = this.body.x
            this.y = this.body.y
            this.radius = this.body.radius
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
            this.ymom += .1
            // this.xmom *= 1.001
            // this.ymom *= 1.001
            // let vec = new Vector(this.body, this.xmom, this.ymom)
            // vec.normalize(5)
            this.body.x += this.xmom
            this.body.y += this.ymom
        }
        draw() {
            this.x = this.body.x
            this.y = this.body.y
            this.radius = this.body.radius
            this.nodes = []
            this.angleIncrement = (Math.PI * 2) / this.sides
            this.body.radius = this.size - (this.size * .293)
            for (let t = 0; t < this.sides; t++) {
                let node = new TileCircle(this.body.x + (this.size * (Math.cos(this.angle))), this.body.y + (this.size * (Math.sin(this.angle))), 1, "transparent")
                node.superx = this.body.x + ((this.size * (Math.cos(this.angle)))*1.5)
                node.supery = this.body.y + ((this.size * (Math.sin(this.angle)))*1.5)
                this.nodes.push(node)
                this.angle += this.angleIncrement
            }
            map_context.strokeStyle = "red"
            map_context.fillStyle = this.color
            map_context.lineWidth = 1
            map_context.beginPath()
            map_context.moveTo(this.nodes[0].x, this.nodes[0].y)
            for (let t = 1; t < this.nodes.length; t++) {
                map_context.lineTo(this.nodes[t].x, this.nodes[t].y)
            }
            map_context.lineTo(this.nodes[0].x, this.nodes[0].y)
            map_context.fill()
            map_context.stroke()
            map_context.closePath()
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
        ubalance() {
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
            this.body.xmom = ((this.body.xmom * 1) + xmomentumaverage) / 2
            this.body.ymom = ((this.body.ymom * 1) + ymomentumaverage) / 2
            this.anchor.xmom = ((this.anchor.xmom * 100) + xmomentumaverage) / 101
            this.anchor.ymom = ((this.anchor.ymom * 100) + ymomentumaverage) / 101
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
            var hash = '#';
            for (var i = 0; i < 6; i++) {
                hash += letters[(Math.floor(Math.random() * 12) + 4)];
            }
            var color = new Color(hash, 55 + Math.random() * 200, 55 + Math.random() * 200, 55 + Math.random() * 200)
            return color;
        }
        randomDark() {
            var letters = '0123456789ABCDEF';
            var hash = '#';
            for (var i = 0; i < 6; i++) {
                hash += letters[(Math.floor(Math.random() * 12))];
            }
            var color = new Color(hash, Math.random() * 200, Math.random() * 200, Math.random() * 200)
            return color;
        }
        random() {
            var letters = '0123456789ABCDEF';
            var hash = '#';
            for (var i = 0; i < 6; i++) {
                hash += letters[(Math.floor(Math.random() * 16))];
            }
            var color = new Color(hash, Math.random() * 255, Math.random() * 255, Math.random() * 255)
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
        }, 45)
        document.addEventListener('keydown', (event) => {
            keysPressed[event.key] = true;

            if (event.key == 'Shift') {
                return
            }   
            if (event.key == 'Meta') {
                return
            }   
            if (event.key == 'Enter') {
                return
            }   
            if (event.key == 'Control') {
                return
            }   
            if (event.key == 'Alt') {
                return
            }   
            if (event.key == 'CapsLock') {
                return
            }   

            if (event.key == 'Backspace') {
                if (  sandmap.window.UI.colorbox.focus == 1) {
                    sandmap.window.UI.colorbox.backspace()
                }
            } else {
                if (  sandmap.window.UI.colorbox.focus == 1) {
                        sandmap.window.UI.colorbox.addchar(event.key)
                }
            }



        });
        document.addEventListener('keyup', (event) => {
            delete keysPressed[event.key];
        });
        window.addEventListener('pointerdown', e => {
            FLEX_engine = canvas.getBoundingClientRect();
            XS_engine = e.clientX - FLEX_engine.left;
            YS_engine = e.clientY - FLEX_engine.top;
            TIP_engine.x = XS_engine
            TIP_engine.y = YS_engine
            TIP_engine.body = TIP_engine
            // example usage: if(object.isPointInside(TIP_engine)){ take action }

            if(sandmap.window.UI.colorbox.inputbox.isPointInside(TIP_engine)){
                sandmap.window.UI.colorbox.focus = 1
            }else{
                sandmap.window.UI.colorbox.focus = 0
            }


            // for (let t = 0; t < board.grid.length; t++) {
            //     for (let k = 0; k < board.grid[t].length; k++) {
            //         if (board.grid[t][k].isPointInside(TIP_engine)) {
            //             if (keysPressed['a']) {
            //                 board.grid[t][k].machines.push(new Alternator(board.grid[t][k], t, k))
            //             } else {
            //                 board.grid[t][k].on *= -1
            //             }
            //         }
            //     }
            // 

            

            if(sandmap.window.UI.sellenrichmentButton.isPointInside(TIP_engine) &&  sandmap.window.UI.beDrawn == -1) {
                sandmap.window.UI.sellenrichment = 1
            }else  if(sandmap.window.UI.sellanimalButton.isPointInside(TIP_engine) &&  sandmap.window.UI.beDrawn == -1) {
                sandmap.window.UI.sellanimal = 1
            }else if(sandmap.window.UI.deleteButton.isPointInside(TIP_engine) &&  sandmap.window.UI.beDrawn == -1) {
                sandmap.window.UI.deletetoggle = 1
                sandmap.window.UI.penning = 0
                sandmap.window.UI.shopping = 0
                sandmap.window.UI.breaking = 0
                sandmap.window.UI.roading = 0
            }else if (sandmap.window.UI.roadButton.isPointInside(TIP_engine)  &&  sandmap.window.UI.beDrawn == -1) {
                sandmap.window.UI.roading = 1
                sandmap.window.UI.penning = 0
                sandmap.window.UI.shopping = 0
                sandmap.window.UI.breaking = 0
                sandmap.window.UI.deletetoggle = -1
            } else if (sandmap.window.UI.penButton.isPointInside(TIP_engine)&&  sandmap.window.UI.beDrawn == -1) {
                sandmap.window.UI.penning = 1
                sandmap.window.UI.roading = 0
                sandmap.window.UI.shopping = 0
                sandmap.window.UI.breaking = 0
                sandmap.window.UI.deletetoggle = -1
            }else if (sandmap.window.UI.shopButton.isPointInside(TIP_engine)&&  sandmap.window.UI.beDrawn == -1) {
                sandmap.window.UI.penning = 0
                sandmap.window.UI.roading = 0
                sandmap.window.UI.shopping = 1
                sandmap.window.UI.breaking = 0
                sandmap.window.UI.deletetoggle = -1
            } else if (sandmap.window.minibody.isPointInside(TIP_engine)) {
                let structuredpoint = new Point(0, 0)
                let inv = 1 / .28125 * 2
                structuredpoint.x += (TIP_engine.x - sandmap.window.minibody.x) * inv
                structuredpoint.y += (TIP_engine.y - sandmap.window.minibody.y) * inv
                sandmap.window.guide.x = structuredpoint.x - (sandmap.window.body.width * .5)
                sandmap.window.guide.y = structuredpoint.y - (sandmap.window.body.height * .5)
                sandmap.window.UI.deletetoggle = -1
            } else {


                let selected = {}
                let selecterstore = {}
                selected.farm = 1
                for (let t = 0; t < sandmap.pens.length; t++) {
                    if (sandmap.pens[t].selected == 1) {
                        selected = sandmap.pens[t]
                        break
                    }
                }
                for (let t = 0; t < sandmap.buis.shops.length; t++) {
                    if (sandmap.buis.shops[t].selected == 1) {
                        selecterstore = sandmap.buis.shops[t]
                        break
                    }
                }


                if (selecterstore.selected == 1) {
                    if (selecterstore.buttons[0].isPointInside(TIP_engine)) {
                        selecterstore.price += .1
                    }
                    if (selecterstore.buttons[1].isPointInside(TIP_engine)) {
                        selecterstore.price -= .1
                    }
                    if (selecterstore.price > 2) {
                        selecterstore.price = 2
                    }
                    if (selecterstore.price < 0) {
                        selecterstore.price = 0
                    }
                    selecterstore.price = Math.round(selecterstore.price * 10) / 10
                }


                if (sandmap.window.UI.toggle.isPointInside(TIP_engine)) {
                    if (sandmap.window.UI.beDrawn == -1) {
                        sandmap.window.UI.beDrawn = 1
                    } else {
                        sandmap.window.UI.beDrawn = -1
                    }
                } else if (sandmap.window.UI.toggle2.isPointInside(TIP_engine)) {
                    if (sandmap.window.UI.beDrawn == -1) {
                        sandmap.window.UI.beDrawn = 2
                    } else {
                        sandmap.window.UI.beDrawn = -1
                    }
                } else if (sandmap.window.UI.body.isPointInside(TIP_engine)) {
                    if (selected.farm != 1) {
                        if (sandmap.window.UI.beDrawn == 1) {
                            for (let b = sandmap.window.UI.scroll; b < Math.min(sandmap.window.UI.scroll + 16, sandmap.window.UI.buttons.length); b++) {
                                if (sandmap.window.UI.buttons[b].isPointInside(TIP_engine)) {
                                    if (b == 0) {
                                        if (sandmap.money >= 250) {
                                            sandmap.money -= 250
                                            selected.animals.push(new GardenPomaoranian(selected.center.x, selected.center.y, selected))
                                        }
                                    } else if (b == 1) {

                                        if (sandmap.money >= 400) {
                                            sandmap.money -= 400
                                            selected.animals.push(new Crab(selected.center.x, selected.center.y, [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()], selected))
                                        }
                                    } else if (b == 2) {

                                        if (sandmap.money >= 600) {
                                            sandmap.money -= 600
                                            selected.animals.push(new Firekin(selected.center.x, selected.center.y, ["red", "orange", "white", "yellow"], selected))
                                        }
                                    } else if (b == 3) {

                                        if (sandmap.money >= 800) {
                                            sandmap.money -= 800
                                            selected.animals.push(new Colob(selected.center.x, selected.center.y, [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()], selected))
                                        }
                                    } else if (b == 4) {

                                        if (sandmap.money >= 1250) {
                                            sandmap.money -= 1250
                                            selected.animals.push(new Hopo(selected.center.x, selected.center.y, [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()], selected))
                                        }
                                    } else if (b == 5) {

                                        if (sandmap.money >= 1800) {
                                            sandmap.money -= 1800
                                            selected.animals.push(new Geko(selected.center.x, selected.center.y, [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()], selected))
                                        }
                                    } else if (b == 6) {
                                        if (sandmap.money >= 2500) {
                                            sandmap.money -= 2500
                                            selected.animals.push(new Runnybabbit(selected.center.x, selected.center.y, [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()], selected))
                                        }
                                    } else if (b == 7) {
                                        if (sandmap.money >= 3000) {
                                            sandmap.money -= 3000
                                            selected.animals.push(new Scorpo(selected.center.x, selected.center.y, [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()], selected))
                                        }
                                    } else if (b == 8) {
                                        if (sandmap.money >= 4000) {
                                            sandmap.money -= 4000
                                            selected.animals.push(new Knocktapus(selected.center.x, selected.center.y, [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()], selected))
                                        }
                                    } else if (b == 9) {
                                        if (sandmap.money >= 5000) {
                                            sandmap.money -= 5000
                                            selected.animals.push(new Scuttlefish(selected.center.x, selected.center.y, [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()], selected))
                                        }
                                    } else if (b == 10) {
                                        if (sandmap.money >= 7500) {
                                            sandmap.money -= 7500
                                            selected.animals.push(new Hexagoon(selected.center.x, selected.center.y, [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()], selected))
                                        }
                                    }else if (b == 11) {

                                        if (sandmap.money >= 10000) {
                                            sandmap.money -= 10000
                                            selected.animals.push(new Scratchle(selected.center.x, selected.center.y, [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()], selected))
                                        }
                                    }else if (b == 12) {

                                        if (sandmap.money >= 15000) {
                                            sandmap.money -= 15000
                                            selected.animals.push(new Minigoy(selected.center.x, selected.center.y, [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()], selected))
                                        }
                                    }else if (b == 13) {
                                        if (sandmap.money >= 25000) {
                                            sandmap.money -= 25000
                                            selected.animals.push(new Walpraw(selected.center.x, selected.center.y, [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()], selected))
                                        }
                                    }else if (b == 14) {
                                        if (sandmap.money >= 50000) {
                                            sandmap.money -= 50000
                                            selected.animals.push(new Coyrail(selected.center.x, selected.center.y, [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()], selected))
                                        }
                                    }else if (b == 15) {
                                        if (sandmap.money >= 100000) {
                                            sandmap.money -= 100000
                                            selected.animals.push(new Nukster(selected.center.x, selected.center.y, [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()], selected))
                                        }
                                    }

                                    
                                }
                            }
                        }
                        if (sandmap.window.UI.beDrawn == 2) {
                            for (let b = sandmap.window.UI.scroll; b < Math.min(sandmap.window.UI.scroll + 10, sandmap.window.UI.buttons2.length); b++) {
                                if (sandmap.window.UI.buttons2[b].isPointInside(TIP_engine)) {
                                    if (b == 0) {
                                        if (sandmap.money >= 50) {
                                            sandmap.money -= 50
                                            selected.enrichment.push(new Grass(selected.center.x + ((Math.random() - .5) * (selected.body.width) * .9), selected.center.y + ((Math.random() - .5) * (selected.body.height) * .9), selected))
                                            selected.enrichdraw()
                                        }
                                    } else if (b == 1) {
                                        if (sandmap.money >= 100) {
                                            sandmap.money -= 100
                                            selected.enrichment.push(new Stone(selected.center.x + ((Math.random() - .5) * (selected.body.width) * .9), selected.center.y + ((Math.random() - .5) * (selected.body.height) * .9), selected))
                                            selected.enrichdraw()
                                        }
                                    } else if (b == 2) {
                                        if (sandmap.money >= 150) {
                                            sandmap.money -= 150
                                            selected.enrichment.push(new Puddle(selected.center.x + ((Math.random() - .5) * (selected.body.width) * .9), selected.center.y + ((Math.random() - .5) * (selected.body.height) * .9), selected))
                                            selected.enrichdraw()
                                        }
                                    } else if (b == 3) {
                                        if (sandmap.money >= 200) {
                                            sandmap.money -= 200
                                            selected.enrichment.push(new Flowersprout(selected.center.x + ((Math.random() - .5) * (selected.body.width) * .9), selected.center.y + ((Math.random() - .5) * (selected.body.height) * .9), selected))
                                            selected.enrichdraw()
                                        }
                                    } else if (b == 4) {
                                        if (sandmap.money >= 300) {
                                            sandmap.money -= 300
                                            selected.enrichment.push(new Crystal(selected.center.x + ((Math.random() - .5) * (selected.body.width) * .9), selected.center.y + ((Math.random() - .5) * (selected.body.height) * .9), selected))
                                            selected.enrichdraw()
                                        }
                                    } else if (b == 5) {
                                        if (sandmap.money >= 500) {
                                            sandmap.money -= 500
                                            selected.enrichment.push(new Ice(selected.center.x + ((Math.random() - .5) * (selected.body.width) * .9), selected.center.y + ((Math.random() - .5) * (selected.body.height) * .9), selected))
                                            selected.enrichdraw()
                                        }
                                    }


                                }
                            }
                        }
                    }
                } else {


                    let structuredpoint = new Point(0, 0)
                    structuredpoint.x += sandmap.window.guide.x
                    structuredpoint.y += sandmap.window.guide.y
                    structuredpoint.x += (TIP_engine.x * 1)
                    structuredpoint.y += (TIP_engine.y * 1)

                    let wet = 0
                    if (!sandmap.window.UI.body.isPointInside(TIP_engine)) {
                        if (wet == 0) {
                            for (let t = 0; t < sandmap.pens.length; t++) {
                                sandmap.pens[t].selected = 0
                            }
                        }
                    }
                    for (let t = 0; t < sandmap.pens.length; t++) {
                        if (!sandmap.window.UI.body.isPointInside(TIP_engine)) {
                            sandmap.pens[t].selected = 0
                        }
                        if (sandmap.pens[t].body.doesPerimeterTouch(structuredpoint)) {
                            sandmap.pens[t].selected = 1
                            wet = 1
                        }
                    }
                    for (let t = 0; t < sandmap.buis.shops.length; t++) {
                        if (!sandmap.window.UI.body.isPointInside(TIP_engine)) {
                            sandmap.buis.shops[t].selected = 0
                        }
                        if (sandmap.buis.shops[t].body.doesPerimeterTouch(structuredpoint)) {
                            sandmap.buis.shops[t].selected = 1
                            wet = 1
                        }
                    }

                    structuredpoint.x1 = Math.ceil(structuredpoint.x * .1)
                    structuredpoint.y1 = Math.ceil(structuredpoint.y * .1)
                    structuredpoint.x = Math.floor(structuredpoint.x * .1)
                    structuredpoint.y = Math.floor(structuredpoint.y * .1)
                    rectstart.x = structuredpoint.x
                    rectstart.y = structuredpoint.y


                    let xshifter = 0
                    let yshifter = 0
                    if((structuredpoint.x1 - rectstart.x) <= 0){
                        xshifter = 10
                    }
                    if((structuredpoint.y1 - rectstart.y) <= 0){
                        yshifter = 10
                    }



                    selectrect = new Tile((rectstart.x * 10)+xshifter, (rectstart.y * 10)+yshifter, ((structuredpoint.x1 - rectstart.x) * 10)+(xshifter*Math.sign(((structuredpoint.x1 - rectstart.x) * 10))),( (structuredpoint.y1 - rectstart.y) * 10) +(yshifter*Math.sign(((structuredpoint.y1 - rectstart.y) * 10))), "#0088AA" + "94")




                }


            }
            window.addEventListener('pointermove', continued_stimuli);
        });
        window.addEventListener('pointerup', e => {
            window.removeEventListener("pointermove", continued_stimuli);
            if (sandmap.window.UI.penning == 1) {
                let pen = new Pen(selectrect)
                if (Math.abs(pen.body.width) * Math.abs(pen.body.height) > 2500 && Math.abs(pen.body.width) > 50 && Math.abs(pen.body.height) > 50) {
                    let wet = 0
                    let dry = 1
                    for (let t = 0; t < sandmap.pens.length; t++) {
                        for (let k = 0; k < pen.walls.length; k++) {
                            if (sandmap.pens[t].body.overlap(pen.body)) {
                                wet = 1
                            }
                        }
                    }
                    for (let t = 0; t < sandmap.roads.length; t++) {
                        if (sandmap.roads[t].body.overlap(pen.body)) {
                            dry = 0
                            break
                        }
                    }
                    for (let t = 0; t < sandmap.roads.length; t++) {
                        if (sandmap.roads[t].body.overlap(pen.penRoad)) {
                            dry = 1
                            break
                        }
                    }
                    for (let t = 0; t < sandmap.buis.shops.length; t++) {
                        if (sandmap.buis.shops[t].body.overlap(pen.penRoad)) {
                            dry = 1
                            break
                        }
                    }
                    if (wet == 0 && dry == 0) {
                        if (Math.abs(pen.body.width) + Math.abs(pen.body.height) <= sandmap.money) {
                            sandmap.pens.push(pen)
                            sandmap.window.UI.penning = 0
                            sandmap.money -= Math.abs(pen.body.width) + Math.abs(pen.body.height)
                        }
                    }
                }
            }

            let weat = 0
            if (sandmap.window.UI.breaking == 1) {
                for(let t = 0;t<sandmap.roads.length;t++){
                    if(selectrect.overlap(sandmap.roads[t].bodyTile)){
                        sandmap.roads[t].marked = 1
                        weat = 1
                    }
                }
            }
            if(weat == 1){
                selectrect = new Tile(0, 0, 0, 0, "transparent")
            }
            if (sandmap.window.UI.roading == 1) {
                let pen = new Road(selectrect)
                if (Math.abs(pen.body.width) <= 20 || Math.abs(pen.body.height) <= 20) {
                    let wet = 0
                    let dry = 1
                    for (let t = 0; t < sandmap.pens.length; t++) {
                        // for (let k = 0; k < pen.walls.length; k++) {
                        if (sandmap.pens[t].penRoad.overlap(pen.body)) {
                            wet = 1
                        }
                        // }
                    }
                    for (let t = 0; t < sandmap.buis.shops.length; t++) {
                        // for (let k = 0; k < pen.walls.length; k++) {
                        if (sandmap.buis.shops[t].bodyTile.overlap(pen.body)) {
                            wet = 1
                        }
                        // }
                    }
                    for (let t = 0; t < sandmap.roads.length; t++) {
                        if (sandmap.roads[t].body.overlap(pen.body)) {
                            dry = 0
                            // break
                            // if (sandmap.roads[t].bodyTile.overlap(pen.body)) {
                            //     dry = 1
                            //     break
                            // }
                        }
                        // }else{
                        //     dry = 1
                        //     break
                        // }
                    }
                    if (wet == 0 && dry == 0) {
                        if (Math.round((Math.abs(pen.body.width) + Math.abs(pen.body.height))) <= sandmap.money) {
                            sandmap.money -= Math.round((Math.abs(pen.body.width) + Math.abs(pen.body.height)))
                            for(let r = 0;r<pen.body.width;r+=10){
                                for(let w = 0;w<pen.body.height;w+=10){
                                let penx = new Road(new Tile(pen.body.x+r, pen.body.y+w, 10, 10))
                                sandmap.roads.push(penx)
                                }
                            }
                            sandmap.roadseg()
                        }
                    }
                }
            }
            if (sandmap.window.UI.shopping == 1) {
                let pen = new Shop(selectrect)
                if (Math.abs(pen.body.width) == 20 && Math.abs(pen.body.height) == 20) {
                    let wet = 0
                    let dry = 1
                    for (let t = 0; t < sandmap.pens.length; t++) {
                        // for (let k = 0; k < pen.walls.length; k++) {
                        if (sandmap.pens[t].penRoad.overlap(pen.body)) {
                            wet = 1
                        }
                        // }
                    }
                    for (let t = 0; t < sandmap.roads.length; t++) {
                        if (sandmap.roads[t].body.overlap(pen.body)) {

                            if (!(sandmap.roads[t].bodyTile.overlap(pen.body))) {
                                dry = 0
                            }else{
                                dry = 1
                                break
                            }
                        }
                    }
                    if (wet == 0 && dry == 0) {

                        if ((Math.round((Math.abs(pen.body.width) + Math.abs(pen.body.height)))) * 5 * (sandmap.buis.shops.length + 1) <= sandmap.money) {
                            sandmap.money -= (Math.round((Math.abs(pen.body.width) + Math.abs(pen.body.height)))) * 5 * (sandmap.buis.shops.length + 1)
                            sandmap.buis.shops.push(pen)
                            sandmap.roadseg()
                        }
                    }
                }
            }
            selectrect = new Tile(0, 0, 0, 0, "transparent")
        })
        function continued_stimuli(e) {
            FLEX_engine = canvas.getBoundingClientRect();
            XS_engine = e.clientX - FLEX_engine.left;
            YS_engine = e.clientY - FLEX_engine.top;
            TIP_engine.x = XS_engine
            TIP_engine.y = YS_engine
            TIP_engine.body = TIP_engine
            // for (let t = 0; t < board.grid.length; t++) {
            //     for (let k = 0; k < board.grid[t].length; k++) {
            //         if (board.grid[t][k].isPointInside(TIP_engine)) {
            //             if (keysPressed['a']) {
            //                 board.grid[t][k].machines.push(new Alternator(board.grid[t][k], t, k))
            //             } else {
            //                 board.grid[t][k].on *= -1
            //             }
            //         }
            //     }
            // }

            // if (keysPressed['q']) {
            //     p1 = new Pen(selectrect)
            // }


            if (sandmap.window.UI.roadButton.isPointInside(TIP_engine)) {
            } else if (sandmap.window.UI.penButton.isPointInside(TIP_engine)) {
            }else if (sandmap.window.UI.shopButton.isPointInside(TIP_engine)) {
            } else if (sandmap.window.minibody.isPointInside(TIP_engine)) {
                let structuredpoint = new Point(0, 0)
                let inv = 1 / .28125 * 2
                structuredpoint.x += (TIP_engine.x - sandmap.window.minibody.x) * inv
                structuredpoint.y += (TIP_engine.y - sandmap.window.minibody.y) * inv
                sandmap.window.guide.x = structuredpoint.x - (sandmap.window.body.width * .5)
                sandmap.window.guide.y = structuredpoint.y - (sandmap.window.body.height * .5)
            } else {
                if (sandmap.window.UI.toggle.isPointInside(TIP_engine)) {
                } else if (sandmap.window.UI.toggle2.isPointInside(TIP_engine)) {
                } else if (sandmap.window.UI.body.isPointInside(TIP_engine)) {
                } else {


                    let structuredpoint = new Point(rectstart.x, rectstart.y)
                    structuredpoint.x += sandmap.window.guide.x
                    structuredpoint.y += sandmap.window.guide.y
                    structuredpoint.x += (TIP_engine.x * 1)
                    structuredpoint.y += (TIP_engine.y * 1)
                    structuredpoint.x1 = Math.ceil((structuredpoint.x * .1) - (rectstart.x * .1))
                    structuredpoint.y1 = Math.ceil((structuredpoint.y * .1) - (rectstart.y * .1))
                    structuredpoint.x = Math.floor(structuredpoint.x * .1)
                    structuredpoint.y = Math.floor(structuredpoint.y * .1)



                    let xshifter = 0
                    let yshifter = 0
                    if((structuredpoint.x1 - rectstart.x) <= 0){
                        xshifter = 10
                    }
                    if((structuredpoint.y1 - rectstart.y) <= 0){
                        yshifter = 10
                    }



                    selectrect = new Tile((rectstart.x * 10)+xshifter, (rectstart.y * 10)+yshifter, ((structuredpoint.x1 - rectstart.x) * 10)+(xshifter*Math.sign(((structuredpoint.x1 - rectstart.x) * 10))),( (structuredpoint.y1 - rectstart.y) * 10) +(yshifter*Math.sign(((structuredpoint.y1 - rectstart.y) * 10))), "#0088AA" + "94")






                    if (sandmap.window.UI.penning == 1) {
                        if (!(Math.abs(selectrect.width) * Math.abs(selectrect.height) > 2500 && Math.abs(selectrect.width) > 50 && Math.abs(selectrect.height) > 50)) {
                            selectrect.color = "#FF0000" + "94"
                        }
                        if ((Math.round((Math.abs(selectrect.width) + Math.abs(selectrect.height)))) > sandmap.money) {
                            selectrect.color = "#FF0000" + "94"
                        }
                    }
                    if (sandmap.window.UI.roading == 1) {
                        if (!(Math.abs(selectrect.width) <= 20 || Math.abs(selectrect.height) <= 20)) {
                            selectrect.color = "#FF0000" + "94"
                        }
                        if ((Math.round((Math.abs(selectrect.width) + Math.abs(selectrect.height)))) > sandmap.money) {
                            selectrect.color = "#FF0000" + "94"
                        }
                    }
                    if (sandmap.window.UI.shopping == 1) {
                        if (!(Math.abs(selectrect.width) == 20 && Math.abs(selectrect.height) == 20)) {
                            selectrect.color = "#FF0000" + "94"
                        }
                        if ((Math.round((Math.abs(selectrect.width) + Math.abs(selectrect.height)))) * 5 * (sandmap.buis.shops.length + 1) > sandmap.money) {
                            selectrect.color = "#FF0000" + "94"
                        }
                    }

                    // if((structuredpoint.x1 - rectstart.x) <= 0){
                    //     selectrect.color = "black"
                    // }
                    // if((structuredpoint.y1 - rectstart.y) <= 0){
                    //     selectrect.color = "pink"
                    // }
                }
            }





        }
    }
    function gamepad_control(object, speed = 1) { // basic control for objects using the controler
        //         //////console.log(gamepadAPI.axesStatus[1]*gamepadAPI.axesStatus[0]) //debugging
        if (typeof object.body != 'undefined') {
            if (typeof (gamepadAPI.axesStatus[1]) != 'undefined') {
                if (typeof (gamepadAPI.axesStatus[0]) != 'undefined') {
                    object.body.x += (gamepadAPI.axesStatus[0] * speed)
                    // object.body.y += (gamepadAPI.axesStatus[1] * speed)
                }
            }
        } else if (typeof object != 'undefined') {
            if (typeof (gamepadAPI.axesStatus[1]) != 'undefined') {
                if (typeof (gamepadAPI.axesStatus[0]) != 'undefined') {
                    object.x += (gamepadAPI.axesStatus[0] * speed)
                    // object.y += (gamepadAPI.axesStatus[1] * speed)
                }
            }
        }
    }
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
    // let inputbox = document.createElement("INPUT");
    // inputbox.setAttribute("type", "text");
    // inputbox.setAttribute("value", "#008822");
    // document.body.appendChild(inputbox);
    let textbox = document.getElementById('text') //getting canvas from document


    let map_canvas = document.getElementById('map') //getting canvas from document

    map_context = map_canvas.getContext('2d');
    map_context.imageSmoothingEnabled = false;
    map_canvas.style.background = "tan"
    setUp(setup_canvas) // setting up canvas refrences, starting timer. 

    // object instantiation and creation happens here 
    class Alternator {
        constructor(tile, t, k) {
            this.tile = tile
            this.t = t
            this.k = k
            this.body = new Circle(tile.x + (tile.width * .5), tile.y + (tile.height * .5), tile.width * .4, "red")

        }
        run() {
            for (let t = Math.max(0, this.t - 10); t < Math.min(this.t + 11, board.grid.length - 1); t++) {
                for (let k = Math.max(0, this.k - 10); k < Math.min(this.k + 11, board.grid[t].length - 1); k++) {
                    if ((t == this.t) && (k == this.k)) {

                    } else {
                        if (board.grid[t][k].flag == 0) {
                            board.grid[t][k].flag = 1
                            board.grid[t][k].on *= -1
                        }
                    }
                }
            }
        }
        draw() {
            this.body.draw()
        }
    }
    class Grid {
        constructor(scale) {
            this.grid = []
            for (let t = 0; t < 16 * scale; t++) {
                let scaffold = []
                for (let k = 0; k < 16 * scale; k++) {
                    let rect = new Rectangle(t * 40 / scale, k * 40 / scale, 40 / scale, 40 / scale, getRandomColor())
                    rect.on = -1
                    rect.machines = []
                    scaffold.push(rect)
                }
                this.grid.push(scaffold)
            }
        }
        draw() {
            for (let t = 0; t < this.grid.length; t++) {
                for (let k = 0; k < this.grid[t].length; k++) {
                    this.grid[t][k].flag = 0
                }
            }

            for (let t = 0; t < this.grid.length; t++) {
                for (let k = 0; k < this.grid[t].length; k++) {
                    if (this.grid[t][k].on == 1) {
                        for (let m = 0; m < this.grid[t][k].machines.length; m++) {
                            this.grid[t][k].machines[m].run()
                        }
                    }
                }
            }
            for (let t = 0; t < this.grid.length; t++) {
                for (let k = 0; k < this.grid[t].length; k++) {
                    if (this.grid[t][k].on == 1) {
                        this.grid[t][k].color = "white"
                    } else {
                        this.grid[t][k].color = "black"
                    }
                    this.grid[t][k].draw()
                }
            }

            for (let t = 0; t < this.grid.length; t++) {
                for (let k = 0; k < this.grid[t].length; k++) {
                    for (let m = 0; m < this.grid[t][k].machines.length; m++) {
                        this.grid[t][k].machines[m].draw()
                    }
                }
            }
        }
    }

    let board = new Grid(10)

    class Interrogna {
        constructor() {
            this.body = new Rectangle(200, 100, 300, 300, "red")
            this.check = new Rectangle(275, 250, 150, 150, "cyan")
            this.step = 0
            this.player = new Circle(500, 500, 10, "cyan", 0, 0, 1, 1)
            this.player.gravity = .1
            this.count = 0
        }
        draw() {
            control(this.player, 8)
            this.player.move()
            this.player.ymom += this.player.gravity
            this.player.draw()
            if (this.check.doesPerimeterTouch(this.player)) {
                this.player.ymom *= -1
                if (this.step == 0) {
                    this.step = 1
                    this.count++
                }
            }
            canvas_context.font = '20px arial'
            canvas_context.fillStyle = "Magenta"
            canvas_context.fillText(this.count, 40, 40)
            if (this.step > 0) {
                this.step++
                this.step %= 29
            }
            // this.check.draw()
            canvas_context.drawImage(interrogna, (interrogna.width / 29) * (this.step % 29), 0, interrogna.width / 29, interrogna.height, this.body.x, this.body.y, this.body.width, this.body.height)
        }
    }
    // let intre = new Interrogna()

    class Etrig {
        constructor(x, y, size, angle = Math.PI * .5) {
            this.body = new Circle(x, y)
            this.length = size
            this.angle = angle
        }
        draw() {
            this.points = []
            for (let t = -1; t < 3; t++) {
                let point = new Point(this.body.x + (this.length * Math.cos(this.angle + ((Math.PI / 1.5) * t))), this.body.y + (this.length * Math.sin(this.angle + ((Math.PI / 1.5) * t))))
                this.points.push(point)
            }
            for (let t = 1; t < this.points.length; t++) {
                let link = new LineOP(this.points[t], this.points[t - 1], "white", 1)
                link.draw()
            }
        }
    }

    class TriangleGrid {


    }

    let link = new Etrig(350, 350, 10, Math.PI * 1.5)
    let link2 = new Etrig(360, 340, 10)
    let rect = new Rectangle(100, 300, 1000, 10, "red")

    class World {
        constructor() {
            this.gravity = .67
        }
    }
    let world = new World()

    class Thrower {
        constructor() {
            this.body = new Circle(350, 350, 30, "cyan")
            this.floor = new Rectangle(0, 700, 1300, 100, "red")
            this.foes = []
            for (let t = 0; t < 1; t++) {
                let foe = new Circle(500 + (t * 50), 500, 14.1, "orange")
                foe.reflect = 1
                foe.friction = .97
                foe.spring = new SpringOP(this.body, foe, 20, 1, "green")
                foe.held = 0
                foe.heldcolor = 'transparent'
                this.foes.push(foe)
            }
            let foe = new Circle(640, 200, 20, "gray")
            foe.reflect = 1
            foe.friction = .97
            foe.spring = new SpringOP(this.body, foe, 20, 1, "green")
            foe.spring2 = new SpringOP(this.body, foe, 20, 1, "green")
            foe.held = 0
            this.foes.push(foe)
            this.hold = 0
            this.holdsignal = 0
            this.jumpsignal = 0
            this.dir = 0
            this.aim = new Point(this.body.x, this.body.y)
            this.mode = 0
            this.points = 0
        }
        ai() {
            this.flex = (Math.random() - .5) * 10

            if (this.holdsignal > 0) {

                for (let t = 0; t < this.foes.length; t++) {
                    if (this.foes[t].held == 1) {
                        let point = new Point(this.foes[t].x + (gamepadAPI.axesStatus[2] * 120), this.foes[t].y + (gamepadAPI.axesStatus[3] * 120))
                        let link = new LineOP(point, this.foes[t], '#00FF00', 2)
                        link.draw()
                        let point2 = new Point(this.foes[t].x, this.foes[t].y)


                        if (this.mode == 0) {
                            this.aim = new Point(this.body.x - (this.dir * 20), this.body.y - 20)
                        }




                        let xmom
                        let ymom

                        let min = 999999999
                        for (let t = 0; t < this.foes.length; t++) {
                            if ((this.foes[t].held == 1)) {
                            } else {

                                if (this.foes[t].spring.beam.hypotenuse() < min) {
                                    xmom = -(this.body.x - this.foes[t].x)
                                    ymom = -(this.body.y - (this.foes[t].y - ((this.body.y - (this.foes[t].y) / 40))))
                                    min = this.foes[t].spring.beam.hypotenuse()
                                }

                            }
                        }
                        let vec = new Vector(this.body, xmom, ymom)
                        vec.normalize(40)
                        xmom = vec.xmom
                        ymom = vec.ymom
                        // for(let t = 0;t<70;t++){
                        //     if(t%6 == 0){
                        //         let circ = new Circle(point2.x, point2.y, 3, "white")
                        //         circ.draw()
                        //     }
                        //     ymom+=world.gravity
                        //     point2.x+=xmom
                        //     point2.y+=ymom
                        //     ymom*=.97
                        //     xmom*=.97
                        // }
                    }
                }



            } else {
                if (this.hold == 1) {
                    for (let t = 0; t < this.foes.length; t++) {
                        if (this.foes[t].held == 1) {
                            let xmom
                            let ymom

                            let min = 999999999
                            for (let t = 0; t < this.foes.length; t++) {
                                if ((this.foes[t].held == 1)) {
                                } else {

                                    if (this.foes[t].spring.beam.hypotenuse() < min) {
                                        xmom = -(this.body.x - this.foes[t].x)
                                        ymom = -(this.body.y - (this.foes[t].y - ((this.body.y - (this.foes[t].y) / 40))))
                                        min = this.foes[t].spring.beam.hypotenuse()
                                    }

                                }
                            }
                            let vec = new Vector(this.body, xmom, ymom)
                            vec.normalize(40)
                            // let xmom =  (this.dir*20)+this.flex
                            // let ymom =  (-20)-this.flex
                            this.foes[t].xmom = vec.xmom// (gamepadAPI.axesStatus[2] * 20)
                            this.foes[t].ymom = vec.ymom// (gamepadAPI.axesStatus[3] * 20)
                        }
                        this.foes[t].held = 0
                    }
                }
                this.hold = 0
            }

            for (let t = 0; t < this.foes.length; t++) {
                for (let k = 0; k < this.foes.length; k++) {
                    if (t != k) {
                        if (this.foes[t].doesPerimeterTouch(this.foes[k])) {
                            let link = new LineOP(this.foes[t], this.foes[k])
                            let xmomavg = this.foes[t].xmom
                            let ymomavg = this.foes[t].ymom
                            this.foes[t].xmom = this.foes[k].xmom
                            this.foes[t].ymom = this.foes[k].ymom
                            this.foes[k].xmom = xmomavg
                            this.foes[k].ymom = ymomavg
                            this.foes[t].xmom += Math.cos(link.angle())
                            this.foes[t].xmom += Math.sin(link.angle())
                            this.foes[k].xmom -= Math.cos(link.angle())
                            this.foes[k].xmom -= Math.sin(link.angle())
                            if (this.foes[t].heldcolor != "transparent") {
                                if (this.foes[t].heldcolor == thrower.body.color) {
                                    thrower.points++
                                    this.foes[t].heldcolor = "transparent"
                                } else {
                                    thrower2.points++
                                    this.foes[t].heldcolor = "transparent"
                                }
                            }
                        }
                    }
                }
                if (this.floor.doesPerimeterTouch(this.foes[t])) {
                    this.foes[t].y = (this.floor.y - this.foes[t].radius) + .01
                    if (this.foes[t].ymom > 1) {
                        this.foes[t].ymom *= -1.5
                    } else {
                    }
                } else {
                    this.foes[t].ymom += world.gravity
                }
                if (this == thrower) {

                    this.foes[t].draw()
                    if (this.hold == 1) {
                        if (this.foes[t].held == 1) {
                            this.foes[t].spring.ubalance()
                        }
                    }
                } else {

                    if (this.hold == 1) {
                        if (this.foes[t].held == 1) {
                            this.foes[t].spring2.ubalance()
                        }
                    }
                }
                if (t == 0) {
                    this.foes[t].frictiveMove()
                } else {
                    this.foes[t].xmom = 0
                    this.foes[t].ymom = 0
                }


                if (this.holdsignal >= 1) {
                    if (this.body.doesPerimeterTouch(this.foes[t])) {
                        if (this.hold == 0) {
                            if (this.foes[t].held !== 1) {
                                this.hold = 1
                                this.foes[t].held = 1
                                this.foes[t].heldcolor = this.body.color
                            }
                        }
                    }
                }
            }


            let min = 9999999999
            let real = 0
            this.jumpsignal = 0

            for (let t = 0; t < this.foes.length; t++) {
                if (this.foes[t].spring.beam.hypotenuse() < min) {
                    min = Math.abs(this.body.x - this.foes[t].x)
                    if (this.foes[t].held == 0) {
                        real = Math.sign(this.body.x - this.foes[t].x)
                    }
                    if (Math.abs(this.body.y - this.foes[t].y) > 34) {
                        this.jumpsignal = 1
                    }
                }
            }

            for (let t = 0; t < this.foes.length; t++) {
                if (this.body.doesPerimeterTouch(this.foes[t])) {
                    if (this.hold == 0) {
                        this.holdsignal++
                    } else {
                        if (Math.random() < .05) {
                            this.holdsignal = -6

                        }
                    }
                }
            }



            if (this.holdsignal > 0) {
                this.dir = 0
            }


            this.dir = -real * 2


            // if(this.dir > 0){

            // }else if(this.dir < 0){

            // }

            this.body.x += this.dir * 3
            // gamepad_control(this.body, 3)
            if (this.floor.doesPerimeterTouch(this.body)) {
                this.body.y = (this.floor.y - this.body.radius) + .01
                if (this.body.ymom > 1) {
                    this.body.ymom *= -.2
                    if (this.jumpsignal == 1) {
                        this.body.ymom -= 10
                        for (let t = 0; t < this.foes.length; t++) {
                            if (this.foes[t].held == 1) {
                                this.foes[t].ymom -= 10
                            }
                        }
                    }
                } else {
                    if (this.jumpsignal == 1) {
                        this.body.ymom -= 10
                        for (let t = 0; t < this.foes.length; t++) {
                            if (this.foes[t].held == 1) {
                                this.foes[t].ymom -= 10
                            }
                        }
                    }
                }
            } else {
                this.body.ymom += world.gravity
            }
            this.body.xmom = 0
            this.body.smove()
            this.body.move()
            this.body.draw()
            this.floor.draw()
        }
        draw() {

            if (gamepadAPI.buttonsStatus.includes('Right-Trigger')) {

                for (let t = 0; t < this.foes.length; t++) {
                    if (this.foes[t].held == 1) {
                        let point = new Point(this.foes[t].x + (gamepadAPI.axesStatus[2] * 120), this.foes[t].y + (gamepadAPI.axesStatus[3] * 120))
                        let link = new LineOP(point, this.foes[t], '#00FF00', 2)
                        link.draw()
                        let point2 = new Point(this.foes[t].x, this.foes[t].y)

                        let xmom = (gamepadAPI.axesStatus[2] * 20)
                        let ymom = (gamepadAPI.axesStatus[3] * 20)
                        for (let t = 0; t < 70; t++) {
                            if (t % 6 == 0) {
                                let circ = new Circle(point2.x, point2.y, 3, "white")
                                circ.draw()
                            }
                            ymom += world.gravity
                            point2.x += xmom
                            point2.y += ymom
                            ymom *= .97
                            xmom *= .97
                        }
                    }
                }



            } else {
                if (this.hold == 1) {
                    for (let t = 0; t < this.foes.length; t++) {
                        if (this.foes[t].held == 1) {

                            this.foes[t].xmom = (gamepadAPI.axesStatus[2] * 20)
                            this.foes[t].ymom = (gamepadAPI.axesStatus[3] * 20)
                        }
                        this.foes[t].held = 0
                    }
                }
                this.hold = 0
            }

            for (let t = 0; t < this.foes.length; t++) {
                for (let k = 0; k < this.foes.length; k++) {
                    if (t != k) {
                        if (this.foes[t].doesPerimeterTouch(this.foes[k])) {
                            let xmomavg = this.foes[t].xmom
                            let ymomavg = this.foes[t].ymom
                            this.foes[t].xmom = this.foes[k].xmom
                            this.foes[t].ymom = this.foes[k].ymom
                            this.foes[k].xmom = xmomavg
                            this.foes[k].ymom = ymomavg
                        }
                    }
                }
                if (this.floor.doesPerimeterTouch(this.foes[t])) {
                    this.foes[t].y = (this.floor.y - this.foes[t].radius) + .01
                    if (this.foes[t].ymom > 1) {
                        this.foes[t].ymom *= -.2
                    } else {
                    }
                } else {
                    this.foes[t].ymom += world.gravity
                }
                if (this.hold == 1) {
                    if (this.foes[t].held == 1) {
                        this.foes[t].spring.ubalance()
                    }
                }
                this.foes[t].frictiveMove()
                this.foes[t].draw()


                if (gamepadAPI.buttonsStatus.includes('Right-Trigger')) {
                    if (this.body.doesPerimeterTouch(this.foes[t])) {
                        if (this.hold == 0) {
                            this.hold = 1
                            this.foes[t].held = 1
                        }
                    }
                }
            }
            gamepad_control(this.body, 3)
            if (this.floor.doesPerimeterTouch(this.body)) {
                this.body.y = (this.floor.y - this.body.radius) + .01
                if (this.body.ymom > 1) {
                    this.body.ymom *= -.2
                    if (gamepadAPI.buttonsStatus.includes('Left-Trigger')) {
                        this.body.ymom -= 10
                        for (let t = 0; t < this.foes.length; t++) {
                            if (this.foes[t].held == 1) {
                                this.foes[t].ymom -= 10
                            }
                        }
                    }
                } else {
                    if (gamepadAPI.buttonsStatus.includes('Left-Trigger')) {
                        this.body.ymom -= 10
                        for (let t = 0; t < this.foes.length; t++) {
                            if (this.foes[t].held == 1) {
                                this.foes[t].ymom -= 10
                            }
                        }
                    }
                }
            } else {
                this.body.ymom += world.gravity
            }
            this.body.xmom = 0
            this.body.smove()
            this.body.move()
            this.body.draw()
            this.floor.draw()
        }
    }

    let thrower = new Thrower()
    let thrower2 = new Thrower()
    thrower.body.color = "yellow"
    thrower.body.x += 200
    thrower2.foes = [...thrower.foes]
    thrower2.foes[0].spring2 = new SpringOP(thrower2.body, thrower2.foes[0], 20, 1, "green")


    let numimgs = []
    // for (let t = 0; t < 60; t++) {
    //     let img = new Image()
    //     img.src = `a${t}.png`
    //     numimgs.push(img)
    // }
    class NumSqr {
        constructor(x, y, img = -1) {
            this.body = new Rectangle(x, y, 80, 329 * .5, "#FFFFFF")
            // numimgs[this.num] = numimgs[img]
            this.num = img
        }
        draw() {

            this.body.draw()
            // //////console.log(this.body)
            if (this.num == -1) {
                return
            }

            // if(keysPressed['k']){
            //     this.num++
            if (this.num > 59) {
                this.num = 59
            }
            // //////console.log("num")
            // }
            // //////console.log(worldwet%60)
            canvas_context.drawImage(numimgs[this.num], 0, 0, numimgs[this.num].width, numimgs[this.num].height, this.body.x, this.body.y + 40, this.body.width, this.body.width)
        }
    }

    let nums = []
    for (let t = 0; t < 60; t++) {
        for (let k = 0; k < 60; k++) {
            let number = t * k
            let x = t * 166.666
            let y = k * 166.666
            if (number >= 60) {
                nums.push(new NumSqr(x, y, Math.floor((number % 3600) / 60)))
            } else {
                nums.push(new NumSqr(x, y))
            }
            if (t > 0 && k > 0) {
                nums.push(new NumSqr(x + 80, y, Math.floor((number % 60))))
            } else if (t == 0) {
                nums.push(new NumSqr(x + 80, y, k))
            } else {
                nums.push(new NumSqr(x + 80, y, t))
            }
            // if(number > 3600){
            //     nums.push(x,y,Math.floor(number/3600))
            // }
        }
    }

    class XYZpoint {
        constructor(x, y, z) {
            this.x = x
            this.y = y
            this.z = z
        }
        draw() {
            if (this.x > 350) {
                this.color = `rgb(0, ${255 - pomsphere.points.indexOf(this) * 4}, ${pomsphere.points.indexOf(this) * 4})`
            } else {
                this.color = `rgb(0, ${pomsphere.points.indexOf(this) * 4}, ${255 - (pomsphere.points.indexOf(this) * 4)})`
            }
            canvas_context.globalAlpha = 1 - (((this.x + 350) / 700) * ((this.x + 350) / 700) * ((this.x + 350) / 700) * ((this.x + 350) / 700) * ((this.x + 350) / 700))
            let circ = new Circle(this.z, this.y, 5, this.color)
            // let circ2 = new Circle(this.z, this.x, 2, this.color)
            circ.draw()
            // circ2.draw()
            canvas_context.globalAlpha = 1
        }
    }


    class Sphere {
        constructor(x, y, z, length) {
            this.center = new XYZpoint(x, y, z)
            this.length = length
            this.spin = .01
            this.spinhold = 0
            this.spinhold2 = 0

            this.points = []
            this.a1 = -Math.PI
            this.a2 = Math.PI
            for (let t = 0; t < (16 * 16); t++) {
                this.a2 -= (Math.PI / 8)
                if (this.a2 < -Math.PI) {
                    this.a2 = Math.PI
                    this.a1 += (Math.PI / 8)
                }
                let point = new XYZpoint((this.center.x + (this.length * Math.cos(this.a1) * Math.sin(this.a2))) + (this.length * Math.cos(this.a2)), this.center.y + (this.length * Math.sin(this.a1) * Math.sin(this.a2)), this.center.z + (this.length * Math.cos(this.a2)))
                point.a1 = this.a1
                point.a2 = this.a2
                this.points.push(point)
            }
            this.links = []
            for (let t = 0; t < this.points.length; t++) {
                for (let k = 0; k < this.points.length; k++) {
                    if (t != k) {
                        if ((Math.abs(this.points[t].x - this.points[k].x) < 30)) {
                            if ((Math.abs(this.points[t].y - this.points[k].y) < 30)) {
                                if ((Math.abs(this.points[t].z - this.points[k].z) < 30)) {
                                    let link = new LineOP(this.points[t], this.points[k], "white", 3)
                                    this.links.push(link)
                                }
                            }
                        }
                    }
                }
            }

            // this.points = []
            // this.a1 = -Math.PI+this.spinhold
            // this.a2 = Math.PI+this.spinhold
            // for (let t = 0; t < (30 * 30); t++) {
            //     this.a2 -= (Math.PI / 15)
            //     if (this.a2 < -Math.PI+this.spinhold) {
            //         this.a2 = Math.PI+this.spinhold
            //         this.a1 += (Math.PI / 15)
            //     }
            //     let point = new XYZpoint(this.center.x + (this.length * Math.cos(this.a1) * Math.sin(this.a2)), this.center.y + (this.length * Math.sin(this.a1) * Math.sin(this.a2)), this.center.z + (this.length * Math.cos(this.a2)))
            //     point.a1 = this.a1
            //     point.a2 = this.a2
            //     this.points.push(point)
            // }
            // this.spinhold+=.01
        }
        draw() {
            // for (let t = 0; t < this.points.length; t++) {
            //     this.points[t].draw()
            // }
            for (let t = 0; t < this.links.length; t++) {
                this.links[t].draw3()
            }

            this.points = []
            this.a1 = 0
            this.a2 = 0
            let spacer = 12
            for (let t = 0; t < (spacer * 2 * spacer); t++) {
                this.a2 += (Math.PI / spacer)
                if (t % spacer == 0) {
                    this.a1 += (Math.PI / spacer)
                }
                let sz = this.center.z + (this.length * 1.2 * Math.cos(this.a2 + this.spinhold))
                let tz = 10
                let anglez = 0
                if (sz <= 350) {
                    tz = (350 - (350 - sz)) / 10  // -((-350+sz))*.79//Math.sqrt(Math.sqrt(Math.sqrt(Math.sqrt(Math.sqrt(Math.sqrt(Math.sqrt(Math.abs(sz/.001))))))))
                    anglez = (((350 - sz) / 350) * Math.PI * .5) - Math.PI * .5
                    tz *= 1 + Math.cos(anglez)//1-((350-(350-sz))/350) //(Math.abs(350-(sz-350)) /(350-sz) )/50         // (1-((350-sz)/350))-(Math.abs(sz-350)/(350))
                }
                let point = new XYZpoint((this.center.x + (this.length * Math.sin(this.a1 + this.spinhold2) * Math.sin(this.a2 + this.spinhold))), Math.max((this.center.y + (this.length * Math.cos(this.a1 + this.spinhold2) * Math.sin(this.a2 + this.spinhold))) + (tz * Math.cos(this.a1 + this.spinhold2) * Math.sin(this.a2 + this.spinhold)) + (this.length * .0001 * Math.abs((this.length * (Math.sin(((Math.PI * .5) + this.a2 + this.spinhold) * 1))))) + ((Math.abs((this.length * .5 * (Math.sin(((Math.PI * .5) + this.a2 + this.spinhold) * 1))))) - (((this.length * .3) - Math.abs((this.length * .3 * (Math.cos((this.a2 + this.spinhold) * 1))))))), this.center.y - (.8 * this.length)), this.center.z + (this.length * 1.3 * Math.cos(this.a2 + this.spinhold)))
                point.a1 = this.a1
                point.a2 = this.a2
                this.points.push(point)
            }
            this.spinhold += .0205
            this.spinhold %= Math.PI * .25
            this.spinhold2 += .0012

            this.links = []
            for (let t = 0; t < this.points.length; t++) {
                for (let k = 0; k < this.points.length; k++) {
                    if (t != k) {
                        let x = (this.points[t].x - this.points[k].x) * (this.points[t].x - this.points[k].x)
                        let y = ((this.points[t].y - this.points[k].y)) * ((this.points[t].y - this.points[k].y))
                        let z = ((this.points[t].z - this.points[k].z)) * ((this.points[t].z - this.points[k].z))
                        if (Math.sqrt(x + y + z) < this.length * .401) {
                            if (Math.abs(this.points[t].x - this.points[k].x) < this.length * .401 && Math.abs(this.points[t].y - this.points[k].y) < this.length * .401 && Math.abs(this.points[t].z - this.points[k].z) < this.length * .401) {

                                if (this.points[t].x < this.center.x) {
                                    if (Math.random() < .05) {
                                        let link = new LineOP(this.points[t], this.points[k], "cyan", 2)
                                        this.links.push(link)
                                    } else {
                                        // let link = new LineOP(this.points[t],this.points[k], `rgb(${250-(t*4)}, ${(k*4)}, ${t*k})`, 3)
                                        let link = new LineOP(this.points[t], this.points[k], "yellow", 3)
                                        this.links.push(link)
                                    }
                                } else {
                                    if (Math.random() < .5) {
                                        let link = new LineOP(this.points[t], this.points[k], "yellow", 1)
                                        this.links.push(link)
                                    } else {
                                        // let link = new LineOP(this.points[t],this.points[k], `rgb(${250-(t*4)}, ${(k*4)}, ${t*k})`, 3)
                                        let link = new LineOP(this.points[t], this.points[k], "cyan", 1)
                                        this.links.push(link)
                                    }

                                    // let link = new LineOP(this.points[t],this.points[k], `rgb(${(t*4)}, ${(250-(k*4))}, ${t*k})`, 1)
                                    // this.links.push(link)
                                }
                            }
                        }

                        // if ((Math.abs(this.points[t].x - this.points[k].x) < 20)) {
                        //     if ((Math.abs(this.points[t].y - this.points[k].y) < 20)) {
                        //         if ((Math.abs(this.points[t].z - this.points[k].z) < 20)) {
                        //             let link = new LineOP(this.points[t],this.points[k], `rgb(${t}, ${k}, 0)`, 1)
                        //             this.links.push(link)
                        //         }
                        //     }
                        // }



                    }
                }
            }

        }
    }
    class Spherex {
        constructor(x, y, z, length) {
            this.center = new XYZpoint(x, y, z)
            this.length = length
            this.spin = .01
            this.spinhold = 0
            this.spinhold2 = 0

            this.points = []
            this.a1 = -Math.PI
            this.a2 = Math.PI
            for (let t = 0; t < (4 * 4); t++) {
                this.a2 -= (Math.PI / 2)
                if (this.a2 < -Math.PI) {
                    this.a2 = Math.PI
                    this.a1 += (Math.PI / 2)
                }
                let point = new XYZpoint((this.center.x + (this.length * Math.cos(this.a1) * Math.sin(this.a2))) + (this.length * Math.cos(this.a2)), this.center.y + (this.length * Math.sin(this.a1) * Math.sin(this.a2)), this.center.z + (this.length * Math.cos(this.a2)))
                point.a1 = this.a1
                point.a2 = this.a2
                this.points.push(point)
            }
            this.links = []
            for (let t = 0; t < this.points.length; t++) {
                for (let k = 0; k < this.points.length; k++) {
                    if (t != k) {
                        if ((Math.abs(this.points[t].x - this.points[k].x) < 30)) {
                            if ((Math.abs(this.points[t].y - this.points[k].y) < 30)) {
                                if ((Math.abs(this.points[t].z - this.points[k].z) < 30)) {
                                    let link = new LineOP(this.points[t], this.points[k], "white", 3)
                                    this.links.push(link)
                                }
                            }
                        }
                    }
                }
            }

            // this.points = []
            // this.a1 = -Math.PI+this.spinhold
            // this.a2 = Math.PI+this.spinhold
            // for (let t = 0; t < (30 * 30); t++) {
            //     this.a2 -= (Math.PI / 15)
            //     if (this.a2 < -Math.PI+this.spinhold) {
            //         this.a2 = Math.PI+this.spinhold
            //         this.a1 += (Math.PI / 15)
            //     }
            //     let point = new XYZpoint(this.center.x + (this.length * Math.cos(this.a1) * Math.sin(this.a2)), this.center.y + (this.length * Math.sin(this.a1) * Math.sin(this.a2)), this.center.z + (this.length * Math.cos(this.a2)))
            //     point.a1 = this.a1
            //     point.a2 = this.a2
            //     this.points.push(point)
            // }
            // this.spinhold+=.01
        }
        draw() {
            for (let t = 0; t < this.points.length; t++) {
                // this.points[t].draw()
            }
            for (let t = 0; t < this.links.length; t++) {
                this.links[t].draw3()
            }

            this.points = []
            this.a1 = 0
            this.a2 = 0
            let spacer = 12
            for (let t = 0; t < (spacer * 2 * spacer); t++) {
                this.a2 += (Math.PI / spacer)
                if (t % spacer == 0) {
                    this.a1 += (Math.PI / spacer)
                }
                let point = new XYZpoint((this.center.x + (this.length * Math.sin(this.a1 + this.spinhold2) * Math.sin(this.a2 + this.spinhold))), (this.center.y + ((this.length * Math.cos(this.a1 + this.spinhold2) * Math.sin(this.a2 + this.spinhold))) * .6), this.center.z + (this.length * Math.cos(this.a2 + this.spinhold)))
                point.a1 = this.a1
                point.a2 = this.a2
                this.points.push(point)
            }
            // this.spinhold+=.0205
            this.spinhold2 += .015

            this.links = []
            for (let t = 0; t < this.points.length; t++) {
                for (let k = 0; k < this.points.length; k++) {
                    if (t != k) {
                        let x = (this.points[t].x - this.points[k].x) * (this.points[t].x - this.points[k].x)
                        let y = ((this.points[t].y - this.points[k].y)) * ((this.points[t].y - this.points[k].y))
                        let z = ((this.points[t].z - this.points[k].z)) * ((this.points[t].z - this.points[k].z))
                        if (Math.sqrt(x + y + z) < this.length * .271) {
                            if (Math.abs(this.points[t].x - this.points[k].x) < this.length * .271 && Math.abs(this.points[t].y - this.points[k].y) < this.length * .271 && Math.abs(this.points[t].z - this.points[k].z) < this.length * .271) {

                                if (this.points[t].x < this.center.x) {
                                    if (Math.random() < .05) {
                                        let link = new LineOP(this.points[t], this.points[k], "magenta", 1)
                                        this.links.push(link)
                                    } else {
                                        // let link = new LineOP(this.points[t],this.points[k], `rgb(${250-(t*4)}, ${(k*4)}, ${t*k})`, 3)
                                        let link = new LineOP(this.points[t], this.points[k], "magenta", 1)
                                        this.links.push(link)
                                    }
                                } else {
                                    if (Math.random() < .5) {
                                        let link = new LineOP(this.points[t], this.points[k], "magenta", 1)
                                        this.links.push(link)
                                    } else {
                                        // let link = new LineOP(this.points[t],this.points[k], `rgb(${250-(t*4)}, ${(k*4)}, ${t*k})`, 3)
                                        let link = new LineOP(this.points[t], this.points[k], "magenta", 1)
                                        this.links.push(link)
                                    }

                                    // let link = new LineOP(this.points[t],this.points[k], `rgb(${(t*4)}, ${(250-(k*4))}, ${t*k})`, 1)
                                    // this.links.push(link)
                                }
                            }
                        }

                        // if ((Math.abs(this.points[t].x - this.points[k].x) < 20)) {
                        //     if ((Math.abs(this.points[t].y - this.points[k].y) < 20)) {
                        //         if ((Math.abs(this.points[t].z - this.points[k].z) < 20)) {
                        //             let link = new LineOP(this.points[t],this.points[k], `rgb(${t}, ${k}, 0)`, 1)
                        //             this.links.push(link)
                        //         }
                        //     }
                        // }



                    }
                }
            }

        }
    }

    // let pomsphere = new Sphere(350, 350, 350, 300)
    function isColor(strColor){
        if(strColor == ''){
            return false
        }
        var s = new Option().style;
        s.color = strColor;
        var test1 = s.color == strColor;
        var test2 = /^#[0-9A-F]{6}$/i.test(strColor);
        if(test1 == true || test2 == true){
          return true;
        } else{
          return false;
        }
      }

    class Box {
        constructor() {
            this.spin = 0
            this.points = []
            for (let t = 0; t < 200; t++) {
                let p1 = new Circle(400 - (t * 1.5), 100, 5, "white")
                p1.friction = .95
                this.points.push(p1)
            }
            for (let t = 0; t < 200; t++) {
                let p2 = new Circle(100, 100 + (t * 1.5), 5, "white")
                p2.friction = .95
                this.points.push(p2)
            }
            for (let t = 0; t < 200; t++) {
                let p4 = new Circle(100 + (t * 1.5), 400, 5, "white")
                p4.friction = .95
                this.points.push(p4)
            }
            for (let t = 0; t < 200; t++) {
                let p3 = new Circle(400, 400 - (t * 1.5), 5, "white")
                p3.friction = .95
                this.points.push(p3)
            }
            this.bouncebox = [new Polygon(200, 250, 12, "yellow", 10, 3, 5, -2, 1), new Polygon(200, 200, 12, "red", 4, 3, -5, 1, 1), new Polygon(250, 200, 12, "cyan", 5, 3, 1, 1, 1),]
        }
        draw() {

            for (let t = 0; t < this.points.length; t++) {
                for (let k = 0; k < 10; k++) {

                    let lx = (this.points[Math.max(t - 1, 0)].xmom + this.points[t].xmom) * .50
                    let ly = (this.points[Math.max(t - 1, 0)].ymom + this.points[t].ymom) * .50
                    let rx = (this.points[Math.min(t + 1, this.points.length - 1)].xmom + this.points[t].xmom) * .50
                    let ry = (this.points[Math.min(t + 1, this.points.length - 1)].ymom + this.points[t].ymom) * .50

                    this.points[Math.max(t - 1, 0)].xmom = lx
                    this.points[Math.max(t - 1, 0)].ymom = ly
                    this.points[Math.min(t + 1, this.points.length - 1)].xmom = rx
                    this.points[Math.min(t + 1, this.points.length - 1)].ymom = ry

                    this.points[t].xmom = (this.points[Math.max(t - 1, 0)].xmom + this.points[Math.min(t + 1, this.points.length - 1)].xmom) * .5
                    this.points[t].ymom = (this.points[Math.max(t - 1, 0)].ymom + this.points[Math.min(t + 1, this.points.length - 1)].ymom) * .5



                }
            }


            for (let t = 2; t < this.points.length - 2; t++) {
                let link = new LineOP(this.points[t], this.points[t - 1], getRandomColor(), 1)
                link.draw()
            }
            for (let p = 0; p < this.bouncebox.length; p++) {
                for (let t = 0; t < this.points.length; t++) {
                    // if(t > 0){
                    //     this.points[t].xmom += 
                    // }
                    this.points[t].frictiveMove()
                    // this.points[t].draw()
                    this.points[t].xmom += (this.points[t].ox - this.points[t].x) / 12
                    this.points[t].ymom += (this.points[t].oy - this.points[t].y) / 12
                    for (let k = 0; k < this.bouncebox[p].nodes.length; k++) {
                        if (this.points[t].doesPerimeterTouch(this.bouncebox[p].nodes[k])) {
                            let link = new LineOP(this.bouncebox[p].nodes[k], this.points[t])
                            // this.bouncebox[p].xmom*=-1
                            // this.bouncebox[p].ymom*=-1
                            this.bouncebox[p].xmom -= (link.hypotenuse() - (this.points[t].radius + this.bouncebox[p].nodes[k].radius)) * Math.cos(link.angle()) / Math.sqrt(this.bouncebox[p].nodes.length)
                            this.bouncebox[p].ymom -= (link.hypotenuse() - (this.points[t].radius + this.bouncebox[p].nodes[k].radius)) * Math.sin(link.angle()) / Math.sqrt(this.bouncebox[p].nodes.length)
                            // for(let g = Math.max(t-5,0);g<Math.min(t+5,this.points.length-1) ;g++){
                            // while(Math.abs( this.bouncebox[p].ymom )+Math.abs( this.bouncebox[p].xmom ) > 10){
                            //     this.bouncebox[p].ymom *=.99
                            //     this.bouncebox[p].xmom *=.99
                            // }
                            this.points[t].xmom = 0
                            this.points[t].ymom = 0
                            this.points[t].xmom -= link.hypotenuse() * Math.cos(link.angle()) / Math.sqrt(this.bouncebox[p].nodes.length)
                            this.points[t].ymom -= link.hypotenuse() * Math.sin(link.angle()) / Math.sqrt(this.bouncebox[p].nodes.length)
                            // }
                            // this.spin =( this.bouncebox[p].angle- link.angle())/1000

                            if (this.bouncebox[p].nodes[k].x > this.bouncebox[p].body.x) {
                                if (this.bouncebox[p].nodes[k].y > this.bouncebox[p].body.y) {
                                    this.spin = Math.random() * -.05
                                } else {
                                    this.spin = Math.random() * .05
                                }
                            } else {
                                if (this.bouncebox[p].nodes[k].y > this.bouncebox[p].body.y) {
                                    this.spin = Math.random() * .05
                                } else {
                                    this.spin = Math.random() * -.05
                                }
                            }





                            break
                        }
                    }
                }
                this.bouncebox[p].angle += this.spin
                this.bouncebox[p].move()
                this.bouncebox[p].draw()
            }
        }
    }


    let mfruit = new Image()
    mfruit.src = "fs11.png"
    let shopnum = 0
    class Shop {
        constructor(rectangle, type = shopnum) {
            this.body = new Tile(Math.max(rectangle.x, rectangle.x - Math.abs(rectangle.width * 2)), Math.max(rectangle.y, rectangle.y - Math.abs(rectangle.height * 2)), Math.abs(rectangle.width), Math.abs(rectangle.height), "#FF00aa")
            this.bodyTile = new Tile(Math.max(rectangle.x, rectangle.x - Math.abs(rectangle.width * 2)), Math.max(rectangle.y, rectangle.y - Math.abs(rectangle.height * 2)), Math.abs(rectangle.width), Math.abs(rectangle.height), "#FF00aa")
            if (rectangle.width < 0) {
                this.body.x += rectangle.width
                this.bodyTile.x += rectangle.width
            }
            if (rectangle.height < 0) {
                this.body.y += rectangle.height
                this.bodyTile.y += rectangle.height
            }
            this.bodyTile.x += 1
            this.bodyTile.y += 1
            this.bodyTile.width -= 2
            this.bodyTile.height -= 2
            this.type = sandmap.buis.shops.length
            this.selected = 0
            shopnum++
            this.buttons = [new Rectangle(940, 100, 20, 20, "#00ff00"), new Rectangle(940, 200, 20, 20, "#0000FF")]
            this.price = 1
            this.id = getRandomColor()

            this.first = 0
        }
        names(type) {
            if (type == 0) {
                return "Broccoli"
            }
            if (type == 1) {
                return "Canteloupe"
            }
            if (type == 2) {
                return "Mangosteen"
            }
            if (type == 3) {
                return "Raspberry"
            }
            if (type == 4) {
                return "Star Anise"
            }
            if (type == 5) {
                return "Tomatillo"
            }
            if (type == 6) {
                return "Bell Pepper"
            }
            if (type == 7) {
                return "Cranberry"
            }
            if (type == 8) {
                return "Radish"
            }
            if (type == 9) {
                return "Daikon"
            }
            if (type == 10) {
                return "Persimmon"
            }
            if (type == 11) {
                return "Plantain"
            }
            if (type == 12) {
                return "Eggplant"
            }
            // if(type == 10){
            return "Fruit"
            // }
        }
        draw() {
            if(this.first == 0){
                sandmap.window.UI.shopping = 0
                this.first = 1
            }
            this.body.draw()
            if (this.selected == 1) {
                this.buttons[0].draw()
                this.buttons[1].draw()

                canvas_context.fillStyle = "white"
                canvas_context.strokeStyle = "black"
                canvas_context.font = "12px arial"
                canvas_context.strokeText("Shop: " + this.names(this.type), sandmap.window.minibody.x, 20)
                canvas_context.fillText("Shop: " + this.names(this.type), sandmap.window.minibody.x, 20)
                canvas_context.strokeText("Price: " + this.price, sandmap.window.minibody.x, 40)
                canvas_context.fillText("Price: " + this.price, sandmap.window.minibody.x, 40)

            }


            for (let t = 0; t < sandmap.guests.length; t++) {
                if (sandmap.guests[t][this.id] != 1) {
                    if (sandmap.guests[t].walkcount == 0) {
                    if (this.body.doesPerimeterTouch(sandmap.guests[t].shopbody)) {
                        if (sandmap.money + (this.price - .5) > 0) {
                            sandmap.guests[t][this.id] = 1
                            sandmap.guests[t].mood += (this.price - 1) * .25
                            sandmap.money += (this.price - .5)
                        }
                    }
                }
            }
        }


            // if(this.type == 0){
            map_context.drawImage(mfruit, 186 * (this.type % 10), 270 * (Math.floor(this.type / 10)), 186, 270, this.body.x - 1, this.body.y - 1, this.body.width + 2, this.body.height + 2)
            // }
        }
    }


    class Buisnesses {
        constructor() {
            this.shops = []
        }
        draw() {
            for (let t = 0; t < this.shops.length; t++) {
                this.shops[t].draw()
            }
        }
    }
    let biggrid = new Image()
    biggrid.src = "biggrid.png"
    let texture = new Image()
    texture.src = "texture.png"

    let box = new Box()
    let pomsphere = new Sphere(350, 350, 350, 100)
    let pomsphere2 = new Spherex(350, 350, 460, 20)
    let pomsphere3 = new Spherex(350, 397, 465, 20)
    let gridPointsByPos = []
    class Sandmap {
        constructor(width, height, posx, posy, gridPoints) {
            this.buis = new Buisnesses()
            this.enterTile = {}
            this.enterTile.make = 1
            this.entryFee = 25
            this.money = 1200
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
            // this.fog = []
            let id = 0
            this.diagonal = true
            // this.hotrocks = []
            // this.players = []
            // this.seed = 256 + (Math.floor(Math.random() * 256))

            let f1 = Math.floor(Math.random() * 5)
            let f2 = Math.floor(Math.random() * 5)


            // if (f1 == 0) {
            //     this.players.push(new Player('Cold Itzlerians', "#00FF00", 1, 1))
            // }else if (f1 == 1) {
            // this.players.push(new Player('Earthoids', "#FF00FF", 0, 0))
            // }else if (f1 == 2) {
            //     this.players.push(new Player('Hamartans', "#00FF00", 1, 2))
            // }else if (f1 == 3) {
            //     this.players.push(new Player('Librilbians', "#00FF00", 1, 3))
            // }else if (f1 == 4) {
            // this.players.push(new Player('Plaztilites', getRandomDarkColor(), 1, 4))
            // }

            // if (f2 == 0) {
            //     this.players.push(new Player('Cold Itzlerians', "#FF00FF", 1, 1))
            // }else if (f2 == 1) {
            //     this.players.push(new Player('Earthoids', "#FF00FF", 1, 0))
            // }else if (f2 == 2) {
            //     this.players.push(new Player('Hamartans', "#FF00FF", 1, 2))
            // }else if (f2 == 3) {
            //     this.players.push(new Player('Librilbians', "#FF00FF", 1, 3))
            // }else if (f2 == 4) {
            // this.players.push(new Player('Plaztilites',getRandomDarkColor(), 1, 4))
            // }

            // this.players.push(new Player('Hamartans', "#0000FF", 0, 2))
            // this.players.push(new Player('Earthoids', "#0000FF", 1, 0))
            // this.players.push(new Player('Earthoids', "#FF00FF", 0, 0))
            // this.players.push(new Player('Cold Itzlerians', "#00FF00", 1, 1))
            // this.players.push(new Player('Cold Itzlerians', "#FF0000", 1, 1))
            // this.players.push(new Player('Hamartans', "#0000FF", 1, 2))
            // this.players.push(new Player('Plaztilites', "#FF00FF", 1, 4))
            // this.players.push(new Player('Plaztilites', "#0000FF", 1, 4))
            // this.players.push(new Player('Librilbians', "#FF0000", 1, 3))
            // this.players.push(new Player('Librilbians', "#FF0000", 1, 3))
            // this.players.push(new Player('Hamartans', "#FFAA00", 1, 2))
            // this.players.push(new Player('Cold Itzlerians', "#00AA00", 1, 1))
            // this.players[0].aimode = 0
            // this.players[1].aimode = 1
            // this.players[1].units = []
            for (let g = 0; g < 1; g++) {
                for (let t = 0; t < 256; t++) {
                    let rects = []
                    // let fogs = []
                    for (let k = 0; k < 256; k++) {
                        let rect = new Tile(t * 10, k * 10, 10, 10, "#FF00AA", id, 10, t * 10, k * 10, true)
                        // let fogtile = new FogTile(t * 10, k * 10, 10, 10, "#090909", id, 10, t * 10, k * 10, true)
                        // if (g == 2) {
                        //     if (t > 2 && k > 2) {
                        //         if (t < 125 && k < 125) {
                        //             let bump = 0
                        //             for (let p = 0; p < this.hotrocks.length; p++) {
                        //                 let link = new LineOP(this.hotrocks[p], rect)
                        //                 if (link.hypotenuse() < 120 + ((Math.random() - .5) * 60)) {
                        //                     // ////////////////////////////console.log(this.hotrocks)
                        //                     bump = 1
                        //                 }
                        //             }

                        //             if (rect.ice != 1) {
                        //                 if (bump == 0) { //.009
                        //                     // rect.hotrock = 1
                        //                     // rect.sourcerock = 200
                        //                     // rect.walkable = true
                        //                     // rect.color = "#DDAA44"
                        //                     // if (Math.random() < .5) {
                        //                     rect.hotrock = 2
                        //                     rect.sourcerock = 400
                        //                     rect.walkable = true
                        //                     rect.color = "#AA8822"
                        //                     // }
                        //                     if (rect.hotrock == 1 || rect.hotrock == 2) {
                        //                         this.hotrocks.push(rect)
                        //                     }
                        //                 }
                        //             }
                        //         }
                        //     }
                        // }


                        // if(k <= 120 && k >= 0){
                        //     if(t%128 < 32 && t%128 > 28){
                        //         rect.walkable = false
                        //         rect.ice = 1
                        //         rect.color = "#AAFFFF"
                        //         rect.hotrock = 0
                        //         rect.sourcerock = -1
                        //     }
                        // }
                        // if(k <= 128 && k >= 8){
                        //     if(t%128 < 99 && t%128 > 96){
                        //         rect.walkable = false
                        //         rect.ice = 1
                        //         rect.color = "#AAFFFF"
                        //         rect.hotrock = 0
                        //         rect.sourcerock = -1
                        //     }
                        // }
                        rect.t = t
                        rect.k = k
                        rects.push(rect)
                        // fogs.push(fogtile)
                        id++
                    }
                    if (g == 0) {
                        //////console.log("a")
                        this.blocks.push(rects)
                        // this.fog.push(fogs)
                    } else {
                        // this.players[g].blocks.push(rects)
                        // this.players[g].fog.push(fogs)
                    }
                }
            }


            this.window = new Window()
            // this.players.push(new Player('Skribulons', "#696969"))
            // this.players.push(new Player('Palletae', "pink"))
            // this.players.push(new Player('Bulbato', "#00ff00"))
            // this.players.push(new Player('Hydruzan' , "purple" ))
            this.createGrid()
            this.gridPoints = []

            for (let t = 0; t < this.blocks.length; t++) {
                for (let k = 0; k < this.blocks[t].length; k++) {
                    this.gridPoints.push(this.blocks[t][k])
                }
            }
            ////////////////////////////////////////console.log(this)
            this.dirtyNodes = []

            this.roads = []
            for(let t = 0;t<20;t++){
               this.roads.push(new Road(new Rectangle(1280, t*10, 10, 10, "#909090")))
            }
            this.roadtiles = []
            this.roadseg()
            this.guests = []
            for (let t = 0; t < 5; t++) {
                // //console.log(this.enterTile)
                this.guests.push(new Guest(this.enterTile))
            }
            // //console.log(this.guests)
        }
        roadseg() {

            ////console.log(this)
            for (let t = 0; t < this.blocks.length; t++) {
                for (let k = 0; k < this.blocks[t].length; k++) {
                    this.blocks[t][k].walkable = false
                }
            }
            this.roadtiles = []
            for (let t = 0; t < this.blocks.length; t++) {
                for (let k = 0; k < this.blocks[t].length; k++) {
                    for (let r = 0; r < this.roads.length; r++) {
                        if (this.blocks[t][k].overlap(this.roads[r].bodyTile)) {
                            this.blocks[t][k].walkable = true
                            this.blocks[t][k].isinroads = true
                            this.roadtiles.push(this.blocks[t][k])
                        }
                    }
                }
            }
            if (this.enterTile.make == 1) {
                this.enterTile = this.roadtiles[0]
                this.enterTile.make = 0
            }

            this.window.UI.roading = 0
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
                    //////////////////////////////////////////////////////////console.log(countNodes)
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
                    // //   //////////////////////////////////////////////////////////console.log("wallSet had countNodes!")
                    //   tempNode.walkable = false;
                    // }

                    // tempNode.drawNode();
                    tempNode.F = tempNode.getValueF();
                    this.gridPoints.push(tempNode);

                    countNodes++;

                }
            }

        }

        draw() {
            // for (let t = 0; t < this.players.length; t++) {
            //     this.players[t].income = 0
            // }

            this.money = Math.round(this.money * 10) / 10
            canvas_context.fillStyle = "white"
            canvas_context.strokeStyle = "black"
            canvas_context.font = "18px arial"
            canvas_context.strokeText("Money: " + this.money, sandmap.window.minibody.x, 350)
            canvas_context.fillText("Money: " + this.money, sandmap.window.minibody.x, 350)
            canvas_context.strokeText("Guests: " + this.guests.length, sandmap.window.minibody.x + 200, 350)
            canvas_context.fillText("Guests: " + this.guests.length, sandmap.window.minibody.x + 200, 350)



            if (Math.random() < .05) {
                let chooser = Math.floor(Math.random() * 2)
                if (chooser == 0) {
                    if (this.windspeed > .1051) {
                        this.windspeed /= 1.05
                    }
                }
                if (chooser == 1) {
                    if (this.windspeed < 2.37) {
                        this.windspeed *= 1.05
                    }
                }
                if (chooser == 2) {
                    this.winddirx *= -1
                }
                if (chooser == 3) {
                    this.winddiry *= -1
                }
                if (chooser == 4) {
                    this.winddirx = 0
                }
                if (chooser == 5) {
                    this.winddirx = 1
                }
                if (chooser == 6) {
                    this.winddiry = 0
                }
                if (chooser == 7) {
                    this.winddiry = 1
                }
                if (chooser == 8) {
                    this.winddirx = -1
                }
                if (chooser == 9) {
                    this.winddiry = -1
                }
            }

            // canvas_context.fillStyle = "white"
            // // canvas_context.strokeStyle = sandmap.players[sandmap.turn].color
            // canvas_context.lineWidth = 1.5
            // canvas_context.font = "18px arial"
            // canvas_context.strokeText("Windspeed: " + Math.round(this.windspeed * 2000) + "cm/s", this.window.minibody.x, this.window.minibody.y - 20)
            // canvas_context.fillText("Windspeed: " + Math.round(this.windspeed * 2000) + "cm/s", this.window.minibody.x, this.window.minibody.y - 20)
            // canvas_context.drawImage(windmeter, 0, 10 * (Math.round(this.windspeed * 10)), windmeter.width, 10, this.window.minibody.x, this.window.minibody.y - 12, 250, 10)

            let rect = new Tile(0, 0, 2560, 2560, sandmap.window.UI.colorbox.rooms)
            //console.log(sandmap.window.UI.colorbox.rooms)
            if(isColor(sandmap.window.UI.colorbox.rooms)){

            }else{
                rect.color = "green"
            }
            // for (let t = 0; t < this.blocks.length; t++) {
            //     for (let k = 0; k < this.blocks[t].length; k++) {
            //         this.blocks[t][k].draw()

            //     }
            // }
            rect.draw()
            // map_context.drawImage(texture, 0,0,texture.width, texture.height, 0,0,rect.width,rect.height)

            this.buis.draw()
            if (keysPressed['g']) {
                map_context.drawImage(biggrid, 0, 0)
            }
            for (let t = 0; t < this.roads.length; t++) {
                this.roads[t].draw()
            }

            for (let t = 0; t < this.pens.length; t++) {
                this.pens[t].draw()
            }

            for (let t = 0; t < this.pens.length; t++) {
                if(keysPressed['m'] || sandmap.window.UI.deletetoggle == 1){
                    if(this.pens[t].selected == 1){
                        this.pens[t].clean()
                        this.pens[t].marked = 1
                        sandmap.window.UI.deletetoggle = -1
                    }
                }
            }
            for (let t = 0; t < this.buis.shops.length; t++) {
                if(keysPressed['m'] || sandmap.window.UI.deletetoggle == 1){
                    if(this.buis.shops[t].selected == 1){
                        // this.buis.shops[t].clean()
                        this.buis.shops[t].marked = 1
                        sandmap.window.UI.deletetoggle = -1
                    }
                }
            }


            for (let t = 0; t < this.pens.length; t++) {
                if(this.pens[t].marked == 1){
                    this.money += Math.abs(this.pens[t].body.width) + Math.abs(this.pens[t].body.height)
                    this.pens.splice(t,1)
                }
            }

            for (let t = 0; t < this.buis.shops.length; t++) {
                if(this.buis.shops[t].marked == 1){
                    this.money += (Math.round((Math.abs(this.buis.shops[t].body.width) + Math.abs(this.buis.shops[t].body.height)))) * 5 * (sandmap.buis.shops.length + 1)
                    this.buis.shops.splice(t,1)
                }
            }

            let weat = 0
            for (let t = 0; t < this.roads.length; t++) {
                if(t > 2){
                    if(this.roads[t].marked == 1){
                        // this.money += Math.abs(this.pens[t].body.width) + Math.abs(this.pens[t].body.height)
                        this.roads.splice(t,1)
                        weat = 1
                    }
                }
            }


            if(weat == 1){
                for(let t = 0;t<this.roadtiles.length;t++){
                    this.roadtiles[t].isinroads = false
                    this.roadtiles[t].walkable = false
                }
                this.roadseg()
            }

            for (let t = 0; t < this.blocks.length; t++) {
                for (let k = 0; k < this.blocks[t].length; k++) {
                    this.blocks[t][k].isinroads = false
                    this.blocks[t][k].walkable = false
                }
            }

            for(let t = 0;t<this.roadtiles.length;t++){
                this.roadtiles[t].isinroads = true
                this.roadtiles[t].walkable = true
            }



            for (let t = 0; t < this.guests.length; t++) {
                this.guests[t].draw()
            }

            for (let t = 0; t < this.guests.length; t++) {
                if (this.guests[t].marked == 1) {
                    if (this.guests.length < (25 * this.pens.length) + 25) {
                        if (this.guests[t].mood <= 1) {
                            this.guests.push(new Guest(this.enterTile))
                        }
                    }
                    this.guests.splice(t, 1)
                }
            }

            if (this.guests.length < (25 * this.pens.length) + 25) {
                if (Math.random() < Math.min(.010101 * (1 + (this.guests.length / 150)), .05)) {
                    this.guests.push(new Guest(this.enterTile))
                }
            }


            // for (let t = 0; t < this.players.length; t++) {
            //     if (this.players[t].isAI == 1) {
            //         // if(t == 0){
            //         this.players[t].ai()
            //         // }else{
            //         //     this.players[t].oldai()
            //         // }

            //     }
            // // }
            // for (let t = 0; t < this.players.length; t++) {
            //     this.players[t].draw()
            // }
            // for (let t = 0; t < this.players.length; t++) {
            //     this.players[t].unitdraw()
            // }
            // for (let t = 0; t < this.players.length; t++) {
            //     this.players[t].uiDraw()
            // }
            // for (let t = 0; t < this.players.length; t++) {
            //     this.players[t].dataOutput()
            // }


            // for (let t = 0; t < this.players.length; t++) {
            //     this.players[t].slimeflag = 0
            // }


            //abstract fog to player teams
            // for (let t = 0; t < this.fog.length; t++) {
            //     for (let k = 0; k < this.fog[t].length; k++) {
            //         if (this.players[this.turn].blocks[t][k].markdraw == 1) {
            //             this.players[this.turn].fog[t][k].timer--
            //             if (this.players[this.turn].fog[t][k].timer <= 0) {
            //                 this.players[this.turn].fog[t][k].color = "#09090922"
            //                 this.players[this.turn].fog[t][k].draw()
            //             }
            //         } else {
            //             this.players[this.turn].fog[t][k].draw()
            //         }
            //     }
            // }
            this.window.draw()
        }
    }
    class Window {
        constructor() {
            this.body = new Rectangle(0, 0, 900, 720, "transparent")
            this.minibody = new Rectangle(this.body.x + this.body.width + 10, 360, 360, 360, "transparent")
            this.guide = new Circle(840, 0, 1, "transparent")
            this.UI = new UI()
        }
        draw() {
            // if(this.UI.beDrawn == 1){
            this.UI.draw()
            // }
            control(this.guide, 15)
            this.guide.x = Math.round(this.guide.x)
            this.guide.y = Math.round(this.guide.y)
            if (this.guide.x < 0) {
                this.guide.x = 0
            }
            if (this.guide.y < 0) {
                this.guide.y = 0
            }
            if (this.guide.x > map_canvas.width - (this.body.width * 1)) {
                this.guide.x = map_canvas.width - (this.body.width * 1)
            }
            if (this.guide.y > map_canvas.width - (this.body.height * 1)) {
                this.guide.y = map_canvas.width - (this.body.height * 1)
            }
            // selectrect.color = (sandmap.players[sandmap.turn].color + "22")
            selectrect.draw()
            map_context.strokeStyle = "#FFFFFF"
            map_context.lineWidth = 6
            map_context.strokeRect(this.guide.x - 3, this.guide.y - 3, (this.body.width * 1) + 6, (this.body.height * 1) + 6)
            canvas_context.drawImage(map_canvas, this.guide.x, this.guide.y, this.body.width * 1, this.body.height * 1, this.body.x, this.body.y, this.body.width, this.body.height)
            canvas_context.drawImage(map_canvas, 0, 0, map_canvas.width, map_canvas.height, this.minibody.x, this.minibody.y, this.minibody.width, this.minibody.height)

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
            this.xmom = 0
            this.ymom = 0
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
            if (sandmap.diagonal == false && sandmap.slimeflag != 1) { //edit???
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
            // //////////////////////////////////////////////////////////console.log(link)
            // //////////////////////////////////////////////////////////console.log(bottle)
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
            //     // //////////////////////////////////////////////////////////console.log(this)

            //     // this.createWall();
            //     return;
            //     // }else if (link.hypotenuse() < 11) {
            // } else if (this.posx == roundedx && this.posy == roundedy) {
            //     //   //////////////////////////////////////////////////////////console.log("hit the startNode");
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
        draw() {
            // this.counterset++
            // if (this.counterset % 3 == 0) {
            //     this.counter++
            // }
            // if (this.sourcerock <= 0 && this.hotrock != 0) {
            //     this.hotrock = 0
            //     // this.color = "#AACCFF"
            //     sandmap.hotrocks.splice(sandmap.hotrocks.indexOf(this), 1)
            // }
            // if (((this.walkable == false) || (this.walkable == true && this.spiretile >= 1))&& this.builtOn == 1 && !(this.hotrock >= 1)) {
            //     if (this.spiretile >= 1) {
            //         this.color = "transparent"
            //     }
            //     if (typeof this.wallcolor != "undefined") {
            // //////console.log("s")
            map_context.fillStyle = this.color
            map_context.fillRect(this.x, this.y, this.width, this.height)
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
            //////console.log(point, this)
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
    class ContTile {
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
            this.xmom = 0
            this.ymom = 0
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
            if (sandmap.diagonal == false && sandmap.slimeflag != 1) { //edit???
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
            // //////////////////////////////////////////////////////////console.log(link)
            // //////////////////////////////////////////////////////////console.log(bottle)
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
            //     // //////////////////////////////////////////////////////////console.log(this)

            //     // this.createWall();
            //     return;
            //     // }else if (link.hypotenuse() < 11) {
            // } else if (this.posx == roundedx && this.posy == roundedy) {
            //     //   //////////////////////////////////////////////////////////console.log("hit the startNode");
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
        draw(context, x = 0, y = 0) {
            // this.counterset++
            // if (this.counterset % 3 == 0) {
            //     this.counter++
            // }
            // if (this.sourcerock <= 0 && this.hotrock != 0) {
            //     this.hotrock = 0
            //     // this.color = "#AACCFF"
            //     sandmap.hotrocks.splice(sandmap.hotrocks.indexOf(this), 1)
            // }
            // if (((this.walkable == false) || (this.walkable == true && this.spiretile >= 1))&& this.builtOn == 1 && !(this.hotrock >= 1)) {
            //     if (this.spiretile >= 1) {
            //         this.color = "transparent"
            //     }
            //     if (typeof this.wallcolor != "undefined") {
            // //////console.log("s")
            context.fillStyle = this.color
            context.fillRect(x, y, this.width, this.height)
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
            //////console.log(point, this)
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


    class Runnybabbit {
        constructor(x, y, colors, pen) {
            this.pen = pen
            this.cost = 2500
            this.variety = 5
            this.name = this.nameGenerator()
            this.needs = []
            this.colors = colors
            this.body = new TileCircle(x, y, 6, this.colors[0])
            this.sparks = []
            this.decay = .94
            this.angle = Math.random() * Math.PI * 2
            this.crab = 1
            // this.firekin = 1
            this.nodes = []
            this.nodangle = 0
            this.bodyrad = 15
            for (let t = 0; t < 9; t++) {
                let node = new TileCircle(x, y, 1, this.colors[1])
                node.angle = this.nodangle
                node.dis = this.bodyrad
                this.nodangle += (Math.PI / 4.5)
                this.nodes.push(node)
            }
            // this.step = Math.floor(Math.random()*484)
            this.radius = 6
            this.age = 0
            this.pen = pen
            this.scale = .5
            this.body.angle = Math.random() * Math.PI * 2
            this.spin = -Math.random() * .3
        }

        jumpspin() {
            if (Math.random() < .2) {
                this.spin = -Math.random() * .3
            }
            if (Math.random() < .2) {
                this.spin = Math.random() * .3
            }
            this.body.angle += Math.sign(Math.random() - .5) * .2
        }
        draw() {



            this.needs = []

            let stones = 0
            let grass = 0
            for (let t = 0; t < this.pen.enrichment.length; t++) {
                if (this.pen.enrichment[t].grass == 1) {
                    grass++
                }
                if (this.pen.enrichment[t].stone == 1) {
                    stones++
                }
            }
            if (((this.pen.body.width * this.pen.body.height)) / 17000 > (grass)) {
                this.needs.push('More Grass')
            }
            if (((this.pen.body.width * this.pen.body.height)) / 20000 > (stones)) {
                this.needs.push('More Stones')
            }
            if (((this.pen.body.width * this.pen.body.height) / this.pen.animals.length) < 900 && this.pen.animals.length > 1) {
                this.needs.push('Overcrowded')
            }
            if (this.pen.animals.length < 2) {
                this.needs.push('Lonely')
            }


            if (Math.random() < .01) {
                this.body.angle += this.spin
            }

            if (Math.random() < .01) {
                this.jumpspin()
            }


            this.body.x += Math.cos(this.body.angle + Math.PI)
            this.body.y += Math.sin(this.body.angle + Math.PI)
            this.age++
            this.scale = .5 + Math.min(this.age / 1000, .5)
            this.body.radius = this.radius * this.scale

            for (let t = 0; t < this.nodes.length; t++) {
                this.nodes[t].dis += Math.cos((this.nodangle + this.nodes[t].angle) * 4)
                this.nodes[t].x = this.body.x + (Math.cos(this.nodes[t].angle) * this.nodes[t].dis * this.scale)
                this.nodes[t].y = this.body.y + (Math.sin(this.nodes[t].angle) * this.nodes[t].dis * this.scale)
                // this.nodes[t].draw()
            }
            this.nodangle += (Math.PI / 9)
            map_context.strokeStyle = this.nodes[0].color
            map_context.fillStyle = this.nodes[0].color
            map_context.lineWidth = 2
            map_context.beginPath()
            map_context.moveTo(this.nodes[0].x, this.nodes[0].y)
            for (let t = 1; t < this.nodes.length; t++) {
                map_context.lineTo(this.nodes[t].x, this.nodes[t].y)
            }
            map_context.lineTo(this.nodes[0].x, this.nodes[0].y)
            map_context.fill()
            map_context.stroke()
            map_context.closePath()
            this.body.y -= 2
            let xdisp = (Math.random() * 1) - .5
            this.body.x -= xdisp
            this.body.sdraw()
            this.body.x += xdisp
            this.body.y += 2

        }

        nameGenerator() {
            let name = ''
            let random = Math.floor(Math.random() * 4) + 1
            for (let t = 0; t < random; t++) {
                let select = Math.floor(Math.random() * 23)
                if (t == 0) {
                    if (select == 0) {
                        name += 'Po'
                    } else if (select == 1) {
                        name += 'Mo'
                    } else if (select == 2) {
                        name += 'Bo'
                    } else if (select == 3) {
                        name += 'Jo'
                    } else if (select == 4) {
                        name += 'Go'
                    } else if (select == 5) {
                        name += 'Mao'
                    } else if (select == 6) {
                        name += 'Mop'
                    } else if (select == 7) {
                        name += 'Pom'
                    } else if (select == 8) {
                        name += 'Moo'
                    } else if (select == 9) {
                        name += 'Pou'
                    } else if (select == 10) {
                        name += 'Goo'
                    } else if (select == 11) {
                        name += 'Bao'
                    } else if (select == 12) {
                        name += 'Mam'
                    } else if (select == 13) {
                        name += 'Pam'
                    } else if (select == 14) {
                        name += 'Omp'
                    } else if (select == 15) {
                        name += 'Op'
                    } else if (select == 16) {
                        name += 'Boa'
                    } else if (select == 17) {
                        name += 'Moa'
                    } else if (select == 18) {
                        name += 'Jao'
                    } else if (select == 19) {
                        name += 'Oj'
                    } else if (select == 20) {
                        name += 'P'
                    } else if (select == 21) {
                        name += 'Ro'
                    } else if (select == 22) {
                        name += 'Um'
                    }
                } else {
                    if (select == 0) {
                        name += 'oo'
                    } else if (select == 1) {
                        name += 'omo'
                    } else if (select == 2) {
                        name += 'obo'
                    } else if (select == 3) {
                        name += 'po'
                    } else if (select == 4) {
                        name += 'mo'
                    } else if (select == 5) {
                        name += 'mao'
                    } else if (select == 6) {
                        name += 'op'
                    } else if (select == 7) {
                        name += 'oma'
                    } else if (select == 8) {
                        name += 'moa'
                    } else if (select == 9) {
                        name += 'pao'
                    } else if (select == 10) {
                        name += 'opo'
                    } else if (select == 11) {
                        name += 'o'
                    } else if (select == 12) {
                        name += 'p'
                    } else if (select == 13) {
                        name += 'm'
                    } else if (select == 14) {
                        name += 'j'
                    } else if (select == 15) {
                        name += 'go'
                    } else if (select == 16) {
                        name += 'gao'
                    } else if (select == 17) {
                        name += 'tao'
                    } else if (select == 18) {
                        name += 'lao'
                    } else if (select == 19) {
                        name += 'sao'
                    } else if (select == 20) {
                        name += 'opop'
                    } else if (select == 21) {
                        name += 'ogoo'
                    } else if (select == 22) {
                        name += 'um'
                    }
                }
            }
            map_context.font = "18px Arial";
            map_context.fillStyle = 'yellow'
            map_context.strokeStyle = 'black'
            while (map_context.measureText(name).width > 80) {
                name = name.split('')
                name.splice(name.length - 1, 1)
                name = name.join('')
            }
            return name
        }
    }
    class Knocktapus {
        constructor(x, y, colors, pen) {
            this.knock = 1
            this.pen = pen
            this.cost = 4000
            this.variety = 6
            this.name = this.nameGenerator()
            this.needs = []
            this.colors = colors
            this.body = new Tile(x, y, 6, 6, this.colors[0])
            this.sparks = []
            this.decay = .94
            this.angle = Math.random() * Math.PI * 2
            this.crab = 1
            this.majorswing = .1
            this.swingcount = 0
            this.legs = []
            // this.firekin = 1
            this.nodes = []
            this.nodangle = 0
            this.bodyrad = 15
            for (let t = 0; t < 9; t++) {
                this.nodes = []
                for (let k = 0; k < 9; k++) {
                    let node = new TileCircle(x, y, 1, this.colors[1])
                    node.angle = this.nodangle
                    node.dis = this.bodyrad + (k * .9)
                    this.nodes.push(node)
                }
                this.legs.push(this.nodes)
                this.nodangle += (Math.PI / 4.5)
            }
            // this.step = Math.floor(Math.random()*484)
            this.radius = 6
            this.age = 0
            this.pen = pen
            this.scale = .5
            this.body.angle = Math.random() * Math.PI * 2
            this.spin = -Math.random() * .3
        }

        jumpspin() {
            if (Math.random() < .2) {
                this.spin = -Math.random() * .3
            }
            if (Math.random() < .2) {
                this.spin = Math.random() * .3
            }
            this.body.angle += Math.sign(Math.random() - .5) * .2
        }
        draw() {




            this.needs = []
            let flowers = 0
            let puddles = 0
            for (let t = 0; t < this.pen.enrichment.length; t++) {
                if (this.pen.enrichment[t].puddle == 1) {
                    puddles++
                }
                if (this.pen.enrichment[t].flower == 1) {
                    flowers++
                }
            }
            if (((this.pen.body.width * this.pen.body.height)) / 7000 > (puddles)) {
                this.needs.push('More Puddles')
            }
            if (((this.pen.body.width * this.pen.body.height)) / 10000 > (flowers)) {
                this.needs.push('More Flowers')
            }






            if (((this.pen.body.width * this.pen.body.height) / this.pen.animals.length) < 2900 && this.pen.animals.length > 1) {
                this.needs.push('Overcrowded')
            }
            if (this.pen.animals.length < 2) {
                this.needs.push('Lonely')
            }


            if (Math.random() < .01) {
                this.body.angle += this.spin
            }

            if (Math.random() < .01) {
                this.jumpspin()
            }


            if (Math.random() < .05) {
                for (let t = 0; t < this.pen.animals.length; t++) {
                    if (this.pen.animals[t].scuttle == 1) {
                        this.body.angle = (new LineOP(this.body, this.pen.animals[t].body)).angle() + Math.PI
                    }
                }
            }

            for (let t = 0; t < this.pen.animals.length; t++) {
                if (this.pen.animals[t].scuttle == 1) {

                    this.needs.push('Less Predators')
                    if (this.markedtimer > -1) {
                        this.body.x = this.pen.animals[t].body.nodes[0].x
                        this.body.y = this.pen.animals[t].body.nodes[0].y
                        this.pen.animals[t].body.angle += (Math.random() - .5)
                    } else if (this.body.doesPerimeterTouch(this.pen.animals[t].body.body)) {
                        this.markedtimer = 60
                    }
                }
            }

            this.markedtimer--

            if (this.markedtimer < 0) {
                this.marked = 1
            }



            this.body.x += Math.cos(this.body.angle + Math.PI) * 1.8
            this.body.y += Math.sin(this.body.angle + Math.PI) * 1.8
            this.age++

            if (this.markedtimer > -1) {
                this.scale = .5 + Math.min(this.age / 1000, (this.markedtimer) / 120)
            } else {
                this.scale = .5 + Math.min(this.age / 1000, .5)
            }
            this.body.radius = this.radius * this.scale
            this.body.width = this.body.radius
            this.body.height = this.body.radius

            this.nodangle += (Math.PI / 30)
            for (let t = 0; t < this.legs.length; t++) {
                this.swingcount = 0
                map_context.beginPath()
                map_context.moveTo(this.body.x, this.body.y)
                map_context.strokeStyle = this.legs[0][0].color
                map_context.fillStyle = this.legs[0][0].color
                map_context.lineWidth = this.scale * 2
                for (let k = 0; k < this.legs[t].length; k++) {
                    this.legs[t][k].dis += Math.cos((this.nodangle + this.legs[t][k].angle) * 4)
                    this.legs[t][k].x = this.body.x + (Math.cos(this.swingcount + this.legs[t][k].angle) * this.legs[t][k].dis * this.scale)
                    this.legs[t][k].y = this.body.y + (Math.sin(this.swingcount + this.legs[t][k].angle) * this.legs[t][k].dis * this.scale)
                    // this.legs[t][k].draw()

                    // for(let t = 0;t<this.legs.length;t++){
                    //     for(let k = 0;k<this.legs[t].length;k++){
                    map_context.lineTo(this.legs[t][k].x, this.legs[t][k].y)
                    //     }
                    // }
                    // map_context.lineTo(this.legs[0].x, this.legs[0].y)
                    // map_context.fill()
                    this.swingcount += this.majorswing
                }
                map_context.stroke()
                map_context.closePath()
            }
            this.majorswing = Math.cos((this.nodangle) * 4) / 40
            // this.body.y-=2
            // let xdisp = (Math.random()*1)-.5
            // this.body.x-=xdisp
            // this.body.sdraw()
            // this.body.x+=xdisp
            // this.body.y+=2
            this.body.y -= this.body.radius * .5
            this.body.x -= this.body.radius * .5
            // let xdisp = (Math.random()*1)-.5
            // this.body.x-=xdisp
            this.body.draw()
            // this.body.x+=xdisp
            this.body.y += this.body.radius * .5
            this.body.x += this.body.radius * .5

        }

        nameGenerator() {
            let name = ''
            let random = Math.floor(Math.random() * 4) + 1
            for (let t = 0; t < random; t++) {
                let select = Math.floor(Math.random() * 23)
                if (t == 0) {
                    if (select == 0) {
                        name += 'Po'
                    } else if (select == 1) {
                        name += 'Mo'
                    } else if (select == 2) {
                        name += 'Bo'
                    } else if (select == 3) {
                        name += 'Jo'
                    } else if (select == 4) {
                        name += 'Go'
                    } else if (select == 5) {
                        name += 'Mao'
                    } else if (select == 6) {
                        name += 'Mop'
                    } else if (select == 7) {
                        name += 'Pom'
                    } else if (select == 8) {
                        name += 'Moo'
                    } else if (select == 9) {
                        name += 'Pou'
                    } else if (select == 10) {
                        name += 'Goo'
                    } else if (select == 11) {
                        name += 'Bao'
                    } else if (select == 12) {
                        name += 'Mam'
                    } else if (select == 13) {
                        name += 'Pam'
                    } else if (select == 14) {
                        name += 'Omp'
                    } else if (select == 15) {
                        name += 'Op'
                    } else if (select == 16) {
                        name += 'Boa'
                    } else if (select == 17) {
                        name += 'Moa'
                    } else if (select == 18) {
                        name += 'Jao'
                    } else if (select == 19) {
                        name += 'Oj'
                    } else if (select == 20) {
                        name += 'P'
                    } else if (select == 21) {
                        name += 'Ro'
                    } else if (select == 22) {
                        name += 'Um'
                    }
                } else {
                    if (select == 0) {
                        name += 'oo'
                    } else if (select == 1) {
                        name += 'omo'
                    } else if (select == 2) {
                        name += 'obo'
                    } else if (select == 3) {
                        name += 'po'
                    } else if (select == 4) {
                        name += 'mo'
                    } else if (select == 5) {
                        name += 'mao'
                    } else if (select == 6) {
                        name += 'op'
                    } else if (select == 7) {
                        name += 'oma'
                    } else if (select == 8) {
                        name += 'moa'
                    } else if (select == 9) {
                        name += 'pao'
                    } else if (select == 10) {
                        name += 'opo'
                    } else if (select == 11) {
                        name += 'o'
                    } else if (select == 12) {
                        name += 'p'
                    } else if (select == 13) {
                        name += 'm'
                    } else if (select == 14) {
                        name += 'j'
                    } else if (select == 15) {
                        name += 'go'
                    } else if (select == 16) {
                        name += 'gao'
                    } else if (select == 17) {
                        name += 'tao'
                    } else if (select == 18) {
                        name += 'lao'
                    } else if (select == 19) {
                        name += 'sao'
                    } else if (select == 20) {
                        name += 'opop'
                    } else if (select == 21) {
                        name += 'ogoo'
                    } else if (select == 22) {
                        name += 'um'
                    }
                }
            }
            map_context.font = "18px Arial";
            map_context.fillStyle = 'yellow'
            map_context.strokeStyle = 'black'
            while (map_context.measureText(name).width > 80) {
                name = name.split('')
                name.splice(name.length - 1, 1)
                name = name.join('')
            }
            return name
        }
    }
    class Scuttlefish {
        constructor(x, y, colors, pen) {
            this.scuttle = 1
            this.pen = pen
            this.cost = 5000
            this.variety = 7
            this.name = this.nameGenerator()
            this.needs = []
            this.colors = colors
            this.body = new Polygon(x, y, 6, this.colors[0], 3)
            this.sparks = []
            this.decay = .94
            this.angle = Math.random() * Math.PI * 2
            this.crab = 1
            this.majorswing = .1
            this.swingcount = 0
            this.legs = []
            // this.firekin = 1
            this.nodes = []
            this.nodangle = 0
            this.bodyrad = 15
            for (let t = 0; t < 12; t++) {
                this.nodes = []
                for (let k = 0; k < 5; k++) {
                    let node = new TileCircle(x, y, 1, this.colors[1])
                    node.angle = this.nodangle
                    node.dis = this.bodyrad + (k * 1.5)
                    this.nodes.push(node)
                }
                this.legs.push(this.nodes)
                this.nodangle += (Math.PI / 6)
            }
            // this.step = Math.floor(Math.random()*484)
            this.radius = 6
            this.age = 0
            this.pen = pen
            this.scale = .5
            this.body.angle = Math.random() * Math.PI * 2
            this.spin = -Math.random() * .3
        }

        jumpspin() {
            if (Math.random() < .2) {
                this.spin = -Math.random() * .3
            }
            if (Math.random() < .2) {
                this.spin = Math.random() * .3
            }
            this.body.angle += Math.sign(Math.random() - .5) * .2
        }
        draw() {

            this.needs = []
            if (((this.pen.body.width * this.pen.body.height) / this.pen.animals.length) < 900 && this.pen.animals.length > 1) {
                this.needs.push('Overcrowded')
            }
            if (this.pen.animals.length < 2) {
                this.needs.push('Lonely')
            }


            if (Math.random() < .01) {
                this.body.angle += this.spin
            }

            if (Math.random() < .01) {
                this.jumpspin()
            }

            if (Math.random() < .05) {
                for (let t = 0; t < this.pen.animals.length; t++) {
                    if (this.pen.animals[t].knock == 1) {
                        this.body.angle = (new LineOP(this.body, this.pen.animals[t].body)).angle() + Math.PI
                    }
                }
            }

            this.body.body.x += Math.cos(this.body.angle)
            this.body.body.y += Math.sin(this.body.angle)
            this.age++
            this.scale = .5 + Math.min(this.age / 1000, .5)
            this.body.radius = this.radius * this.scale
            this.body.size = this.radius * this.scale * 2
            this.body.width = this.body.radius
            this.body.height = this.body.radius

            this.nodangle += (Math.PI / 30)
            for (let t = 0; t < this.legs.length; t++) {
                this.swingcount = 0
                map_context.beginPath()
                map_context.moveTo(this.body.x, this.body.y)
                map_context.strokeStyle = this.legs[0][0].color
                map_context.fillStyle = this.legs[0][0].color
                map_context.lineWidth = this.scale * 2
                for (let k = 0; k < this.legs[t].length; k++) {
                    this.legs[t][k].dis += Math.cos((this.nodangle + this.legs[t][k].angle) * 4)
                    // if(this.body.angle.between(0, Math.PI, true)){
                    this.legs[t][k].x = this.body.x + (Math.cos(((this.swingcount + this.legs[t][k].angle) * 2) - this.body.angle) * this.legs[t][k].dis * this.scale)
                    this.legs[t][k].y = this.body.y + (Math.sin((this.swingcount + this.legs[t][k].angle) - this.body.angle) * this.legs[t][k].dis * this.scale)
                    // }else{
                    //     this.legs[t][k].x = this.body.x+(Math.cos(this.swingcount+this.legs[t][k].angle)*this.legs[t][k].dis*this.scale)
                    //     this.legs[t][k].y = this.body.y+(Math.sin((this.swingcount+this.legs[t][k].angle)*2)*this.legs[t][k].dis*this.scale)
                    // }
                    // this.legs[t][k].draw()

                    // for(let t = 0;t<this.legs.length;t++){
                    //     for(let k = 0;k<this.legs[t].length;k++){
                    map_context.lineTo(this.legs[t][k].x, this.legs[t][k].y)
                    //     }
                    // }
                    // map_context.lineTo(this.legs[0].x, this.legs[0].y)
                    // map_context.fill()
                    this.swingcount += this.majorswing
                }
                map_context.stroke()
            }
            map_context.closePath()

            this.majorswing = Math.cos((this.nodangle) * 4) / 40
            // this.body.y-=2
            // let xdisp = (Math.random()*1)-.5
            // this.body.x-=xdisp
            // this.body.sdraw()
            // this.body.x+=xdisp
            // this.body.y+=2
            // this.body.y-=this.body.radius *.5
            // this.body.x-=this.body.radius *.5
            // let xdisp = (Math.random()*1)-.5
            // this.body.x-=xdisp
            this.body.draw()
            // this.body.x+=xdisp
            // this.body.y+=this.body.radius *.5
            // this.body.x+=this.body.radius *.5

        }

        nameGenerator() {
            let name = ''
            let random = Math.floor(Math.random() * 4) + 1
            for (let t = 0; t < random; t++) {
                let select = Math.floor(Math.random() * 23)
                if (t == 0) {
                    if (select == 0) {
                        name += 'Po'
                    } else if (select == 1) {
                        name += 'Mo'
                    } else if (select == 2) {
                        name += 'Bo'
                    } else if (select == 3) {
                        name += 'Jo'
                    } else if (select == 4) {
                        name += 'Go'
                    } else if (select == 5) {
                        name += 'Mao'
                    } else if (select == 6) {
                        name += 'Mop'
                    } else if (select == 7) {
                        name += 'Pom'
                    } else if (select == 8) {
                        name += 'Moo'
                    } else if (select == 9) {
                        name += 'Pou'
                    } else if (select == 10) {
                        name += 'Goo'
                    } else if (select == 11) {
                        name += 'Bao'
                    } else if (select == 12) {
                        name += 'Mam'
                    } else if (select == 13) {
                        name += 'Pam'
                    } else if (select == 14) {
                        name += 'Omp'
                    } else if (select == 15) {
                        name += 'Op'
                    } else if (select == 16) {
                        name += 'Boa'
                    } else if (select == 17) {
                        name += 'Moa'
                    } else if (select == 18) {
                        name += 'Jao'
                    } else if (select == 19) {
                        name += 'Oj'
                    } else if (select == 20) {
                        name += 'P'
                    } else if (select == 21) {
                        name += 'Ro'
                    } else if (select == 22) {
                        name += 'Um'
                    }
                } else {
                    if (select == 0) {
                        name += 'oo'
                    } else if (select == 1) {
                        name += 'omo'
                    } else if (select == 2) {
                        name += 'obo'
                    } else if (select == 3) {
                        name += 'po'
                    } else if (select == 4) {
                        name += 'mo'
                    } else if (select == 5) {
                        name += 'mao'
                    } else if (select == 6) {
                        name += 'op'
                    } else if (select == 7) {
                        name += 'oma'
                    } else if (select == 8) {
                        name += 'moa'
                    } else if (select == 9) {
                        name += 'pao'
                    } else if (select == 10) {
                        name += 'opo'
                    } else if (select == 11) {
                        name += 'o'
                    } else if (select == 12) {
                        name += 'p'
                    } else if (select == 13) {
                        name += 'm'
                    } else if (select == 14) {
                        name += 'j'
                    } else if (select == 15) {
                        name += 'go'
                    } else if (select == 16) {
                        name += 'gao'
                    } else if (select == 17) {
                        name += 'tao'
                    } else if (select == 18) {
                        name += 'lao'
                    } else if (select == 19) {
                        name += 'sao'
                    } else if (select == 20) {
                        name += 'opop'
                    } else if (select == 21) {
                        name += 'ogoo'
                    } else if (select == 22) {
                        name += 'um'
                    }
                }
            }
            map_context.font = "18px Arial";
            map_context.fillStyle = 'yellow'
            map_context.strokeStyle = 'black'
            while (map_context.measureText(name).width > 80) {
                name = name.split('')
                name.splice(name.length - 1, 1)
                name = name.join('')
            }
            return name
        }
    }
    class Hexagoon {
        constructor(x, y, colors, pen) {
            this.hexagoon = 1
            this.pen = pen
            this.cost = 7500
            this.variety = 8
            this.name = this.nameGenerator()
            this.needs = []
            this.colors = colors
            this.body = new Polygon(x, y, 6, this.colors[0], 6)
            if(Math.random()<.05){
                this.body.sides += 1
                this.variety += 2
            }
            this.body.draw()
            this.sparks = []
            this.decay = .94
            this.angle = Math.random() * Math.PI * 2
            this.crab = 1
            this.majorswing = .1
            this.swingcount = 0
            this.legs = []

            this.radius = 6
            // this.firekin = 1
            this.nodes = []
            this.nodangle = 0
            this.bodyrad = 15
            // for (let t = 0; t < 12; t++) {
            //     this.nodes = []
            //     for (let k = 0; k < 5; k++) {
            //         let node = new TileCircle(x, y, 1, this.colors[1])
            //         node.angle = this.nodangle
            //         node.dis = this.bodyrad + (k * 1.5)
            //         this.nodes.push(node)
            //     }
            //     this.legs.push(this.nodes)
            //     this.nodangle += (Math.PI / 6)
            // }

            for (let t = 0; t < this.body.nodes.length; t++) {
                let leg = new TileCircle(this.body.nodes[t].x, this.body.nodes[t].y, this.radius*.1, getRandomColor())
                leg.step = 0
                leg.angle = (t%2)*Math.PI*.5
                leg.dis = this.radius*.4
                this.legs.push(leg)
            }


            // this.step = Math.floor(Math.random()*484)
            this.age = 0
            this.pen = pen
            this.scale = .5
            this.body.angle = Math.random() * Math.PI * 2
            this.spin = -Math.random() * .3
        }

        jumpspin() {
            if (Math.random() < .2) {
                this.spin = -Math.random() * 3
            }
            if (Math.random() < .2) {
                this.spin = Math.random() * 3
            }
            this.body.angle += Math.sign(Math.random() - .5) * 2
        }
        draw() {

            this.needs = []
            if (((this.pen.body.width * this.pen.body.height) / this.pen.animals.length) < 1800 && this.pen.animals.length > 1) {
                this.needs.push('Overcrowded')
            }
            if (this.pen.animals.length < 2) {
                this.needs.push('Lonely')
            }


            if (Math.random() < .01) {
                this.body.angle += this.spin
            }

            if (Math.random() < .01) {
                this.jumpspin()
            }

            if (Math.random() < .05) {
                for (let t = 0; t < this.pen.animals.length; t++) {
                    if (this.pen.animals[t].knock == 1) {
                        this.body.angle = (new LineOP(this.body, this.pen.animals[t].body)).angle() + Math.PI
                    }
                }
            }

            this.body.body.x += Math.cos(this.body.angle)*1.2
            this.body.body.y += Math.sin(this.body.angle)*1.2
            this.age++
            this.scale = .5 + Math.min(this.age / 1000, .5)
            this.body.radius = this.radius * this.scale
            this.body.size = this.radius * this.scale * 2
            this.body.width = this.body.radius
            this.body.height = this.body.radius

            this.nodangle += (Math.PI / 30)
            for (let k = 0; k < this.legs.length; k++) {
                // let link = new TileLineOP(this.tail[t], this.legs[k], this.colors[2], 2)
                // let ang = (this.angle + (Math.PI * .5 * Math.sign(k - .5))) - (((Math.PI * 1.21)) * (this.legs[k].step / 10))
                this.legs[k].radius = this.radius * .15* this.scale
                this.legs[k].dis = this.radius * 2* this.scale
                // if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
                //     this.legs[k].step += this.legs[k].dir
                //     if (Math.abs(this.legs[k].step) >= 6) {
                //         let ang = (this.angle + (Math.PI * .5 * Math.sign(k - .5))) - (((Math.PI * 1.21)) * (this.legs[k].step / 6))
                //         this.legs[k].dir *= -1
                        this.legs[k].x = this.body.nodes[k].superx + ((Math.cos(this.legs[k].angle)*Math.cos(this.body.angle+((Math.random()-.5)*.1)))*this.legs[k].dis)
                        this.legs[k].y = this.body.nodes[k].supery +  ((Math.cos(this.legs[k].angle)*Math.sin(this.body.angle+((Math.random()-.5)*.1)))*this.legs[k].dis)
                        let xcap = this.body.body.x-this.body.nodes[k].superx
                        let ycap = this.body.body.y-this.body.nodes[k].supery
                        let xcapt =  this.legs[k].x-this.body.nodes[k].superx
                        let ycapt =  this.legs[k].y -this.body.nodes[k].supery
                        if(xcapt.between(xcap, 0, true)){
                            this.legs[k].x = this.body.nodes[k].superx
                        }
                        if(ycapt.between(ycap, 0, true)){
                            this.legs[k].y = this.body.nodes[k].supery
                        }
                //     }
                this.legs[k].angle+=.1
                //     this.legs[k].xmom = (this.legs[k].target.x - this.legs[k].x) / 5
                //     this.legs[k].ymom = (this.legs[k].target.y - this.legs[k].y) / 5
                // }
                // if (this.legs[k].doesPerimeterTouch(this.legs[k].target)) {
                // } else {
                //     this.legs[k].move()
                // // }
                let link = new TileLineOP(this.body.nodes[k],this.legs[k], "red", 3)
                link.draw()
                this.legs[k].draw()
                // let point = new Point((this.legs[k].x + this.x) * .5, (this.legs[k].y + this.y) * .5)
                // let mpoint = new Point(point.x + (Math.cos(ang - .2) * this.legs[k].length * .2), point.y + (Math.sin(ang - .2) * this.legs[k].length * .2))
                // // this.legs[k].elbow.x = mpoint.x
                // // this.legs[k].elbow.y = mpoint.y
                // let elink1 = new TileLineOP(this.legs[k].elbow, this.tail[t], this.colors[2], 7)
                // let elink2 = new TileLineOP(this.legs[k].elbow, this.legs[k], this.colors[2], 4)
                // // this.legs[k].elbow.draw()
                // // this.legs[k].draw()
                // elink1.draw()
                // elink2.draw()
            }
            // map_context.closePath()

            this.majorswing = Math.cos((this.nodangle) * 4) / 40
            // this.body.y-=2
            // let xdisp = (Math.random()*1)-.5
            // this.body.x-=xdisp
            // this.body.sdraw()
            // this.body.x+=xdisp
            // this.body.y+=2
            // this.body.y-=this.body.radius *.5
            // this.body.x-=this.body.radius *.5
            // let xdisp = (Math.random()*1)-.5
            // this.body.x-=xdisp
            this.body.draw()
            // this.body.x+=xdisp
            // this.body.y+=this.body.radius *.5
            // this.body.x+=this.body.radius *.5

        }

        nameGenerator() {
            let name = ''
            let random = Math.floor(Math.random() * 4) + 1
            for (let t = 0; t < random; t++) {
                let select = Math.floor(Math.random() * 23)
                if (t == 0) {
                    if (select == 0) {
                        name += 'Po'
                    } else if (select == 1) {
                        name += 'Mo'
                    } else if (select == 2) {
                        name += 'Bo'
                    } else if (select == 3) {
                        name += 'Jo'
                    } else if (select == 4) {
                        name += 'Go'
                    } else if (select == 5) {
                        name += 'Mao'
                    } else if (select == 6) {
                        name += 'Mop'
                    } else if (select == 7) {
                        name += 'Pom'
                    } else if (select == 8) {
                        name += 'Moo'
                    } else if (select == 9) {
                        name += 'Pou'
                    } else if (select == 10) {
                        name += 'Goo'
                    } else if (select == 11) {
                        name += 'Bao'
                    } else if (select == 12) {
                        name += 'Mam'
                    } else if (select == 13) {
                        name += 'Pam'
                    } else if (select == 14) {
                        name += 'Omp'
                    } else if (select == 15) {
                        name += 'Op'
                    } else if (select == 16) {
                        name += 'Boa'
                    } else if (select == 17) {
                        name += 'Moa'
                    } else if (select == 18) {
                        name += 'Jao'
                    } else if (select == 19) {
                        name += 'Oj'
                    } else if (select == 20) {
                        name += 'P'
                    } else if (select == 21) {
                        name += 'Ro'
                    } else if (select == 22) {
                        name += 'Um'
                    }
                } else {
                    if (select == 0) {
                        name += 'oo'
                    } else if (select == 1) {
                        name += 'omo'
                    } else if (select == 2) {
                        name += 'obo'
                    } else if (select == 3) {
                        name += 'po'
                    } else if (select == 4) {
                        name += 'mo'
                    } else if (select == 5) {
                        name += 'mao'
                    } else if (select == 6) {
                        name += 'op'
                    } else if (select == 7) {
                        name += 'oma'
                    } else if (select == 8) {
                        name += 'moa'
                    } else if (select == 9) {
                        name += 'pao'
                    } else if (select == 10) {
                        name += 'opo'
                    } else if (select == 11) {
                        name += 'o'
                    } else if (select == 12) {
                        name += 'p'
                    } else if (select == 13) {
                        name += 'm'
                    } else if (select == 14) {
                        name += 'j'
                    } else if (select == 15) {
                        name += 'go'
                    } else if (select == 16) {
                        name += 'gao'
                    } else if (select == 17) {
                        name += 'tao'
                    } else if (select == 18) {
                        name += 'lao'
                    } else if (select == 19) {
                        name += 'sao'
                    } else if (select == 20) {
                        name += 'opop'
                    } else if (select == 21) {
                        name += 'ogoo'
                    } else if (select == 22) {
                        name += 'um'
                    }
                }
            }
            map_context.font = "18px Arial";
            map_context.fillStyle = 'yellow'
            map_context.strokeStyle = 'black'
            while (map_context.measureText(name).width > 80) {
                name = name.split('')
                name.splice(name.length - 1, 1)
                name = name.join('')
            }
            return name
        }
    }
    class Scratchle {
        constructor(x, y, colors, pen) {
            this.hexagoon = 1
            this.scratch = 1
            this.pen = pen
            this.cost = 10000
            this.variety = 8.5
            this.name = this.nameGenerator()
            this.needs = []
            this.colors = colors
            this.body = new Polygon(x, y, 6, this.colors[0],4)
            this.body.draw()
            this.sparks = []
            this.decay = .94
            this.angle = Math.random() * Math.PI * 2
            this.crab = 1
            this.majorswing = .1
            this.swingcount = 0
            this.legs = []

            this.radius = 6
            // this.firekin = 1
            this.nodes = []
            this.nodangle = 0
            this.bodyrad = 15
            // for (let t = 0; t < 12; t++) {
            //     this.nodes = []
            //     for (let k = 0; k < 5; k++) {
            //         let node = new TileCircle(x, y, 1, this.colors[1])
            //         node.angle = this.nodangle
            //         node.dis = this.bodyrad + (k * 1.5)
            //         this.nodes.push(node)
            //     }
            //     this.legs.push(this.nodes)
            //     this.nodangle += (Math.PI / 6)
            // }

            // for (let t = 0; t < 6; t++) {
            //     let leg = new TileCircle(this.body.nodes[t].x, this.body.nodes[t].y, this.radius*.1, getRandomColor())
            //     leg.step = 0
            //     leg.angle = (t%2)*Math.PI*.5
            //     leg.dis = this.radius*.4
            //     this.legs.push(leg)
            // }


            // this.step = Math.floor(Math.random()*484)
            this.age = 0
            this.pen = pen
            this.scale = .5
            this.body.angle = Math.random() * Math.PI * 2
            this.spin = -Math.random() * .3
        }

        jumpspin() {
            if (Math.random() < .2) {
                this.spin = -Math.random() * 6
            }
            if (Math.random() < .2) {
                this.spin = Math.random() * 6
            }
            this.body.angle += Math.sign(Math.random() - .5) * 3
        }

        repel(pomaos) {
            this.body.size = this.radius*6
            for (let t = 0; t < pomaos.length; t++) {
                if (this != pomaos[t]) {
                    if (this.body.doesPerimeterTouch(pomaos[t].body)) {
                        let link = new LineOP(this.body, pomaos[t].body)
                        this.body.body.x += ((link.hypotenuse()) / 2) * (Math.cos(link.angle())) / 3
                        this.body.body.y += ((link.hypotenuse()) / 2) * (Math.sin(link.angle())) / 3
                    }
                    if (pomaos[t].hexagoon == 1 || pomaos[t].scuttle == 1 ) {
                        if (this.body.doesPerimeterTouch(pomaos[t].body.body)) {
                            let link = new LineOP(this.body, pomaos[t].body.body)
                            this.body.body.x += ((link.hypotenuse()) / 2) * (Math.cos(link.angle())) / 3
                            this.body.body.y += ((link.hypotenuse()) / 2) * (Math.sin(link.angle())) / 3
                        }
                    }
                }
            }
        }
        draw() {




            this.needs = []
            let grass = 0
            for (let t = 0; t < this.pen.enrichment.length; t++) {
                if (this.pen.enrichment[t].grass == 1) {
                    grass++
                }
            }
            if (((this.pen.body.width * this.pen.body.height)) / 900 > (grass)) {
                this.needs.push('More Grass')
            }
            if (((this.pen.body.width * this.pen.body.height) / this.pen.animals.length) < 1800 && this.pen.animals.length > 1) {
                this.needs.push('Overcrowded')
            }
            if (this.pen.animals.length < 2) {
                this.needs.push('Lonely')
            }


            if(keysPressed['j']){
                this.charge = 1
            }

            if(Math.random() < .005 || this.charge == 1) {
                for (let t = 0; t < this.pen.animals.length; t++) {
                    if(Math.random() < .1){
                        if (this.pen.animals[t].scratch == 1 && this != this.pen.animals[t]) {
                            let link = new LineOP(this.body.body, this.pen.animals[t].body.body)
                            if(Math.random() < .5){
                                this.charge = 1
                                this.pen.animals[t].charge = 1
                            }
                            this.body.angle = link.angle() + Math.PI
                            this.pen.animals[t].body.angle =  link.angle()
                            if(link.hypotenuse() < this.radius*6){
                                this.charge = 0
                                this.pen.animals[t].charge = 0
                            }
                        }
                    }
                }

            this.body.body.x += Math.cos(this.body.angle)*1.2
            this.body.body.y += Math.sin(this.body.angle)*1.2
            this.body.body.x += Math.cos(this.body.angle)*1.2
            this.body.body.y += Math.sin(this.body.angle)*1.2
            }else{

                if (Math.random() < .01) {
                    this.body.angle += this.spin
                }
    
                if (Math.random() < .01) {
                    this.jumpspin()
                }
    
                if (Math.random() < .05) {
                    for (let t = 0; t < this.pen.animals.length; t++) {
                        if (this.pen.animals[t].knock == 1) {
                            this.body.angle = (new LineOP(this.body, this.pen.animals[t].body)).angle() + Math.PI
                        }
                    }
                }


            this.body.body.x += Math.cos(this.body.angle)*1.2
            this.body.body.y += Math.sin(this.body.angle)*1.2
            }




            this.age++
            this.scale = .5 + Math.min(this.age / 1000, .5)
            this.body.radius = this.radius * this.scale
            this.body.size = this.radius * (this.scale * 2)
            this.body.width = this.body.radius
            this.body.height = this.body.radius

            // this.nodangle += (Math.PI / 30)
            // for (let k = 0; k < this.legs.length; k++) {
            //     // let link = new TileLineOP(this.tail[t], this.legs[k], this.colors[2], 2)
            //     // let ang = (this.angle + (Math.PI * .5 * Math.sign(k - .5))) - (((Math.PI * 1.21)) * (this.legs[k].step / 10))
            //     this.legs[k].radius = this.radius * .15* this.scale
            //     this.legs[k].dis = this.radius * 2* this.scale
            //     // if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
            //     //     this.legs[k].step += this.legs[k].dir
            //     //     if (Math.abs(this.legs[k].step) >= 6) {
            //     //         let ang = (this.angle + (Math.PI * .5 * Math.sign(k - .5))) - (((Math.PI * 1.21)) * (this.legs[k].step / 6))
            //     //         this.legs[k].dir *= -1
            //             this.legs[k].x = this.body.nodes[k].superx + ((Math.cos(this.legs[k].angle)*Math.cos(this.body.angle+((Math.random()-.5)*.1)))*this.legs[k].dis)
            //             this.legs[k].y = this.body.nodes[k].supery +  ((Math.cos(this.legs[k].angle)*Math.sin(this.body.angle+((Math.random()-.5)*.1)))*this.legs[k].dis)
            //             let xcap = this.body.body.x-this.body.nodes[k].superx
            //             let ycap = this.body.body.y-this.body.nodes[k].supery
            //             let xcapt =  this.legs[k].x-this.body.nodes[k].superx
            //             let ycapt =  this.legs[k].y -this.body.nodes[k].supery
            //             if(xcapt.between(xcap, 0, true)){
            //                 this.legs[k].x = this.body.nodes[k].superx
            //             }
            //             if(ycapt.between(ycap, 0, true)){
            //                 this.legs[k].y = this.body.nodes[k].supery
            //             }
            //     //     }
            //     this.legs[k].angle+=.1
            //     //     this.legs[k].xmom = (this.legs[k].target.x - this.legs[k].x) / 5
            //     //     this.legs[k].ymom = (this.legs[k].target.y - this.legs[k].y) / 5
            //     // }
            //     // if (this.legs[k].doesPerimeterTouch(this.legs[k].target)) {
            //     // } else {
            //     //     this.legs[k].move()
            //     // // }
            //     let link = new TileLineOP(this.body.nodes[k],this.legs[k], "red", 3)
            //     link.draw()
            //     this.legs[k].draw()
            //     // let point = new Point((this.legs[k].x + this.x) * .5, (this.legs[k].y + this.y) * .5)
            //     // let mpoint = new Point(point.x + (Math.cos(ang - .2) * this.legs[k].length * .2), point.y + (Math.sin(ang - .2) * this.legs[k].length * .2))
            //     // // this.legs[k].elbow.x = mpoint.x
            //     // // this.legs[k].elbow.y = mpoint.y
            //     // let elink1 = new TileLineOP(this.legs[k].elbow, this.tail[t], this.colors[2], 7)
            //     // let elink2 = new TileLineOP(this.legs[k].elbow, this.legs[k], this.colors[2], 4)
            //     // // this.legs[k].elbow.draw()
            //     // // this.legs[k].draw()
            //     // elink1.draw()
            //     // elink2.draw()
            // }
            // map_context.closePath()
            this.points = [this.body]
            this.tangler = 1
            for(let t = 0;t<3;t++){
                let index = t
                let xp = this.points[index]
                let point = new Point(xp.x+((Math.cos(this.body.angle+(this.tangler*t)))*this.radius*(2.1 * (this.scale * 1.1))), xp.y+((Math.sin(this.body.angle+(this.tangler*t)))*this.radius*2.1 * (this.scale * 1.1)))
                let line = new TileLineOP(xp,point, this.colors[Math.floor(t%this.colors.length)], 1)
                this.points.push(point)
                line.draw()
            }
            for(let t = 0;t<this.points.length*5;t++){
                let index = t%this.points.length
                let xp = this.points[index]
                let point = new Point(xp.x+((Math.cos(this.body.angle+t))*this.radius*(1.1 * (this.scale * 1.1))), xp.y+((Math.sin(this.body.angle+t))*this.radius*1.1 * (this.scale * 1.1)))
                let line = new TileLineOP(xp,point, this.colors[Math.floor(t%this.colors.length)], 1)
                // this.points.push(point)
                line.draw()
            }

            this.points = [this.body]
            this.tangler = -1
            for(let t = 0;t<3;t++){
                let index = t
                let xp = this.points[index]
                let point = new Point(xp.x+((Math.cos(this.body.angle+(this.tangler*t)))*this.radius*(2.1 * (this.scale * 1.1))), xp.y+((Math.sin(this.body.angle+(this.tangler*t)))*this.radius*2.1 * (this.scale * 1.1)))
                let line = new TileLineOP(xp,point, this.colors[Math.floor(t%this.colors.length)], 1)
                this.points.push(point)
                line.draw()
            }
            for(let t = 0;t<this.points.length*5;t++){
                let index = t%this.points.length
                let xp = this.points[index]
                let point = new Point(xp.x+((Math.cos(this.body.angle+t))*this.radius*(1.1 * (this.scale * 1.1))), xp.y+((Math.sin(this.body.angle+t))*this.radius*1.1 * (this.scale * 1.1)))
                let line = new TileLineOP(xp,point, this.colors[Math.floor(t%this.colors.length)], 1)
                // this.points.push(point)
                line.draw()
            }

            this.majorswing = Math.cos((this.nodangle) * 4) / 40
            // this.body.y-=2
            // let xdisp = (Math.random()*1)-.5
            // this.body.x-=xdisp
            // this.body.sdraw()
            // this.body.x+=xdisp
            // this.body.y+=2
            // this.body.y-=this.body.radius *.5
            // this.body.x-=this.body.radius *.5
            // let xdisp = (Math.random()*1)-.5
            // this.body.x-=xdisp
            this.body.draw()
            // this.body.x+=xdisp
            // this.body.y+=this.body.radius *.5
            // this.body.x+=this.body.radius *.5

            this.repel(this.pen.animals)
        }

        nameGenerator() {
            let name = ''
            let random = Math.floor(Math.random() * 4) + 1
            for (let t = 0; t < random; t++) {
                let select = Math.floor(Math.random() * 23)
                if (t == 0) {
                    if (select == 0) {
                        name += 'Po'
                    } else if (select == 1) {
                        name += 'Mo'
                    } else if (select == 2) {
                        name += 'Bo'
                    } else if (select == 3) {
                        name += 'Jo'
                    } else if (select == 4) {
                        name += 'Go'
                    } else if (select == 5) {
                        name += 'Mao'
                    } else if (select == 6) {
                        name += 'Mop'
                    } else if (select == 7) {
                        name += 'Pom'
                    } else if (select == 8) {
                        name += 'Moo'
                    } else if (select == 9) {
                        name += 'Pou'
                    } else if (select == 10) {
                        name += 'Goo'
                    } else if (select == 11) {
                        name += 'Bao'
                    } else if (select == 12) {
                        name += 'Mam'
                    } else if (select == 13) {
                        name += 'Pam'
                    } else if (select == 14) {
                        name += 'Omp'
                    } else if (select == 15) {
                        name += 'Op'
                    } else if (select == 16) {
                        name += 'Boa'
                    } else if (select == 17) {
                        name += 'Moa'
                    } else if (select == 18) {
                        name += 'Jao'
                    } else if (select == 19) {
                        name += 'Oj'
                    } else if (select == 20) {
                        name += 'P'
                    } else if (select == 21) {
                        name += 'Ro'
                    } else if (select == 22) {
                        name += 'Um'
                    }
                } else {
                    if (select == 0) {
                        name += 'oo'
                    } else if (select == 1) {
                        name += 'omo'
                    } else if (select == 2) {
                        name += 'obo'
                    } else if (select == 3) {
                        name += 'po'
                    } else if (select == 4) {
                        name += 'mo'
                    } else if (select == 5) {
                        name += 'mao'
                    } else if (select == 6) {
                        name += 'op'
                    } else if (select == 7) {
                        name += 'oma'
                    } else if (select == 8) {
                        name += 'moa'
                    } else if (select == 9) {
                        name += 'pao'
                    } else if (select == 10) {
                        name += 'opo'
                    } else if (select == 11) {
                        name += 'o'
                    } else if (select == 12) {
                        name += 'p'
                    } else if (select == 13) {
                        name += 'm'
                    } else if (select == 14) {
                        name += 'j'
                    } else if (select == 15) {
                        name += 'go'
                    } else if (select == 16) {
                        name += 'gao'
                    } else if (select == 17) {
                        name += 'tao'
                    } else if (select == 18) {
                        name += 'lao'
                    } else if (select == 19) {
                        name += 'sao'
                    } else if (select == 20) {
                        name += 'opop'
                    } else if (select == 21) {
                        name += 'ogoo'
                    } else if (select == 22) {
                        name += 'um'
                    }
                }
            }
            map_context.font = "18px Arial";
            map_context.fillStyle = 'yellow'
            map_context.strokeStyle = 'black'
            while (map_context.measureText(name).width > 80) {
                name = name.split('')
                name.splice(name.length - 1, 1)
                name = name.join('')
            }
            return name
        }
    }
    class Coyrail {
        constructor(x, y, colors, pen) {
            this.hexagoon = 1
            this.scratch = 1
            this.pen = pen
            this.cost = 50000
            this.variety = 11
            this.name = this.nameGenerator()
            this.needs = []
            this.colors = colors
            this.body = new ZPolygon(x, y, 6, this.colors[0],5)
            this.body.draw()
            this.sparks = []
            this.decay = .94
            this.angle = Math.random() * Math.PI * 2
            this.crab = 1
            this.majorswing = .1
            this.swingcount = 0
            this.legs = []

            this.radius = 2
            // this.firekin = 1
            this.nodes = []
            this.nodangle = 0
            this.bodyrad = 15
            // for (let t = 0; t < 12; t++) {
            //     this.nodes = []
            //     for (let k = 0; k < 5; k++) {
            //         let node = new TileCircle(x, y, 1, this.colors[1])
            //         node.angle = this.nodangle
            //         node.dis = this.bodyrad + (k * 1.5)
            //         this.nodes.push(node)
            //     }
            //     this.legs.push(this.nodes)
            //     this.nodangle += (Math.PI / 6)
            // }

            for (let t = 0; t < 5; t++) {
                let leg = new TileCircle(this.body.nodes[t].x, this.body.nodes[t].y, this.radius*.1, getRandomColor())
                leg.step = 0
                leg.angle = t*(Math.PI/2.5)
                leg.dis = this.radius*.4
                this.legs.push(leg)
            }


            // this.step = Math.floor(Math.random()*484)
            this.age = 0
            this.pen = pen
            this.scale = .5
            this.body.angle = Math.random() * Math.PI * 2
            this.spin = -Math.random() * .3
        }

        jumpspin() {
            if (Math.random() < .2) {
                this.spin = -Math.random() * 6
            }
            if (Math.random() < .2) {
                this.spin = Math.random() * 6
            }
            this.body.angle += Math.sign(Math.random() - .5) * 3
        }

        repel(pomaos) {
            this.body.size = this.radius*6
            for (let t = 0; t < pomaos.length; t++) {
                if (this != pomaos[t]) {
                    if (this.body.doesPerimeterTouch(pomaos[t].body)) {
                        let link = new LineOP(this.body, pomaos[t].body)
                        this.body.body.x += ((link.hypotenuse()) / 2) * (Math.cos(link.angle())) / 3
                        this.body.body.y += ((link.hypotenuse()) / 2) * (Math.sin(link.angle())) / 3
                    }
                    if (pomaos[t].hexagoon == 1 || pomaos[t].scuttle == 1 ) {
                        if (this.body.doesPerimeterTouch(pomaos[t].body.body)) {
                            let link = new LineOP(this.body, pomaos[t].body.body)
                            this.body.body.x += ((link.hypotenuse()) / 2) * (Math.cos(link.angle())) / 3
                            this.body.body.y += ((link.hypotenuse()) / 2) * (Math.sin(link.angle())) / 3
                        }
                    }
                }
            }
        }
        draw() {


            this.repel(this.pen.animals)


            this.needs = []
            let grass = 0
            for (let t = 0; t < this.pen.enrichment.length; t++) {
                if (this.pen.enrichment[t].grass == 1) {
                    grass++
                }
            }
            if (((this.pen.body.width * this.pen.body.height)) / 400 > (grass)) {
                this.needs.push('More Grass')
            }
            if (((this.pen.body.width * this.pen.body.height) / this.pen.animals.length) < 3800 && this.pen.animals.length > 1) {
                this.needs.push('Overcrowded')
            }
            if (this.pen.animals.length < 2) {
                this.needs.push('Lonely')
            }


            if(keysPressed['j']){
                // this.charge = 1
            }

            if(Math.random() < .005 || this.charge == 1) {
            //     for (let t = 0; t < this.pen.animals.length; t++) {
            //         if(Math.random() < .1){
            //             if (this.pen.animals[t].scratch == 1 && this != this.pen.animals[t]) {
            //                 let link = new LineOP(this.body.body, this.pen.animals[t].body.body)
            //                 if(Math.random() < .5){
            //                     this.charge = 1
            //                     this.pen.animals[t].charge = 1
            //                 }
            //                 this.body.angle = link.angle() + Math.PI
            //                 this.pen.animals[t].body.angle =  link.angle()
            //                 if(link.hypotenuse() < this.radius*6){
            //                     this.charge = 0
            //                     this.pen.animals[t].charge = 0
            //                 }
            //             }
            //         }
            //     }

            // this.body.body.x += Math.cos(this.body.angle)*1.2
            // this.body.body.y += Math.sin(this.body.angle)*1.2
            // this.body.body.x += Math.cos(this.body.angle)*1.2
            // this.body.body.y += Math.sin(this.body.angle)*1.2
            }else{

                if (Math.random() < .01) {
                    this.body.angle += this.spin
                }
    
                if (Math.random() < .01) {
                    this.jumpspin()
                }
    
                if (Math.random() < .05) {
                    for (let t = 0; t < this.pen.animals.length; t++) {
                        if (this.pen.animals[t].knock == 1) {
                            this.body.angle = (new LineOP(this.body, this.pen.animals[t].body)).angle() + Math.PI
                        }
                    }
                }


            this.body.body.x += Math.cos(this.body.angle)*1.2
            this.body.body.y += Math.sin(this.body.angle)*1.2
            }




            this.age++
            this.scale = .5 + Math.min(this.age / 1000, .5)
            this.body.radius = this.radius * this.scale
            this.body.size = this.radius * this.scale * 2
            this.body.width = this.body.radius
            this.body.height = this.body.radius

            // this.nodangle += (Math.PI / 30)
            for (let k = 0; k < this.legs.length; k++) {
                // let link = new TileLineOP(this.tail[t], this.legs[k], this.colors[2], 2)
                // let ang = (this.angle + (Math.PI * .5 * Math.sign(k - .5))) - (((Math.PI * 1.21)) * (this.legs[k].step / 10))
                this.legs[k].radius = this.radius * .15* this.scale
                this.legs[k].dis = this.radius * 6* this.scale
                // if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
                //     this.legs[k].step += this.legs[k].dir
                //     if (Math.abs(this.legs[k].step) >= 6) {
                //         let ang = (this.angle + (Math.PI * .5 * Math.sign(k - .5))) - (((Math.PI * 1.21)) * (this.legs[k].step / 6))
                //         this.legs[k].dir *= -1
                        this.legs[k].x = this.body.nodes[k].superx + ((Math.cos(this.legs[k].angle)*Math.cos(this.body.angle+((Math.random()-.5)*.1)))*this.legs[k].dis)
                        this.legs[k].y = this.body.nodes[k].supery +  ((Math.cos(this.legs[k].angle)*Math.sin(this.body.angle+((Math.random()-.5)*.1)))*this.legs[k].dis)


                        this.legs[k].xs = this.body.nodes[k].superx + (Math.cos(this.legs[k].angle)*this.legs[k].dis)
                        this.legs[k].ys = this.body.nodes[k].supery +  (Math.sin(this.legs[k].angle)*this.legs[k].dis)
                        this.legs[k].x = (this.legs[k].xs + this.legs[k].x)*.5
                        this.legs[k].y = (this.legs[k].ys + this.legs[k].y)*.5


                        let xcap = this.body.body.x-this.body.nodes[k].superx
                        let ycap = this.body.body.y-this.body.nodes[k].supery
                        let xcapt =  this.legs[k].x-this.body.nodes[k].superx
                        let ycapt =  this.legs[k].y -this.body.nodes[k].supery
                        if(xcapt.between(xcap, 0, true)){
                            this.legs[k].x = this.body.nodes[k].superx
                        }
                        if(ycapt.between(ycap, 0, true)){
                            this.legs[k].y = this.body.nodes[k].supery
                        }
                //     }
                this.legs[k].angle+=.1
                //     this.legs[k].xmom = (this.legs[k].target.x - this.legs[k].x) / 5
                //     this.legs[k].ymom = (this.legs[k].target.y - this.legs[k].y) / 5
                // }
                // if (this.legs[k].doesPerimeterTouch(this.legs[k].target)) {
                // } else {
                //     this.legs[k].move()
                // // }
                let link = new TileLineOP(this.body.nodes[k],this.legs[k], this.colors[0], 3)
                link.draw()
                this.legs[k].draw()
                // let point = new Point((this.legs[k].x + this.x) * .5, (this.legs[k].y + this.y) * .5)
                // let mpoint = new Point(point.x + (Math.cos(ang - .2) * this.legs[k].length * .2), point.y + (Math.sin(ang - .2) * this.legs[k].length * .2))
                // // this.legs[k].elbow.x = mpoint.x
                // // this.legs[k].elbow.y = mpoint.y
                // let elink1 = new TileLineOP(this.legs[k].elbow, this.tail[t], this.colors[2], 7)
                // let elink2 = new TileLineOP(this.legs[k].elbow, this.legs[k], this.colors[2], 4)
                // // this.legs[k].elbow.draw()
                // // this.legs[k].draw()
                // elink1.draw()
                // elink2.draw()
            }
            // map_context.closePath()
            this.points = [this.body]
            this.tangler = Math.PI/2.5
            for(let t = 0;t<5;t++){
                let index = t
                let xp = this.legs[index]
                let point = new Point(xp.x+((Math.cos(this.body.angle+(this.tangler*t)))*this.radius*(5.1)), xp.y+((Math.sin(this.body.angle+(this.tangler*t)))*this.radius*5.1))
                let line = new TileLineOP(xp,point, this.colors[Math.floor(t%this.colors.length)], 1)
                this.points.push(point)
                line.draw()
            }
            for(let t = 0;t<this.points.length*5;t++){
                let index = t%this.points.length
                let xp =  this.points[index]
                let point = new Point(xp.x+((Math.cos(this.body.angle+(this.tangler*t)))*this.radius*(1.7)), xp.y+((Math.sin(this.body.angle+(this.tangler*t)))*this.radius*1.7))
                let line = new TileLineOP(xp,point, this.colors[Math.floor(t%this.colors.length)], 1)
                // this.points.push(point)
                line.draw()
            }

            this.points = [this.body]
            this.tangler = Math.PI/2.5
            for(let t = 0;t<5;t++){
                let index = t
                let xp =  this.legs[index]
                let point = new Point(xp.x+((Math.cos(this.body.angle+(this.tangler*t)))*this.radius*(5.1)), xp.y+((Math.sin(this.body.angle+(this.tangler*t)))*this.radius*5.1))
                let line = new TileLineOP(xp,point, this.colors[Math.floor(t%this.colors.length)], 1)
                this.points.push(point)
                line.draw()
            }
            for(let t = 0;t<this.points.length*5;t++){
                let index = t%this.points.length
                let xp =  this.points[index]
                let point = new Point(xp.x+((Math.cos(this.body.angle+(this.tangler*t)))*this.radius*(1.7)), xp.y+((Math.sin(this.body.angle+(this.tangler*t)))*this.radius*1.7))
                let line = new TileLineOP(xp,point, this.colors[Math.floor(t%this.colors.length)], 1)
                // this.points.push(point)
                line.draw()
            }

            this.majorswing = Math.cos((this.nodangle) * 4) / 40
            // this.body.y-=2
            // let xdisp = (Math.random()*1)-.5
            // this.body.x-=xdisp
            // this.body.sdraw()
            // this.body.x+=xdisp
            // this.body.y+=2
            // this.body.y-=this.body.radius *.5
            // this.body.x-=this.body.radius *.5
            // let xdisp = (Math.random()*1)-.5
            // this.body.x-=xdisp
            this.body.draw()
            // this.body.x+=xdisp
            // this.body.y+=this.body.radius *.5
            // this.body.x+=this.body.radius *.5

        }

        nameGenerator() {
            let name = ''
            let random = Math.floor(Math.random() * 4) + 1
            for (let t = 0; t < random; t++) {
                let select = Math.floor(Math.random() * 23)
                if (t == 0) {
                    if (select == 0) {
                        name += 'Po'
                    } else if (select == 1) {
                        name += 'Mo'
                    } else if (select == 2) {
                        name += 'Bo'
                    } else if (select == 3) {
                        name += 'Jo'
                    } else if (select == 4) {
                        name += 'Go'
                    } else if (select == 5) {
                        name += 'Mao'
                    } else if (select == 6) {
                        name += 'Mop'
                    } else if (select == 7) {
                        name += 'Pom'
                    } else if (select == 8) {
                        name += 'Moo'
                    } else if (select == 9) {
                        name += 'Pou'
                    } else if (select == 10) {
                        name += 'Goo'
                    } else if (select == 11) {
                        name += 'Bao'
                    } else if (select == 12) {
                        name += 'Mam'
                    } else if (select == 13) {
                        name += 'Pam'
                    } else if (select == 14) {
                        name += 'Omp'
                    } else if (select == 15) {
                        name += 'Op'
                    } else if (select == 16) {
                        name += 'Boa'
                    } else if (select == 17) {
                        name += 'Moa'
                    } else if (select == 18) {
                        name += 'Jao'
                    } else if (select == 19) {
                        name += 'Oj'
                    } else if (select == 20) {
                        name += 'P'
                    } else if (select == 21) {
                        name += 'Ro'
                    } else if (select == 22) {
                        name += 'Um'
                    }
                } else {
                    if (select == 0) {
                        name += 'oo'
                    } else if (select == 1) {
                        name += 'omo'
                    } else if (select == 2) {
                        name += 'obo'
                    } else if (select == 3) {
                        name += 'po'
                    } else if (select == 4) {
                        name += 'mo'
                    } else if (select == 5) {
                        name += 'mao'
                    } else if (select == 6) {
                        name += 'op'
                    } else if (select == 7) {
                        name += 'oma'
                    } else if (select == 8) {
                        name += 'moa'
                    } else if (select == 9) {
                        name += 'pao'
                    } else if (select == 10) {
                        name += 'opo'
                    } else if (select == 11) {
                        name += 'o'
                    } else if (select == 12) {
                        name += 'p'
                    } else if (select == 13) {
                        name += 'm'
                    } else if (select == 14) {
                        name += 'j'
                    } else if (select == 15) {
                        name += 'go'
                    } else if (select == 16) {
                        name += 'gao'
                    } else if (select == 17) {
                        name += 'tao'
                    } else if (select == 18) {
                        name += 'lao'
                    } else if (select == 19) {
                        name += 'sao'
                    } else if (select == 20) {
                        name += 'opop'
                    } else if (select == 21) {
                        name += 'ogoo'
                    } else if (select == 22) {
                        name += 'um'
                    }
                }
            }
            map_context.font = "18px Arial";
            map_context.fillStyle = 'yellow'
            map_context.strokeStyle = 'black'
            while (map_context.measureText(name).width > 80) {
                name = name.split('')
                name.splice(name.length - 1, 1)
                name = name.join('')
            }
            return name
        }
    }

    let minigoy = new Image()
    minigoy.src = "targoy1.png"
    class Minigoy {
        constructor(x, y, colors, pen) {
            // this.hexagoon = 1
            this.pen = pen
            this.cost = 15000
            this.variety = 9
            this.name = this.nameGenerator()
            this.needs = []
            this.colors = colors
            this.body = new TileCircle(x, y, 6, this.colors[0])
            // this.body.draw()
            this.sparks = []
            this.decay = .94
            this.angle = Math.random() * Math.PI * 2
            this.crab = 1
            this.majorswing = .1
            this.swingcount = 0
            this.legs = []

            this.radius = 6
            // this.firekin = 1
            this.nodes = []
            this.nodangle = 0
            this.bodyrad = 15
            // for (let t = 0; t < 12; t++) {
            //     this.nodes = []
            //     for (let k = 0; k < 5; k++) {
            //         let node = new TileCircle(x, y, 1, this.colors[1])
            //         node.angle = this.nodangle
            //         node.dis = this.bodyrad + (k * 1.5)
            //         this.nodes.push(node)
            //     }
            //     this.legs.push(this.nodes)
            //     this.nodangle += (Math.PI / 6)
            // }

            // for (let t = 0; t < 6; t++) {
            //     let leg = new TileCircle(this.body.nodes[t].x, this.body.nodes[t].y, this.radius*.1, getRandomColor())
            //     leg.step = 0
            //     leg.angle = (t%2)*Math.PI*.5
            //     leg.dis = this.radius*.4
            //     this.legs.push(leg)
            // }


            // this.step = Math.floor(Math.random()*484)
            this.age = 0
            this.pen = pen
            this.scale = .5
            this.body.angle = Math.random() * Math.PI * 2
            this.spin = -Math.random() * .3
        }

        jumpspin() {
            if (Math.random() < .2) {
                this.spin = -Math.random() * 6
            }
            if (Math.random() < .2) {
                this.spin = Math.random() * 6
            }
            this.body.angle += Math.sign(Math.random() - .5) * 3
        }
        draw() {

            this.needs = []
            let crystal = 0
            for (let t = 0; t < this.pen.enrichment.length; t++) {
                if (this.pen.enrichment[t].crystal == 1) {
                    crystal++
                }
            }
            if (((this.pen.body.width * this.pen.body.height)) / 900 > (crystal)) {
                this.needs.push('More Crystals')
            }
            if (((this.pen.body.width * this.pen.body.height) / this.pen.animals.length) < 800 && this.pen.animals.length > 1) {
                this.needs.push('Overcrowded')
            }
            if (this.pen.animals.length < 3) {
                this.needs.push('Lonely')
            }


            if (Math.random() < .01) {
                this.body.angle += this.spin
            }

            if (Math.random() < .01) {
                this.jumpspin()
            }

            if (Math.random() < .05) {
                for (let t = 0; t < this.pen.animals.length; t++) {
                    if (this.pen.animals[t].knock == 1) {
                        this.body.angle = (new LineOP(this.body, this.pen.animals[t].body)).angle() + Math.PI
                    }
                }
            }

            this.body.x += Math.cos(this.body.angle)*3
            this.body.y += Math.sin(this.body.angle)*3
            this.age++
            this.scale = .5 + Math.min(this.age / 1000, .5)
            this.body.radius = this.radius * this.scale
            this.body.size = this.radius * this.scale * 2
            this.body.width = this.body.radius
            this.body.height = this.body.radius

            // this.nodangle += (Math.PI / 30)
            // for (let k = 0; k < this.legs.length; k++) {
            //     // let link = new TileLineOP(this.tail[t], this.legs[k], this.colors[2], 2)
            //     // let ang = (this.angle + (Math.PI * .5 * Math.sign(k - .5))) - (((Math.PI * 1.21)) * (this.legs[k].step / 10))
            //     this.legs[k].radius = this.radius * .15* this.scale
            //     this.legs[k].dis = this.radius * 2* this.scale
            //     // if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
            //     //     this.legs[k].step += this.legs[k].dir
            //     //     if (Math.abs(this.legs[k].step) >= 6) {
            //     //         let ang = (this.angle + (Math.PI * .5 * Math.sign(k - .5))) - (((Math.PI * 1.21)) * (this.legs[k].step / 6))
            //     //         this.legs[k].dir *= -1
            //             this.legs[k].x = this.body.nodes[k].superx + ((Math.cos(this.legs[k].angle)*Math.cos(this.body.angle+((Math.random()-.5)*.1)))*this.legs[k].dis)
            //             this.legs[k].y = this.body.nodes[k].supery +  ((Math.cos(this.legs[k].angle)*Math.sin(this.body.angle+((Math.random()-.5)*.1)))*this.legs[k].dis)
            //             let xcap = this.body.body.x-this.body.nodes[k].superx
            //             let ycap = this.body.body.y-this.body.nodes[k].supery
            //             let xcapt =  this.legs[k].x-this.body.nodes[k].superx
            //             let ycapt =  this.legs[k].y -this.body.nodes[k].supery
            //             if(xcapt.between(xcap, 0, true)){
            //                 this.legs[k].x = this.body.nodes[k].superx
            //             }
            //             if(ycapt.between(ycap, 0, true)){
            //                 this.legs[k].y = this.body.nodes[k].supery
            //             }
            //     //     }
            //     this.legs[k].angle+=.1
            //     //     this.legs[k].xmom = (this.legs[k].target.x - this.legs[k].x) / 5
            //     //     this.legs[k].ymom = (this.legs[k].target.y - this.legs[k].y) / 5
            //     // }
            //     // if (this.legs[k].doesPerimeterTouch(this.legs[k].target)) {
            //     // } else {
            //     //     this.legs[k].move()
            //     // // }
            //     let link = new TileLineOP(this.body.nodes[k],this.legs[k], "red", 3)
            //     link.draw()
            //     this.legs[k].draw()
            //     // let point = new Point((this.legs[k].x + this.x) * .5, (this.legs[k].y + this.y) * .5)
            //     // let mpoint = new Point(point.x + (Math.cos(ang - .2) * this.legs[k].length * .2), point.y + (Math.sin(ang - .2) * this.legs[k].length * .2))
            //     // // this.legs[k].elbow.x = mpoint.x
            //     // // this.legs[k].elbow.y = mpoint.y
            //     // let elink1 = new TileLineOP(this.legs[k].elbow, this.tail[t], this.colors[2], 7)
            //     // let elink2 = new TileLineOP(this.legs[k].elbow, this.legs[k], this.colors[2], 4)
            //     // // this.legs[k].elbow.draw()
            //     // // this.legs[k].draw()
            //     // elink1.draw()
            //     // elink2.draw()
            // }
            // map_context.closePath()
            // this.points = [this.body]
            // this.tangler = 1
            // for(let t = 0;t<3;t++){
            //     let index = t
            //     let xp = this.points[index]
            //     let point = new Point(xp.x+((Math.cos(this.body.angle+(this.tangler*t)))*this.radius*(2.1)), xp.y+((Math.sin(this.body.angle+(this.tangler*t)))*this.radius*2.1))
            //     let line = new TileLineOP(xp,point, this.colors[Math.floor(t%this.colors.length)], 1)
            //     this.points.push(point)
            //     line.draw()
            // }
            // for(let t = 0;t<this.points.length*5;t++){
            //     let index = t%this.points.length
            //     let xp = this.points[index]
            //     let point = new Point(xp.x+((Math.cos(this.body.angle+t))*this.radius*(1.1)), xp.y+((Math.sin(this.body.angle+t))*this.radius*1.1))
            //     let line = new TileLineOP(xp,point, this.colors[Math.floor(t%this.colors.length)], 1)
            //     // this.points.push(point)
            //     line.draw()
            // }

            // this.points = [this.body]
            // this.tangler = -1
            // for(let t = 0;t<3;t++){
            //     let index = t
            //     let xp = this.points[index]
            //     let point = new Point(xp.x+((Math.cos(this.body.angle+(this.tangler*t)))*this.radius*(2.1)), xp.y+((Math.sin(this.body.angle+(this.tangler*t)))*this.radius*2.1))
            //     let line = new TileLineOP(xp,point, this.colors[Math.floor(t%this.colors.length)], 1)
            //     this.points.push(point)
            //     line.draw()
            // }
            // for(let t = 0;t<this.points.length*5;t++){
            //     let index = t%this.points.length
            //     let xp = this.points[index]
            //     let point = new Point(xp.x+((Math.cos(this.body.angle+t))*this.radius*(1.1)), xp.y+((Math.sin(this.body.angle+t))*this.radius*1.1))
            //     let line = new TileLineOP(xp,point, this.colors[Math.floor(t%this.colors.length)], 1)
            //     // this.points.push(point)
            //     line.draw()
            // }

            this.majorswing = Math.cos((this.nodangle) * 4) / 40
            // this.body.y-=2
            // let xdisp = (Math.random()*1)-.5
            // this.body.x-=xdisp
            // this.body.sdraw()
            // this.body.x+=xdisp
            // this.body.y+=2
            // this.body.y-=this.body.radius *.5
            // this.body.x-=this.body.radius *.5
            // let xdisp = (Math.random()*1)-.5
            // this.body.x-=xdisp
            
            map_context.drawImage(minigoy, 0, 0, minigoy.width, minigoy.height, this.body.x-this.body.radius, this.body.y-this.body.radius, this.body.radius*2, this.body.radius*2)
            // this.body.draw()
            // this.body.x+=xdisp
            // this.body.y+=this.body.radius *.5
            // this.body.x+=this.body.radius *.5

        }

        nameGenerator() {
            let name = ''
            let random = Math.floor(Math.random() * 4) + 1
            for (let t = 0; t < random; t++) {
                let select = Math.floor(Math.random() * 23)
                if (t == 0) {
                    if (select == 0) {
                        name += 'Po'
                    } else if (select == 1) {
                        name += 'Mo'
                    } else if (select == 2) {
                        name += 'Bo'
                    } else if (select == 3) {
                        name += 'Jo'
                    } else if (select == 4) {
                        name += 'Go'
                    } else if (select == 5) {
                        name += 'Mao'
                    } else if (select == 6) {
                        name += 'Mop'
                    } else if (select == 7) {
                        name += 'Pom'
                    } else if (select == 8) {
                        name += 'Moo'
                    } else if (select == 9) {
                        name += 'Pou'
                    } else if (select == 10) {
                        name += 'Goo'
                    } else if (select == 11) {
                        name += 'Bao'
                    } else if (select == 12) {
                        name += 'Mam'
                    } else if (select == 13) {
                        name += 'Pam'
                    } else if (select == 14) {
                        name += 'Omp'
                    } else if (select == 15) {
                        name += 'Op'
                    } else if (select == 16) {
                        name += 'Boa'
                    } else if (select == 17) {
                        name += 'Moa'
                    } else if (select == 18) {
                        name += 'Jao'
                    } else if (select == 19) {
                        name += 'Oj'
                    } else if (select == 20) {
                        name += 'P'
                    } else if (select == 21) {
                        name += 'Ro'
                    } else if (select == 22) {
                        name += 'Um'
                    }
                } else {
                    if (select == 0) {
                        name += 'oo'
                    } else if (select == 1) {
                        name += 'omo'
                    } else if (select == 2) {
                        name += 'obo'
                    } else if (select == 3) {
                        name += 'po'
                    } else if (select == 4) {
                        name += 'mo'
                    } else if (select == 5) {
                        name += 'mao'
                    } else if (select == 6) {
                        name += 'op'
                    } else if (select == 7) {
                        name += 'oma'
                    } else if (select == 8) {
                        name += 'moa'
                    } else if (select == 9) {
                        name += 'pao'
                    } else if (select == 10) {
                        name += 'opo'
                    } else if (select == 11) {
                        name += 'o'
                    } else if (select == 12) {
                        name += 'p'
                    } else if (select == 13) {
                        name += 'm'
                    } else if (select == 14) {
                        name += 'j'
                    } else if (select == 15) {
                        name += 'go'
                    } else if (select == 16) {
                        name += 'gao'
                    } else if (select == 17) {
                        name += 'tao'
                    } else if (select == 18) {
                        name += 'lao'
                    } else if (select == 19) {
                        name += 'sao'
                    } else if (select == 20) {
                        name += 'opop'
                    } else if (select == 21) {
                        name += 'ogoo'
                    } else if (select == 22) {
                        name += 'um'
                    }
                }
            }
            map_context.font = "18px Arial";
            map_context.fillStyle = 'yellow'
            map_context.strokeStyle = 'black'
            while (map_context.measureText(name).width > 80) {
                name = name.split('')
                name.splice(name.length - 1, 1)
                name = name.join('')
            }
            return name
        }
    }


    class Geko {
        constructor(x, y, colors, pen) {
            this.cost = 1800
            this.needs = []
            this.variety = 4.5
            this.name = this.nameGenerator()
            this.geko = 1
            this.scale = .5
            this.age = 0
            this.pen = pen
            this.colors = colors
            this.body = new TileCircle(x, y, 5, this.colors[0])
            this.radius = 5
            this.body.angle = Math.PI + (Math.random() * 3)
            this.tail = []
            this.tailspeeds = []
            this.spin = 0
            for (let t = 0; t < 23; t++) {
                let circ = new TileCircle(this.body.x - (t * 12), this.body.y, (this.body.radius * .8) - Math.abs(2 - (t * .2)), this.colors[0])
                if (t % 2 == 0) {
                    circ.color = this.colors[1]
                }
                circ.legs = []
                if (t == 3 || t == 7 || t == 11 || t == 15 || t == 19) {
                    for (let k = 0; k < 2; k++) {
                        let leg = new TileCircle(circ.x, circ.y, circ.radius * .7, this.colors[2])
                        if (t == 3 || t == 11 || t == 19) {
                            // leg.step = 5
                            if (t == 11) {
                                leg.dir = -1
                            } else {

                                leg.dir = 1
                            }
                        } else {
                            if (t == 7) {
                                leg.dir = -1
                            } else {
                                leg.step = 0
                                leg.dir = 1
                            }
                        }
                        if (t == 3) {
                            leg.dir = 1
                            leg.step = 5
                        }
                        if (t == 7) {
                            leg.dir = -1
                            leg.step = 0
                        }
                        if (t == 11) {
                            leg.dir = 1
                            leg.step = 5
                        }
                        if (t == 15) {
                            leg.dir = -1

                            leg.step = 0
                        }
                        if (t == 19) {
                            leg.dir = 1
                            leg.step = 5
                        }
                        leg.length = circ.radius * 5
                        leg.target = new TileCircle(circ.x, circ.y, circ.radius * .7, this.colors[2])
                        leg.elbow = new TileCircle(circ.x, circ.y, circ.radius * .2, this.colors[3])
                        leg.jump = 0
                        if (t == 15 || t == 19) {
                        } else {
                            circ.legs.push(leg)
                        }
                    }
                }
                circ.angle = 0// Math.PI
                circ.dis = circ.radius * 2
                this.tail.push(circ)
            }
        }

        nameGenerator() {
            let name = ''
            let random = Math.floor(Math.random() * 4) + 1
            for (let t = 0; t < random; t++) {
                let select = Math.floor(Math.random() * 23)
                if (t == 0) {
                    if (select == 0) {
                        name += 'Po'
                    } else if (select == 1) {
                        name += 'Mo'
                    } else if (select == 2) {
                        name += 'Bo'
                    } else if (select == 3) {
                        name += 'Jo'
                    } else if (select == 4) {
                        name += 'Go'
                    } else if (select == 5) {
                        name += 'Mao'
                    } else if (select == 6) {
                        name += 'Mop'
                    } else if (select == 7) {
                        name += 'Pom'
                    } else if (select == 8) {
                        name += 'Moo'
                    } else if (select == 9) {
                        name += 'Pou'
                    } else if (select == 10) {
                        name += 'Goo'
                    } else if (select == 11) {
                        name += 'Bao'
                    } else if (select == 12) {
                        name += 'Mam'
                    } else if (select == 13) {
                        name += 'Pam'
                    } else if (select == 14) {
                        name += 'Omp'
                    } else if (select == 15) {
                        name += 'Op'
                    } else if (select == 16) {
                        name += 'Boa'
                    } else if (select == 17) {
                        name += 'Moa'
                    } else if (select == 18) {
                        name += 'Jao'
                    } else if (select == 19) {
                        name += 'Oj'
                    } else if (select == 20) {
                        name += 'P'
                    } else if (select == 21) {
                        name += 'Ro'
                    } else if (select == 22) {
                        name += 'Um'
                    }
                } else {
                    if (select == 0) {
                        name += 'oo'
                    } else if (select == 1) {
                        name += 'omo'
                    } else if (select == 2) {
                        name += 'obo'
                    } else if (select == 3) {
                        name += 'po'
                    } else if (select == 4) {
                        name += 'mo'
                    } else if (select == 5) {
                        name += 'mao'
                    } else if (select == 6) {
                        name += 'op'
                    } else if (select == 7) {
                        name += 'oma'
                    } else if (select == 8) {
                        name += 'moa'
                    } else if (select == 9) {
                        name += 'pao'
                    } else if (select == 10) {
                        name += 'opo'
                    } else if (select == 11) {
                        name += 'o'
                    } else if (select == 12) {
                        name += 'p'
                    } else if (select == 13) {
                        name += 'm'
                    } else if (select == 14) {
                        name += 'j'
                    } else if (select == 15) {
                        name += 'go'
                    } else if (select == 16) {
                        name += 'gao'
                    } else if (select == 17) {
                        name += 'tao'
                    } else if (select == 18) {
                        name += 'lao'
                    } else if (select == 19) {
                        name += 'sao'
                    } else if (select == 20) {
                        name += 'opop'
                    } else if (select == 21) {
                        name += 'ogoo'
                    } else if (select == 22) {
                        name += 'um'
                    }
                }
            }
            map_context.font = "18px Arial";
            map_context.fillStyle = 'yellow'
            map_context.strokeStyle = 'black'
            while (map_context.measureText(name).width > 80) {
                name = name.split('')
                name.splice(name.length - 1, 1)
                name = name.join('')
            }
            return name
        }
        jumpspin() {
            if(this.spin == 0){
            if (Math.random() < .2) {
                this.spin = (-Math.random() * 1)-.5
            }
            if (Math.random() < .2) {
                this.spin = (Math.random() * 1)+.5
            }
            }else{
                // this.body.angle*=1.2
            }
            // this.body.angle += Math.sign(Math.random()-.5)*.2
        }
        calc() {
            this.body.set = [this.body.x, this.body.y, 1]
            // gamepad_control(this.body, 2.5)
            this.body.x += Math.cos(this.body.angle + Math.PI)
            this.body.y += Math.sin(this.body.angle + Math.PI)
            this.body.move()
            // this.body.draw()
            this.body.set = [this.body.set[0] - this.body.x, this.body.set[1] - this.body.y, 0]
            let link = new Line(this.body.x + this.body.set[0], this.body.y + this.body.set[1], this.body.x, this.body.y)
            let angle = this.body.angle + this.spin //(link.angle())//+this.body.angle)
            if (Math.random() < .23) {
                if (Math.random() < .2) {
                    this.spin = -Math.random() * .3
                }
                if (Math.random() < .2) {
                    this.spin = Math.random() * .3
                }
                if (Math.random() < .1) {
                    this.spin = 0
                }
            }
            this.body.angle = ((angle + (this.body.angle * 3)) / 4)
            for (let t = 0; t < this.tail.length; t++) {
                if (t > 0) {
                    if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
                        this.tail[t].angle = ((this.tail[t - 1].angle * 1.05) + (this.tail[t].angle * 6)) / 7.05
                    }
                    this.tail[t].x = this.tail[t - 1].x + (Math.cos(this.tail[t].angle) * this.tail[t].dis)
                    this.tail[t].y = this.tail[t - 1].y + (Math.sin(this.tail[t].angle) * this.tail[t].dis)
                } else {
                    if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
                        this.tail[t].angle = ((this.body.angle * 11.05) + this.tail[t].angle) / 12.05
                    }
                    this.tail[t].x = this.body.x + (Math.cos(this.tail[t].angle) * this.tail[t].dis)
                    this.tail[t].y = this.body.y + (Math.sin(this.tail[t].angle) * this.tail[t].dis)
                }
                for (let k = 0; k < this.tail[t].legs.length; k++) {
                    let link = new TileLineOP(this.tail[t], this.tail[t].legs[k], this.colors[2], 2)
                    let ang = (this.tail[t].angle + (Math.PI * .5 * Math.sign(k - .5))) - (((Math.PI * .33)) * (this.tail[t].legs[k].step / 6))

                    if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
                        this.tail[t].legs[k].step += this.tail[t].legs[k].dir
                        if (Math.abs(this.tail[t].legs[k].step) >= 6) {
                            let ang = (this.tail[t].angle + (Math.PI * .5 * Math.sign(k - .5))) - (((Math.PI * .33)) * (this.tail[t].legs[k].step / 6))
                            this.tail[t].legs[k].dir *= -1
                            this.tail[t].legs[k].target.x = this.tail[t].x + (Math.cos(ang) * this.tail[t].legs[k].length)
                            this.tail[t].legs[k].target.y = this.tail[t].y + (Math.sin(ang) * this.tail[t].legs[k].length)
                        }
                        this.tail[t].legs[k].xmom = (this.tail[t].legs[k].target.x - this.tail[t].legs[k].x) / 5
                        this.tail[t].legs[k].ymom = (this.tail[t].legs[k].target.y - this.tail[t].legs[k].y) / 5
                    }
                    if (this.tail[t].legs[k].doesPerimeterTouch(this.tail[t].legs[k].target)) {
                    } else {
                        this.tail[t].legs[k].move()
                    }
                    let point = new Point((this.tail[t].legs[k].x + this.tail[t].x) * .5, (this.tail[t].legs[k].y + this.tail[t].y) * .5)
                    let mpoint = new Point(point.x + (Math.cos(ang - .2) * this.tail[t].legs[k].length * .2), point.y + (Math.sin(ang - .2) * this.tail[t].legs[k].length * .2))
                    this.tail[t].legs[k].elbow.x = mpoint.x
                    this.tail[t].legs[k].elbow.y = mpoint.y
                    // let elink1 = new TileLineOP(this.tail[t].legs[k].elbow, this.tail[t], this.colors[2], 7)
                    // let elink2 = new TileLineOP(this.tail[t].legs[k].elbow, this.tail[t].legs[k], this.colors[2], 4)
                    // this.tail[t].legs[k].elbow.draw()
                    // this.tail[t].legs[k].draw()
                    // elink1.draw()
                    // elink2.draw()
                }
                if (t > 0) {
                    // let lynk = new TileLineOP(this.tail[t], this.tail[t-1],this.tail[t].color, this.tail[t].radius*3)
                    // lynk.draw()
                }
            }

        }
        draw() {


            this.needs = []
            let crystals = 0
            for (let t = 0; t < this.pen.enrichment.length; t++) {
                if (this.pen.enrichment[t].crystal == 1) {
                    crystals++
                }
            }
            if (((this.pen.body.width * this.pen.body.height)) / 10000 > (crystals)) {
                this.needs.push('More Crystals')
            }
            if (((this.pen.body.width * this.pen.body.height) / this.pen.animals.length) < 4000 && this.pen.animals.length > 1) {
                this.needs.push('Overcrowded')
            }
            if (this.pen.animals.length < 2) {
                this.needs.push('Lonely')
            }
            this.age++
            this.scale = .5 + Math.min(this.age / 1000, .5)
            this.body.radius = this.radius * this.scale
            // this.body.set = [this.body.x, this.body.y, 1]
            // // gamepad_control(this.body, 2.5)
            // this.body.x += Math.cos(this.body.angle + Math.PI)
            // this.body.y += Math.sin(this.body.angle + Math.PI)
            // this.body.move()
            this.body.draw()
            // this.body.set = [this.body.set[0] - this.body.x, this.body.set[1] - this.body.y, 0]
            // let link = new Line(this.body.x + this.body.set[0], this.body.y + this.body.set[1], this.body.x, this.body.y)
            // let angle = this.body.angle + this.spin //(link.angle())//+this.body.angle)
            // if (Math.random() < .03) {
            //     if (Math.random() < .2) {
            //         this.spin = -Math.random() * .2
            //     }
            //     if (Math.random() < .2) {
            //         this.spin = Math.random() * .2
            //     }
            //     if (Math.random() < .8) {
            //         this.spin = 0
            //     }
            // }
            // this.body.angle = ((angle + (this.body.angle * 3)) / 4)
            for (let t = 0; t < this.tail.length; t++) {
                // if (t > 0) {
                //     if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
                //         this.tail[t].angle = ((this.tail[t - 1].angle * 1.05) + (this.tail[t].angle * 6)) / 7.05
                //     }
                this.tail[t].radius = (this.body.radius * .8) - Math.abs(2 - (t * .2))
                this.tail[t].dis = this.tail[t].radius * 2
                //     this.tail[t].x = this.tail[t - 1].x + (Math.cos(this.tail[t].angle) * this.tail[t].dis)
                //     this.tail[t].y = this.tail[t - 1].y + (Math.sin(this.tail[t].angle) * this.tail[t].dis)
                // } else {
                //     if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
                //         this.tail[t].angle = ((this.body.angle * 11.05) + this.tail[t].angle) / 12.05
                //     }
                //     this.tail[t].x = this.body.x + (Math.cos(this.tail[t].angle) * this.tail[t].dis)
                //     this.tail[t].y = this.body.y + (Math.sin(this.tail[t].angle) * this.tail[t].dis)
                // }
                for (let k = 0; k < this.tail[t].legs.length; k++) {
                    // let link = new TileLineOP(this.tail[t], this.tail[t].legs[k], this.colors[2], 2)
                    let ang = (this.tail[t].angle + (Math.PI * .5 * Math.sign(k - .5))) - (((Math.PI * .33)) * (this.tail[t].legs[k].step / 6))
                    this.tail[t].legs[k].radius = this.tail[t].radius * .4
                    this.tail[t].legs[k].length = this.tail[t].radius * 5
                    // if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
                    //     this.tail[t].legs[k].step += this.tail[t].legs[k].dir
                    //     if (Math.abs(this.tail[t].legs[k].step) >= 6) {
                    //         let ang = (this.tail[t].angle + (Math.PI * .5 * Math.sign(k - .5))) - (((Math.PI * .33)) * (this.tail[t].legs[k].step / 6))
                    //         this.tail[t].legs[k].dir *= -1
                    //         this.tail[t].legs[k].target.x = this.tail[t].x + (Math.cos(ang) * this.tail[t].legs[k].length)
                    //         this.tail[t].legs[k].target.y = this.tail[t].y + (Math.sin(ang) * this.tail[t].legs[k].length)
                    //     }
                    //     this.tail[t].legs[k].xmom = (this.tail[t].legs[k].target.x - this.tail[t].legs[k].x) / 5
                    //     this.tail[t].legs[k].ymom = (this.tail[t].legs[k].target.y - this.tail[t].legs[k].y) / 5
                    // }
                    // if (this.tail[t].legs[k].doesPerimeterTouch(this.tail[t].legs[k].target)) {
                    // } else {
                    //     this.tail[t].legs[k].move()
                    // }
                    let point = new Point((this.tail[t].legs[k].x + this.tail[t].x) * .5, (this.tail[t].legs[k].y + this.tail[t].y) * .5)
                    let mpoint = new Point(point.x + (Math.cos(ang - .2) * this.tail[t].legs[k].length * .2), point.y + (Math.sin(ang - .2) * this.tail[t].legs[k].length * .2))
                    // this.tail[t].legs[k].elbow.x = mpoint.x
                    // this.tail[t].legs[k].elbow.y = mpoint.y
                    let elink1 = new TileLineOP(this.tail[t].legs[k].elbow, this.tail[t], this.colors[2], 7)
                    let elink2 = new TileLineOP(this.tail[t].legs[k].elbow, this.tail[t].legs[k], this.colors[2], 4)
                    this.tail[t].legs[k].elbow.draw()
                    this.tail[t].legs[k].draw()
                    elink1.draw()
                    elink2.draw()
                }
            }
            // map_context.lineWidth = 13//this.width

            // map_context.beginPath()
            for (let t = 0; t < this.tail.length; t++) {
                if (t > 0) {
                    // let lynk = new xTileLineOP(this.tail[t], this.tail[t - 1], this.tail[t].color, this.tail[t].radius * 3)
                    // // map_context.lineWidth = 13
                    // lynk.draw()
                    this.tail[t].draw()
                }
            }
            // map_context.lineWidth = 13
            // map_context.stroke()
        }
    }

    class Scorpo {
        constructor(x, y, colors, pen) {
            this.cost = 3000
            this.needs = []
            this.variety = 5.5
            this.name = this.nameGenerator()
            this.geko = 1
            this.scale = .5
            this.age = 0
            this.pen = pen
            this.colors = colors
            this.body = new TileCircle(x, y, 5, this.colors[0])
            this.radius = 3
            this.body.angle = Math.PI + (Math.random() * 3)
            this.tail = []
            this.tailspeeds = []
            this.spin = 0
            for (let t = 0; t < 33; t++) {
                let circ = new TileCircle(this.body.x - (t * 12), this.body.y, (this.body.radius * 1.1) - t * .4, this.colors[0])
                if (t % 2 == 0) {
                    circ.color = this.colors[1]
                }
                circ.legs = []
                if (t == 3 || t == 7 || t == 11 || t == 15 || t == 15 || t == 19) {
                    for (let k = 0; k < 2; k++) {
                        let leg = new TileCircle(circ.x, circ.y, circ.radius * .7, this.colors[2])
                        if (t == 3 || t == 11 || t == 19) {
                            // leg.step = 5
                            if (t == 11) {
                                leg.dir = -1
                            } else {

                                leg.dir = 1
                            }
                        } else {
                            if (t == 7) {
                                leg.dir = -1
                            } else {
                                leg.step = 0
                                leg.dir = 1
                            }
                        }
                        if (t == 3) {
                            leg.dir = 1
                            leg.step = 3
                        }
                        if (t == 7) {
                            leg.dir = -1
                            leg.step = 0
                        }
                        if (t == 11) {
                            leg.dir = 1
                            leg.step = 3
                        }
                        if (t == 15) {
                            leg.dir = -1

                            leg.step = 0
                        }
                        if (t == 19) {
                            leg.dir = 1
                            leg.step = 3
                        }
                        leg.length = circ.radius * 5
                        leg.target = new TileCircle(circ.x, circ.y, circ.radius * .7, this.colors[2])
                        leg.elbow = new TileCircle(circ.x, circ.y, circ.radius * .2, this.colors[3])
                        leg.jump = 0
                        if (t == 19) {
                        } else {
                            circ.legs.push(leg)
                        }
                    }
                }
                circ.angle = 0// Math.PI
                circ.dis = circ.radius * 2
                this.tail.push(circ)
            }
        }

        nameGenerator() {
            let name = ''
            let random = Math.floor(Math.random() * 4) + 1
            for (let t = 0; t < random; t++) {
                let select = Math.floor(Math.random() * 23)
                if (t == 0) {
                    if (select == 0) {
                        name += 'Po'
                    } else if (select == 1) {
                        name += 'Mo'
                    } else if (select == 2) {
                        name += 'Bo'
                    } else if (select == 3) {
                        name += 'Jo'
                    } else if (select == 4) {
                        name += 'Go'
                    } else if (select == 5) {
                        name += 'Mao'
                    } else if (select == 6) {
                        name += 'Mop'
                    } else if (select == 7) {
                        name += 'Pom'
                    } else if (select == 8) {
                        name += 'Moo'
                    } else if (select == 9) {
                        name += 'Pou'
                    } else if (select == 10) {
                        name += 'Goo'
                    } else if (select == 11) {
                        name += 'Bao'
                    } else if (select == 12) {
                        name += 'Mam'
                    } else if (select == 13) {
                        name += 'Pam'
                    } else if (select == 14) {
                        name += 'Omp'
                    } else if (select == 15) {
                        name += 'Op'
                    } else if (select == 16) {
                        name += 'Boa'
                    } else if (select == 17) {
                        name += 'Moa'
                    } else if (select == 18) {
                        name += 'Jao'
                    } else if (select == 19) {
                        name += 'Oj'
                    } else if (select == 20) {
                        name += 'P'
                    } else if (select == 21) {
                        name += 'Ro'
                    } else if (select == 22) {
                        name += 'Um'
                    }
                } else {
                    if (select == 0) {
                        name += 'oo'
                    } else if (select == 1) {
                        name += 'omo'
                    } else if (select == 2) {
                        name += 'obo'
                    } else if (select == 3) {
                        name += 'po'
                    } else if (select == 4) {
                        name += 'mo'
                    } else if (select == 5) {
                        name += 'mao'
                    } else if (select == 6) {
                        name += 'op'
                    } else if (select == 7) {
                        name += 'oma'
                    } else if (select == 8) {
                        name += 'moa'
                    } else if (select == 9) {
                        name += 'pao'
                    } else if (select == 10) {
                        name += 'opo'
                    } else if (select == 11) {
                        name += 'o'
                    } else if (select == 12) {
                        name += 'p'
                    } else if (select == 13) {
                        name += 'm'
                    } else if (select == 14) {
                        name += 'j'
                    } else if (select == 15) {
                        name += 'go'
                    } else if (select == 16) {
                        name += 'gao'
                    } else if (select == 17) {
                        name += 'tao'
                    } else if (select == 18) {
                        name += 'lao'
                    } else if (select == 19) {
                        name += 'sao'
                    } else if (select == 20) {
                        name += 'opop'
                    } else if (select == 21) {
                        name += 'ogoo'
                    } else if (select == 22) {
                        name += 'um'
                    }
                }
            }
            map_context.font = "18px Arial";
            map_context.fillStyle = 'yellow'
            map_context.strokeStyle = 'black'
            while (map_context.measureText(name).width > 80) {
                name = name.split('')
                name.splice(name.length - 1, 1)
                name = name.join('')
            }
            return name
        }
        jumpspin() {
            if(this.spin == 0){
                if (Math.random() < .2) {
                    this.spin = (-Math.random() * .6)-.5
                }
                if (Math.random() < .2) {
                    this.spin = (Math.random() * .6)+.5
                }
            }
            // this.body.angle += Math.sign(Math.random()-.5)*.2
        }
        calc() {
            this.body.set = [this.body.x, this.body.y, 1]
            // gamepad_control(this.body, 2.5)
            this.body.x += Math.cos(this.body.angle + Math.PI) * 2
            this.body.y += Math.sin(this.body.angle + Math.PI) * 2
            this.body.move()
            // this.body.draw()
            this.body.set = [this.body.set[0] - this.body.x, this.body.set[1] - this.body.y, 0]
            let link = new Line(this.body.x + this.body.set[0], this.body.y + this.body.set[1], this.body.x, this.body.y)
            let angle = this.body.angle + this.spin //(link.angle())//+this.body.angle)
            if (Math.random() < .13) {
                if (Math.random() < .2) {
                    this.spin = -Math.random() * .4
                }
                if (Math.random() < .2) {
                    this.spin = Math.random() * .4
                }
                if (Math.random() < .2) {
                    this.spin = 0
                }
            }
            this.body.angle = ((angle + (this.body.angle * 3)) / 4)
            for (let t = 0; t < this.tail.length; t++) {
                if (t > 0) {
                    if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
                        this.tail[t].angle = ((this.tail[t - 1].angle * 1.05) + (this.tail[t].angle * 3)) / 4.05
                    }
                    this.tail[t].x = this.tail[t - 1].x + (Math.cos(this.tail[t].angle) * this.tail[t].dis)
                    this.tail[t].y = this.tail[t - 1].y + (Math.sin(this.tail[t].angle) * this.tail[t].dis)
                } else {
                    if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
                        this.tail[t].angle = ((this.body.angle * 4.05) + this.tail[t].angle) / 5.05
                    }
                    this.tail[t].x = this.body.x + (Math.cos(this.tail[t].angle) * this.tail[t].dis)
                    this.tail[t].y = this.body.y + (Math.sin(this.tail[t].angle) * this.tail[t].dis)
                }
                for (let k = 0; k < this.tail[t].legs.length; k++) {
                    let link = new TileLineOP(this.tail[t], this.tail[t].legs[k], this.colors[2], 2)
                    let ang = (this.tail[t].angle + (Math.PI * .5 * Math.sign(k - .5))) - (((Math.PI * .33)) * (this.tail[t].legs[k].step / 4))

                    if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
                        this.tail[t].legs[k].step += this.tail[t].legs[k].dir
                        if (Math.abs(this.tail[t].legs[k].step) >= 4) {
                            let ang = (this.tail[t].angle + (Math.PI * .5 * Math.sign(k - .5))) - (((Math.PI * .33)) * (this.tail[t].legs[k].step / 4))
                            this.tail[t].legs[k].dir *= -1
                            this.tail[t].legs[k].target.x = this.tail[t].x + (Math.cos(ang) * this.tail[t].legs[k].length)
                            this.tail[t].legs[k].target.y = this.tail[t].y + (Math.sin(ang) * this.tail[t].legs[k].length)
                        }
                        this.tail[t].legs[k].xmom = (this.tail[t].legs[k].target.x - this.tail[t].legs[k].x) / 3
                        this.tail[t].legs[k].ymom = (this.tail[t].legs[k].target.y - this.tail[t].legs[k].y) / 3
                    }
                    if (this.tail[t].legs[k].doesPerimeterTouch(this.tail[t].legs[k].target)) {
                    } else {
                        this.tail[t].legs[k].move()
                    }
                    let point = new Point((this.tail[t].legs[k].x + this.tail[t].x) * .5, (this.tail[t].legs[k].y + this.tail[t].y) * .5)
                    let mpoint = new Point(point.x + (Math.cos(ang - .2) * this.tail[t].legs[k].length * .2), point.y + (Math.sin(ang - .2) * this.tail[t].legs[k].length * .2))
                    this.tail[t].legs[k].elbow.x = mpoint.x
                    this.tail[t].legs[k].elbow.y = mpoint.y
                    // let elink1 = new TileLineOP(this.tail[t].legs[k].elbow, this.tail[t], this.colors[2], 7)
                    // let elink2 = new TileLineOP(this.tail[t].legs[k].elbow, this.tail[t].legs[k], this.colors[2], 4)
                    // this.tail[t].legs[k].elbow.draw()
                    // this.tail[t].legs[k].draw()
                    // elink1.draw()
                    // elink2.draw()
                }
                if (t > 0) {
                    // let lynk = new TileLineOP(this.tail[t], this.tail[t-1],this.tail[t].color, this.tail[t].radius*3)
                    // lynk.draw()
                }
            }

        }
        draw() {

            this.needs = []
            let ice = 0
            let crystal = 0
            for (let t = 0; t < this.pen.enrichment.length; t++) {
                if (this.pen.enrichment[t].ice == 1) {
                    ice++
                }
                if (this.pen.enrichment[t].crystal == 1) {
                    crystal++
                }
            }
            if (((this.pen.body.width * this.pen.body.height)) / 14000 > (ice)) {
                this.needs.push('More Ice')
            }
            if (((this.pen.body.width * this.pen.body.height)) / 14000 > (crystal)) {
                this.needs.push('More Crystal')
            }
            if (((this.pen.body.width * this.pen.body.height) / this.pen.animals.length) < 4000 && this.pen.animals.length > 1) {
                this.needs.push('Overcrowded')
            }
            if (this.pen.animals.length < 2) {
                this.needs.push('Lonely')
            }
            this.age++
            this.scale = .5 + Math.min(this.age / 1000, .5)
            this.body.radius = (this.radius * this.scale)
            // this.body.set = [this.body.x, this.body.y, 1]
            // // gamepad_control(this.body, 2.5)
            // this.body.x += Math.cos(this.body.angle + Math.PI)
            // this.body.y += Math.sin(this.body.angle + Math.PI)
            // this.body.move()
            this.body.radius *= .5
            this.body.draw()
            this.body.radius *= 2

            // this.body.set = [this.body.set[0] - this.body.x, this.body.set[1] - this.body.y, 0]
            // let link = new Line(this.body.x + this.body.set[0], this.body.y + this.body.set[1], this.body.x, this.body.y)
            // let angle = this.body.angle + this.spin //(link.angle())//+this.body.angle)
            // if (Math.random() < .03) {
            //     if (Math.random() < .2) {
            //         this.spin = -Math.random() * .2
            //     }
            //     if (Math.random() < .2) {
            //         this.spin = Math.random() * .2
            //     }
            //     if (Math.random() < .8) {
            //         this.spin = 0
            //     }
            // }
            // this.body.angle = ((angle + (this.body.angle * 3)) / 4)
            for (let t = 0; t < this.tail.length; t++) {
                // if (t > 0) {
                //     if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
                //         this.tail[t].angle = ((this.tail[t - 1].angle * 1.05) + (this.tail[t].angle * 6)) / 7.05
                //     }
                this.tail[t].radius = Math.max((this.body.radius * 1.1) - t * .3, 1)
                this.tail[t].dis = (this.radius * this.scale * .4)+(t/100)
                //     this.tail[t].x = this.tail[t - 1].x + (Math.cos(this.tail[t].angle) * this.tail[t].dis)
                //     this.tail[t].y = this.tail[t - 1].y + (Math.sin(this.tail[t].angle) * this.tail[t].dis)
                // } else {
                //     if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
                //         this.tail[t].angle = ((this.body.angle * 11.05) + this.tail[t].angle) / 12.05
                //     }
                //     this.tail[t].x = this.body.x + (Math.cos(this.tail[t].angle) * this.tail[t].dis)
                //     this.tail[t].y = this.body.y + (Math.sin(this.tail[t].angle) * this.tail[t].dis)
                // }
                for (let k = 0; k < this.tail[t].legs.length; k++) {
                    // let link = new TileLineOP(this.tail[t], this.tail[t].legs[k], this.colors[2], 2)
                    let ang = (this.tail[t].angle + (Math.PI * .5 * Math.sign(k - .5))) - (((Math.PI * .33)) * (this.tail[t].legs[k].step / 6))
                    // this.tail[t].legs[k].radius = this.tail[t].radius * .3
                    this.tail[t].legs[k].length = this.radius * 3
                    // if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
                    //     this.tail[t].legs[k].step += this.tail[t].legs[k].dir
                    //     if (Math.abs(this.tail[t].legs[k].step) >= 6) {
                    //         let ang = (this.tail[t].angle + (Math.PI * .5 * Math.sign(k - .5))) - (((Math.PI * .33)) * (this.tail[t].legs[k].step / 6))
                    //         this.tail[t].legs[k].dir *= -1
                    //         this.tail[t].legs[k].target.x = this.tail[t].x + (Math.cos(ang) * this.tail[t].legs[k].length)
                    //         this.tail[t].legs[k].target.y = this.tail[t].y + (Math.sin(ang) * this.tail[t].legs[k].length)
                    //     }
                    //     this.tail[t].legs[k].xmom = (this.tail[t].legs[k].target.x - this.tail[t].legs[k].x) / 5
                    //     this.tail[t].legs[k].ymom = (this.tail[t].legs[k].target.y - this.tail[t].legs[k].y) / 5
                    // }
                    // if (this.tail[t].legs[k].doesPerimeterTouch(this.tail[t].legs[k].target)) {
                    // } else {
                    //     this.tail[t].legs[k].move()
                    // }
                    let point = new Point((this.tail[t].legs[k].x + this.tail[t].x) * .5, (this.tail[t].legs[k].y + this.tail[t].y) * .5)
                    let mpoint = new Point(point.x + (Math.cos(ang - .2) * this.tail[t].legs[k].length * .2), point.y + (Math.sin(ang - .2) * this.tail[t].legs[k].length * .2))
                    // this.tail[t].legs[k].elbow.x = mpoint.x
                    // this.tail[t].legs[k].elbow.y = mpoint.y
                    let elink1 = new TileLineOP(this.tail[t].legs[k].elbow, this.tail[t], this.colors[2], 3)
                    let elink2 = new TileLineOP(this.tail[t].legs[k].elbow, this.tail[t].legs[k], this.colors[2], 2)
                    // this.tail[t].legs[k].elbow.draw()
                    // this.tail[t].legs[k].draw()
                    elink1.draw()
                    elink2.draw()
                }
            }
            // map_context.lineWidth = 13//this.width

            map_context.beginPath()
            for (let t = 0; t < this.tail.length; t++) {
                if (t > 0) {
                    let lynk = new xTileLineOP(this.tail[t], this.tail[t - 1], this.tail[t].color, this.tail[t].radius * 3)
                    // // map_context.lineWidth = 13
                    lynk.draw()
                }
            }
            map_context.lineWidth = 3
            map_context.stroke()
            for (let t = 0; t < this.tail.length; t++) {
                if (t > 0) {
                    if (t == this.tail.length - 1) {
                        // this.tail[t].draw()


                        // canvas_context.strokeStyle = this.color
                        map_context.beginPath();
                        map_context.arc(this.tail[t].x, this.tail[t].y, this.radius *this.scale * 4, 0, (Math.PI * 2), true)
                        // canvas_context.fillStyle = this.color


                        var gard = map_context.createRadialGradient(Math.round(this.tail[t].x), Math.round(this.tail[t].y), 0, Math.round(this.tail[t].x), Math.round(this.tail[t].y), Math.max(this.radius *this.scale * 4, 0))
                        this.string = this.tail[t].color
                        gard.addColorStop(0, this.string + `ff`)
                        gard.addColorStop(0.01, this.string + "a1")
                        gard.addColorStop(0.41, this.string + "94")
                        gard.addColorStop(1, this.string + "51")
                        map_context.fillStyle = gard
                        map_context.fill()


                    }
                }
            }

        }
    }


    class Hopo {
        constructor(x, y, colors, pen) {
            this.hopo = 1
            this.cost = 1250
            this.name = this.nameGenerator()
            this.needs = []
            this.variety = 4
            this.geko = 1
            this.pen = pen
            this.colors = colors
            this.body = new TileCircle(x, y, 5, this.colors[0])
            this.radius = 5
            this.scale = .5
            this.age = 0
            this.pen = pen
            this.body.angle = Math.PI + (Math.random() * 3)
            this.tail = []
            this.tailspeeds = []
            this.spin = 0
            for (let t = 0; t < 4; t++) {
                let circ = new TileCircle(this.body.x - (t * 12), this.body.y, (this.body.radius * .95) + Math.abs(3 - (t * 1)), this.colors[0])
                if (t % 2 == 0) {
                    circ.color = this.colors[1]
                }
                circ.legs = []
                if (t == 0 || t == 3 || t == 11 || t == 15 || t == 19) {
                    for (let k = 0; k < 2; k++) {
                        let leg = new TileCircle(circ.x, circ.y, circ.radius * .4, this.colors[2])
                        if (t == 0 || t == 11 || t == 19) {
                            // leg.step = 5
                            if (t == 11) {
                                leg.dir = -1
                            } else {

                                leg.dir = 1
                            }
                        } else {
                            if (t == 3) {
                                leg.dir = -1
                            } else {
                                leg.step = 0
                                leg.dir = 1
                            }
                        }
                        if (t == 0) {
                            leg.dir = 1
                            leg.step = 5
                        }
                        if (t == 3) {
                            leg.dir = -1
                            leg.step = 0
                        }
                        if (t == 11) {
                            leg.dir = 1
                            leg.step = 5
                        }
                        if (t == 15) {
                            leg.dir = -1

                            leg.step = 0
                        }
                        if (t == 19) {
                            leg.dir = 1
                            leg.step = 5
                        }
                        leg.length = circ.radius * 3.5
                        leg.target = new TileCircle(circ.x, circ.y, circ.radius * .7, this.colors[2])
                        leg.elbow = new TileCircle(circ.x, circ.y, circ.radius * .2, this.colors[3])
                        leg.jump = 0
                        if (t == 15 || t == 19) {
                        } else {
                            circ.legs.push(leg)
                        }
                    }
                }
                circ.angle = 0// Math.PI
                circ.dis = circ.radius * 2
                this.tail.push(circ)
            }
        }

        nameGenerator() {
            let name = ''
            let random = Math.floor(Math.random() * 4) + 1
            for (let t = 0; t < random; t++) {
                let select = Math.floor(Math.random() * 23)
                if (t == 0) {
                    if (select == 0) {
                        name += 'Ur'
                    } else if (select == 1) {
                        name += 'Sa'
                    } else if (select == 2) {
                        name += 'Be'
                    } else if (select == 3) {
                        name += 'Ar'
                    } else if (select == 4) {
                        name += 'Ca'
                    } else if (select == 5) {
                        name += 'Ve'
                    } else if (select == 6) {
                        name += 'Hib'
                    } else if (select == 7) {
                        name += 'Er'
                    } else if (select == 8) {
                        name += 'Nat'
                    } else if (select == 9) {
                        name += 'Es'
                    } else if (select == 10) {
                        name += 'Ro'
                    } else if (select == 11) {
                        name += 'Ar'
                    } else if (select == 12) {
                        name += 'Ch'
                    } else if (select == 13) {
                        name += 'Eta'
                    } else if (select == 14) {
                        name += 'Mi'
                    } else if (select == 15) {
                        name += 'Ma'
                    } else if (select == 16) {
                        name += 'Fan'
                    } else if (select == 17) {
                        name += 'Gal'
                    } else if (select == 18) {
                        name += 'Fur'
                    } else if (select == 19) {
                        name += 'Rur'
                    } else if (select == 20) {
                        name += 'Bur'
                    } else if (select == 21) {
                        name += 'Kur'
                    } else if (select == 22) {
                        name += 'Mur'
                    }
                } else {
                    if (select == 0) {
                        name += 'oro'
                    } else if (select == 1) {
                        name += 'ora'
                    } else if (select == 2) {
                        name += 'oly'
                    } else if (select == 3) {
                        name += 'oir'
                    } else if (select == 4) {
                        name += 'cu'
                    } else if (select == 5) {
                        name += 'cub'
                    } else if (select == 6) {
                        name += 'op'
                    } else if (select == 7) {
                        name += 'ob'
                    } else if (select == 8) {
                        name += 'ade'
                    } else if (select == 9) {
                        name += 'ure'
                    } else if (select == 10) {
                        name += 'ura'
                    } else if (select == 11) {
                        name += 'ula'
                    } else if (select == 12) {
                        name += 'ulo'
                    } else if (select == 13) {
                        name += 'mu'
                    } else if (select == 14) {
                        name += 'um'
                    } else if (select == 15) {
                        name += 'om'
                    } else if (select == 16) {
                        name += 'mo'
                    } else if (select == 17) {
                        name += 'rao'
                    } else if (select == 18) {
                        name += 'loer'
                    } else if (select == 19) {
                        name += 'rel'
                    } else if (select == 20) {
                        name += 'fer'
                    } else if (select == 21) {
                        name += 'rur'
                    } else if (select == 22) {
                        name += 'gur'
                    }
                }
            }
            map_context.font = "18px Arial";
            map_context.fillStyle = 'yellow'
            map_context.strokeStyle = 'black'
            while (map_context.measureText(name).width > 80) {
                name = name.split('')
                name.splice(name.length - 1, 1)
                name = name.join('')
            }
            return name
        }
        jumpspin() {
            if(this.spin == 0){
                if (Math.random() < .2) {
                    this.spin = (-Math.random() * .3)-.5
                }
                if (Math.random() < .2) {
                    this.spin = (Math.random() * .3)+.5
                }
            }
            // this.body.angle += Math.sign(Math.random()-.5)*.2
        }
        calc() {
            this.body.set = [this.body.x, this.body.y, 1]
            // gamepad_control(this.body, 2.5)
            this.body.x += Math.cos(this.body.angle + Math.PI)
            this.body.y += Math.sin(this.body.angle + Math.PI)
            this.body.move()
            // this.body.draw()
            this.body.set = [this.body.set[0] - this.body.x, this.body.set[1] - this.body.y, 0]
            let link = new Line(this.body.x + this.body.set[0], this.body.y + this.body.set[1], this.body.x, this.body.y)
            let angle = this.body.angle + this.spin //(link.angle())//+this.body.angle)
            if (Math.random() < .13) {
                if (Math.random() < .2) {
                    this.spin = (-Math.random() * .2)-.1
                }
                if (Math.random() < .2) {
                    this.spin = (Math.random() * .2)+.1
                }
                if (Math.random() < .15) {
                    this.spin = 0
                }
            }
            this.body.angle = ((angle + (this.body.angle * 3)) / 4)
            for (let t = 0; t < this.tail.length; t++) {

                let dixx = 0
                let diyy = 0

                if (t > 0) {
                    if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
                        this.tail[t].angle = ((this.tail[t - 1].angle * 1.05) + (this.tail[t].angle * 4)) / 5.05
                    }
                    dixx = this.tail[t].x - (this.tail[t - 1].x + (Math.cos(this.tail[t].angle) * this.tail[t].dis))
                    diyy = this.tail[t].y - (this.tail[t - 1].y + (Math.sin(this.tail[t].angle) * this.tail[t].dis))
                    this.tail[t].x = this.tail[t - 1].x + (Math.cos(this.tail[t].angle) * this.tail[t].dis)
                    this.tail[t].y = this.tail[t - 1].y + (Math.sin(this.tail[t].angle) * this.tail[t].dis)

                } else {
                    if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
                        this.tail[t].angle = ((this.body.angle * 140.05) + this.tail[t].angle) / 141.05
                    }
                    this.tail[t].x = this.body.x + (Math.cos(this.tail[t].angle) * this.tail[t].dis)
                    this.tail[t].y = this.body.y + (Math.sin(this.tail[t].angle) * this.tail[t].dis)
                }
                for (let k = 0; k < this.tail[t].legs.length; k++) {
                    let link = new TileLineOP(this.tail[t], this.tail[t].legs[k], this.colors[2], 2)
                    let ang = (this.tail[t].angle + (Math.PI * .5 * Math.sign(k - .5))) - (((Math.PI * .33)) * (this.tail[t].legs[k].step / 6))

                    if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
                        this.tail[t].legs[k].step += this.tail[t].legs[k].dir
                        if (Math.abs(this.tail[t].legs[k].step) >= 6) {
                            let ang = (this.tail[t].angle + (Math.PI * .5 * Math.sign(k - .5))) - (((Math.PI * .33)) * (this.tail[t].legs[k].step / 6))
                            this.tail[t].legs[k].dir *= -1
                            this.tail[t].legs[k].target.x = this.tail[t].x + (Math.cos(ang) * this.tail[t].legs[k].length)
                            this.tail[t].legs[k].target.y = this.tail[t].y + (Math.sin(ang) * this.tail[t].legs[k].length)
                        }
                        this.tail[t].legs[k].xmom = (this.tail[t].legs[k].target.x - this.tail[t].legs[k].x) / 5
                        this.tail[t].legs[k].ymom = (this.tail[t].legs[k].target.y - this.tail[t].legs[k].y) / 5
                    }
                    if (this.tail[t].legs[k].doesPerimeterTouch(this.tail[t].legs[k].target)) {
                    } else {
                        this.tail[t].legs[k].move()
                        this.tail[t].legs[k].x -= dixx*1.5
                        this.tail[t].legs[k].y -= diyy*1.5
                        this.tail[t].legs[k].target.x -= dixx*1.5
                        this.tail[t].legs[k].target.y -= diyy*1.5
                    }
                    let point = new Point((this.tail[t].legs[k].x + this.tail[t].x) * .5, (this.tail[t].legs[k].y + this.tail[t].y) * .5)
                    let mpoint = new Point(point.x + (Math.cos(ang - .2) * this.tail[t].legs[k].length * .2), point.y + (Math.sin(ang - .2) * this.tail[t].legs[k].length * .2))
                    this.tail[t].legs[k].elbow.x = mpoint.x
                    this.tail[t].legs[k].elbow.y = mpoint.y
                    // let elink1 = new TileLineOP(this.tail[t].legs[k].elbow, this.tail[t], this.colors[2], 7)
                    // let elink2 = new TileLineOP(this.tail[t].legs[k].elbow, this.tail[t].legs[k], this.colors[2], 4)
                    // this.tail[t].legs[k].elbow.draw()
                    // this.tail[t].legs[k].draw()
                    // elink1.draw()
                    // elink2.draw()
                }
                if (t > 0) {
                    // let lynk = new TileLineOP(this.tail[t], this.tail[t-1],this.tail[t].color, this.tail[t].radius*3)
                    // lynk.draw()
                }
            }

        }
        draw() {
            this.needs = []


            let ice = 0
            for (let t = 0; t < this.pen.enrichment.length; t++) {
                if (this.pen.enrichment[t].ice == 1) {
                    ice++
                }
            }
            if (((this.pen.body.width * this.pen.body.height)) / 20000 > (ice)) {
                this.needs.push('More Ice')
            }



            if (((this.pen.body.width * this.pen.body.height) / this.pen.animals.length) < 4000 && this.pen.animals.length > 1) {
                this.needs.push('Overcrowded')
            }
            if (this.pen.animals.length < 2) {
                this.needs.push('Lonely')
            }

            this.age++
            this.scale = .5 + Math.min(this.age / 1000, .5)
            this.body.radius = this.radius * this.scale
            // this.body.set = [this.body.x, this.body.y, 1]
            // // gamepad_control(this.body, 2.5)
            // this.body.x += Math.cos(this.body.angle + Math.PI)
            // this.body.y += Math.sin(this.body.angle + Math.PI)
            // this.body.move()
            this.body.draw()
            // this.body.set = [this.body.set[0] - this.body.x, this.body.set[1] - this.body.y, 0]
            // let link = new Line(this.body.x + this.body.set[0], this.body.y + this.body.set[1], this.body.x, this.body.y)
            // let angle = this.body.angle + this.spin //(link.angle())//+this.body.angle)
            // if (Math.random() < .03) {
            //     if (Math.random() < .2) {
            //         this.spin = -Math.random() * .2
            //     }
            //     if (Math.random() < .2) {
            //         this.spin = Math.random() * .2
            //     }
            //     if (Math.random() < .8) {
            //         this.spin = 0
            //     }
            // }
            // this.body.angle = ((angle + (this.body.angle * 3)) / 4)
            for (let t = 0; t < this.tail.length; t++) {
                // if (t > 0) {
                this.tail[t].radius = (this.body.radius * .95) + Math.abs(3 - (t * 1))
                this.tail[t].dis = this.tail[t].radius * 2
                //     if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
                //         this.tail[t].angle = ((this.tail[t - 1].angle * 1.05) + (this.tail[t].angle * 6)) / 7.05
                //     }
                //     this.tail[t].x = this.tail[t - 1].x + (Math.cos(this.tail[t].angle) * this.tail[t].dis)
                //     this.tail[t].y = this.tail[t - 1].y + (Math.sin(this.tail[t].angle) * this.tail[t].dis)
                // } else {
                //     if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
                //         this.tail[t].angle = ((this.body.angle * 11.05) + this.tail[t].angle) / 12.05
                //     }
                //     this.tail[t].x = this.body.x + (Math.cos(this.tail[t].angle) * this.tail[t].dis)
                //     this.tail[t].y = this.body.y + (Math.sin(this.tail[t].angle) * this.tail[t].dis)
                // }
                for (let k = 0; k < this.tail[t].legs.length; k++) {
                    // let link = new TileLineOP(this.tail[t], this.tail[t].legs[k], this.colors[2], 2)
                    let ang = (this.tail[t].angle + (Math.PI * .5 * Math.sign(k - .5))) - (((Math.PI * .33)) * (this.tail[t].legs[k].step / 6))
                    this.tail[t].legs[k].radius = this.tail[t].radius * .4
                    this.tail[t].legs[k].length = this.tail[t].radius * 3.5
                    // if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
                    //     this.tail[t].legs[k].step += this.tail[t].legs[k].dir
                    //     if (Math.abs(this.tail[t].legs[k].step) >= 6) {
                    //         let ang = (this.tail[t].angle + (Math.PI * .5 * Math.sign(k - .5))) - (((Math.PI * .33)) * (this.tail[t].legs[k].step / 6))
                    //         this.tail[t].legs[k].dir *= -1
                    //         this.tail[t].legs[k].target.x = this.tail[t].x + (Math.cos(ang) * this.tail[t].legs[k].length)
                    //         this.tail[t].legs[k].target.y = this.tail[t].y + (Math.sin(ang) * this.tail[t].legs[k].length)
                    //     }
                    //     this.tail[t].legs[k].xmom = (this.tail[t].legs[k].target.x - this.tail[t].legs[k].x) / 5
                    //     this.tail[t].legs[k].ymom = (this.tail[t].legs[k].target.y - this.tail[t].legs[k].y) / 5
                    // }
                    // if (this.tail[t].legs[k].doesPerimeterTouch(this.tail[t].legs[k].target)) {
                    // } else {
                    //     this.tail[t].legs[k].move()
                    // }
                    let point = new Point((this.tail[t].legs[k].x + this.tail[t].x) * .5, (this.tail[t].legs[k].y + this.tail[t].y) * .5)
                    let mpoint = new Point(point.x + (Math.cos(ang - .2) * this.tail[t].legs[k].length * .2), point.y + (Math.sin(ang - .2) * this.tail[t].legs[k].length * .2))
                    // this.tail[t].legs[k].elbow.x = mpoint.x
                    // this.tail[t].legs[k].elbow.y = mpoint.y
                    let elink1 = new TileLineOP(this.tail[t].legs[k].elbow, this.tail[t], this.colors[2], 7)
                    let elink2 = new TileLineOP(this.tail[t].legs[k].elbow, this.tail[t].legs[k], this.colors[2], 4)
                    this.tail[t].legs[k].elbow.draw()
                    this.tail[t].legs[k].draw()
                    elink1.draw()
                    elink2.draw()
                }
            }
            // map_context.lineWidth = 13//this.width

            // map_context.beginPath()
            for (let t = 0; t < this.tail.length; t++) {
                // if (t > 0) {
                // let lynk = new xTileLineOP(this.tail[t], this.tail[t - 1], this.tail[t].color, this.tail[t].radius * 3)
                // // map_context.lineWidth = 13
                // lynk.draw()
                this.tail[t].draw()
                // }
            }
            // map_context.lineWidth = 13
            // map_context.stroke()
        }
    }
    class Colob {
        constructor(x, y, colors, pen) {
            this.cost = 800
            this.name = this.nameGenerator()
            this.variety = 3.5
            this.needs = []
            this.geko = 1
            this.pen = pen
            this.colors = colors
            this.body = new TileCircle(x, y, 4, this.colors[0])
            this.radius = 4
            this.scale = .5
            this.age = 0
            this.pen = pen
            this.body.angle = Math.PI + (Math.random() * 3)
            this.tail = []
            this.tailspeeds = []
            this.spin = 0
            for (let t = 0; t < 1; t++) {
                let circ = new TileCircle(this.body.x - (t * 12), this.body.y, (this.body.radius * .95) + Math.abs(3 - (t * 1)), getRandomColor())
                if (t % 2 == 0) {
                    circ.color = this.colors[1]
                }
                circ.legs = []
                if (t == 0) {
                    for (let k = 0; k < 14; k++) {
                        let leg = new TileCircle(circ.x, circ.y, circ.radius * .4, this.colors[2])
                        // if(k%4 == 0){
                        // leg.dir = 1
                        // leg.step = 3
                        //   if(k%4 == 1){
                        //     leg.dir = 1
                        //     leg.step = Math.floor(Math.random()*10)
                        // }else{
                        leg.dir = -1
                        leg.step = Math.floor(Math.random() * 10)
                        // }
                        if (k % 4 == 0) {
                            leg.dir = 1
                            leg.step = 0
                        } else if (k % 4 == 1) {
                            leg.dir = -1
                            leg.step = 9
                        } else if (k % 4 == 2) {
                            leg.dir = -1
                            leg.step = -9
                        } else {
                            leg.dir = 1
                            leg.step = -9
                        }
                        //     leg.dir = -1
                        //     leg.step = Math.floor(Math.random()*10)
                        // }else{
                        //     leg.dir = 1
                        //     leg.step = Math.floor(Math.random()*10)
                        // }
                        leg.length = circ.radius * 3.5
                        leg.target = new TileCircle(circ.x, circ.y, circ.radius * .7, this.colors[2])
                        leg.elbow = new TileCircle(circ.x, circ.y, circ.radius * .2, this.colors[3])
                        leg.jump = 0
                        circ.legs.push(leg)
                    }
                }
                circ.angle = 0// Math.PI
                circ.dis = circ.radius * 1.5
                this.tail.push(circ)
            }
        }

        nameGenerator() {
            let name = ''
            let random = Math.floor(Math.random() * 4) + 1
            for (let t = 0; t < random; t++) {
                let select = Math.floor(Math.random() * 23)
                if (t == 0) {
                    if (select == 0) {
                        name += 'Ur'
                    } else if (select == 1) {
                        name += 'Sa'
                    } else if (select == 2) {
                        name += 'Be'
                    } else if (select == 3) {
                        name += 'Ar'
                    } else if (select == 4) {
                        name += 'Ca'
                    } else if (select == 5) {
                        name += 'Ve'
                    } else if (select == 6) {
                        name += 'Hib'
                    } else if (select == 7) {
                        name += 'Er'
                    } else if (select == 8) {
                        name += 'Nat'
                    } else if (select == 9) {
                        name += 'Es'
                    } else if (select == 10) {
                        name += 'Ro'
                    } else if (select == 11) {
                        name += 'Ar'
                    } else if (select == 12) {
                        name += 'Ch'
                    } else if (select == 13) {
                        name += 'Eta'
                    } else if (select == 14) {
                        name += 'Mi'
                    } else if (select == 15) {
                        name += 'Ma'
                    } else if (select == 16) {
                        name += 'Fan'
                    } else if (select == 17) {
                        name += 'Gal'
                    } else if (select == 18) {
                        name += 'Fur'
                    } else if (select == 19) {
                        name += 'Rur'
                    } else if (select == 20) {
                        name += 'Bur'
                    } else if (select == 21) {
                        name += 'Kur'
                    } else if (select == 22) {
                        name += 'Mur'
                    }
                } else {
                    if (select == 0) {
                        name += 'oro'
                    } else if (select == 1) {
                        name += 'ora'
                    } else if (select == 2) {
                        name += 'oly'
                    } else if (select == 3) {
                        name += 'oir'
                    } else if (select == 4) {
                        name += 'cu'
                    } else if (select == 5) {
                        name += 'cub'
                    } else if (select == 6) {
                        name += 'op'
                    } else if (select == 7) {
                        name += 'ob'
                    } else if (select == 8) {
                        name += 'ade'
                    } else if (select == 9) {
                        name += 'ure'
                    } else if (select == 10) {
                        name += 'ura'
                    } else if (select == 11) {
                        name += 'ula'
                    } else if (select == 12) {
                        name += 'ulo'
                    } else if (select == 13) {
                        name += 'mu'
                    } else if (select == 14) {
                        name += 'um'
                    } else if (select == 15) {
                        name += 'om'
                    } else if (select == 16) {
                        name += 'mo'
                    } else if (select == 17) {
                        name += 'rao'
                    } else if (select == 18) {
                        name += 'loer'
                    } else if (select == 19) {
                        name += 'rel'
                    } else if (select == 20) {
                        name += 'fer'
                    } else if (select == 21) {
                        name += 'rur'
                    } else if (select == 22) {
                        name += 'gur'
                    }
                }
            }
            map_context.font = "18px Arial";
            map_context.fillStyle = 'yellow'
            map_context.strokeStyle = 'black'
            while (map_context.measureText(name).width > 80) {
                name = name.split('')
                name.splice(name.length - 1, 1)
                name = name.join('')
            }
            return name
        }
        jumpspin() {
            if(this.spin == 0){
                if (Math.random() < .2) {
                    this.spin = (-Math.random() * 1.3)-.5
                }
                if (Math.random() < .2) {
                    this.spin = (Math.random() * 1.3)+.5
                }
            }
            // this.body.angle += Math.sign(Math.random()-.5)*.2
        }
        calc() {
            this.body.set = [this.body.x, this.body.y, 1]
            // gamepad_control(this.body, 2.5)
            this.body.x += Math.cos(this.body.angle + Math.PI)
            this.body.y += Math.sin(this.body.angle + Math.PI)
            this.body.move()
            // this.body.draw()
            this.body.set = [this.body.set[0] - this.body.x, this.body.set[1] - this.body.y, 0]
            let link = new Line(this.body.x + this.body.set[0], this.body.y + this.body.set[1], this.body.x, this.body.y)
            let angle = this.body.angle + this.spin //(link.angle())//+this.body.angle)
            if (Math.random() < .03) {
                if (Math.random() < .2) {
                    this.spin = -Math.random() * .2
                }
                if (Math.random() < .2) {
                    this.spin = Math.random() * .2
                }
                if (Math.random() < .8) {
                    this.spin = 0
                }
            }
            this.body.angle = ((angle + (this.body.angle * 3)) / 4)
            for (let t = 0; t < this.tail.length; t++) {
                if (t > 0) {
                    if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
                        this.tail[t].angle = ((this.tail[t - 1].angle * 1.05) + (this.tail[t].angle * 10)) / 11.05
                    }
                    this.tail[t].x = this.tail[t - 1].x + (Math.cos(this.tail[t].angle) * this.tail[t].dis)
                    this.tail[t].y = this.tail[t - 1].y + (Math.sin(this.tail[t].angle) * this.tail[t].dis)
                } else {
                    if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
                        this.tail[t].angle = ((this.body.angle * 11.05) + this.tail[t].angle) / 12.05
                    }
                    this.tail[t].x = this.body.x + (Math.cos(this.tail[t].angle) * this.tail[t].dis)
                    this.tail[t].y = this.body.y + (Math.sin(this.tail[t].angle) * this.tail[t].dis)
                }
                for (let k = 0; k < this.tail[t].legs.length; k++) {
                    let link = new TileLineOP(this.tail[t], this.tail[t].legs[k], this.colors[2], 2)
                    let ang = (this.tail[t].angle + (Math.PI * .5 * Math.sign((k % 2) - .5))) - (((Math.PI * 1.21)) * (this.tail[t].legs[k].step / 10))

                    if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
                        this.tail[t].legs[k].step += this.tail[t].legs[k].dir
                        if (Math.abs(this.tail[t].legs[k].step) >= 10) {
                            let ang = (this.tail[t].angle + (Math.PI * .5 * Math.sign((k % 2) - .5))) - (((Math.PI * 1.21)) * (this.tail[t].legs[k].step / 10))
                            this.tail[t].legs[k].dir *= -1
                            this.tail[t].legs[k].target.x = this.tail[t].x + (Math.cos(ang) * this.tail[t].legs[k].length)
                            this.tail[t].legs[k].target.y = this.tail[t].y + (Math.sin(ang) * this.tail[t].legs[k].length)
                        }
                        this.tail[t].legs[k].xmom = (this.tail[t].legs[k].target.x - this.tail[t].legs[k].x) / 10
                        this.tail[t].legs[k].ymom = (this.tail[t].legs[k].target.y - this.tail[t].legs[k].y) / 10
                    }
                    if (this.tail[t].legs[k].doesPerimeterTouch(this.tail[t].legs[k].target)) {
                    } else {
                        this.tail[t].legs[k].move()
                    }
                    let point = new Point((this.tail[t].legs[k].x + this.tail[t].x) * .5, (this.tail[t].legs[k].y + this.tail[t].y) * .5)
                    let mpoint = new Point(point.x + (Math.cos(ang - .4) * this.tail[t].legs[k].length * .2), point.y + (Math.sin(ang - .4) * this.tail[t].legs[k].length * .2))
                    this.tail[t].legs[k].elbow.x = mpoint.x
                    this.tail[t].legs[k].elbow.y = mpoint.y
                    // let elink1 = new TileLineOP(this.tail[t].legs[k].elbow, this.tail[t], this.colors[2], 7)
                    // let elink2 = new TileLineOP(this.tail[t].legs[k].elbow, this.tail[t].legs[k], this.colors[2], 4)
                    // this.tail[t].legs[k].elbow.draw()
                    // this.tail[t].legs[k].draw()
                    // elink1.draw()
                    // elink2.draw()
                }
                if (t > 0) {
                    // let lynk = new TileLineOP(this.tail[t], this.tail[t-1],this.tail[t].color, this.tail[t].radius*3)
                    // lynk.draw()
                }
            }

        }
        draw() {
            this.needs = []

            let flowers = 0
            let grass = 0
            for (let t = 0; t < this.pen.enrichment.length; t++) {
                if (this.pen.enrichment[t].grass == 1) {
                    grass++
                }
                if (this.pen.enrichment[t].flower == 1) {
                    flowers++
                }
            }
            if (((this.pen.body.width * this.pen.body.height)) / 20000 > (flowers)) {
                this.needs.push('More Flowers')
            }



            if (((this.pen.body.width * this.pen.body.height) / this.pen.animals.length) < 4000 && this.pen.animals.length > 1) {
                this.needs.push('Overcrowded')
            }
            if (this.pen.animals.length < 2) {
                this.needs.push('Lonely')
            }

            this.age++
            this.scale = .5 + Math.min(this.age / 1000, .5)
            this.body.radius = this.radius * this.scale
            // this.body.set = [this.body.x, this.body.y, 1]
            // // gamepad_control(this.body, 2.5)
            // this.body.x += Math.cos(this.body.angle + Math.PI)
            // this.body.y += Math.sin(this.body.angle + Math.PI)
            // this.body.move()
            // this.body.draw()
            // this.body.set = [this.body.set[0] - this.body.x, this.body.set[1] - this.body.y, 0]
            // let link = new Line(this.body.x + this.body.set[0], this.body.y + this.body.set[1], this.body.x, this.body.y)
            // let angle = this.body.angle + this.spin //(link.angle())//+this.body.angle)
            // if (Math.random() < .03) {
            //     if (Math.random() < .2) {
            //         this.spin = -Math.random() * .2
            //     }
            //     if (Math.random() < .2) {
            //         this.spin = Math.random() * .2
            //     }
            //     if (Math.random() < .8) {
            //         this.spin = 0
            //     }
            // }
            // this.body.angle = ((angle + (this.body.angle * 3)) / 4)
            for (let t = 0; t < this.tail.length; t++) {
                // if (t > 0) {
                this.tail[t].radius = (this.body.radius * 1.25) + Math.abs(3 - (t * (this.body.radius / 6)))
                this.tail[t].dis = this.tail[t].radius * 1
                //     if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
                //         this.tail[t].angle = ((this.tail[t - 1].angle * 1.05) + (this.tail[t].angle * 6)) / 7.05
                //     }
                //     this.tail[t].x = this.tail[t - 1].x + (Math.cos(this.tail[t].angle) * this.tail[t].dis)
                //     this.tail[t].y = this.tail[t - 1].y + (Math.sin(this.tail[t].angle) * this.tail[t].dis)
                // } else {
                //     if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
                //         this.tail[t].angle = ((this.body.angle * 11.05) + this.tail[t].angle) / 12.05
                //     }
                //     this.tail[t].x = this.body.x + (Math.cos(this.tail[t].angle) * this.tail[t].dis)
                //     this.tail[t].y = this.body.y + (Math.sin(this.tail[t].angle) * this.tail[t].dis)
                // }
                for (let k = 0; k < this.tail[t].legs.length; k++) {
                    // let link = new TileLineOP(this.tail[t], this.tail[t].legs[k], this.colors[2], 2)
                    let ang = (this.tail[t].angle + (Math.PI * .5 * Math.sign(k - .5))) - (((Math.PI * 1.21)) * (this.tail[t].legs[k].step / 10))
                    this.tail[t].legs[k].radius = this.tail[t].radius * .4
                    this.tail[t].legs[k].length = this.tail[t].radius * 3.5
                    // if (Math.abs(this.body.set[0]) + Math.abs(this.body.set[1]) > 0) {
                    //     this.tail[t].legs[k].step += this.tail[t].legs[k].dir
                    //     if (Math.abs(this.tail[t].legs[k].step) >= 6) {
                    //         let ang = (this.tail[t].angle + (Math.PI * .5 * Math.sign(k - .5))) - (((Math.PI * 1.21)) * (this.tail[t].legs[k].step / 6))
                    //         this.tail[t].legs[k].dir *= -1
                    //         this.tail[t].legs[k].target.x = this.tail[t].x + (Math.cos(ang) * this.tail[t].legs[k].length)
                    //         this.tail[t].legs[k].target.y = this.tail[t].y + (Math.sin(ang) * this.tail[t].legs[k].length)
                    //     }
                    //     this.tail[t].legs[k].xmom = (this.tail[t].legs[k].target.x - this.tail[t].legs[k].x) / 5
                    //     this.tail[t].legs[k].ymom = (this.tail[t].legs[k].target.y - this.tail[t].legs[k].y) / 5
                    // }
                    // if (this.tail[t].legs[k].doesPerimeterTouch(this.tail[t].legs[k].target)) {
                    // } else {
                    //     this.tail[t].legs[k].move()
                    // }
                    let point = new Point((this.tail[t].legs[k].x + this.tail[t].x) * .5, (this.tail[t].legs[k].y + this.tail[t].y) * .5)
                    let mpoint = new Point(point.x + (Math.cos(ang - .2) * this.tail[t].legs[k].length * .2), point.y + (Math.sin(ang - .2) * this.tail[t].legs[k].length * .2))
                    // this.tail[t].legs[k].elbow.x = mpoint.x
                    // this.tail[t].legs[k].elbow.y = mpoint.y
                    let elink1 = new TileLineOP(this.tail[t].legs[k].elbow, this.tail[t], this.colors[2], 7)
                    let elink2 = new TileLineOP(this.tail[t].legs[k].elbow, this.tail[t].legs[k], this.colors[2], 4)
                    this.tail[t].legs[k].elbow.draw()
                    this.tail[t].legs[k].draw()
                    elink1.draw()
                    elink2.draw()
                }
            }
            // map_context.lineWidth = 13//this.width

            // map_context.beginPath()
            for (let t = 0; t < this.tail.length; t++) {
                // if (t > 0) {
                // let lynk = new xTileLineOP(this.tail[t], this.tail[t - 1], this.tail[t].color, this.tail[t].radius * 3)
                // // map_context.lineWidth = 13
                // lynk.draw()
                this.tail[t].draw()
                // }
            }
            // map_context.lineWidth = 13
            // map_context.stroke()
        }
    }


    let grasssheet = new Image()
    grasssheet.src = "grasssheet.png"
    class Grass {
        constructor(x, y, pen) {
            this.cost = 50
            this.grass = 1
            this.pen = pen
            this.body = new TileCircle(x - this.pen.body.x, y - this.pen.body.y, 5, "transparent")
            this.step = 0
            this.steps = 1
        }
        draw() {
            this.pen.context.drawImage(grasssheet, 0, 0, grasssheet.width, grasssheet.height, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2.5)
        }
    }

    let stone = new Image()
    stone.src = "stonezoo.png"
    class Stone {
        constructor(x, y, pen) {
            this.cost = 100
            this.stone = 1
            this.pen = pen
            this.body = new TileCircle(x - this.pen.body.x, y - this.pen.body.y, 5, "transparent")
            this.step = 0
            this.steps = 1
        }
        draw() {
            this.pen.context.drawImage(stone, 0, 0, stone.width, stone.height, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)
        }
    }


    let puddle = new Image()
    puddle.src = "puddle.png"
    class Puddle {
        constructor(x, y, pen) {
            this.cost = 150
            this.puddle = 1
            this.pen = pen
            this.body = new TileCircle(x - this.pen.body.x, y - this.pen.body.y, 5, "transparent")
            this.step = 0
            this.steps = 1
        }
        draw() {
            this.pen.context.drawImage(puddle, 0, 0, puddle.width, puddle.height, this.body.x - this.body.radius * 1.5, this.body.y - this.body.radius, this.body.radius * 3, this.body.radius * 2)
        }
    }

    let crystal = new Image()
    crystal.src = "crystal.png"
    class Crystal {
        constructor(x, y, pen) {
            this.cost = 300
            this.crystal = 1
            this.pen = pen
            this.body = new TileCircle(x - this.pen.body.x, y - this.pen.body.y, 5, "transparent")
            this.step = 0
            this.steps = 1
        }
        draw() {
            this.pen.context.drawImage(crystal, 0, 0, crystal.width, crystal.height, this.body.x - this.body.radius, this.body.y - (this.body.radius * 2), this.body.radius * 2, this.body.radius * 4)
        }
    }
    let ice = new Image()
    ice.src = "ice.png"
    class Ice {
        constructor(x, y, pen) {
            this.cost = 500
            this.ice = 1
            this.pen = pen
            this.body = new TileCircle(x - this.pen.body.x, y - this.pen.body.y, 5, "transparent")
            this.step = 0
            this.steps = 1
        }
        draw() {
            this.pen.context.drawImage(ice, 0, 0, ice.width, ice.height, this.body.x - this.body.radius, this.body.y - (this.body.radius * 1), this.body.radius * 2, this.body.radius * 2)
        }
    }

    let flowersprout = new Image()
    flowersprout.src = "flowersprout.png"
    class Flowersprout {
        constructor(x, y, pen) {
            this.cost = 200
            this.flower = 1
            this.pen = pen
            this.body = new TileCircle(x - this.pen.body.x, y - this.pen.body.y, 5, "transparent")
            this.step = 0
            this.steps = 1
            this.width = 1 + (Math.random() * .2)
        }
        draw() {
            this.pen.context.drawImage(flowersprout, 0, 0, flowersprout.width, flowersprout.height, this.body.x - this.body.radius * this.width, this.body.y - this.body.radius, this.body.radius * this.width * 2, this.body.radius * 2)
        }
    }
    const faces = new Image()
    faces.src = 'faces.png'

    class Guest {
        constructor(tile) {
            this.lifespan = 500 + (Math.random() * 5000)
            this.first = 0
            this.seetime = 0
            this.moved = 0
            this.stacksnap = 0
            this.aircheck = Math.floor(Math.random() * 10)
            this.swing = 0
            this.swingout = 1 //5
            this.stepout = 1
            this.selected = 0
            // this.tile = tile
            this.walkcount = 0
            this.movespeedcount = 0
            this.movespeed = Math.floor(Math.random() * 3) + 2
            this.tile = tile
            // this.pather = astar.search(sandmap, this.tile, this.tile)
            this.body = new TileCircle(this.tile.x + (this.tile.width * .5), this.tile.y + (this.tile.height * .5), 4, "transparent")

            // this.body = new UnitCircle(this.tile.x + (this.tile.width * .5), this.tile.y + (this.tile.height * .5), 5, this.faction.color)
            // this.faction.units.push(this)
            this.index = 0
            this.realPath = [this.tile]
            this.repath = 0
            this.repathsnap = 0
            this.sight = 1 + this.movespeed
            this.damage = this.body.radius
            this.firerate = (this.movespeed * 5)
            this.attackrange = this.sight - 1
            this.decayRate = (this.sight * this.movespeed) * .05
            this.health = this.sight * 100
            this.maxhealth = this.health
            this.shots = []
            this.attacktarget = {}
            this.attacktarget.health = 0
            this.attacktargetmove = {}
            this.attacktargetmove.health = 0
            this.attackcounter = 0
            this.projectilespeed = 7 // 9
            this.name = "agent"

            this.mood = ((Math.random() * 2)) + 3
            this.stacksnap = 0
            this.step = 10
            this.shopbody = new TileCircle(this.tile.x + (this.tile.width * .5), this.tile.y + (this.tile.height * .5), 4, "transparent")
            this.count = 0
        }

        pathTo(point) {
            // if (this.stacksnap > 10) {
            //     return
            // }
            if (point.walkable == true) {
                if (point != this.realPath[this.realPath.length - 1]) {
                    let vec = new Vector(this.body, this.body.x - (this.tile.x + 5), this.body.y - (this.tile.y + 5))
                    let spot = new Point(point.x + 5, point.y + 5)
                    if (!vec.isToward(spot)) {
                        this.movespeedcount = 0
                    }
                }
                this.stepout = 1
                this.pather = astar
                this.pather.agent = this
                this.obvious = this.realPath[this.index]
                this.pathsto = []
                for (let t = 0; t < this.realPath.length; t++) {
                    this.pathsto.push(this.realPath[t])
                }
                // this.stacksnap++
                // ////console.log(sandmap, this.tile, point, {})
                this.realPath = [...this.pather.search(sandmap, this.tile, point, {})]
                this.moved = 1
                if (this.obvious == this.realPath[0]) {
                    this.index = 0
                } else {
                    this.realPath = [...this.pathsto]
                    this.repath = 10 + Math.floor(Math.random() * 10)
                    this.snapto = point
                }
            } else {
                this.tempcheck = []
                let index = 0
                let wet = 0
                for (let t = point.t - this.stepout; t <= point.t + this.stepout; t++) {
                    for (let k = point.k - this.stepout; k <= point.k + this.stepout; k++) {
                        if (t > 0) {
                            if (t < 128) {
                                if (k > 0) {
                                    if (k < 128) {
                                        if (sandmap.blocks[t][k].walkable == true) {
                                            this.tempcheck.push(sandmap.blocks[t][k])
                                            wet = 1
                                            // break
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                if (wet == 0) {
                    this.stepout++
                    this.pathsto = []
                    for (let t = 0; t < this.realPath.length; t++) {
                        this.pathsto.push(this.realPath[t])
                    }
                    this.realPath = [...this.pathsto]
                    this.repath = 40 + Math.floor(Math.random() * 40)
                    this.snapto = point
                } else {
                    let max = 9999999999
                    for (let t = 0; t < this.tempcheck.length; t++) {
                        let link = (new LineOP(this.tile, this.tempcheck[t])).hypotenuse()
                        // //////////////////////////////////////console.log(link)
                        if (link < max) {
                            max = link
                            index = t
                        }
                    }
                    this.stacksnap++
                    // this.pathTo(this.tempcheck[index])
                }
            }
        }
        draw() {
            this.lifespan--
            if (this.first == 0) {
                sandmap.money += sandmap.entryFee
                this.lifespan += sandmap.guests.length
                this.lifespan += sandmap.guests.length * (Math.random() * 2.5)
                this.first = 1
            }
            this.body.radius = 260
            if (this.walkcount == 0) {
                for (let t = 0; t < sandmap.pens.length; t++) {
                    for (let k = 0; k < sandmap.pens[t].animals.length; k++) {
                        if (this.body.doesPerimeterTouch(sandmap.pens[t].animals[k].body)) {
                            // this.mood -= ((.0001*sandmap.pens[t].animals[k].variety)/(sandmap.pens[t].animals[k].needs.length+1))*((sandmap.pens.length*20)/(sandmap.guests.length*1.5))
                            this.mood -= ((.00075 * sandmap.pens[t].animals[k].variety) / (sandmap.pens[t].animals[k].needs.length + 1)) * (((sandmap.pens[t].animals.length * 10) + (sandmap.pens.length * 20)) / (sandmap.guests.length * 2.5))
                        }
                    }
                }
            }


            if (this.mood <= 0 && this.lifespan <= (200 + sandmap.guests.length)) {
                if (Math.random() < .02) {
                    this.marked = 1
                }
            }
            if (this.lifespan <= 0) {
                if (Math.random() < (1 - (1 / Math.sqrt(sandmap.guests.length)))) {
                    this.marked = 1
                }
            }
            this.body.radius = 4
            map_context.drawImage(faces, (Math.max(Math.min(Math.floor(this.mood), 4), 0) * 8), 0, (8), (8), this.body.x - this.body.radius, this.body.y - this.body.radius, (this.body.radius * 2), (this.body.radius * 2))
            this.body = new TileCircle(this.tile.x + (this.tile.width * .5), this.tile.y + (this.tile.height * .5), 4, "transparent")
            this.shopbody = new TileCircle(this.tile.x + (this.tile.width * .5), this.tile.y + (this.tile.height * .5), (4 + Math.max(this.mood, .5)), "transparent")
            // if(Math.random() < 1){
            // }

            // this.tile.drawish = 0
            this.walkcount++
            if (this.walkcount > 6) {
                this.index++
                if(this.tile.isinroads == true){
                    this.tile.walkable = true
                }
                this.tile.occupied = false
                this.walkcount = 0
            }
            // ////console.log(this.realPath)
            if (this.realPath.length == 0) {
                this.realPath = [this.tile]
            }
            if (this.index >= this.realPath.length - 1) {
                this.realPath = [this.tile]
                this.index = 0

                this.targetTile = sandmap.roadtiles[Math.floor(Math.random() * sandmap.roadtiles.length - 1)]
                if (this.targetTile) {
                    if (Math.random() < .05) {
                        this.pathTo(this.targetTile)
                    }
                }
            }
            if (this.realPath[this.index]) {
                this.tile = this.realPath[this.index]
            }
        }
    }

    const spinsheet = new Image()
    spinsheet.src = '128spim2.png'
    let typez = 0
    class GardenPomaoranian {
        constructor(x, y, pen) {
            this.variety = 2
            this.cost = 250
            this.pen = pen
            this.target = {}
            this.target.agent = {}
            this.target.agent.body = {}
            this.target.agent.body.y = x
            this.target.agent.body.x = y
            this.turn = true
            this.name = this.nameGenerator()
            this.needs = []
            this.width = 35 + (Math.random() * 5)
            this.height = this.width
            this.body = new Circle(x, y, 2, "transparent", 0, 0, 1, 1)
            this.body.x = x
            this.body.y = y //- (this.height - 1)
            this.body.radius = 32 //- (this.height - 1)
            this.dir = 0
            this.rate = Math.random() + 1
            this.type = Math.floor(Math.random() * 300)
            this.tonguecolor = getRandomColor()
            this.centrix = new Circle(this.body.x, this.body.y + 5, 3, this.tonguecolor)
            this.tongue = new Circle(this.body.x, this.body.y + 5, 5, this.tonguecolor, 0, 0, .5)
            this.link = new LineOP(this.centrix, this.tongue, this.tonguecolor, 3)
            this.xdir = 0
            this.ydir = 0
            this.type = typez//Math.floor(Math.random()*16) //typez//
            typez++
            typez %= 32
            this.type += (1 / 64)
            this.rarity = Math.floor(Math.random() * 4)
            this.stats = [1, 1, 1, 1, 1, 1]
            this.exps = [0, 0, 0, 0, 0, 0]
            this.count = 0
            this.rate = 4
            this.mrate = 2
            this.victor = 0
            this.age = 0
            this.scale = .5
            this.radius = 16
        }
        nameGenerator() {
            let name = ''
            let random = Math.floor(Math.random() * 4) + 1
            for (let t = 0; t < random; t++) {
                let select = Math.floor(Math.random() * 23)
                if (t == 0) {
                    if (select == 0) {
                        name += 'Po'
                    } else if (select == 1) {
                        name += 'Mo'
                    } else if (select == 2) {
                        name += 'Bo'
                    } else if (select == 3) {
                        name += 'Jo'
                    } else if (select == 4) {
                        name += 'Go'
                    } else if (select == 5) {
                        name += 'Mao'
                    } else if (select == 6) {
                        name += 'Mop'
                    } else if (select == 7) {
                        name += 'Pom'
                    } else if (select == 8) {
                        name += 'Moo'
                    } else if (select == 9) {
                        name += 'Pou'
                    } else if (select == 10) {
                        name += 'Goo'
                    } else if (select == 11) {
                        name += 'Bao'
                    } else if (select == 12) {
                        name += 'Mam'
                    } else if (select == 13) {
                        name += 'Pam'
                    } else if (select == 14) {
                        name += 'Omp'
                    } else if (select == 15) {
                        name += 'Op'
                    } else if (select == 16) {
                        name += 'Boa'
                    } else if (select == 17) {
                        name += 'Moa'
                    } else if (select == 18) {
                        name += 'Jao'
                    } else if (select == 19) {
                        name += 'Oj'
                    } else if (select == 20) {
                        name += 'P'
                    } else if (select == 21) {
                        name += 'Ro'
                    } else if (select == 22) {
                        name += 'Um'
                    }
                } else {
                    if (select == 0) {
                        name += 'oo'
                    } else if (select == 1) {
                        name += 'omo'
                    } else if (select == 2) {
                        name += 'obo'
                    } else if (select == 3) {
                        name += 'po'
                    } else if (select == 4) {
                        name += 'mo'
                    } else if (select == 5) {
                        name += 'mao'
                    } else if (select == 6) {
                        name += 'op'
                    } else if (select == 7) {
                        name += 'oma'
                    } else if (select == 8) {
                        name += 'moa'
                    } else if (select == 9) {
                        name += 'pao'
                    } else if (select == 10) {
                        name += 'opo'
                    } else if (select == 11) {
                        name += 'o'
                    } else if (select == 12) {
                        name += 'p'
                    } else if (select == 13) {
                        name += 'm'
                    } else if (select == 14) {
                        name += 'j'
                    } else if (select == 15) {
                        name += 'go'
                    } else if (select == 16) {
                        name += 'gao'
                    } else if (select == 17) {
                        name += 'tao'
                    } else if (select == 18) {
                        name += 'lao'
                    } else if (select == 19) {
                        name += 'sao'
                    } else if (select == 20) {
                        name += 'opop'
                    } else if (select == 21) {
                        name += 'ogoo'
                    } else if (select == 22) {
                        name += 'um'
                    }
                }
            }
            map_context.font = "18px Arial";
            map_context.fillStyle = 'yellow'
            map_context.strokeStyle = 'black'
            while (map_context.measureText(name).width > 80) {
                name = name.split('')
                name.splice(name.length - 1, 1)
                name = name.join('')
            }
            return name
        }
        move() {

        }
        draw() {

            this.repel(this.pen.animals)
            this.health = (this.stats[0] * 3) + 1
            this.maxhealth = this.health
            this.victor = 0
            this.count++
            this.centrix.x = this.body.x
            this.centrix.y = this.body.y + 5
            if (this.count % this.rate == 0) {
                this.tongue.xmom += (this.centrix.x - this.tongue.x) / 10
                this.tongue.frictiveMove()
            }
            // this.move()
            // this.tongue.draw()
            // this.link.draw()
            if (this.count % this.mrate == 0) {
                this.jumpspin()
            }
            this.body.x += this.xdir
            this.body.y += this.ydir
            this.body.radius = 16

            this.needs = []

            let flowers = 0
            let grass = 0
            for (let t = 0; t < this.pen.enrichment.length; t++) {
                if (this.pen.enrichment[t].grass == 1) {
                    grass++
                }
                if (this.pen.enrichment[t].flower == 1) {
                    flowers++
                }
            }
            if (((this.pen.body.width * this.pen.body.height)) / 7000 > (grass)) {
                this.needs.push('More Grass')
            }
            if (((this.pen.body.width * this.pen.body.height)) / 40000 > (flowers)) {
                this.needs.push('More Flowers')
            }
            if (((this.pen.body.width * this.pen.body.height) / this.pen.animals.length) < 4000 && this.pen.animals.length > 1) {
                this.needs.push('Overcrowded')
            }
            if (this.pen.animals.length < 2) {
                this.needs.push('Lonely')
            }
            this.age += 1
            this.scale = .5 + Math.min(this.age / 1000, .5)
            this.body.radius = this.radius * this.scale

            // map_context.drawImage(spinsheet, (this.rarity*512)+(64),0+(this.type*(64)), (64),(64),this.body.x-this.body.radius, this.body.y-this.body.radius, (this.body.radius*2),(this.body.radius*2))


            if (this.xdir == 1) {
                if (this.ydir == 1) {
                    map_context.drawImage(spinsheet, (this.rarity * 512) + (64), 0 + (this.type * (64)), (64), (64), this.body.x - this.body.radius, this.body.y - this.body.radius, (this.body.radius * 2), (this.body.radius * 2))
                } else if (this.ydir == -1) {
                    map_context.drawImage(spinsheet, (this.rarity * 512) + 7 * (64), 0 + (this.type * (64)), (64), (64), this.body.x - this.body.radius, this.body.y - this.body.radius, (this.body.radius * 2), (this.body.radius * 2))
                } else {
                    map_context.drawImage(spinsheet, (this.rarity * 512) + 0, 0 + (this.type * (64)), (64), (64), this.body.x - this.body.radius, this.body.y - this.body.radius, (this.body.radius * 2), (this.body.radius * 2))
                }
            } else if (this.xdir == -1) {
                if (this.ydir == 1) {
                    map_context.drawImage(spinsheet, (this.rarity * 512) + 3 * (64), 0 + (this.type * (64)), (64), (64), this.body.x - this.body.radius, this.body.y - this.body.radius, (this.body.radius * 2), (this.body.radius * 2))
                } else if (this.ydir == -1) {
                    map_context.drawImage(spinsheet, (this.rarity * 512) + 5 * (64), 0 + (this.type * (64)), (64), (64), this.body.x - this.body.radius, this.body.y - this.body.radius, (this.body.radius * 2), (this.body.radius * 2))
                } else {
                    map_context.drawImage(spinsheet, (this.rarity * 512) + 4 * (64), 0 + (this.type * (64)), (64), (64), this.body.x - this.body.radius, this.body.y - this.body.radius, (this.body.radius * 2), (this.body.radius * 2))
                }
            } else {
                if (this.ydir == 1) {
                    map_context.drawImage(spinsheet, (this.rarity * 512) + 128, 0 + (this.type * (64)), (64), (64), this.body.x - this.body.radius, this.body.y - this.body.radius, (this.body.radius * 2), (this.body.radius * 2))
                } else if (this.ydir == -1) {
                    map_context.drawImage(spinsheet, (this.rarity * 512) + 6 * (64), 0 + (this.type * (64)), (64), (64), this.body.x - this.body.radius, this.body.y - this.body.radius, (this.body.radius * 2), (this.body.radius * 2))
                } else {
                    map_context.drawImage(spinsheet, (this.rarity * 512) + 0, 0 + (this.type * (64)), (64), (64), this.body.x - this.body.radius, this.body.y - this.body.radius, (this.body.radius * 2), (this.body.radius * 2))
                }
            }
        }
        fight() {

            if (keysPressed['g']) {
                if (this.turn == true) {
                    this.lick(this.target.agent.body)
                    this.turn = false

                    setTimeout(() => { this.target.agent.health -= this.target.agent.maxhealth * .2 }, 100);
                    this.attacktimeout = 0
                }
            }
            this.attacktimeout++
            if (this.attacktimeout > 30) {
                this.turn = true
            }


            this.healthbar = new RectangleStroke(this.body.x - 32, this.body.y + 39, this.body.radius * 2 * (this.health / this.maxhealth), 10, `rgb( ${255 - (this.health * 25) * 3},${this.health * 25 * 3}, 0)`)
            this.healthbar.draw()
            this.victor = 0
            ////////console.log(this)
            this.count++
            this.centrix.x = this.body.x
            this.centrix.y = this.body.y + 5
            if (this.count % this.rate == 0) {
                this.tongue.xmom += (this.centrix.x - this.tongue.x) / 10
                this.tongue.frictiveMove()
            }
            // this.move()
            this.tongue.draw()
            this.link.draw()
            // if(this.count%this.mrate == 0){
            // this.move()
            // }
            if (this.xdir == 1) {
                if (this.ydir == 1) {
                    map_context.drawImage(spinsheet, (this.rarity * 512) + 64, 0 + (this.type * 64), 64, 64, this.body.x - 32, this.body.y - 32, 64, 64)
                } else if (this.ydir == -1) {
                    map_context.drawImage(spinsheet, (this.rarity * 512) + 7 * 64, 0 + (this.type * 64), 64, 64, this.body.x - 32, this.body.y - 32, 64, 64)
                } else {
                    map_context.drawImage(spinsheet, (this.rarity * 512) + 0, 0 + (this.type * 64), 64, 64, this.body.x - 32, this.body.y - 32, 64, 64)
                }
            } else if (this.xdir == -1) {
                if (this.ydir == 1) {
                    map_context.drawImage(spinsheet, (this.rarity * 512) + 3 * 64, 0 + (this.type * 64), 64, 64, this.body.x - 32, this.body.y - 32, 64, 64)
                } else if (this.ydir == -1) {
                    map_context.drawImage(spinsheet, (this.rarity * 512) + 5 * 64, 0 + (this.type * 64), 64, 64, this.body.x - 32, this.body.y - 32, 64, 64)
                } else {
                    map_context.drawImage(spinsheet, (this.rarity * 512) + 4 * 64, 0 + (this.type * 64), 64, 64, this.body.x - 32, this.body.y - 32, 64, 64)
                }
            } else {
                if (this.ydir == 1) {
                    map_context.drawImage(spinsheet, (this.rarity * 512) + 128, 0 + (this.type * 64), 64, 64, this.body.x - 32, this.body.y - 32, 64, 64)
                } else if (this.ydir == -1) {
                    map_context.drawImage(spinsheet, (this.rarity * 512) + 6 * 64, 0 + (this.type * 64), 64, 64, this.body.x - 32, this.body.y - 32, 64, 64)
                } else {
                    map_context.drawImage(spinsheet, (this.rarity * 512) + 0, 0 + (this.type * 64), 64, 64, this.body.x - 32, this.body.y - 32, 64, 64)
                }
            }
        }

        race() {
            this.xdir = 0
            this.ydir = 0
            this.count++
            if (this.count % this.mrate == 0) {
                if (global.startup <= 0) {
                    if (this.body.x > 1200) {

                        if (this.victor == 0) {
                            this.victor = global.raceplaced + 1
                            global.raceplaced += 1
                            if (global.raceplaced == global.challengers.length + 1) {
                                global.startup = 200
                            }
                        }
                    } else {
                        this.body.x += (this.stats[3] / 100) + .5
                    }
                }
            }
            this.tongue.x = this.body.x
            this.tongue.y = this.body.y
            if (this.xdir == 1) {
                if (this.ydir == 1) {
                    map_context.drawImage(spinsheet, (this.rarity * 512) + 64, 0 + (this.type * 64), 64, 64, this.body.x - 32, this.body.y - 32, 64, 64)
                } else if (this.ydir == -1) {
                    map_context.drawImage(spinsheet, (this.rarity * 512) + 7 * 64, 0 + (this.type * 64), 64, 64, this.body.x - 32, this.body.y - 32, 64, 64)
                } else {
                    map_context.drawImage(spinsheet, (this.rarity * 512) + 0, 0 + (this.type * 64), 64, 64, this.body.x - 32, this.body.y - 32, 64, 64)
                }
            } else if (this.xdir == -1) {
                if (this.ydir == 1) {
                    map_context.drawImage(spinsheet, (this.rarity * 512) + 3 * 64, 0 + (this.type * 64), 64, 64, this.body.x - 32, this.body.y - 32, 64, 64)
                } else if (this.ydir == -1) {
                    map_context.drawImage(spinsheet, (this.rarity * 512) + 5 * 64, 0 + (this.type * 64), 64, 64, this.body.x - 32, this.body.y - 32, 64, 64)
                } else {
                    map_context.drawImage(spinsheet, (this.rarity * 512) + 4 * 64, 0 + (this.type * 64), 64, 64, this.body.x - 32, this.body.y - 32, 64, 64)
                }
            } else {
                if (this.ydir == 1) {
                    map_context.drawImage(spinsheet, (this.rarity * 512) + 128, 0 + (this.type * 64), 64, 64, this.body.x - 32, this.body.y - 32, 64, 64)
                } else if (this.ydir == -1) {
                    map_context.drawImage(spinsheet, (this.rarity * 512) + 6 * 64, 0 + (this.type * 64), 64, 64, this.body.x - 32, this.body.y - 32, 64, 64)
                } else {
                    map_context.drawImage(spinsheet, (this.rarity * 512) + 0, 0 + (this.type * 64), 64, 64, this.body.x - 32, this.body.y - 32, 64, 64)
                }
            }

            if (this.victor != 0) {
                map_context.drawImage(placessheet, (this.victor * 32) - 32, 0, 31, 31, this.body.x + 32, this.body.y - 32, 32, 32)
            }
        }

        repel(pomaos) {
            for (let t = 0; t < pomaos.length; t++) {
                if (this != pomaos[t]) {
                    if (this.body.doesPerimeterTouch(pomaos[t].body)) {
                        let link = new LineOP(this.body, pomaos[t].body)
                        // this.centrix.x += ((link.hypotenuse()) / 2) * (Math.cos(link.angle())) / 20
                        // this.centrix.y += ((link.hypotenuse()) / 2) * (Math.sin(link.angle())) / 20
                        // this.tongue.x += ((link.hypotenuse()) / 2) * (Math.cos(link.angle())) / 20
                        // this.tongue.y += ((link.hypotenuse()) / 2) * (Math.sin(link.angle())) / 20
                        this.body.x += ((link.hypotenuse()) / 2) * (Math.cos(link.angle())) / 20
                        this.body.y += ((link.hypotenuse()) / 2) * (Math.sin(link.angle())) / 20
                    }
                }
            }
        }

        jumpspin() {
            this.repel([])
            // if ((this.body.x - this.tongue.x) > 10) {
            //     this.xdir = -1
            //     this.ydir = 0
            // }
            // if ((this.body.x - this.tongue.x) < -10) {
            //     this.xdir = 1
            //     this.ydir = 0
            // }

            if (Math.random() < .005) {
                if (Math.random() < .1) {
                    this.xdir = 0
                }
                this.ydir = 1
            }
            if (Math.random() < .005) {
                if (Math.random() < .1) {
                    this.xdir = 0
                }
                this.ydir = -1
            }
            if (Math.random() < .005) {
                if (Math.random() < .1) {
                    this.ydir = 0
                }
                this.xdir = -1
            }
            if (Math.random() < .005) {
                if (Math.random() < .1) {
                    this.ydir = 0
                }
                this.xdir = 1
            }
            if (Math.random() < .9) {
                this.moving = 1
            } else {
                this.moving = 0
            }



            // if (this.moving == 1) {
            //     this.body.x += this.xdir / 3
            //     this.body.y += this.ydir / 3
            //     this.tongue.x += this.xdir / 3
            //     this.tongue.y += this.ydir / 3
            //     if (this.body.x < 0 + 32) {
            //         this.xdir = 1
            //     }
            //     if (this.body.x > 1280 - 32) {
            //         this.xdir = -1
            //     }
            //     if (this.body.y < 0 + 32) {
            //         this.ydir = 1
            //     }
            //     if (this.body.y > 720 - 32) {
            //         this.ydir = -1
            //     }
            // }

            // if (Math.random() < .001) {
            //     let point = new Point(this.body.x + (Math.random() - .5), this.body.y)
            //     this.lick(point)
            // }
        }
        lick(point) {

            if ((this.body.x - this.tongue.x) > 10) {
                return
            }
            if ((this.body.x - this.tongue.x) < -10) {
                return
            }
            if (point.x < this.body.x) {
                this.tongue.xmom = -39
                // if(global.fighting == 1){
                //     this.tongue.xmom -= 39
                // }
                this.xdir = -1
                this.ydir = 0
            } else {
                this.tongue.xmom = 39
                // if(global.fighting == 1){
                //     this.tongue.xmom += 39
                // }
                this.xdir = 1
                this.ydir = 0
            }
        }
        // draw() {
        //     this.tongue.frictiveMove()
        //     this.move()
        //     this.tongue.draw()
        //     this.link.draw()
        //     map_context.drawImage(cityfolk, this.dir * 128, (this.type * 128) + 1, 128, 128, this.x, this.y - (Math.sin(((global.timeloop * this.rate) + 3.14)) * 1.7), this.width, this.height + (Math.sin(((global.timeloop * this.rate) + 3.14)) * 1.7))
        // }
    }

    class Crab {
        constructor(x, y, colors, pen) {
            this.cost = 400
            this.variety = 2.5
            this.name = this.nameGenerator()
            this.needs = []
            this.colors = colors
            this.radius = 5
            this.body = new TileCircle(x, y, 5, this.colors[0])
            this.body.angle = 0
            this.clip = 0
            this.slip = .1
            this.spin = 0
            this.crab = 1
            this.scale = .5
            this.age = 0
            this.pen = pen
        }

        nameGenerator() {
            let name = ''
            let random = Math.floor(Math.random() * 4) + 1
            for (let t = 0; t < random; t++) {
                let select = Math.floor(Math.random() * 23)
                if (t == 0) {
                    if (select == 0) {
                        name += 'Sni'
                    } else if (select == 1) {
                        name += 'Per'
                    } else if (select == 2) {
                        name += 'Cra'
                    } else if (select == 3) {
                        name += 'Ba'
                    } else if (select == 4) {
                        name += 'Buk'
                    } else if (select == 5) {
                        name += 'Buc'
                    } else if (select == 6) {
                        name += 'Pin'
                    } else if (select == 7) {
                        name += 'Gra'
                    } else if (select == 8) {
                        name += 'Cla'
                    } else if (select == 9) {
                        name += 'She'
                    } else if (select == 10) {
                        name += 'Car'
                    } else if (select == 11) {
                        name += 'Sea'
                    } else if (select == 12) {
                        name += 'Sal'
                    } else if (select == 13) {
                        name += 'Dec'
                    } else if (select == 14) {
                        name += 'Pod'
                    } else if (select == 15) {
                        name += 'Tra'
                    } else if (select == 16) {
                        name += 'Gre'
                    } else if (select == 17) {
                        name += 'Snib'
                    } else if (select == 18) {
                        name += 'Bins'
                    } else if (select == 19) {
                        name += 'Bin'
                    } else if (select == 20) {
                        name += 'Crab'
                    } else if (select == 21) {
                        name += 'Barc'
                    } else if (select == 22) {
                        name += 'Arb'
                    }
                } else {
                    if (select == 0) {
                        name += 'ab'
                    } else if (select == 1) {
                        name += 'nch'
                    } else if (select == 2) {
                        name += 'ket'
                    } else if (select == 3) {
                        name += 'ch'
                    } else if (select == 4) {
                        name += 'b'
                    } else if (select == 5) {
                        name += 'w'
                    } else if (select == 6) {
                        name += 'll'
                    } else if (select == 7) {
                        name += 'bs'
                    } else if (select == 8) {
                        name += 'bed'
                    } else if (select == 9) {
                        name += 't'
                    } else if (select == 10) {
                        name += 'a'
                    } else if (select == 11) {
                        name += 'apo'
                    } else if (select == 12) {
                        name += 'apode'
                    } else if (select == 13) {
                        name += 'ell'
                    } else if (select == 14) {
                        name += 'hea'
                    } else if (select == 15) {
                        name += 'stacea'
                    } else if (select == 16) {
                        name += 'sta'
                    } else if (select == 17) {
                        name += 'st'
                    } else if (select == 18) {
                        name += 'cru'
                    } else if (select == 19) {
                        name += 'cap'
                    } else if (select == 20) {
                        name += 'pac'
                    } else if (select == 21) {
                        name += 'pak'
                    } else if (select == 22) {
                        name += 'kap'
                    }
                }
            }
            map_context.font = "18px Arial";
            map_context.fillStyle = 'yellow'
            map_context.strokeStyle = 'black'
            while (map_context.measureText(name).width > 80) {
                name = name.split('')
                name.splice(name.length - 1, 1)
                name = name.join('')
            }
            return name
        }
        jumpspin() {
            if (Math.random() < .2) {
                this.spin = -Math.random() * .2
            }
            if (Math.random() < .2) {
                this.spin = Math.random() * .2
            }
            this.body.angle += Math.random() - .5
        }
        draw() {

            this.needs = []
            let puddles = 0
            for (let t = 0; t < this.pen.enrichment.length; t++) {
                if (this.pen.enrichment[t].puddle == 1) {
                    puddles++
                }
            }
            if (((this.pen.body.width * this.pen.body.height)) / 8000 > (puddles)) {
                this.needs.push('More Puddles')
            }
            if (((this.pen.body.width * this.pen.body.height) / this.pen.animals.length) < 4000 && this.pen.animals.length > 1) {
                this.needs.push('Overcrowded')
            }
            if (this.pen.animals.length < 2) {
                this.needs.push('Lonely')
            }
            this.age++
            this.scale = .5 + Math.min(this.age / 1000, .5)
            this.body.radius = this.radius * this.scale
            this.body.draw()
            this.clip += this.slip
            if (Math.abs(this.clip) > (Math.PI + this.clip)) {
                this.slip *= -1
            }
            if (Math.random() < .13) {
                if (Math.random() < .2) {
                    this.spin = -Math.random() * .2
                }
                if (Math.random() < .2) {
                    this.spin = Math.random() * .2
                }
                if (Math.random() < .8) {
                    this.spin = 0
                }
            }
            this.body.angle += this.spin
            this.body.x += Math.cos(this.body.angle)
            this.body.y += Math.sin(this.body.angle)
            this.claws = []
            this.angle = this.body.angle
            for (let t = 0; t < 3; t++) {
                let point = new Point(this.body.x + ((this.body.radius * 3.75) * Math.cos(this.angle)), (this.body.y + ((this.body.radius * 3.75) * Math.sin(this.angle))))
                this.angle += Math.PI / 1.5
                this.claws.push(point)
            }
            for (let t = 0; t < this.claws.length; t++) {
                let link = new TileLineOP(this.claws[t], this.body, this.colors[1], 5)
                link.draw()
            }
            for (let t = 0; t < this.claws.length; t++) {

                let link = new TileLineOP(this.claws[t], this.body, this.colors[1], 2)
                let point2 = new Point(this.claws[t].x + ((this.body.radius * 2.75) * Math.cos(this.clip + link.angle())), (this.claws[t].y + ((this.body.radius * 2.75) * Math.sin(this.clip + link.angle()))))
                let point3 = new Point(this.claws[t].x + ((this.body.radius * 2.75) * Math.cos(-this.clip + link.angle())), (this.claws[t].y + ((this.body.radius * 2.75) * Math.sin(-this.clip + link.angle()))))
                let link3 = new TileLineOP(this.claws[t], point2, this.colors[2], 3)
                let link2 = new TileLineOP(this.claws[t], point3, this.colors[3], 3)
                link3.draw()
                link2.draw()
            }
            // ////console.log(this)

        }
    }
    
    class Circles {
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
            this.rupture = 0
            this.count = 1
            this.angle = .001
            this.segs = 10
        }
        draw() {
            if(this.rupture == 0){
                map_context.lineWidth = 2
                map_context.strokeStyle = this.color
                map_context.beginPath();
                if (this.radius > 0) {
                    map_context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)
                    map_context.fillStyle = this.color
                    // map_context.fill()
                    map_context.stroke();
                } else {
                    // //console.log("The circle is below a radius of 0, and has not been drawn. The circle is:", this)
                }
            }else{
                // this.rupture++
                this.radius++
                this.radius*=1.002
                this.count += .19
                map_context.lineWidth = 3
                map_context.strokeStyle = this.color
                map_context.globalAlpha = 1/this.count
                for(let t = 0;t<this.segs;t++){
                    map_context.beginPath();
                    // //console.log(t*((Math.PI*2)/this.segs),)
                    map_context.arc(this.x, this.y, this.radius, t*((Math.PI*2)/this.segs), (t*((Math.PI*2)/this.segs))+(((Math.PI)/this.segs)), false)
                    map_context.stroke();
                }


                map_context.globalAlpha = 1
                
            }
        }
        move(canvas) {
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
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= ((this.radius - 3) * (this.radius - 3))) {
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

    class Nukster {    
        constructor(x, y, colors, pen) {
            this.bubble = 1
        this.variety = 12.5
        this.name = this.nameGenerator()
        this.needs = []
        this.colors = colors
            this.body = new Circles(x, y, 17, this.colors[0])
            this.radius = 5
        this.body.angle = 0
        this.clip = 0
        this.slip = .1
        this.spin = 0
        this.crab = 1
        this.scale = .5
        this.age = 0
        this.pen = pen
            this.cost = 100000
            this.type = Math.floor(Math.random() * 2)
            this.particles = []
            for (let t = 0; t <  12; t++) {
                let particle = new TileCircle(x + ((Math.random() - .5) * this.body.radius), y + ((Math.random() - .5) * this.body.radius), 1, this.colors[(Math.floor(Math.random()*this.colors.length))], (Math.random() - .5) * 5, (Math.random() - .5) * 5, .95)
                this.particles.push(particle)
            }
            this.marked = 0
        }

        jumpspin() {
            if (Math.random() < .2) {
                this.spin = -Math.random() * 2
            }
            if (Math.random() < .2) {
                this.spin = Math.random() * 2
            }
            this.body.angle += (Math.random() - .5)*3
        }
        nameGenerator() {
            let name = ''
            let random = Math.floor(Math.random() * 4) + 1
            for (let t = 0; t < random; t++) {
                let select = Math.floor(Math.random() * 23)
                if (t == 0) {
                    if (select == 0) {
                        name += 'Bub'
                    } else if (select == 1) {
                        name += 'Bu'
                    } else if (select == 2) {
                        name += 'Pop'
                    } else if (select == 3) {
                        name += 'Ski'
                    } else if (select == 4) {
                        name += 'Fil'
                    } else if (select == 5) {
                        name += 'Mil'
                    } else if (select == 6) {
                        name += 'Lim'
                    } else if (select == 7) {
                        name += 'Soa'
                    } else if (select == 8) {
                        name += 'Sop'
                    } else if (select == 9) {
                        name += 'Sope'
                    } else if (select == 10) {
                        name += 'Soap'
                    } else if (select == 11) {
                        name += 'Soep'
                    } else if (select == 12) {
                        name += 'Soyp'
                    } else if (select == 13) {
                        name += 'Was'
                    } else if (select == 14) {
                        name += 'Cle'
                    } else if (select == 15) {
                        name += 'Spa'
                    } else if (select == 16) {
                        name += 'Shi'
                    } else if (select == 17) {
                        name += 'Tik'
                    } else if (select == 18) {
                        name += 'Wars'
                    } else if (select == 19) {
                        name += 'Le'
                    } else if (select == 20) {
                        name += 'Bubb'
                    } else if (select == 21) {
                        name += 'Ble'
                    } else if (select == 22) {
                        name += 'Bb'
                    }
                } else {
                    if (select == 0) {
                        name += 'le'
                    } else if (select == 1) {
                        name += 'bu'
                    } else if (select == 2) {
                        name += 'op'
                    } else if (select == 3) {
                        name += 'n'
                    } else if (select == 4) {
                        name += 'm'
                    } else if (select == 5) {
                        name += 'f'
                    } else if (select == 6) {
                        name += 'fu'
                    } else if (select == 7) {
                        name += 'p'
                    } else if (select == 8) {
                        name += 'pe'
                    } else if (select == 9) {
                        name += 'pa'
                    } else if (select == 10) {
                        name += 'pey'
                    } else if (select == 11) {
                        name += 'py'
                    } else if (select == 12) {
                        name += 'hy'
                    } else if (select == 13) {
                        name += 'h'
                    } else if (select == 14) {
                        name += 'rkle'
                    } else if (select == 15) {
                        name += 'ne'
                    } else if (select == 16) {
                        name += 'mmer'
                    } else if (select == 17) {
                        name += 'an'
                    } else if (select == 18) {
                        name += 'ean'
                    } else if (select == 19) {
                        name += 'on'
                    } else if (select == 20) {
                        name += 'off'
                    } else if (select == 21) {
                        name += 'rub'
                    } else if (select == 22) {
                        name += 'gat'
                    }
                }
            }
            map_context.font = "18px Arial";
            map_context.fillStyle = 'yellow'
            map_context.strokeStyle = 'black'
            while (map_context.measureText(name).width > 80) {
                name = name.split('')
                name.splice(name.length - 1, 1)
                name = name.join('')
            }
            return name
        }
        move(){
            if (this.marked == 0) {
            this.body.move(this.canvas)
            for (let t = 0; t < this.particles.length; t++) {
                this.particles[t].x += this.body.xmom
                this.particles[t].y += this.body.ymom
                if (this.body.isPointInside(this.particles[t])) {
                    if((vec.isToward(this.body))){
                    this.particles[t].move()
                    }
                } else {
                    let vec = new Vector(this.particles[t], this.particles[t].xmom, this.particles[t].ymom)
                    if(!(vec.isToward(this.body))){
                        this.particles[t].xmom *= -1
                        this.particles[t].ymom *= -1
                    }
                    vec = new Vector(this.particles[t], this.particles[t].xmom, this.particles[t].ymom)
                    if((vec.isToward(this.body))){
                    this.particles[t].move()
                    }
                }
            }
        }
        }
        draw() {
            // if(this.body.x < -5000){
            //     this.body.xmom *=-1
            // }
            // if(this.body.y < -5000){
            //     this.body.ymom *=-1
            // }
            // if(this.body.x > 5000){
            //     this.body.xmom *=-1
            // }
            // if(this.body.y > 5000){
            //     this.body.ymom *=-1
            // }
            // if (this.body.doesPerimeterTouch(kessler.point)) {

            //     this.body.rupture = 1
            //     if (this.marked == 0) {
            //         // this.body.color = "transparent"
            //         this.marked = 1
            //         for (let t = 0; t < this.particles.length; t++) {
            //             kessler.magnetized.push(this.particles[t])
            //         }
            //     }
            //     this.body.draw()
            // } else {
                // if (this.marked == 0) {
                    // //console.log(this)


            this.needs = []
            let puddles = 0
            let ice = 0
            for (let t = 0; t < this.pen.enrichment.length; t++) {
                if (this.pen.enrichment[t].puddle == 1) {
                    puddles++
                }
                if (this.pen.enrichment[t].ice == 1) {
                    ice++
                }
            }
            if (((this.pen.body.width * this.pen.body.height)) / 2800 > (puddles)) {
                this.needs.push('More Puddles')
            }
            if (((this.pen.body.width * this.pen.body.height)) / 3800 > (ice)) {
                this.needs.push('More Ice')
            }
            if (((this.pen.body.width * this.pen.body.height) / this.pen.animals.length) < 4000 && this.pen.animals.length > 1) {
                this.needs.push('Overcrowded')
            }
            if (this.pen.animals.length < 2) {
                this.needs.push('Lonely')
            }



            this.body.x += Math.cos(this.body.angle)*3
            this.body.y += Math.sin(this.body.angle)*3



                    this.body.move(this.canvas)
                    this.body.draw()
                    for (let t = 0; t < this.particles.length; t++) {

                        this.particles[t].x += Math.cos(this.body.angle)*3
                        this.particles[t].y += Math.sin(this.body.angle)*3
                        this.particles[t].x += this.body.xmom
                        this.particles[t].y += this.body.ymom
                        if (this.body.isPointInside(this.particles[t])) {
                            this.particles[t].move()
                        } else {
                            this.particles[t].xmom *= -1
                            this.particles[t].ymom *= -1
                            this.particles[t].move()
                        }

                    }
                    for (let t = 0; t < this.particles.length; t++) {
                        let link = new TileLineOP(this.particles[t], this.body, this.particles[t].color, 1)
                        link.draw()
                    }
                    for (let t = 0; t < this.particles.length; t++) {
                        this.particles[t].draw()
                    }
                // } else {
                //     // this.body.rupture = 1
                //     this.body.draw()
                //     for (let t = 0; t < this.particles.length; t++) {
                //         //     this.particles[t].frictiveMove()
                //         // this.particles[t].draw()
                //     }

                // }
            // }
        }
    }


    class Walpraw {
        constructor(x, y, colors, pen) {
            this.cost = 25000
            this.variety = 10
            this.name = this.nameGenerator()
            this.needs = []
            this.colors = colors
            this.radius = 3
            this.body = new TileCircle(x, y, 5, this.colors[0])
            this.body.angle = 0
            this.clip = 0
            this.slip = .1
            this.spin = 0
            this.crab = 1
            this.scale = .5
            this.age = 0
            this.pen = pen
        }

        nameGenerator() {
            let name = ''
            let random = Math.floor(Math.random() * 4) + 1
            for (let t = 0; t < random; t++) {
                let select = Math.floor(Math.random() * 23)
                if (t == 0) {
                    if (select == 0) {
                        name += 'Sni'
                    } else if (select == 1) {
                        name += 'Per'
                    } else if (select == 2) {
                        name += 'Cra'
                    } else if (select == 3) {
                        name += 'Ba'
                    } else if (select == 4) {
                        name += 'Buk'
                    } else if (select == 5) {
                        name += 'Buc'
                    } else if (select == 6) {
                        name += 'Pin'
                    } else if (select == 7) {
                        name += 'Gra'
                    } else if (select == 8) {
                        name += 'Cla'
                    } else if (select == 9) {
                        name += 'She'
                    } else if (select == 10) {
                        name += 'Car'
                    } else if (select == 11) {
                        name += 'Sea'
                    } else if (select == 12) {
                        name += 'Sal'
                    } else if (select == 13) {
                        name += 'Dec'
                    } else if (select == 14) {
                        name += 'Pod'
                    } else if (select == 15) {
                        name += 'Tra'
                    } else if (select == 16) {
                        name += 'Gre'
                    } else if (select == 17) {
                        name += 'Snib'
                    } else if (select == 18) {
                        name += 'Bins'
                    } else if (select == 19) {
                        name += 'Bin'
                    } else if (select == 20) {
                        name += 'Crab'
                    } else if (select == 21) {
                        name += 'Barc'
                    } else if (select == 22) {
                        name += 'Arb'
                    }
                } else {
                    if (select == 0) {
                        name += 'ab'
                    } else if (select == 1) {
                        name += 'nch'
                    } else if (select == 2) {
                        name += 'ket'
                    } else if (select == 3) {
                        name += 'ch'
                    } else if (select == 4) {
                        name += 'b'
                    } else if (select == 5) {
                        name += 'w'
                    } else if (select == 6) {
                        name += 'll'
                    } else if (select == 7) {
                        name += 'bs'
                    } else if (select == 8) {
                        name += 'bed'
                    } else if (select == 9) {
                        name += 't'
                    } else if (select == 10) {
                        name += 'a'
                    } else if (select == 11) {
                        name += 'apo'
                    } else if (select == 12) {
                        name += 'apode'
                    } else if (select == 13) {
                        name += 'ell'
                    } else if (select == 14) {
                        name += 'hea'
                    } else if (select == 15) {
                        name += 'stacea'
                    } else if (select == 16) {
                        name += 'sta'
                    } else if (select == 17) {
                        name += 'st'
                    } else if (select == 18) {
                        name += 'cru'
                    } else if (select == 19) {
                        name += 'cap'
                    } else if (select == 20) {
                        name += 'pac'
                    } else if (select == 21) {
                        name += 'pak'
                    } else if (select == 22) {
                        name += 'kap'
                    }
                }
            }
            map_context.font = "18px Arial";
            map_context.fillStyle = 'yellow'
            map_context.strokeStyle = 'black'
            while (map_context.measureText(name).width > 80) {
                name = name.split('')
                name.splice(name.length - 1, 1)
                name = name.join('')
            }
            return name
        }
        jumpspin() {
            if (Math.random() < .2) {
                this.spin = -Math.random() * 2
            }
            if (Math.random() < .2) {
                this.spin = Math.random() * 2
            }
            this.body.angle += (Math.random() - .5)*3
        }
        draw() {

            this.needs = []
            let puddles = 0
            for (let t = 0; t < this.pen.enrichment.length; t++) {
                if (this.pen.enrichment[t].puddle == 1) {
                    puddles++
                }
            }
            if (((this.pen.body.width * this.pen.body.height)) / 8000 > (puddles)) {
                this.needs.push('More Puddles')
            }
            if (((this.pen.body.width * this.pen.body.height) / this.pen.animals.length) < 4000 && this.pen.animals.length > 1) {
                this.needs.push('Overcrowded')
            }
            if (this.pen.animals.length < 2) {
                this.needs.push('Lonely')
            }
            this.age++
            this.scale = .5 + Math.min(this.age / 1000, .5)
            this.body.radius = this.radius * this.scale
            this.body.draw()
            this.clip += this.slip
            if(this.clip > Math.PI*.5){
                this.slip *= -1
            }
            if(this.clip < 0){
                this.slip *= -1
            }
            if (Math.abs(this.clip) > (Math.PI + this.clip)) {
                this.slip *= -1
            }
            if (Math.random() < .13) {
                if (Math.random() < .2) {
                    this.spin = -Math.random() * .2
                }
                if (Math.random() < .2) {
                    this.spin = Math.random() * .2
                }
                if (Math.random() < .8) {
                    this.spin = 0
                }
            }
            this.body.angle += this.spin
            this.body.x += Math.cos(this.body.angle)*.4
            this.body.y += Math.sin(this.body.angle)*.4
            this.claws = []
            this.angle = this.body.angle
            for (let t = 0; t < 5; t++) {
                let point = new Point(this.body.x + ((this.body.radius * 5.75) * Math.cos(this.angle)), (this.body.y + ((this.body.radius * 5.75) * Math.sin(this.angle))))
                this.angle += Math.PI / 2.5
                this.claws.push(point)
            }
            this.angle += this.body.angle + Math.PI/10

            for (let t = 0; t < 5; t++) {
                let point = new Point(this.body.x + ((this.body.radius * 3.75) * Math.cos(this.angle)), (this.body.y + ((this.body.radius * 3.75) * Math.sin(this.angle))))
                this.angle += Math.PI / 2.5
                this.claws.push(point)
            }
            this.angle += this.body.angle + Math.PI/10

            for (let t = 0; t < 5; t++) {
                let point = new Point(this.body.x + ((this.body.radius * 2.75) * Math.cos(this.angle)), (this.body.y + ((this.body.radius * 2.75) * Math.sin(this.angle))))
                this.angle += Math.PI / 2.5
                this.claws.push(point)
            }
            for (let t = 0; t < this.claws.length; t++) {
                let link = new TileLineOP(this.claws[t], this.body, this.colors[1], 3)
                link.draw()
            }
            for (let t = 0; t < this.claws.length; t++) {

                let link = new TileLineOP(this.claws[t], this.body, this.colors[1], 2)
                let point2 = new Point(this.claws[t].x + ((this.body.radius * 3.75) * Math.cos(this.clip + link.angle())), (this.claws[t].y + ((this.body.radius * 3.75) * Math.sin(this.clip + link.angle()))))
                let point3 = new Point(this.claws[t].x + ((this.body.radius * 3.75) * Math.cos(-this.clip + link.angle())), (this.claws[t].y + ((this.body.radius * 3.75) * Math.sin(-this.clip + link.angle()))))
                let link3 = new TileLineOP(this.claws[t], point2, this.colors[2], 2)
                let link2 = new TileLineOP(this.claws[t], point3, this.colors[3], 2)
                link3.draw()
                link2.draw()


                let point22 = new Point(point2.x+ ((this.body.radius * 2.75) * Math.cos(this.clip + link.angle())), (point2.y + ((this.body.radius * 2.75) * Math.sin(this.clip + link.angle()))))
                let point32 = new Point(point2.x + ((this.body.radius * 2.75) * Math.cos(-this.clip + link.angle())), (point2.y + ((this.body.radius * 2.75) * Math.sin(-this.clip + link.angle()))))
                let link32 = new TileLineOP(point2, point22, this.colors[2], 1)
                let link22 = new TileLineOP(point2, point32, this.colors[3], 1)
                let point23 = new Point(point3.x+ ((this.body.radius * 2.75) * Math.cos(this.clip + link.angle())), (point3.y + ((this.body.radius * 2.75) * Math.sin(this.clip + link.angle()))))
                let point33 = new Point(point3.x + ((this.body.radius * 2.75) * Math.cos(-this.clip + link.angle())), (point3.y + ((this.body.radius * 2.75) * Math.sin(-this.clip + link.angle()))))
                let link33 = new TileLineOP(point3, point23, this.colors[2], 1)
                let link23 = new TileLineOP(point3, point33, this.colors[3], 1)

                link32.draw()
                link22.draw()
                link33.draw()
                link23.draw()
            }
            // ////console.log(this)

        }
    }

    let firesprite = new Image()
    firesprite.src = 'livingfiresheet.png'
    class Firekin {
        constructor(x, y, colors, pen) {
            this.cost = 600
            this.variety = 3
            this.name = this.nameGenerator()
            this.needs = []
            this.colors = colors
            this.body = new TileCircle(x, y, 6, this.colors[0])
            this.sparks = []
            this.decay = .94
            this.angle = Math.random() * Math.PI * 2
            this.crab = 1
            this.firekin = 1
            this.step = Math.floor(Math.random() * 484)
            this.radius = 6
            this.age = 0
            this.pen = pen
            this.scale = .5
        }

        nameGenerator() {
            let name = ''
            let random = Math.floor(Math.random() * 4) + 1
            for (let t = 0; t < random; t++) {
                let select = Math.floor(Math.random() * 23)
                if (t == 0) {
                    if (select == 0) {
                        name += 'Spa'
                    } else if (select == 1) {
                        name += 'Cra'
                    } else if (select == 2) {
                        name += 'Sna'
                    } else if (select == 3) {
                        name += 'Po'
                    } else if (select == 4) {
                        name += 'Gra'
                    } else if (select == 5) {
                        name += 'Aro'
                    } else if (select == 6) {
                        name += 'Fi'
                    } else if (select == 7) {
                        name += 'Re'
                    } else if (select == 8) {
                        name += 'Ho'
                    } else if (select == 9) {
                        name += 'To'
                    } else if (select == 10) {
                        name += 'Toa'
                    } else if (select == 11) {
                        name += 'Ha'
                    } else if (select == 12) {
                        name += 'He'
                    } else if (select == 13) {
                        name += 'Bu'
                    } else if (select == 14) {
                        name += 'Buru'
                    } else if (select == 15) {
                        name += 'Sin'
                    } else if (select == 16) {
                        name += 'Sco'
                    } else if (select == 17) {
                        name += 'Cha'
                    } else if (select == 18) {
                        name += 'Des'
                    } else if (select == 19) {
                        name += 'Cru'
                    } else if (select == 20) {
                        name += 'Ash'
                    } else if (select == 21) {
                        name += 'Du'
                    } else if (select == 22) {
                        name += 'Em'
                    }
                } else {
                    if (select == 0) {
                        name += 'ber'
                    } else if (select == 1) {
                        name += 're'
                    } else if (select == 2) {
                        name += 'rch'
                    } else if (select == 3) {
                        name += 'fi'
                    } else if (select == 4) {
                        name += 'lig'
                    } else if (select == 5) {
                        name += 'ht'
                    } else if (select == 6) {
                        name += 'es'
                    } else if (select == 7) {
                        name += 'st'
                    } else if (select == 8) {
                        name += 'eat'
                    } else if (select == 9) {
                        name += 'urn'
                    } else if (select == 10) {
                        name += 'eak'
                    } else if (select == 11) {
                        name += 'ck'
                    } else if (select == 12) {
                        name += 'eak'
                    } else if (select == 13) {
                        name += 'rk'
                    } else if (select == 14) {
                        name += 'uk'
                    } else if (select == 15) {
                        name += 'gor'
                    } else if (select == 16) {
                        name += 'oro'
                    } else if (select == 17) {
                        name += 'ego'
                    } else if (select == 18) {
                        name += 'fu'
                    } else if (select == 19) {
                        name += 'fir'
                    } else if (select == 20) {
                        name += 'ot'
                    } else if (select == 21) {
                        name += 'arm'
                    } else if (select == 22) {
                        name += 'se'
                    }
                }
            }
            map_context.font = "18px Arial";
            map_context.fillStyle = 'yellow'
            map_context.strokeStyle = 'black'
            while (map_context.measureText(name).width > 80) {
                name = name.split('')
                name.splice(name.length - 1, 1)
                name = name.join('')
            }
            return name
        }
        jumpspin() {
            this.angle = Math.random() * Math.PI * 2
        }
        draw() {

            this.needs = []
            let stones = 0
            let puddles = 0
            for (let t = 0; t < this.pen.enrichment.length; t++) {
                if (this.pen.enrichment[t].stone == 1) {
                    stones++
                }
                if (this.pen.enrichment[t].puddle == 1) {
                    puddles++
                }
            }
            if (((this.pen.body.width * this.pen.body.height)) / 4000 > (stones)) {
                this.needs.push('More Stones')
            }
            if (((this.pen.body.width * this.pen.body.height)) / 14000 < (puddles)) {
                this.needs.push('Less Puddles')
            }
            if (((this.pen.body.width * this.pen.body.height) / this.pen.animals.length) < 4000 && this.pen.animals.length > 1) {
                this.needs.push('Overcrowded')
            }
            if (this.pen.animals.length < 2) {
                this.needs.push('Lonely')
            }
            this.age += 1
            this.scale = .5 + Math.min(this.age / 3000, .5)
            this.body.radius = this.radius * this.scale
            if (Math.random() < .01) {
                this.jumpspin()
            }
            this.body.x += Math.cos(this.angle) * 2
            this.body.y += Math.sin(this.angle) * 2
            // for(let t = 0;t<.1+(Math.random()*1);t++){
            //     this.sparks.push(new TileCircle(this.body.x, this.body.y, 2.1, this.colors[Math.floor(Math.random()*this.colors.length)], 2.8*(Math.random()-.5), -1.8,.95))
            // }
            // // ////console.log(this)
            // for(let t = 0;t<this.sparks.length;t++){
            //     if(this.sparks[t].radius < .1){
            //         this.sparks.splice(t,1)
            //     }
            // }
            // this.body.draw()
            this.step += Math.floor(Math.random() * 5)
            map_context.drawImage(firesprite, (firesprite.width / 484) * (this.step % 484), 0, (firesprite.width / 484), firesprite.height, this.body.x - this.body.radius * 3, this.body.y - this.body.radius * 8, this.body.radius * 6, this.body.radius * 8)
            // for(let t = 0;t<this.sparks.length;t++){
            //     this.sparks[t].frictiveMove()
            //     this.sparks[t].xmom += (this.body.x-this.sparks[t].x)/(100+(Math.random()*30))
            //     // this.sparks[t].ymom += -.01
            //     this.sparks[t].draw()
            //     this.sparks[t].radius*= this.decay
            //     // this.sparks[t].x += Math.cos(this.angle)*1.99
            //     // this.sparks[t].y += Math.sin(this.angle)*1.99
            // }
        }
    }

    let typex = 0

    class Road {
        constructor(rectangle) {
            this.body = new Tile(Math.max(rectangle.x, rectangle.x - Math.abs(rectangle.width * 2)), Math.max(rectangle.y, rectangle.y - Math.abs(rectangle.height * 2)), Math.abs(rectangle.width), Math.abs(rectangle.height), "#909090")
            this.bodyTile = new Tile(Math.max(rectangle.x, rectangle.x - Math.abs(rectangle.width * 2)), Math.max(rectangle.y, rectangle.y - Math.abs(rectangle.height * 2)), Math.abs(rectangle.width), Math.abs(rectangle.height), "#909090")
            if (rectangle.width < 0) {
                this.body.x += rectangle.width
                this.bodyTile.x += rectangle.width
            }
            if (rectangle.height < 0) {
                this.body.y += rectangle.height
                this.bodyTile.y += rectangle.height
            }
            this.bodyTile.x += 1
            this.bodyTile.y += 1
            this.bodyTile.width -= 2
            this.bodyTile.height -= 2
        }
        draw() {
            this.body.draw()
        }
    }




    class Pen {
        constructor(rectangle) {
            //////console.log(rectangle)
            this.enrichment = []
            this.body = new ContTile(Math.max(rectangle.x, rectangle.x - Math.abs(rectangle.width * 2)), Math.max(rectangle.y, rectangle.y - Math.abs(rectangle.height * 2)), Math.abs(rectangle.width), Math.abs(rectangle.height), "black")
            if (rectangle.width < 0) {
                this.body.x += rectangle.width
            }
            if (rectangle.height < 0) {
                this.body.y += rectangle.height
            }

            this.canvas = document.createElement('canvas');
            this.context = this.canvas.getContext('2d');
            this.canvas.width = this.body.width;
            this.canvas.height = this.body.height;
            this.body.draw(this.context)
            this.pen = new Tile(this.body.x + 20, this.body.y + 20, this.body.width - 40, this.body.height - 40, "red")
            this.penz = new Tile(this.body.x + 28, this.body.y + 28, this.body.width - 56, this.body.height - 56, "red")
            this.pen2 = new Tile(this.body.x + 10, this.body.y + 10, this.body.width - 20, this.body.height - 20, "red")
            this.penRoad = new Tile(this.body.x + 2, this.body.y + 2, this.body.width - 4, this.body.height - 4, "red")
            this.center = new Point(this.body.x + (this.body.width * .5), this.body.y + (this.body.height * .5))
            this.walls = []
            let wall1 = new Tile(rectangle.x - 0, rectangle.y, 2, rectangle.height, "cyan")
            let wall2 = new Tile(rectangle.x, rectangle.y - 0, rectangle.width, 2, "cyan")
            let wall3 = new Tile(rectangle.x + rectangle.width - 0, rectangle.y, 2, rectangle.height, "cyan")
            let wall4 = new Tile(rectangle.x, rectangle.y + rectangle.height - 0, rectangle.width, 2, "cyan")
            this.walls = [wall1, wall2, wall3, wall4]
            this.selected = 0
            this.selector = new Tile(Math.min(rectangle.x, rectangle.x + rectangle.width), Math.min(rectangle.y, rectangle.y + rectangle.height), 12, 12, "blue")
            if (typex % 6 == 0) {
                this.animals = [new GardenPomaoranian(rectangle.x + (rectangle.width * .5), rectangle.y + (rectangle.height * .5), this)]
            } else if (typex % 6 == 1) {
                this.animals = [new Crab(rectangle.x + (rectangle.width * .5), rectangle.y + (rectangle.height * .5), [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()], this)]
            } else if (typex % 6 == 2) {
                this.animals = [new Firekin(rectangle.x + (rectangle.width * .5), rectangle.y + (rectangle.height * .5), ["red", "orange", "white", "yellow"], this)]
            } else if (typex % 6 == 3) {
                this.animals = []
                this.animals.push(new Colob(this.center.x, this.center.y, [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()], this))
            } else if (typex % 6 == 4) {
                this.animals = []
                this.animals.push(new Hopo(this.center.x, this.center.y, [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()], this))
            } else {
                this.animals = []
                this.animals.push(new Geko(this.center.x, this.center.y, [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()], this))
            }

            this.animals = []

            typex++
            //////console.log(this)


        }
        enrichdraw() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.body.draw(this.context)
            for (let t = 0; t < this.enrichment.length; t++) {
                this.enrichment[t].draw()
            }
        }
        clean(){
            if (this.selected == 1) {
                    while (this.animals.length > 0) {
                        sandmap.money += this.animals[this.animals.length - 1].cost
                        this.animals.splice(this.animals.length - 1, 1)
                    }
                    while (this.enrichment.length > 0) {
                        sandmap.money += this.enrichment[this.enrichment.length - 1].cost
                        this.enrichment.splice(this.enrichment.length - 1, 1)
                    }
                }
                this.enrichdraw()
        }
        draw() {

            for (let t = 0; t < this.animals.length; t++) {
                if (this.animals[t].marked == 1) {
                    this.animals.splice(t, 1)
                }
            }
            if (this.selected == 1) {
                if (sandmap.window.UI.sellanimal == 1) {
                    if (this.animals.length > 0) {
                        sandmap.money += this.animals[this.animals.length - 1].cost
                        this.animals.splice(this.animals.length - 1, 1)
                    }
                    sandmap.window.UI.sellanimal = 0
                }
                if (sandmap.window.UI.sellenrichment == 1) {
                    if (this.enrichment.length > 0) {
                        sandmap.money += this.enrichment[this.enrichment.length - 1].cost
                        this.enrichment.splice(this.enrichment.length - 1, 1)
                        this.enrichdraw()
                    }
                    sandmap.window.UI.sellenrichment = 0
                }
            }
            // this.body.draw()
            map_context.drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height, this.body.x, this.body.y, this.body.width, this.body.height)
            // this.selector.draw()
            for (let t = 0; t < this.walls.length; t++) {
                if (this.selected == 1) {
                    this.walls[t].color = "yellow"
                } else {
                    this.walls[t].color = "cyan"
                }
                this.walls[t].draw()
            }
            for (let t = 0; t < this.animals.length; t++) {

                if (this.animals[t].geko !== 1) {

                    if (this.animals[t].scuttle !== 1 && this.animals[t].hexagoon !== 1) {
                        this.animals[t].draw()
                        // //console.log("p")
                        let j = 0
                        while (!this.pen.isPointInside(this.animals[t].body) || (this.animals[t].crab == 1 && !this.penz.isPointInside(this.animals[t].body))) {
                            j++
                            if (j > 100) {
                                break
                            }

                            if (this.animals[t].bubble == 1) {
                                for(let k = 0;k<this.animals[t].particles.length;k++){
                                    this.animals[t].particles[k].x += ((this.center.x - this.animals[t].body.x) / Math.max(this.body.width * this.body.width, 1)) * 500
                                    this.animals[t].particles[k].y += ((this.center.y - this.animals[t].body.y) / Math.max(this.body.height * this.body.height, 1)) * 500
                                 
                                }   
                            }
                            this.animals[t].body.x += ((this.center.x - this.animals[t].body.x) / Math.max(this.body.width * this.body.width, 1)) * 500
                            this.animals[t].body.y += ((this.center.y - this.animals[t].body.y) / Math.max(this.body.height * this.body.height, 1)) * 500
                            if (this.animals[t].crab == 1) {
                                this.animals[t].jumpspin()
                            }
                        }
                    } else {
                        this.animals[t].draw()
                        let j = 0
                        // //console.log("d")
                        while (!this.pen.isPointInside(this.animals[t].body.body)  || (this.animals[t].hexagoon == 1 && !this.penz.isPointInside(this.animals[t].body.body))) {
                            j++
                            if (j > 100) {
                                break
                            }
                            this.animals[t].body.body.x += ((this.center.x - this.animals[t].body.body.x) / Math.max(this.body.width * this.body.width, 1)) * 500
                            this.animals[t].body.body.y += ((this.center.y - this.animals[t].body.body.y) / Math.max(this.body.height * this.body.height, 1)) * 500
                            if (this.animals[t].crab == 1) {
                                this.animals[t].jumpspin()
                            }
                        }

                    }

                } else {
                    this.animals[t].calc()

                    for (let k = 0; k < this.animals[t].tail.length; k++) {
                        while (!this.pen2.isPointInside(this.animals[t].tail[k])) {

                            // let linker = new LineOP(this.center, this.animals[t].tail[k])
                            this.animals[t].tail[k].x += (((this.center.x - this.animals[t].tail[k].x)) / (this.body.width * this.body.width * .5)) * 50
                            this.animals[t].tail[k].y += (((this.center.y - this.animals[t].tail[k].y)) / (this.body.height * this.body.height * .5)) * 50
                            if (k > 0 && this.animals[t].hopo != 1) {
                                if (Math.abs((this.animals[t].tail[k].angle - this.animals[t].tail[k - 1].angle)) < (Math.PI / 3)) {
                                    if ((this.animals[t].tail[k].angle - this.animals[t].tail[k - 1].angle) > 0) {
                                        this.animals[t].tail[k].angle *= 1.0001
                                        // this.animals[t].tail[k-1].angle/=1.001
                                    } else {
                                        this.animals[t].tail[k - 1].angle /= 1.0001
                                        // this.animals[t].tail[k-1].angle*=1.001
                                    }
                                }



                                //     for(let g = k-1;g>0;g--){
                                //         this.animals[t].tail[g].angle = this.animals[t].tail[k].angle-.01
                                //     }
                            }
                        }

                        for (let f = 0; f < this.animals[t].tail[k].legs.length; f++) {
                            while (!this.pen2.isPointInside(this.animals[t].tail[k].legs[f])) {
                                // let linker = new LineOP(this.center, this.animals[t].tail[k].legs[f])
                                this.animals[t].tail[k].legs[f].x += ((this.center.x - this.animals[t].tail[k].legs[f].x)) / (this.body.width * this.body.width * .5)
                                this.animals[t].tail[k].legs[f].y += ((this.center.y - this.animals[t].tail[k].legs[f].y)) / (this.body.height * this.body.height * .5)
                                this.animals[t].tail[k].legs[f].target.x += ((this.center.x - this.animals[t].tail[k].legs[f].x)) / (this.body.width * this.body.width * .5)
                                this.animals[t].tail[k].legs[f].target.y += ((this.center.y - this.animals[t].tail[k].legs[f].y)) / (this.body.height * this.body.height * .5)
                            }
                            while (!this.pen2.isPointInside(this.animals[t].tail[k].legs[f].elbow)) {
                                // let linker = new LineOP(this.center, this.animals[t].tail[k].legs[f].elbow)
                                this.animals[t].tail[k].legs[f].elbow.x += ((this.center.x - this.animals[t].tail[k].legs[f].elbow.x)) / (this.body.width * this.body.width * .5)
                                this.animals[t].tail[k].legs[f].elbow.y += ((this.center.y - this.animals[t].tail[k].legs[f].elbow.y)) / (this.body.height * this.body.height * .5)
                            }
                        }
                    }
                    while (!this.pen2.isPointInside(this.animals[t].body)) {
                        let linker = new LineOP(this.center, this.animals[t].body)

                        this.animals[t].body.x += ((this.center.x - this.animals[t].body.x)) / (this.body.width * this.body.width * .5)
                        this.animals[t].body.y += ((this.center.y - this.animals[t].body.y)) / (this.body.height * this.body.height * .5)
                        if(this.animals[t].hopo != 1) {
                        this.animals[t].jumpspin()
                        }
                    }

                    this.animals[t].draw()
                    // //console.log("q")
                }
            }


            // this.pen.draw()
            if (this.selected == 1) {

                // if (keysPressed['a']) {
                //     if(this.animals.length < 20){
                //         if (typex%6 ==0) {
                //             this.animals.push(new GardenPomaoranian(this.center.x, this.center.y, this))
                //         } else if (typex%6 ==1) {
                //             this.animals.push(new Crab(this.center.x, this.center.y,  [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()], this))
                //         } else if (typex%6 ==2) {
                //             this.animals.push(new Firekin(this.center.x, this.center.y,  ["red", "orange", "white", "yellow"], this))
                //         }  else if (typex%6 ==3) {
                //             // this.animals = []
                //             this.animals.push(new Colob(this.center.x, this.center.y, [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()], this))
                //         } else if (typex%6 ==4) {
                //             // this.animals = []
                //             this.animals.push(new Hopo(this.center.x, this.center.y, [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()], this))
                //         } else {
                //             // this.animals = []
                //             this.animals.push(new Geko(this.center.x, this.center.y, [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()], this))
                //         }
                //     }
                //     typex++
                // }




                if (sandmap.window.UI.beDrawn == -1) {

                    sandmap.window.UI.sellanimalButton.draw()
                    sandmap.window.UI.sellenrichmentButton.draw()

                    canvas_context.fillStyle = "Black"
                    canvas_context.font = "20px arial"
                    canvas_context.fillText("Sell Animal", sandmap.window.UI.sellanimalButton.x + 6, sandmap.window.UI.sellanimalButton.y + 21)
                    canvas_context.fillStyle = "Black"
                    canvas_context.font = "20px arial"
                    canvas_context.fillText("Sell Enrichment",  sandmap.window.UI.sellenrichmentButton.x + 6,  sandmap.window.UI.sellenrichmentButton.y + 21)


                    canvas_context.fillStyle = "white"
                    canvas_context.strokeStyle = "black"
                    canvas_context.lineWidth = 1.5
                    canvas_context.font = "16px arial"
                    canvas_context.strokeText("Animals: " + this.animals.length, sandmap.window.minibody.x, 18)
                    canvas_context.fillText("Animals: " + this.animals.length, sandmap.window.minibody.x, 18)
                    for (let t = 0; t < this.animals.length; t++) {

                        // canvas_context.fillStyle = "white"
                        // canvas_context.strokeStyle = "black"
                        // canvas_context.lineWidth = 1.5
                        // canvas_context.font = "10px arial"
                        canvas_context.font = `${10 / Math.max((this.animals.length / 10), 1)}px arial`
                        canvas_context.strokeText(this.animals[t].name + ' Needs:' + this.animals[t].needs.join(', '), sandmap.window.minibody.x, 50 + (t * 14 / Math.max((this.animals.length / 10), 1)))
                        canvas_context.fillText(this.animals[t].name + ' Needs:' + this.animals[t].needs.join(', '), sandmap.window.minibody.x, 50 + (t * 14 / Math.max((this.animals.length / 10), 1)))
                    }
                }

            }

        }
    }

    class Textinput {
        constructor(x, y, w, h) {
            this.inputbox = new Rectangle(x, y, w, h, "red")
            this.string = ""
            this.focus = 0
            this.neverfocus = 1
            this.lock = ''
            this.focusindicator = new Rectangle(x, y + (h * .1), w * .03, h * .8, "#000000")
            this.flash = -1
            this.flashspin = 45
            this.flashnum = -1
            this.rooms = "green"
            this.primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 31, 37, 41, 43, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157]
        }

        measure() {
            canvas_context.font = "20px Arial";
            canvas_context.fillStyle = "#000000"
            let width = canvas_context.measureText(this.string).width
            return width
        }
        draw() {
            this.inputbox.draw()
            if (this.neverfocus == 1) {
                canvas_context.font = "20px Arial"
                canvas_context.fillStyle = "#000000"
                canvas_context.fillText("world color", this.inputbox.x + 10, this.inputbox.y + 22)
            } else {
                canvas_context.font = "20px Arial"
                canvas_context.fillStyle = "#000000"
                canvas_context.fillText(this.string, this.inputbox.x + 10, this.inputbox.y + 22)
            }
            if (this.focus == 1) {
                this.neverfocus = 0
                this.flashnum++
                if (this.flashnum % (this.flashspin + (-15 * this.flash)) == 0) {
                    this.flash *= -1
                }
                if (this.flash == 1) {
                    this.focusindicator.x = (this.measure(this.string) + this.inputbox.x + 10)
                    this.focusindicator.draw()
                }
            }
        }
        backspace() {
            this.string = this.string.split('')
            this.string.splice(this.string.length - 1, 1)
            this.string = this.string.join('')
            this.rooms =this.string

        }
        addchar(char) {
            // if (this.string.length < 3) {
                // if (this.lock != char) {
                    this.string += char
                    this.lock = char
                // }else{
                //     this.lock = "ds"
                // }
                // if (this.string.length == 0 || this.string == "0") {
                //     this.string = "1"
                // }
                this.rooms =this.string// (0.5 * (room + MapSelect) * (room + MapSelect + 1)) + MapSelect

            // }
        }
    }

    class UI {
        constructor() {
            this.sellenrichment = 0
            this.sellanimal = 0
            this.deletetoggle = -1
            this.colorbox = new Textinput(1110, 270, 120, 30)
            this.roading = 0
            this.penning = 0
            this.shopping = 0
            this.body = new Rectangle(920, 20, 340, 305, "yellow")
            this.deleteButton = new Rectangle(this.body.x + 20, 270, 160, 30, "cyan")
            this.sellanimalButton = new Rectangle(1110, 230, 120, 30, "blue")
            this.sellenrichmentButton = new Rectangle(this.body.x + 20, 230, 160, 30, "purple")
            this.roadButton = new Rectangle(this.body.x + 20, this.body.y + 285, 90, 20, "red")
            this.penButton = new Rectangle(this.body.x + 120, this.body.y + 285, 90, 20, "#00FF00")
            this.shopButton = new Rectangle(this.body.x + 220, this.body.y + 285, 90, 20, "#00FF00")
            this.scroll = 0
            this.toggle = new Rectangle(this.body.x + 230, 10, 110, 20, "#00FF00")
            this.toggle2 = new Rectangle(this.body.x + 110, 10, 110, 20, "#00FF00")
            this.buttons = []
            this.buttons2 = []
            this.beDrawn = -1
            for (let t = 0; t < 100; t++) {
                let button = new Rectangle(0, 0, this.body.width - 20, 16, "black")
                if (t == 0) {
                    button.text = `Buy Pomaoranian: 250`
                } else if (t == 1) {
                    button.text = `Buy Crab: 400`
                } else if (t == 2) {
                    button.text = `Buy Firekin: 600`
                } else if (t == 3) {
                    button.text = `Buy Crumberer: 800`
                } else if (t == 4) {
                    button.text = `Buy Ursombo: 1250`
                } else if (t == 5) {
                    button.text = `Buy Centimander: 1800`
                } else if (t == 6) {
                    button.text = `Buy Runnybabbit: 2500`
                } else if (t == 7) {
                    button.text = `Buy Lightpion: 3000`
                } else if (t == 8) {
                    button.text = `Buy Knocktapus: 4000`
                } else if (t == 9) {
                    button.text = `Buy Scuttlefish: 5000`
                } else if (t == 10) {
                    button.text = `Buy Hexagoon: 7500`
                } else if (t == 11) {
                    button.text = `Buy Antlered Scratchle: 10000`
                } else if (t == 12) {
                    button.text = `Buy Minigoy: 15000`
                } else if (t == 13) {
                    button.text = `Buy Walpraw: 25000`
                } else if (t == 14) {
                    button.text = `Buy Coyrail: 50000`
                } else if (t == 15) {
                    button.text = `Buy Nukster: 100000`
                } else {
                    button.text = `Pending`
                }
                this.buttons.push(button)
            }
            for (let t = 0; t < 100; t++) {
                let button = new Rectangle(0, 0, this.body.width - 20, 18, "black")
                if (t == 0) {
                    button.text = `Buy Grass: 50`
                } else if (t == 1) {
                    button.text = `Buy Stone: 100`
                } else if (t == 2) {
                    button.text = `Buy Puddle: 150`
                } else if (t == 3) {
                    button.text = `Buy Flower: 200`
                } else if (t == 4) {
                    button.text = `Buy Crystal: 300`
                } else if (t == 5) {
                    button.text = `Buy Ice: 500`
                    // }  else if (t ==6) {
                    //     button.text = `Buy Grass: 2500`
                    // }  else if (t ==7) {
                    //     button.text = `Buy Grass: 3000`
                } else {
                    button.text = `Pending`
                }
                this.buttons2.push(button)
            }
        }
        draw() {
            this.colorbox.draw()
            if (this.beDrawn == 1) {
                this.body.draw()
                for (let t = this.scroll; t < Math.min(this.scroll + 16, this.buttons.length); t++) {
                    this.buttons[t].y = this.body.y + 10 + (t * 18)
                    this.buttons[t].x = this.body.x + 10
                    this.buttons[t].draw()
                    canvas_context.fillStyle = "white"
                    canvas_context.font = "12px arial"
                    canvas_context.fillText(this.buttons[t].text, this.buttons[t].x + 6, this.buttons[t].y + 13)
                }
            } else if (this.beDrawn == 2) {
                this.body.draw()
                for (let t = this.scroll; t < Math.min(this.scroll + 6, this.buttons2.length); t++) {
                    this.buttons2[t].y = this.body.y + 10 + (t * 20)
                    this.buttons2[t].x = this.body.x + 10
                    this.buttons2[t].draw()
                    canvas_context.fillStyle = "white"
                    canvas_context.font = "12px arial"
                    canvas_context.fillText(this.buttons2[t].text, this.buttons2[t].x + 6, this.buttons2[t].y + 13)
                }
            } else {

                if (this.roading == 1) {
                    this.roadButton.color = "#00FF00"
                } else {
                    this.roadButton.color = "#FF0000"
                }
                if (this.penning == 1) {
                    this.penButton.color = "#00FF00"
                } else {
                    this.penButton.color = "#FF0000"
                }
                if (this.shopping == 1) {
                    this.shopButton.color = "#00FF00"
                } else {
                    this.shopButton.color = "#FF0000"
                }
                this.shopButton.draw()
                this.roadButton.draw()
                this.penButton.draw()
                if(this.deletetoggle == -1){
                    this.deleteButton.color = "cyan"
                }else{
                    this.deleteButton.color = "orange"
                }
                this.deleteButton.draw()
                canvas_context.fillStyle = "Black"
                canvas_context.font = "13px arial"
                canvas_context.fillText("Build Road - r", this.roadButton.x + 6, this.roadButton.y + 13)
                canvas_context.fillStyle = "Black"
                canvas_context.font = "13px arial"
                canvas_context.fillText("Build Pen - q", this.penButton.x + 6, this.penButton.y + 13)
                canvas_context.fillStyle = "Black"
                canvas_context.font = "13px arial"
                canvas_context.fillText("Build Shop - x", this.shopButton.x + 6, this.shopButton.y + 13)
                canvas_context.fillStyle = "Black"
                canvas_context.font = "20px arial"
                canvas_context.fillText("Delete/Sell", this.deleteButton.x + 6, this.deleteButton.y + 21)

            }

            this.toggle.draw()
            canvas_context.fillStyle = "Black"
            canvas_context.font = "13px arial"
            canvas_context.fillText("Buy Animals", this.toggle.x + 6, this.toggle.y + 13)
            this.toggle2.draw()
            canvas_context.fillStyle = "Black"
            canvas_context.font = "13px arial"
            canvas_context.fillText("Buy Enrichment", this.toggle2.x + 6, this.toggle2.y + 13)
        }
    }

    let sandmap = new Sandmap(map_canvas.width, map_canvas.height, 0, 0, []);



    let crct = new Tile(300, 300, 200, 100, "red")
    // let p1 = new Pen(crct)
    function main() {
        gamepadAPI.update()
        canvas_context.clearRect(0, 0, canvas.width, canvas.height)  // refreshes the image
        // box.draw()
        // for(let t = 0;t<nums.length;t++){
        //     nums[t].draw()
        // }
        sandmap.draw()
        selectrect.draw()
        // pomsphere3.draw()
        // pomsphere.draw()
        // pomsphere2.draw()
        if (keysPressed['r']) {
            sandmap.window.UI.roading = 1
            sandmap.window.UI.penning = 0
            sandmap.window.UI.shopping = 0
            sandmap.window.UI.breaking = 0
        }
        if (keysPressed['y'] ||  sandmap.window.UI.deletetoggle == 1) {
            sandmap.window.UI.breaking = 1
            sandmap.window.UI.roading = 0
            sandmap.window.UI.penning = 0
            sandmap.window.UI.shopping = 0
        }
       


        if (keysPressed['q']) {
            sandmap.window.UI.penning = 1
            sandmap.window.UI.roading = 0
            sandmap.window.UI.shopping = 0
            sandmap.window.UI.breaking = 0
        }
        if (keysPressed['x']) {
            sandmap.window.UI.shopping = 1
            sandmap.window.UI.penning = 0
            sandmap.window.UI.roading = 0
            sandmap.window.UI.breaking = 0
        }

        // if(sandmap.window.UI.penning == 1){
        //     sandmap.window.UI.roading = 0
        // }

        // if (keysPressed['-'] && recording == 0) {
        //     recording = 1
        //     video_recorder.record()
        // }
        // if (keysPressed['='] && recording == 1) {
        //     recording = 0
        //     video_recorder.stop()
        //     video_recorder.download('zues.webm')
        // }
        // if(Math.random()<.005){
        //     sandmap.roadseg()
        // }
    }


    function getDistance(nodeA, nodeB) {
        // return distancetable[`${nodeA.x},${nodeB.y},${nodeA.x},${nodeB.y}`]
        var distX = Math.abs(nodeA.x - nodeB.x);
        var distY = Math.abs(nodeA.y - nodeB.y);

        if (distX > distY) {
            return ((1.4 * distY) + ((distX - distY)))

        }
        return (1.4 * distX + ((distY - distX)));
    }

    function retracePath(startNode, endNode, agent = {}) {
        path = new Set();
        var currentNode = endNode;
        var reverseArray;
        let j = 0
        while (currentNode != startNode) {
            j++
            if (j > 129 * 129) {
                break
            }
            path.add(currentNode);
            //////////////////////////////////////////console.log(currentNode)
            currentNode = currentNode.parent;
            //////////////////////////////////////////console.log(currentNode)
            // currentNode.inPath = true;
            // if (currentNode != startNode)
            //     currentNode.drawPath();
        }
    }

    // let nums = [1579, 1597, 1759, 1795, 1975, 1957,  5179, 5197, 5791, 5719, 5917, 5971,  7519, 7591, 7951, 7915, 7195, 7159,  9157, 9175, 9715, 9751, 9517, 9571]
    // let primes = []
    // function lazyprimecheck(num){
    //     let x = 2
    //     while(x<num){
    //         if(num%x == 0){
    //             return false
    //         }
    //         x++
    //     }
    //     return true
    // }
    // for(let t = 0;t<nums.length;t++){
    //     if(lazyprimecheck(nums[t])){
    //         primes.push(nums[t])
    //     }
    // }
    // //////console.log(primes)




})


