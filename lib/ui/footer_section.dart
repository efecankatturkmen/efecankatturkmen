import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class FooterSection extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Color.fromRGBO(41, 44, 54, 1),
      padding: const EdgeInsets.all(20.0),
      child: Column(
        children: <Widget>[
          SvgPicture.asset(
            'lib/assets/ect_logo.svg',
            fit: BoxFit.fitWidth,
            width: 100,
          ),
          SizedBox(height: 10),
          Text(
            'COPYRIGHT © 2024 EFE CANKAT TURKMEN.',
            style: TextStyle(
              color: Colors.white,
              fontFamily: 'Poppins',
              fontSize: 16,
            ),
          ),
        ],
      ),
    );
  }
}
