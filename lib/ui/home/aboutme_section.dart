import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_flip_card/flutter_flip_card.dart';

class AboutWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final screenHeight = MediaQuery.of(context).size.height;
    final isMobile = screenWidth < 600;
    final isTablet = screenWidth >= 600 && screenWidth < 1024;
    final controller = FlipCardController();
    final double imageWidth = isMobile
        ? screenWidth * 0.85
        : isTablet
            ? screenWidth * 0.75
            : 526;
    final double imageHeight = isMobile
        ? screenHeight * 0.45
        : isTablet
            ? screenHeight * 0.55
            : 380.2;

    return Container(
      width: double.infinity,
      child: isMobile || isTablet
          ? Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                InkWell(
                  onHover: (onHover) {
                    controller.flipcard();
                  },
                  onTap: () {
                    controller.flipcard();
                  },
                  child: Container(
                    width: imageWidth / 2,
                    height: imageHeight / 2,
                    child: Stack(
                      children: <Widget>[
                        Positioned(
                          top: isMobile ? 26 : 26,
                          left: isMobile ? 27 : 27,
                          child: Container(
                            width: imageWidth / 2,
                            height: imageHeight / 2,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.only(
                                topLeft: Radius.circular(isMobile ? 24 : 24),
                                topRight: Radius.circular(0),
                                bottomLeft: Radius.circular(0),
                                bottomRight:
                                    Radius.circular(isMobile ? 24 : 24),
                              ),
                              color: Color.fromRGBO(217, 217, 217, 1),
                              border: Border.all(
                                color: Color.fromRGBO(255, 255, 255, 1),
                                width: 2,
                              ),
                            ),
                          ),
                        ),
                        Positioned(
                          top: 0,
                          left: 0,
                          child: FlipCard(
                            controller: controller,
                            rotateSide: RotateSide.top,
                            frontWidget: Container(
                              width: imageWidth / 2 - 20,
                              height: imageHeight / 2 - 20,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.only(
                                  topLeft: Radius.circular(isMobile ? 24 : 24),
                                  topRight: Radius.circular(0),
                                  bottomLeft: Radius.circular(0),
                                  bottomRight:
                                      Radius.circular(isMobile ? 24 : 24),
                                ),
                                image: DecorationImage(
                                  image: AssetImage('lib/assets/ect_logo.jpg'),
                                  fit: BoxFit.cover,
                                ),
                              ),
                            ),
                            backWidget: Container(
                              width: imageWidth / 2 - 20,
                              height: imageHeight / 2 - 20,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.only(
                                  topLeft: Radius.circular(isMobile ? 24 : 24),
                                  topRight: Radius.circular(0),
                                  bottomLeft: Radius.circular(0),
                                  bottomRight:
                                      Radius.circular(isMobile ? 24 : 24),
                                ),
                                image: DecorationImage(
                                  image: AssetImage(
                                      'lib/assets/profile_photo.png'),
                                  fit: BoxFit.cover,
                                ),
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                SizedBox(height: isMobile ? 20 : 20),
                Padding(
                  padding: const EdgeInsets.all(20.0),
                  child: Container(
                    width: double.infinity,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: <Widget>[
                        Text(
                          'ABOUT ME',
                          textAlign: TextAlign.left,
                          style: TextStyle(
                            color: Colors.red,
                            fontSize: isMobile ? 24 : 24,
                            fontWeight: FontWeight.normal,
                          ),
                        ),
                        SizedBox(height: isMobile ? 20 : 20),
                        Text(
                          'I’m Efe Cankat Turkmen',
                          textAlign: TextAlign.left,
                          style: TextStyle(
                            color: Color.fromRGBO(255, 255, 255, 1),
                            fontSize: isMobile ? 36 : 36,
                            fontWeight: FontWeight.normal,
                          ),
                        ),
                        SizedBox(height: isMobile ? 20 : 20),
                        Text(
                          'I am an experienced member of the ITS Innovation and Enterprise Applications teams at Binghamton University, specializing in technology solutions and support. My role involves collaborating closely with other team members on a wide range of projects, often working independently or as part of a larger team.',
                          textAlign: TextAlign.left,
                          style: TextStyle(
                            color: Color.fromRGBO(176, 173, 173, 1),
                            fontSize: isMobile ? 18 : 18,
                            fontWeight: FontWeight.normal,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            )
          : Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: <Widget>[
                InkWell(
                  onHover: (onHover) {
                    controller.flipcard();
                  },
                  onTap: () {
                    controller.flipcard();
                  },
                  child: Container(
                    width: imageWidth,
                    height: imageHeight,
                    child: Stack(
                      children: <Widget>[
                        Positioned(
                          top: 26,
                          left: 27,
                          child: Container(
                            width: imageWidth,
                            height: imageHeight,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.only(
                                topLeft: Radius.circular(24),
                                topRight: Radius.circular(0),
                                bottomLeft: Radius.circular(0),
                                bottomRight: Radius.circular(24),
                              ),
                              color: Color.fromRGBO(217, 217, 217, 1),
                              border: Border.all(
                                color: Color.fromRGBO(255, 255, 255, 1),
                                width: 2,
                              ),
                            ),
                          ),
                        ),
                        Positioned(
                          top: 0,
                          left: 0,
                          child: FlipCard(
                            controller: controller,
                            rotateSide: RotateSide.top,
                            frontWidget: Container(
                              width: imageWidth - 20,
                              height: imageHeight - 20,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.only(
                                  topLeft: Radius.circular(24),
                                  topRight: Radius.circular(0),
                                  bottomLeft: Radius.circular(0),
                                  bottomRight: Radius.circular(24),
                                ),
                                image: DecorationImage(
                                  image: AssetImage('lib/assets/ect_logo.jpg'),
                                  fit: BoxFit.cover,
                                ),
                              ),
                            ),
                            backWidget: Container(
                              width: imageWidth - 20,
                              height: imageHeight - 20,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.only(
                                  topLeft: Radius.circular(24),
                                  topRight: Radius.circular(0),
                                  bottomLeft: Radius.circular(0),
                                  bottomRight: Radius.circular(24),
                                ),
                                image: DecorationImage(
                                  image: AssetImage(
                                      'lib/assets/profile_photo.png'),
                                  fit: BoxFit.cover,
                                ),
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                Positioned(
                  top: 21,
                  left: 600,
                  child: Container(
                    width: 580,
                    height: 366,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                        Text(
                          'ABOUT ME',
                          textAlign: TextAlign.left,
                          style: TextStyle(
                            color: Colors.red,
                            fontSize: 24,
                            fontWeight: FontWeight.normal,
                          ),
                        ),
                        SizedBox(height: 20),
                        Text(
                          'I’m Efe Cankat Turkmen',
                          textAlign: TextAlign.left,
                          style: TextStyle(
                            color: Color.fromRGBO(255, 255, 255, 1),
                            fontSize: 36,
                            fontWeight: FontWeight.normal,
                          ),
                        ),
                        SizedBox(height: 20),
                        Text(
                          'I am an experienced member of the ITS Innovation and Enterprise Applications teams at Binghamton University, specializing in technology solutions and support. My role involves collaborating closely with other team members on a wide range of projects, often working independently or as part of a larger team.',
                          textAlign: TextAlign.left,
                          style: TextStyle(
                            color: Color.fromRGBO(176, 173, 173, 1),
                            fontSize: 18,
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
