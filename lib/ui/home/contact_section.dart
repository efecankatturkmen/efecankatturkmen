import 'package:flutter/material.dart';

class ContactWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Screen dimensions
    final screenWidth = MediaQuery.of(context).size.width;
    final isMobile = screenWidth < 600;

    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(12),
        color: Color.fromRGBO(41, 44, 54, 1),
      ),
      padding: EdgeInsets.symmetric(horizontal: 20, vertical: 40),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text(
            'Have any project in mind?',
            textAlign: TextAlign.center,
            style: TextStyle(
              color: Color.fromRGBO(255, 255, 255, 1),
              fontFamily: 'Poppins',
              fontSize: 32,
              fontWeight: FontWeight.normal,
              height: 1,
            ),
          ),
          SizedBox(height: 40),
          Container(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(6),
              color: Color.fromRGBO(84, 142, 255, 1),
            ),
            padding: EdgeInsets.symmetric(horizontal: 18, vertical: 10),
            child: Text(
              'Contact me',
              textAlign: TextAlign.left,
              style: TextStyle(
                color: Color.fromRGBO(255, 255, 255, 1),
                fontFamily: 'Poppins',
                fontSize: 14,
                fontWeight: FontWeight.normal,
                height: 1,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
