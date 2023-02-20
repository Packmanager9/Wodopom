
    class Weapon {
        constructor(ship, type, crew = -1, gear = -1) {
            this.ship = ship
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
                    this.buy = 80
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
                    this.buy = 125
                    this.sell = 65
                    this.mind = 2
                } else if (this.type == 29) {
                    this.name1 = "Ship"
                    this.name2 = "Tether I"
                    this.max = 200
                    this.damage = 0
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
                    this.damage = 0
                    // this.bomb = 1
                    this.tether = 2
                    this.beam = 0
                    this.real = 1
                    this.crew = 0
                    // this.puncture = 1
                    this.fireChance = 0
                    this.double = 0
                    this.buy = 40
                    this.sell = 20
                    // this.mind = 2
                } else if (this.type == 31) {
                    this.name1 = "Ship"
                    this.name2 = "Tether III"
                    this.max = 280
                    this.damage = 0
                    this.tether = 3
                    this.beam = 0
                    this.real = 1
                    this.crew = 0
                    // this.puncture = 1
                    this.fireChance = 0
                    this.double = 0
                    this.buy = 50
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
                    this.fling = 1
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
                    this.name2 = "Shell 2"
                    this.max = 820
                    this.damage = 0
                    this.mirror = 1
                    this.shineMax = 350
                    this.fling = 1
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
            if (this.ship.weapons.includes(this)) {
                this.ship.weapons[this.ship.weapons.indexOf(this)] = new Weapon(this.ship, -1)
                let price = this.sell
                for (let t = 0; t < this.ship.guys.length; t++) {
                    price *= this.ship.guys[t].barter
                }
                price = Math.floor(price)
                this.ship.scrap += price
                this.ship.upgradeMenu.shopdraw = 0
            }
            if (this.ship.upgradeMenu.wepsto.includes(this)) {
                this.ship.upgradeMenu.wepsto[this.ship.upgradeMenu.wepsto.indexOf(this)] = new Weapon(this.ship, -1)
                let price = this.sell
                for (let t = 0; t < this.ship.guys.length; t++) {
                    price *= this.ship.guys[t].barter
                }
                price = Math.floor(price)
                this.ship.scrap += price
                this.ship.upgradeMenu.shopdraw = 0
            }
        }
        bought() {
            // if(shop.weapons.includes(this)){
            //     shop.weapons[shop.weapons.indexOf(this)] = new Weapon(this.type, this.crewType)
            //     this.ship.scrap -= this.buy
            // }
            let f = 0
            let index = -1
            for (let t = 0; t < this.ship.weapons.length; t++) {
                if (this.ship.weapons[t].type == -1) {
                    index = t
                    f = 1
                    break
                }
            }
            if (stars.stars[this.ship.star].weapons[stars.stars[this.ship.star].weapons.indexOf(this)].gearType > -1) {
                f = 0
            }
            if (f == 0) {
                for (let t = 0; t < this.ship.upgradeMenu.wepsto.length; t++) {
                    if (this.ship.upgradeMenu.wepsto[t].type == -1) {
                        index = t
                        f = 2
                        break
                    }
                }
                if (f == 2) {
                    let price = this.buy
                    for (let t = 0; t < this.ship.guys.length; t++) {
                        price /= this.ship.guys[t].barter
                    }
                    price = Math.floor(price)
                    if (this.ship.scrap >= price) {
                        if (stars.stars[this.ship.star].weapons.includes(this)) {
                            this.ship.upgradeMenu.wepsto[index] = new Weapon(this.ship, this.type, this.crewType, this.gearType)
                            stars.stars[this.ship.star].weapons[stars.stars[this.ship.star].weapons.indexOf(this)] = new Weapon(this.ship, -1, -1, -1)

                            this.ship.scrap -= price
                            this.ship.upgradeMenu.shopdraw = 0
                        }
                    }
                }

            } else {
                let price = this.buy
                for (let t = 0; t < this.ship.guys.length; t++) {
                    price /= this.ship.guys[t].barter
                }
                price = Math.floor(price)
                if (stars.stars[this.ship.star].weapons.includes(this)) {
                    if (this.ship.scrap >= price) {
                        this.ship.weapons[index] = new Weapon(this.ship, this.type, this.crewType)
                        stars.stars[this.ship.star].weapons[stars.stars[this.ship.star].weapons.indexOf(this)] = new Weapon(this.ship, -1)

                        this.ship.scrap -= price
                        this.ship.upgradeMenu.shopdraw = 0
                    }
                }
            }
        }
        shrink(t) {
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

            if (this.ship.weapons.includes(this)) {
                if (enemy.shield.rings.length > 0) {
                    if (this.bullets[t].doesPerimeterTouch(enemy.shield.rings[enemy.shield.rings.length - 1])) {
                        this.bullets[t].life -= 150
                        // this.bullets[t].x = -1000
                        // this.bullets[t].y = -1000
                        // enemy.shield.state -= 1
                        enemy.shield.charge = 0
                        enemy.shield.rings.splice(enemy.shield.rings.length - this.double, this.double)
                        if (enemy.shield.state < 0) {
                            enemy.shield.state = 0
                        }
                    }
                }
            } else {
                if (this.ship.shield.rings.length > 0) {
                    if (this.bullets[t].doesPerimeterTouch(this.ship.shield.rings[this.ship.shield.rings.length - 1])) {
                        this.bullets[t].life -= 150
                        // this.bullets[t].x = -1000
                        // this.bullets[t].y = -1000
                        // this.ship.shield.state -= 1
                        this.ship.shield.charge = 0
                        this.ship.shield.rings.splice(this.ship.shield.rings.length - this.double, this.double)
                        if (this.ship.shield.state < 0) {
                            this.ship.shield.state = 0
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
                    this.bullets.splice(k, 1);
                    return true
                }
            }

            if (this.ship.weapons.includes(this)) {
                if (this.bullets[t].life <= 1 || this.bullets[t].goTo.isPointInside(this.bullets[t])) {

                    for (let g = 0; g < enemy.guys.length; g++) {
                        if (this.bullets[t].goTo.t == enemy.guys[g].tile.t && this.bullets[t].goTo.k == enemy.guys[g].tile.k) {
                            enemy.guys[g].health -= ((this.damage / this.shotCount) * this.crew) / (1 + enemy.guys[g].gearArmor)
                        }
                    }


                    this.bullets[t].life = -100
                    this.bullets[t].goTo.integrity -= this.damage / this.shotCount

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
                    enemy.hull -= (this.damage * .1) / this.shotCount
                    this.bullets[t].life -= 100
                }
            } else {

                if (this.bullets[t].life <= 1 || this.bullets[t].goTo.isPointInside(this.bullets[t])) {
                    this.bullets[t].life = -100
                    for (let g = 0; g < this.ship.guys.length; g++) {
                        if (this.bullets[t].goTo.t == this.ship.guys[g].tile.t && this.bullets[t].goTo.k == this.ship.guys[g].tile.k) {
                            this.ship.guys[g].health -= (this.damage * this.crew) / (1 + this.ship.guys[g].gearArmor)
                        }
                    }

                    this.bullets[t].goTo.integrity -= this.damage / this.shotCount


                    this.bullets[t].goTo.fire -= this.fireChance
                    if (Math.random() < (this.fireChance / 300)) {
                        this.bullets[t].goTo.onFire = 1
                        this.bullets[t].goTo.fire = 0
                    }
                    if (this.railgun == 1) {
                        this.bullets[t].goTo.integrity -= (this.damage * 3) / this.shotCount//5
                    }
                    if (this.puncture == 1) {
                        let n = this.ship.neighbors(this.bullets[t].goTo)
                        for (let r = 0; r < n.length; r++) {
                            n[r].integrity -= this.damage
                        }
                    }
                    this.ship.hull -= (this.damage * .1) / this.shotCount
                    this.bullets[t].life -= 100
                }
            }
        }
        fire(tile) {
            if (this.charge >= this.max) {
                if (this.ship.weapons.includes(this)) {
                    if (enemy.hull <= 0 || enemy.guys.length == 0) {
                        return
                    }
                }
                if (enemy.weapons) {
                    if (enemy.weapons.includes(this)) {
                        if (this.ship.hull <= 0) {
                            return
                        }
                    }
                }
                if (this.ship.weapons.includes(this)) {
                    if (enemy.hull <= 0 || enemy.guys.length == 0) {
                        return
                    }
                    if (this.bomb == 1) {
                        if (this.ship.bombs <= 0) {
                            return
                        }
                        blast.play()
                    }
                }
                if (enemy.weapons.includes(this)) {
                    if (this.ship.hull <= 0) {
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

                if (this.ship.weapons.includes(this)) {
                    if (this.scrap >= 1) {
                        if (this.ship.scrap >= this.scrap) {
                            this.ship.scrap -= this.scrap
                            // return
                        } else {
                            return
                        }
                    }
                }

                this.reflect = 0
                if (this.laser == 1) {
                    if (this.ship.weapons.includes(this)) {
                        for (let t = 0; t < enemy.weapons.length; t++) {
                            if (enemy.weapons[t].mirror == 1) {
                                if (enemy.weapons[t].shine > 0) {
                                    let link = new LineOP(this.center, tile)
                                    if (link.intersects(enemy.weapons[t].plate)) {
                                        this.reflect = 1
                                        this.pointOut = t
                                        tile = this.ship.supratiles[Math.floor(Math.random() * this.ship.supratiles.length)]
                                    }
                                }
                            }
                        }
                    } else {
                        for (let t = 0; t < this.ship.weapons.length; t++) {
                            if (this.ship.weapons[t].mirror == 1) {
                                if (this.ship.weapons[t].shine > 0) {
                                    let link = new LineOP(this.center, tile)
                                    if (link.intersects(this.ship.weapons[t].plate)) {
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



                if ((this.ship.weapons.includes(this) && !(this.reflect == 1)) || (enemy.weapons.includes(this) && (this.reflect == 1))) {
                    if (enemy.hull <= 0 || enemy.guys.length == 0) {
                        return
                    }
                    if (this.bomb == 1) {
                        if (this.ship.bombs <= 0) {
                            return
                        }
                        this.ship.bombs--
                    }

                    let enododge = 0
                    for (let t = 0; t < this.ship.weapons.length; t++) {
                        for (let k = 0; k < this.ship.weapons[t].bullets.length; k++) {
                            if (this.ship.weapons[t].bullets[k].rope == 1) {
                                if (this.ship.weapons[t].bullets[k].life > 10) {
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
                                    }else if(enemy.weapons[w].bullets[f].dummy == 1){
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
                        for (let t = 0; t < this.ship.guys.length; t++) {
                            if (this.ship.guys[t].tile.weapon == 1) {
                                this.ship.guys[t].skillslist[1] += .01
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
                                    bullet.subfly = 10
                                    ropesound.play()
                                    bullet.goTo = this.target
                                    bullet.life = 100 * this.tether
                                    if (this.temp != -2) {
                                        this.temp += 100 * this.tether
                                        ////console.log(this.temp)
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
                                    bullet.subfly = 10
                                    ropesound.play()
                                    bullet.goTo = this.target
                                    bullet.life = 100 * this.tether
                                    if (this.temp != -2) {
                                        this.temp += 100 * this.tether
                                        ////console.log(this.temp)
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
                                    bullet.subfly = 10
                                    ropesound.play()
                                    bullet.goTo = this.target
                                    bullet.life = 100 * this.tether
                                    if (this.temp != -2) {
                                        this.temp += 100 * this.tether
                                        ////console.log(this.temp)
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
                                                enemy.guys[t].hostile = 1
                                                enemy.guys[t].hostileTimer = this.mind * 250 //400
                                                enemy.guys[t].mindControlled = 1
                                            }
                                        }
                                        if (enemy.guys[t].tiles) {
                                            if (enemy.guys[t].tiles.includes(tile)) {
                                                enemy.guys[t].health -= (this.damage * this.crew) / (1 + enemy.guys[t].gearArmor)
                                                enemy.guys[t].hit = 0
                                                if (this.mind > 0) {
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
                        this.ship.shake = 10
                        //////////////////////console.log(this.ship.shake)
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
                        for (let w = 0; w < this.ship.weapons.length; w++) {
                            if (this.ship.weapons[w].bullets.length > 0) {
                                sweart = 1
                                for (let f = 0; f < this.ship.weapons[w].bullets.length; f++) {
                                    if (this.ship.weapons[w].bullets[f].aura != 1 && this.ship.weapons[w].bullets[f].dummy != 1) {
                                        this.ship.weapons[w].bullets[f].xmom *= .8
                                        this.ship.weapons[w].bullets[f].ymom *= .8
                                        this.ship.weapons[w].bullets[f].life += 20
                                        this.ship.weapons[w].bullets[f].aura = 1
                                        this.ship.weapons[w].bullets[f].captain = this.center
                                        if (this.fling == 1) {
                                            this.ship.weapons[w].bullets[f].fling = 1
                                        }
                                    }else if(this.ship.weapons[w].bullets[f].dummy == 1){
                                        this.ship.weapons[w].bullets[f].life = -1
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
                    if (Math.random() - (vnododge / 10) < this.ship.dodgeRate()) {
                        this.missed = 0
                        for (let t = 0; t < enemy.guys.length; t++) {
                            if (enemy.guys[t].tile.weapon == 1) {
                                enemy.guys[t].skillslist[1] += .001
                            }
                        }




                        if (this.ship.shield.state > 0 && this.bomb != 1) {
                            if (this.shooter != 1) {
                                this.ship.shield.state -= this.double
                                this.ship.shield.charge = 0
                                if (this.ship.shield.state < 0) {
                                    this.ship.shield.state = 0
                                }
                                for (let t = 0; t < this.ship.guys.length; t++) {
                                    if (this.ship.guys[t].tile.shield == 1) {
                                        this.ship.guys[t].skillslist[2] += .01
                                    }
                                }

                                if (this.tether > 0) {
                                    let dxit = new Point(tile.x + (tile.width * .5), tile.y + (tile.height * .5))
                                    let bullet = new CircleR(this.center.x, this.center.y, 2, "#8D511899", (dxit.x - this.center.x), (dxit.y - this.center.y))
                                    bullet.rope = 1
                                    bullet.subfly = 10
                                    ropesound.play()
                                    bullet.goTo = this.target
                                    bullet.life = 100 * this.tether
                                    if (this.temp != -2) {
                                        this.temp += 100 * this.tether
                                        ////console.log(this.temp)
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
                                    bullet.subfly = 10
                                    ropesound.play()
                                    bullet.goTo = this.target
                                    bullet.life = 100 * this.tether
                                    if (this.temp != -2) {
                                        this.temp += 100 * this.tether
                                        ////console.log(this.temp)
                                    }
                                    this.bullets.push(bullet)
                                    this.firing = 0
                                    return
                                } else {
                                    let j = 0
                                    while (tile.weaponized != 1) {
                                        tile = this.ship.supratiles[Math.floor(Math.random() * this.ship.supratiles.length)]
                                        j++
                                        if (j > 1000) {
                                            break
                                        }
                                    }
                                    let dxit = new Point(tile.x + (tile.width * .5), tile.y + (tile.height * .5))
                                    let bullet = new CircleR(this.center.x, this.center.y, 2, "#8D511899", dxit.x - this.center.x, dxit.y - this.center.y)
                                    bullet.rope = 1
                                    bullet.subfly = 10
                                    ropesound.play()
                                    bullet.goTo = this.target
                                    bullet.life = 100 * this.tether
                                    if (this.temp != -2) {
                                        this.temp += 100 * this.tether
                                        ////console.log(this.temp)
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
                                let n = this.ship.neighbors(tile)
                                for (let r = 0; r < n.length; r++) {
                                    n[r].integrity -= this.damage
                                }
                            }
                            if (this.beam == 1) {
                                if (this.mini == 1) {

                                } else {
                                    let n = this.ship.neighbors(tile)
                                    for (let r = 0; r < n.length; r++) {
                                        n[r].fire -= this.fireChance
                                        if (Math.random() < (this.fireChance / 300)) {
                                            if (n[r].oxygen == 1) {
                                                n[r].integrity -= this.damage
                                                this.ship.hull -= this.damage * .1
                                            }
                                            n[r].onFire = 1
                                            n[r].fire = 0
                                        }
                                    }
                                }
                            }
                            if (this.shooter == 1) {

                            } else {
                                this.ship.hull -= this.damage * .1
                                if (this.sap <= 0) {
                                    for (let t = 0; t < this.ship.guys.length; t++) {
                                        if (this.ship.guys[t].tile == tile) {
                                            this.ship.guys[t].health -= (this.damage * this.crew) / (1 + this.ship.guys[t].gearArmor)
                                            this.ship.guys[t].hit = 0
                                            if (this.mind > 0) {
                                                this.ship.guys[t].hostile = 1
                                                this.ship.guys[t].hostileTimer = this.mind * 250 //400
                                                this.ship.guys[t].mindControlled = 1
                                            }
                                        }
                                        if (this.ship.guys[t].tiles) {
                                            if (this.ship.guys[t].tiles.includes(tile)) {
                                                this.ship.guys[t].health -= (this.damage * this.crew) / (1 + this.ship.guys[t].gearArmor)
                                                this.ship.guys[t].hit = 0
                                                if (this.mind > 0) {
                                                    this.ship.guys[t].hostile = 1
                                                    this.ship.guys[t].hostileTimer = this.mind * 250 //400
                                                    this.ship.guys[t].mindControlled = 1
                                                }
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    } else {

                        this.missed = 1
                        for (let t = 0; t < this.ship.guys.length; t++) {
                            if (this.ship.guys[t].tile.engine == 1) {
                                this.ship.guys[t].skillslist[6] += .01
                            }
                            if (this.ship.guys[t].tile.helm == 1) {
                                this.ship.guys[t].skillslist[3] += .01
                            }
                        }



                        let j = 0
                        while (this.target.marked == 1) {
                            j++
                            if (j > 1000) {
                                break
                            }
                            this.target = this.ship.blocks[Math.floor(Math.random() * this.ship.blocks.length)][Math.floor(Math.random() * this.ship.blocks[0].length)]
                        }
                        if (this.tether > 0) {
                            let dxit = new Point(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5))
                            let bullet = new CircleR(this.center.x, this.center.y, 2, "#8D511899", dxit.x - this.center.x, dxit.y - this.center.y)
                            bullet.rope = 1
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
                            if (keysPressed[`${this.ship.weapons.indexOf(this) + 1}`]) {
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
                for (let t = 0; t < this.ship.weapons.length; t++) {
                    this.ship.weapons[t].selected = 0
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

            if(this.temp > 0){
                if(this.bullets.length > 1){
                    this.bullets = [this.bullets[0]]
                }
            }
            for (let t = 0; t < this.bullets.length; t++) {
                if(this.bullets[t].sxmom > -10000){
                    this.bullets[t].xmom += this.bullets[t].sxmom
                    this.bullets[t].ymom += this.bullets[t].symom
                    this.bullets[t].life -= 5
                }
            }
            if (this.ship.weapons.includes(this)) {
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
            // for (let t = 0; t < this.bullets.length; t++) {
            //     if (this.bullets[t].life <= 0) {
            //         this.bullets.splice(t, 1)
            //     }
            // }
            // for (let t = 0; t < this.bullets.length; t++) {
            //     if (this.bullets[t].life <= 0) {
            //         this.bullets.splice(t, 1)
            //     }
            // }
            // for (let t = 0; t < this.bullets.length; t++) {
            //     if (this.bullets[t].life <= 0) {
            //         this.bullets.splice(t, 1)
            //     }
            // }
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
                            let wep = new Weapon(this.ship, this.type)
                            wep.temp = 10
                            let x = this.ship.weapons.length
                            this.ship.weapons[x] = wep
                            this.ship.weapons[x].charge = 100000000000000
                            this.ship.weapons[x].center.x = this.bullets[t].x
                            this.ship.weapons[x].center.y = this.bullets[t].y
                            this.bullets[t].life = -1
                            this.bullets[t].aura = 0
                        } else {
                            let wep = new Weapon(enemy, this.type)
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

                                if (this.ship.weapons.includes(this)) {
                                    if (enemy.shield.rings.length > 0) {
                                        if (this.bullets[t].doesPerimeterTouch(enemy.shield.rings[enemy.shield.rings.length - 1])) {
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
                                    if (this.ship.shield.rings.length > 0) {
                                        if (this.bullets[t].doesPerimeterTouch(this.ship.shield.rings[this.ship.shield.rings.length - 1])) {
                                            this.bullets[t].life -= 150
                                            this.ship.shield.state -= this.double
                                            this.ship.shield.charge = 0
                                            this.ship.shield.rings.splice(this.ship.shield.rings.length - this.double, this.double)
                                            if (this.ship.shield.state < 0) {
                                                this.ship.shield.state = 0
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
                                if (this.ship.weapons.includes(this)) {
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
                                    if (this.ship.shield.rings.length > 0) {
                                        if (this.ship.shield.rings[this.ship.shield.rings.length - 1].doesPerimeterTouch(this.bullets[t])) {
                                            this.bullets[t].life -= 150
                                            this.ship.shield.state -= this.double
                                            this.ship.shield.charge = 0
                                            this.ship.shield.rings.splice(this.ship.shield.rings.length - this.double, this.double)
                                            if (this.ship.shield.state < 0) {
                                                this.ship.shield.state = 0
                                            }
                                            break
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (this.shrink(t)) {
                        t--
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
                    if (enemy.weapons.includes(this)) {

                        for (let k = 0; k < this.ship.guys.length; k++) {
                            if (this.ship.guys[k].body.doesPerimeterTouch(this.bullets[t])) {
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
                        link.draw()
                    }

                    if (this.bullets[t].dummy == 1) {
                    } else {
                        if (this.ship.weapons.includes(this)) {
                            if (enemy.shield.rings.length > 0) {
                                if (this.bullets[t].doesPerimeterTouch(enemy.shield.rings[enemy.shield.rings.length - 1])) {
                                    this.bullets[t].life -= 150
                                    break
                                    // enemy.shield.rings.splice(enemy.shield.rings.length-this.double,this.double)
                                    // this.bullets[t].xmom = 0
                                    // this.bullets[t].ymom = 0
                                }
                            }
                        }
                        if (enemy.weapons.includes(this)) {
                            if (this.ship.shield.rings.length > 0) {
                                if (this.bullets[t].doesPerimeterTouch(this.ship.shield.rings[this.ship.shield.rings.length - 1])) {
                                    this.bullets[t].life -= 150
                                    break
                                    // this.ship.shield.rings.splice(this.ship.shield.rings.length-this.double,this.double)
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
                    let o = new Point(this.bullets[t].x, this.bullets[t].y)
                    this.bullets[t].draw()
                    this.bullets[t].move()
                    this.bullets[t].draw()
                    if (enemy.weapons.includes(this)) {

                        for (let k = 0; k < this.ship.guys.length; k++) {
                            if (this.ship.guys[k].body.doesPerimeterTouch(this.bullets[t])) {
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
                        link.draw()
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
                            if (this.ship.weapons.includes(this)) {
                                if (enemy.shield.rings.length > 0) {
                                    if (this.bullets[t].doesPerimeterTouch(enemy.shield.rings[enemy.shield.rings.length - 1])) {
                                        this.bullets[t].life -= 150
                                        // this.bullets[t].xmom = 0
                                        // this.bullets[t].ymom = 0
                                        enemy.shield.rings.splice(enemy.shield.rings.length - this.double, this.double)
                                        break
                                    }
                                }
                            }
                            if (enemy.weapons.includes(this)) {
                                if (this.ship.shield.rings.length > 0) {
                                    if (this.bullets[t].doesPerimeterTouch(this.ship.shield.rings[this.ship.shield.rings.length - 1])) {
                                        this.bullets[t].life -= 150
                                        // this.bullets[t].xmom = 0
                                        // this.bullets[t].ymom = 0
                                        this.ship.shield.rings.splice(this.ship.shield.rings.length - this.double, this.double)
                                        break
                                    }
                                }
                            }
                        }
                        // ////////////////console.log(this.bullets[t])
                    } else {
                        // ////////////////console.log(this.bullets[t])
                        this.bullets[t].move()
                        this.bullets[t].draw()
                        if (this.ship.weapons.includes(this)) {
                            if (enemy.shield.rings.length > 0) {
                                if (this.bullets[t].doesPerimeterTouch(enemy.shield.rings[enemy.shield.rings.length - 1])) {
                                    this.bullets[t].life -= 150
                                    enemy.shield.rings.splice(enemy.shield.rings.length - this.double, this.double)
                                    break
                                }
                            }
                        }
                        if (enemy.weapons.includes(this)) {
                            if (this.ship.shield.rings.length > 0) {
                                if (this.bullets[t].doesPerimeterTouch(this.ship.shield.rings[this.ship.shield.rings.length - 1])) {
                                    this.bullets[t].life -= 150
                                    this.ship.shield.rings.splice(this.ship.shield.rings.length - this.double, this.double)
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
                                this.bullets[t].life = -100
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
                if (this.ship.weapons.includes(this)) {

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


                    let io = Math.floor(Math.random() * this.ship.supratiles.length)

                    this.fire(this.ship.supratiles[io])

                    // for (let t = 0; t < this.ship.blocks.length; t++) {
                    //     for (let k = 0; k < this.ship.blocks.length; k++) {
                    //         if (this.ship.blocks[t][k].marked == 1) {
                    //             if (Math.random() < .05) {
                    //                 this.fire(this.ship.blocks[t][k])
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

                        if (this.ship.weapons.includes(this)) {
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

                            let link = new LineOP(this.center, this.ship.weapons[this.pointOut].platecenter, "red", 7)
                            link.draw()
                            let lin2k = new LineOP(this.center, this.ship.weapons[this.pointOut].platecenter, "white", 3)
                            lin2k.draw()
                            this.firing--
                            let link3 = new LineOP(this.target, this.ship.weapons[this.pointOut].platecenter, "red", 7)
                            link3.draw()
                            let lin4k = new LineOP(this.target, this.ship.weapons[this.pointOut].platecenter, "white", 3)
                            lin4k.draw()

                        }
                    } else {

                        if (this.ship.weapons.includes(this)) {
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

                        if (this.ship.weapons.includes(this)) {
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
                                let link = new LineOP(this.center, this.ship.weapons[this.pointOut].platecenter, "#FFAA00", 9)
                                link.draw()
                                let lin2k = new LineOP(this.center, this.ship.weapons[this.pointOut].platecenter, "#FFFFAA", 4)
                                lin2k.draw()
                                let link3 = new LineOP(this.target, this.ship.weapons[this.pointOut].platecenter, "#FFAA00", 9)
                                link3.draw()
                                let lin4k = new LineOP(this.target, this.ship.weapons[this.pointOut].platecenter, "#FFFFAA", 4)
                                lin4k.draw()
                            }
                            this.firing -= .7
                        }
                    } else {

                        if (this.ship.weapons.includes(this)) {
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

                        if (this.ship.weapons.includes(this)) {
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
                                let link = new LineOP(this.center, this.ship.weapons[this.pointOut].platecenter, "#AA00FF", 9)
                                link.draw()
                                let lin2k = new LineOP(this.center, this.ship.weapons[this.pointOut].platecenter, "#FF00FF", 4)
                                lin2k.draw()
                                let link3 = new LineOP(this.target, this.ship.weapons[this.pointOut].platecenter, "#AA00FF", 9)
                                link3.draw()
                                let lin4k = new LineOP(this.target, this.ship.weapons[this.pointOut].platecenter, "#FF00FF", 4)
                                lin4k.draw()
                            }
                            this.firing -= .5
                        }
                    } else {

                        if (this.ship.weapons.includes(this)) {
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

                        if (this.ship.weapons.includes(this)) {
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
                            let link = new LineOP(this.center, this.ship.weapons[this.pointOut].platecenter, "#009000", 9)
                            link.draw()
                            let lin2k = new LineOP(this.center, this.ship.weapons[this.pointOut].platecenter, "#AAAAFF", 4)
                            lin2k.draw()
                            this.firing -= .5
                            let link3 = new LineOP(this.target, this.ship.weapons[this.pointOut].platecenter, "#009000", 9)
                            link3.draw()
                            let lin4k = new LineOP(this.target, this.ship.weapons[this.pointOut].platecenter, "#AAAAFF", 4)
                            lin4k.draw()
                        }
                    } else {

                        if (this.ship.weapons.includes(this)) {
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

                        if (this.ship.weapons.includes(this)) {
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
                            let link = new LineOP(this.center, this.ship.weapons[this.pointOut].platecenter, "#009000", 9)
                            link.draw()
                            let lin2k = new LineOP(this.center, this.ship.weapons[this.pointOut].platecenter, "#AAAAFF", 4)
                            lin2k.draw()
                            this.firing -= .5
                            let link3 = new LineOP(this.target, this.ship.weapons[this.pointOut].platecenter, "#009000", 9)
                            link3.draw()
                            let lin4k = new LineOP(this.target, this.ship.weapons[this.pointOut].platecenter, "#AAAAFF", 4)
                            lin4k.draw()

                        }
                    } else {

                        if (this.ship.weapons.includes(this)) {
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
                        if (this.ship.weapons.includes(this)) {
                            link.target = ring
                            link.object = this.center
                        } else {
                            //////////////////////////////////console.log("d")
                            link.target = ring
                            link.object = this.center
                        }

                        let xmom = Math.cos(link.angle())
                        let ymom = Math.sin(link.angle())

                        xmom *= link.hypotenuse() / 5
                        ymom *= link.hypotenuse() / 5

                        let bullet = new Circle(link.object.x, link.object.y, 5, "cyan", -xmom, -ymom)
                        //////////////////////////////////console.log(bullet)
                        bullet.goTo = this.target
                        bullet.life = 6
                        this.bullets.push(bullet)
                        //////////////////////////////////console.log(this.bullets)
                        if (this.ship.weapons.includes(this) && enemy.shield.rings.length > 0) {
                            // bullet.goTo = this.target
                            bullet.life = 5
                            bullet.stopshort = 1
                        }
                        if (enemy.weapons.includes(this) && this.ship.shield.rings.length > 0) {
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
                        if (this.ship.weapons.includes(this)) {
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
                        if (this.ship.weapons.includes(this) && enemy.shield.rings.length > 0) {
                            // bullet.goTo = this.target
                            bullet.life = 5
                            bullet.stopshort = 1
                        }
                        if (enemy.weapons.includes(this) && this.ship.shield.rings.length > 0) {
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
                        if (this.ship.weapons.includes(this)) {
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
                        if (this.ship.weapons.includes(this) && enemy.shield.rings.length > 0) {
                            // bullet.goTo = this.target
                            bullet.life = 5
                            bullet.stopshort = 1
                        }
                        if (enemy.weapons.includes(this) && this.ship.shield.rings.length > 0) {
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
                        if (this.ship.weapons.includes(this)) {
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
                        if (this.ship.weapons.includes(this) && enemy.shield.rings.length > 0) {
                            // bullet.goTo = this.target
                            bullet.life = 5
                            // bullet2.life = 6
                            bullet.stopshort = 1
                            bullet2.stopshort = 1
                        }
                        if (enemy.weapons.includes(this) && this.ship.shield.rings.length > 0) {
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
                        if (this.ship.weapons.includes(this)) {
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
                        if (this.ship.weapons.includes(this) && enemy.shield.rings.length > 0) {
                            // bullet.goTo = this.target
                            bullet.life = 3
                            // bullet2.life = 3
                            bullet.stopshort = 1
                            bullet2.stopshort = 1
                        }
                        if (enemy.weapons.includes(this) && this.ship.shield.rings.length > 0) {
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
                        if (this.ship.weapons.includes(this)) {
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
                        if (this.ship.weapons.includes(this) && enemy.shield.rings.length > 0) {
                            // bullet.goTo = this.target
                            bullet.life = 3
                            // bullet2.life = 3
                            bullet.stopshort = 1
                            bullet2.stopshort = 1
                        }
                        if (enemy.weapons.includes(this) && this.ship.shield.rings.length > 0) {
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
                        if (this.ship.weapons.includes(this)) {
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
                        if (this.ship.weapons.includes(this) && enemy.shield.rings.length > 0) {
                            // bullet.goTo = this.target
                            bullet.life = 3
                            // bullet2.life = 3
                            bullet.stopshort = 1
                            bullet2.stopshort = 1
                        }
                        if (enemy.weapons.includes(this) && this.ship.shield.rings.length > 0) {
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
                            if (this.ship.shield.state >= this.sap) {
                                enemy.shield.state += this.sap
                                this.ship.shield.state -= this.sap
                            } else {
                                if (this.ship.shield.state == 0) {
                                    for (let t = 0; t < this.ship.guys.length; t++) {
                                        if (this.ship.guys[t].body.doesPerimeterTouch(ring)) {
                                            this.ship.guys[t].health -= (this.damage * this.crew) / (1 + this.ship.guys[t].gearArmor)
                                            if (this.ship.guys[t].energy > 0) {
                                                this.ship.guys[t].health -= this.ship.guys[t].health * 2
                                                this.ship.guys[t].energydeathtag = 15
                                                enemy.energy.powersto += 1
                                            }
                                            this.ship.guys[t].hit = 0
                                            if (this.mind > 0) {
                                                this.ship.guys[t].hostile = 1
                                                this.ship.guys[t].hostileTimer = this.mind * 250 //400
                                                this.ship.guys[t].mindControlled = 1
                                            }
                                        }
                                    }
                                }
                                enemy.shield.state += this.ship.shield.state
                                this.ship.shield.state = 0
                                this.ship.shield.charge = 0
                            }
                        } else {
                            if (enemy.shield.state >= this.sap) {
                                this.ship.shield.state += this.sap
                                enemy.shield.state -= this.sap
                            } else {
                                if (enemy.shield.state == 0) {
                                    for (let t = 0; t < enemy.guys.length; t++) {
                                        if (enemy.guys[t].body.doesPerimeterTouch(ring)) {
                                            enemy.guys[t].health -= (this.damage * this.crew) / (1 + enemy.guys[t].gearArmor)
                                            if (enemy.guys[t].energy > 0) {
                                                enemy.guys[t].health -= enemy.guys[t].health * 2
                                                enemy.guys[t].energydeathtag = 15
                                                if (this.ship.menuBattery.powersto < 56) {
                                                    this.ship.menuBattery.power += 1
                                                    this.ship.menuBattery.powersto += 1
                                                }
                                            }
                                            enemy.guys[t].hit = 0
                                            if (this.mind > 0) {
                                                enemy.guys[t].hostile = 1
                                                enemy.guys[t].hostileTimer = this.mind * 250 //400
                                                enemy.guys[t].mindControlled = 1
                                            }
                                        }
                                    }
                                }
                                this.ship.shield.state += enemy.shield.state
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
                            if (this.ship.shield.state >= this.sap) {
                                enemy.shield.state += this.sap
                                this.ship.shield.state -= this.sap
                            } else {
                                if (this.ship.shield.state == 0) {
                                    for (let t = 0; t < this.ship.guys.length; t++) {
                                        if (this.ship.guys[t].body.doesPerimeterTouch(ring)) {
                                            this.ship.guys[t].health -= (this.damage * this.crew) / (1 + this.ship.guys[t].gearArmor)
                                            if (this.ship.guys[t].energy > 0) {
                                                this.ship.guys[t].health -= this.ship.guys[t].health * 2
                                                this.ship.guys[t].energydeathtag = 15
                                                enemy.energy.powersto += 1
                                            }
                                            this.ship.guys[t].hit = 0
                                            if (this.mind > 0) {
                                                this.ship.guys[t].hostile = 1
                                                this.ship.guys[t].hostileTimer = this.mind * 250 //400
                                                this.ship.guys[t].mindControlled = 1
                                            }
                                        }
                                    }
                                }
                                enemy.shield.state += this.ship.shield.state
                                this.ship.shield.state = 0
                                this.ship.shield.charge = 0
                            }
                        } else {
                            if (enemy.shield.state >= this.sap) {
                                this.ship.shield.state += this.sap
                                enemy.shield.state -= this.sap
                            } else {
                                if (enemy.shield.state == 0) {
                                    for (let t = 0; t < enemy.guys.length; t++) {
                                        if (enemy.guys[t].body.doesPerimeterTouch(ring)) {
                                            enemy.guys[t].health -= (this.damage * this.crew) / (1 + enemy.guys[t].gearArmor)
                                            if (enemy.guys[t].energy > 0) {
                                                enemy.guys[t].health -= enemy.guys[t].health * 2
                                                enemy.guys[t].energydeathtag = 15
                                                if (this.ship.menuBattery.powersto < 56) {
                                                    this.ship.menuBattery.power += 1
                                                    this.ship.menuBattery.powersto += 1
                                                }
                                            }
                                            enemy.guys[t].hit = 0
                                            if (this.mind > 0) {
                                                enemy.guys[t].hostile = 1
                                                enemy.guys[t].hostileTimer = this.mind * 250 //400
                                                enemy.guys[t].mindControlled = 1
                                            }
                                        }
                                    }
                                }
                                this.ship.shield.state += enemy.shield.state
                                enemy.shield.state = 0
                                enemy.shield.charge = 0
                            }
                        }
                    }
                } else if (this.type == 19) {
                    if (this.firing == 10) {
                        sap3aud.play()
                    }
                    ////////////////////////console.log(this)
                    let ring = new Circle(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), Math.max(((Math.cos(this.firing * 3) * 36)) - 11, 5), "#0000FF44")
                    ring.draw()
                    let ring2 = new CircleR(this.target.x + (this.target.width * .5), this.target.y + (this.target.height * .5), Math.max(((Math.cos(this.firing * 3) * 36)) - 11, 5), "#0000FF44")
                    ring2.draw()
                    this.firing -= .2
                    if (this.firing <= 0) {
                        if (enemy.weapons.includes(this)) {
                            if (this.ship.shield.state >= this.sap) {
                                enemy.shield.state += this.sap
                                this.ship.shield.state -= this.sap
                            } else {
                                if (this.ship.shield.state == 0) {
                                    for (let t = 0; t < this.ship.guys.length; t++) {
                                        if (this.ship.guys[t].body.doesPerimeterTouch(ring)) {
                                            this.ship.guys[t].health -= (this.damage * this.crew) / (1 + this.ship.guys[t].gearArmor)
                                            if (this.ship.guys[t].energy > 0) {
                                                this.ship.guys[t].health -= this.ship.guys[t].health * 2
                                                this.ship.guys[t].energydeathtag = 15
                                                enemy.energy.powersto += 1
                                            }
                                            this.ship.guys[t].hit = 0
                                            if (this.mind > 0) {
                                                this.ship.guys[t].hostile = 1
                                                this.ship.guys[t].hostileTimer = this.mind * 250 //400
                                                this.ship.guys[t].mindControlled = 1
                                            }
                                        }
                                    }
                                }
                                enemy.shield.state += this.ship.shield.state
                                this.ship.shield.state = 0
                                this.ship.shield.charge = 0
                            }
                        } else {
                            if (enemy.shield.state >= this.sap) {
                                this.ship.shield.state += this.sap
                                enemy.shield.state -= this.sap
                            } else {
                                if (enemy.shield.state == 0) {
                                    for (let t = 0; t < enemy.guys.length; t++) {
                                        if (enemy.guys[t].body.doesPerimeterTouch(ring)) {
                                            enemy.guys[t].health -= (this.damage * this.crew) / (1 + enemy.guys[t].gearArmor)
                                            if (enemy.guys[t].energy > 0) {
                                                enemy.guys[t].health -= enemy.guys[t].health * 2
                                                enemy.guys[t].energydeathtag = 15
                                                if (this.ship.menuBattery.powersto < 56) {
                                                    this.ship.menuBattery.power += 1
                                                    this.ship.menuBattery.powersto += 1
                                                }
                                            }
                                            enemy.guys[t].hit = 0
                                            if (this.mind > 0) {
                                                enemy.guys[t].hostile = 1
                                                enemy.guys[t].hostileTimer = this.mind * 250 //400
                                                enemy.guys[t].mindControlled = 1
                                            }
                                        }
                                    }
                                }
                                this.ship.shield.state += enemy.shield.state
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
                        if (this.ship.weapons.includes(this)) {
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
                            if (this.ship.weapons.includes(this) && enemy.shield.rings.length > 0) {
                                ast.stopshort = 1
                            }
                            if (enemy.weapons.includes(this) && this.ship.shield.rings.length > 0) {
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
                            if (this.ship.weapons.includes(this) && enemy.shield.rings.length > 0) {
                                ast.stopshort = 1
                            }
                            if (enemy.weapons.includes(this) && this.ship.shield.rings.length > 0) {
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
                        if (this.ship.weapons.includes(this)) {
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
                            if (this.ship.weapons.includes(this) && enemy.shield.rings.length > 0) {
                                ast.stopshort = 1
                            }
                            if (enemy.weapons.includes(this) && this.ship.shield.rings.length > 0) {
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
                            if (this.ship.weapons.includes(this) && enemy.shield.rings.length > 0) {
                                ast.stopshort = 1
                            }
                            if (enemy.weapons.includes(this) && this.ship.shield.rings.length > 0) {
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
                        if (this.ship.weapons.includes(this)) {
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
                            if (this.ship.weapons.includes(this) && enemy.shield.rings.length > 0) {
                                ast.stopshort = 1
                            }
                            if (enemy.weapons.includes(this) && this.ship.shield.rings.length > 0) {
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
                            if (this.ship.weapons.includes(this) && enemy.shield.rings.length > 0) {
                                ast.stopshort = 1
                            }
                            if (enemy.weapons.includes(this) && this.ship.shield.rings.length > 0) {
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


                    if (this.ship.weapons.includes(this)) {
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
        drawSub() {
            // for (let t = 0; t < this.bullets.length; t++) {
            //     this.bullets[t].life--
            //     if (this.bullets[t].life <= 0) {
            //         this.bullets.splice(t, 1)
            //     }
            // }
            // for (let t = 0; t < this.bullets.length; t++) {
            //     let o = new Point(this.bullets[t].x, this.bullets[t].y)
            //     this.bullets[t].move()
            //     this.bullets[t].draw()
            //     let link = new LineOP(this.bullets[t], o, this.bullets[t].color, this.bullets[t].radius * 2)
            //     // //////////////////////////////////console.log(link)
            //     link.draw()
            // }

            if (storageShip.weapons.includes(this)) {
                if (this.mirror == 1) {
                    if (this.shine > 0) {
                        this.beam1 = new LineOP(this.center, new Point(((storageShip.body.x + enemy.body.x) * .5) - 50, storageShip.body.y + 100), "gray", 2)
                        this.beam2 = new LineOP(this.center, new Point((((storageShip.body.x + enemy.body.x) * .5) - 50), storageShip.body.y - 200), "gray", 2)
                        this.plate = new LineOP(new Point((((storageShip.body.x + enemy.body.x) * .5) - 50), storageShip.body.y - 200), new Point(((storageShip.body.x + enemy.body.x) * .5) - 50, storageShip.body.y + 100), "gray", 6)
                        this.platecenter = new Circle((this.plate.object.x + this.plate.target.x) * .5, (this.plate.object.y + this.plate.target.y) * .5)
                        // this.beam1.draw()
                        // this.beam2.draw()
                        // this.plate.draw()
                        this.shine--
                    } else {
                        this.plate = new LineOP(new Point((0, 0), new Point(0, 0)))
                    }
                }
            } else {
                if (this.mirror == 1) {
                    if (this.shine > 0) {
                        this.beam1 = new LineOP(this.center, new Point(((storageShip.body.x + enemy.body.x) * .5) + 50, storageShip.body.y + 100), "gray", 2)
                        this.beam2 = new LineOP(this.center, new Point((((storageShip.body.x + enemy.body.x) * .5) + 50), storageShip.body.y - 100), "gray", 2)
                        this.plate = new LineOP(new Point((((storageShip.body.x + enemy.body.x) * .5) + 50), storageShip.body.y - 200), new Point(((storageShip.body.x + enemy.body.x) * .5) + 50, storageShip.body.y + 100), "gray", 6)
                        this.platecenter = new Circle((this.plate.object.x + this.plate.target.x) * .5, (this.plate.object.y + this.plate.target.y) * .5)
                        // this.beam1.draw()
                        // this.beam2.draw()
                        // this.plate.draw()
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
                if (storageShip.weapons.includes(this)) {
                    storageShip.weapons.splice(storageShip.weapons.indexOf(this), 1)
                }
                if (enemy.weapons.includes(this)) {
                    enemy.weapons.splice(enemy.weapons.indexOf(this), 1)
                }
                // return
            }
            if (storageShip.weapons.includes(this)) {
                if (enemy.hull <= 0) {
                    // this.bullets = []
                    // for (let t = 0; t < enemy.blocks.length; t++) {
                    //     for (let k = 0; k < enemy.blocks[t].length; k++) {
                            for(let w = 0;w<this.bullets.length;w++){
                                // if(enemy.blocks[t][k].isPointInside(this.bullets[w])){
                                    this.bullets[w].sxmom =  -this.bullets[w].xmom/20 
                                    this.bullets[w].symom = -this.bullets[w].ymom/20
                                // }
                            }
                    //     }
                    // }
                }
            }

            if (storageShip.weapons.includes(this)) {
                if (this.crewType != -1) {
                    storageShip.guys.push(new Guy(storageShip, storageShip.supratiles[Math.floor(Math.random() * storageShip.supratiles.length)], this.crewType))
                    storageShip.weapons[storageShip.weapons.indexOf(this)] = new Weapon(storageShip, -1)
                    return
                }
            }
            if (storageShip.upgradeMenu.wepsto.includes(this)) {
                if (this.crewType != -1) {
                    storageShip.guys.push(new Guy(storageShip, storageShip.supratiles[Math.floor(Math.random() * storageShip.supratiles.length)], this.crewType))
                    storageShip.upgradeMenu.wepsto[storageShip.upgradeMenu.wepsto.indexOf(this)] = new Weapon(storageShip, -1)
                    return
                }
            }
            if (storageShip.weapons.includes(this)) {
                if (this.selected == 1) {
                    if (keysPressed['a']) {
                        this.auto *= -1
                        keysPressed['a'] = false
                    }
                }
            }

            if (keysPressed[storageShip.weapons.indexOf(this) + 1]) {
                for (let t = 0; t < storageShip.weapons.length; t++) {
                    storageShip.weapons[t].selected = 0
                }
                this.selected = 1
            }

            this.work()
            this.beingchecked--
            if (storageShip.weapons.includes(this)) {
                this.body.x = 270 + (100 * storageShip.weapons.indexOf(this))
                this.body.y = 650 + 290
            } else if (storageShip.upgradeMenu.wepsto.includes(this)) {
                this.body.x = (storageShip.upgradeMenu.window.x + 400) + ((100 * storageShip.upgradeMenu.wepsto.indexOf(this)) % 500)
                this.body.y = ((storageShip.upgradeMenu.window.y + 10) + (70 * Math.floor(storageShip.upgradeMenu.wepsto.indexOf(this) / 5)))
            } else {
                this.body.x = (storageShip.upgradeMenu.window.x + 400) + ((100 * stars.stars[storageShip.star].weapons.indexOf(this)) % 500)
                this.body.y = ((storageShip.upgradeMenu.window.y + 10) + (70 * Math.floor(stars.stars[storageShip.star].weapons.indexOf(this) / 5)))
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
                canvas_context.fillText(storageShip.weapons.indexOf(this) + 1, this.body.x + 5, this.body.y + this.body.height - 2)
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
        draw() {
            // for (let t = 0; t < this.bullets.length; t++) {
            //     this.bullets[t].life--
            //     if (this.bullets[t].life <= 0) {
            //         this.bullets.splice(t, 1)
            //     }
            // }
            // for (let t = 0; t < this.bullets.length; t++) {
            //     let o = new Point(this.bullets[t].x, this.bullets[t].y)
            //     this.bullets[t].move()
            //     this.bullets[t].draw()
            //     let link = new LineOP(this.bullets[t], o, this.bullets[t].color, this.bullets[t].radius * 2)
            //     // //////////////////////////////////console.log(link)
            //     link.draw()
            // }

            if (this.ship.weapons.includes(this)) {
                if (this.mirror == 1) {
                    if (this.shine > 0) {
                        this.beam1 = new LineOP(this.center, new Point(((this.ship.body.x + enemy.body.x) * .5) - 50, this.ship.body.y + 100), "gray", 2)
                        this.beam2 = new LineOP(this.center, new Point((((this.ship.body.x + enemy.body.x) * .5) - 50), this.ship.body.y - 200), "gray", 2)
                        this.plate = new LineOP(new Point((((this.ship.body.x + enemy.body.x) * .5) - 50), this.ship.body.y - 200), new Point(((this.ship.body.x + enemy.body.x) * .5) - 50, this.ship.body.y + 100), "gray", 6)
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
                        this.beam1 = new LineOP(this.center, new Point(((this.ship.body.x + enemy.body.x) * .5) + 50, this.ship.body.y + 100), "gray", 2)
                        this.beam2 = new LineOP(this.center, new Point((((this.ship.body.x + enemy.body.x) * .5) + 50), this.ship.body.y - 100), "gray", 2)
                        this.plate = new LineOP(new Point((((this.ship.body.x + enemy.body.x) * .5) + 50), this.ship.body.y - 200), new Point(((this.ship.body.x + enemy.body.x) * .5) + 50, this.ship.body.y + 100), "gray", 6)
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
                if (this.ship.weapons.includes(this)) {
                    this.ship.weapons.splice(this.ship.weapons.indexOf(this), 1)
                }
                if (enemy.weapons.includes(this)) {
                    enemy.weapons.splice(enemy.weapons.indexOf(this), 1)
                }
                // return
            }
            if (this.ship.weapons.includes(this)) {
                if (enemy.hull <= 0) {
                    // this.bullets = []
                    // for (let t = 0; t < enemy.blocks.length; t++) {
                    //     for (let k = 0; k < enemy.blocks[t].length; k++) {
                            for(let w = 0;w<this.bullets.length;w++){
                                // if(enemy.blocks[t][k].isPointInside(this.bullets[w])){
                                    this.bullets[w].sxmom =  -this.bullets[w].xmom/20 
                                    this.bullets[w].symom = -this.bullets[w].ymom/20
                                // }
                            }
                    //     }
                    // }
                }
            }

            if (this.ship.weapons.includes(this)) {
                if (this.crewType != -1) {
                    this.ship.guys.push(new Guy(this.ship, this.ship.supratiles[Math.floor(Math.random() * this.ship.supratiles.length)], this.crewType))
                    this.ship.weapons[this.ship.weapons.indexOf(this)] = new Weapon(this.ship, -1)
                    return
                }
            }
            if (this.ship.upgradeMenu.wepsto.includes(this)) {
                if (this.crewType != -1) {
                    this.ship.guys.push(new Guy(this.ship, this.ship.supratiles[Math.floor(Math.random() * this.ship.supratiles.length)], this.crewType))
                    this.ship.upgradeMenu.wepsto[this.ship.upgradeMenu.wepsto.indexOf(this)] = new Weapon(this.ship, -1)
                    return
                }
            }
            if (this.ship.weapons.includes(this)) {
                if (this.selected == 1) {
                    if (keysPressed['a']) {
                        this.auto *= -1
                        keysPressed['a'] = false
                    }
                }
            }

            if (keysPressed[this.ship.weapons.indexOf(this) + 1]) {
                for (let t = 0; t < this.ship.weapons.length; t++) {
                    this.ship.weapons[t].selected = 0
                }
                this.selected = 1
            }

            this.work()
            this.beingchecked--
            if (this.ship.weapons.includes(this)) {
                this.body.x = 270 + (100 * this.ship.weapons.indexOf(this))
                this.body.y = 650 + 360
            } else if (this.ship.upgradeMenu.wepsto.includes(this)) {
                this.body.x = (this.ship.upgradeMenu.window.x + 400) + ((100 * this.ship.upgradeMenu.wepsto.indexOf(this)) % 500)
                this.body.y = ((this.ship.upgradeMenu.window.y + 10) + (70 * Math.floor(this.ship.upgradeMenu.wepsto.indexOf(this) / 5)))
            } else {
                this.body.x = (this.ship.upgradeMenu.window.x + 400) + ((100 * stars.stars[this.ship.star].weapons.indexOf(this)) % 500)
                this.body.y = ((this.ship.upgradeMenu.window.y + 10) + (70 * Math.floor(stars.stars[this.ship.star].weapons.indexOf(this) / 5)))
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
                canvas_context.fillText(this.ship.weapons.indexOf(this) + 1, this.body.x + 5, this.body.y + this.body.height - 2)
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
