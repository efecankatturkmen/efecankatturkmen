import 'package:flutter/material.dart';

class ContactWidget extends StatelessWidget {
  ContactWidget({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    // Screen dimensions
    final screenWidth = MediaQuery.of(context).size.width;
    final isMobile = screenWidth < 600;

    return Container(
      width: 200,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(12),
        color: Colors.red,
      ),
      padding: EdgeInsets.symmetric(horizontal: 20, vertical: 40),
      child: Column(
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
          ElevatedButton(onPressed: () {}, child: Text('Contact Me'))
        ],
      ),
    );
  }
}
