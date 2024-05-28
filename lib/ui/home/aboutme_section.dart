import 'package:flutter/material.dart';

class AboutWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final screenHeight = MediaQuery.of(context).size.height;
    final isMobile = screenWidth < 600;
    const double factor = 0.75;
    return Container(
      width: screenWidth * 0.9 * factor,
      height: isMobile ? screenHeight * 0.5 * factor : 406.3 * factor,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: <Widget>[
          Container(
            width: isMobile ? screenWidth * 0.9 * factor : 553 * factor,
            height: isMobile ? screenHeight * 0.5 * factor : 406.3 * factor,
            child: Stack(
              children: <Widget>[
                Positioned(
                  top: 26 * factor,
                  left: 27 * factor,
                  child: Container(
                    width:
                        isMobile ? screenWidth * 0.85 * factor : 526 * factor,
                    height: isMobile
                        ? screenHeight * 0.45 * factor
                        : 380.2 * factor,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.only(
                        topLeft: Radius.circular(24 * factor),
                        topRight: Radius.circular(0),
                        bottomLeft: Radius.circular(0),
                        bottomRight: Radius.circular(24 * factor),
                      ),
                      color: Color.fromRGBO(217, 217, 217, 1),
                      border: Border.all(
                        color: Color.fromRGBO(255, 255, 255, 1),
                        width: 2 * factor,
                      ),
                    ),
                  ),
                ),
                Positioned(
                  top: 0,
                  left: 0,
                  child: Container(
                    width:
                        isMobile ? screenWidth * 0.85 * factor : 526 * factor,
                    height: isMobile
                        ? screenHeight * 0.45 * factor
                        : 380.2 * factor,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.only(
                        topLeft: Radius.circular(24 * factor),
                        topRight: Radius.circular(0),
                        bottomLeft: Radius.circular(0),
                        bottomRight: Radius.circular(24 * factor),
                      ),
                      image: DecorationImage(
                        image: AssetImage('lib/assets/ect_logo.jpg'),
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
          Positioned(
            top: isMobile ? screenHeight * 0.02 * factor : 21 * factor,
            left: isMobile ? screenWidth * 0.1 * factor : 600 * factor,
            child: Container(
              width: isMobile ? screenWidth * 0.8 * factor : 580 * factor,
              height: isMobile ? screenHeight * 0.3 * factor : 366 * factor,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Text(
                    'ABOUT ME',
                    textAlign: TextAlign.left,
                    style: TextStyle(
                      color: Colors.red,
                      fontSize: 24 * factor,
                      fontWeight: FontWeight.normal,
                    ),
                  ),
                  SizedBox(height: 20 * factor),
                  Text(
                    'I’m Efe Cankat Turkmen',
                    textAlign: TextAlign.left,
                    style: TextStyle(
                      color: Color.fromRGBO(255, 255, 255, 1),
                      fontSize: 36 * factor,
                      fontWeight: FontWeight.normal,
                    ),
                  ),
                  SizedBox(height: 20 * factor),
                  Text(
                    'I am an experienced member of the ITS Innovation and Enterprise Applications teams at Binghamton University, specializing in technology solutions and support. My role involves collaborating closely with other team members on a wide range of projects, often working independently or as part of a larger team. ',
                    textAlign: TextAlign.left,
                    style: TextStyle(
                      color: Color.fromRGBO(176, 173, 173, 1),
                      fontSize: 18 * factor,
                      fontWeight: FontWeight.normal,
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
