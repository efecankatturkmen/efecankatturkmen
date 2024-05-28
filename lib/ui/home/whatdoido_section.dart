import 'package:flutter/material.dart';

class ServiceWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Screen dimensions
    final screenWidth = MediaQuery.of(context).size.width;
    final screenHeight = MediaQuery.of(context).size.height;
    final isMobile = screenWidth < 600;

    return Container(
      width: screenWidth * 0.9,
      height: isMobile ? screenHeight * 0.4 : 359,
      padding: EdgeInsets.all(20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Center(
            child: Text(
              'WHAT I DO',
              textAlign: TextAlign.left,
              style: TextStyle(
                color: Color.fromRGBO(75, 111, 239, 1),
                fontFamily: 'Poppins',
                fontSize: 24,
                fontWeight: FontWeight.normal,
              ),
            ),
          ),
          Center(
            child: Text(
              'SPECIALIZING IN',
              textAlign: TextAlign.left,
              style: TextStyle(
                color: Color.fromRGBO(255, 255, 255, 1),
                fontFamily: 'Poppins',
                fontSize: 36,
                fontWeight: FontWeight.normal,
              ),
            ),
          ),
          SizedBox(height: 20),
          Expanded(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                _buildServiceCard(
                  screenWidth: screenWidth,
                  title: 'Front-end Development',
                  description:
                      'Lom ipsum dolo, sit amet consectetu adpisicing elit, rem voluptas sed blanditiis',
                  imagePath: 'assets/images/Webdevelopment1.png',
                ),
                _buildServiceCard(
                  screenWidth: screenWidth,
                  title: 'UI/UX Designer',
                  description:
                      'Lom ipsum dolo, sit amet consectetu adpisicing elit, rem voluptas sed blanditiis',
                  imagePath: 'assets/images/Uidesign1.png',
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildServiceCard({
    required double screenWidth,
    required String title,
    required String description,
    required String imagePath,
  }) {
    return Container(
      width: (screenWidth * 0.9 / 2) - 70,
      decoration: BoxDecoration(
        color: Color.fromRGBO(41, 44, 54, 1),
        borderRadius: BorderRadius.circular(12),
      ),
      padding: EdgeInsets.all(20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(
                width: 42,
                height: 42,
                decoration: BoxDecoration(
                  image: DecorationImage(
                    image: AssetImage(imagePath),
                    fit: BoxFit.cover,
                  ),
                  borderRadius: BorderRadius.circular(8),
                  color: Color.fromRGBO(56, 64, 90, 1),
                ),
              ),
              SizedBox(width: 20),
              Text(
                title,
                style: TextStyle(
                  color: Color.fromRGBO(255, 255, 255, 1),
                  fontFamily: 'Poppins',
                  fontSize: 24,
                  fontWeight: FontWeight.normal,
                ),
              ),
            ],
          ),
          SizedBox(height: 20),
          Text(
            description,
            style: TextStyle(
              color: Color.fromRGBO(176, 173, 173, 1),
              fontFamily: 'Poppins',
              fontSize: 18,
              fontWeight: FontWeight.normal,
            ),
          ),
        ],
      ),
    );
  }
}
