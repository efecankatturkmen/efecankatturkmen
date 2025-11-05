import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class ContactWidget extends StatelessWidget {
  ContactWidget({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 200,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(12),
        color: Colors.red.withValues(alpha: 0.1),
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
          ElevatedButton(
            onPressed: () {
              context.go('/contact');
            },
            style: ElevatedButton.styleFrom(
              backgroundColor: Color.fromRGBO(84, 142, 255, 1),
              foregroundColor: Colors.white,
              padding: EdgeInsets.symmetric(horizontal: 32, vertical: 16),
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(8),
              ),
            ),
            child: Text(
              'Contact Me',
              style: TextStyle(
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: FontWeight.w600,
              ),
            ),
          )
        ],
      ),
    );
  }
}
