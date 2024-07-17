import 'package:flutter/material.dart';
import 'dart:js' as js;

class ServiceWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Screen dimensions
    final screenWidth = MediaQuery.of(context).size.width;
    final screenHeight = MediaQuery.of(context).size.height;
    final isMobile = screenWidth < 600;
    final isTablet = screenWidth >= 600 && screenWidth < 1024;
    final List<Map<String, String>> services = [
      {
        'title': 'Front-end Development',
        'description':
            'Lom ipsum dolo, sit amet consectetu adpisicing elit, rem voluptas sed blanditii3123213123213'
                '123213213211232131232133123123sadgjhadsjkghasdjklghasdjkfhasfaaskafahfkajhdlkajdlaksjalksdjfldskfjldsfjhsdfkjasdfkjhaslakjsdhakdsfjhldkjfh',
        'imagePath': 'assets/images/Webdevelopment1.png',
      },
      {
        'title': 'UI/UX Designer',
        'description':
            'Lom ipsum dolo, sit amet consectetu adpisicing elit, rem voluptas sed blanditiis',
        'imagePath': 'assets/images/Uidesign1.png',
      },
      // Add more services as needed
    ];
    return Container(
      width: screenWidth * 0.9,
      //height: isMobile ? screenHeight * 0.4 : 359,
      padding: EdgeInsets.all(20),
      child: ListView(
        shrinkWrap: true,
        children: [
          Center(
            child: Text(
              'WHAT I DO',
              textAlign: TextAlign.left,
              style: TextStyle(
                color: Colors.red,
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
          Center(
            child: Wrap(
              spacing: 10, // gap between adjacent chips
              runSpacing: 10, // gap between lines
              children: <Widget>[
                _buildServiceCard(
                    screenWidth: screenWidth,
                    title: 'Laravel - PHP',
                    description:
                        'Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.',
                    imagePath: 'lib/assets/specializing/laravel.png',
                    link: "https://laravel.com/"),
                _buildServiceCard(
                    screenWidth: screenWidth,
                    title: 'Flutter - Dart',
                    description:
                        'Flutter is a cross-platform UI toolkit that is designed to allow code reuse across operating systems such as iOS and Android, while also allowing applications to interface directly with underlying platform services.',
                    imagePath: 'lib/assets/specializing/flutter.png',
                    link: "https://flutter.dev/"),
                _buildServiceCard(
                    screenWidth: screenWidth,
                    title: 'Graphene',
                    description:
                        "Graphene is a fully featured Workflow, Micro Application, and Content Management Platform with a robust web-based IDE (Integrated Development Environment). Graphene is the primary engine behind Binghamton University's myBinghamton portal.",
                    imagePath: 'lib/assets/specializing/graphene.png',
                    link: "https://www.escherlabs.com/"),
                _buildServiceCard(
                    screenWidth: screenWidth,
                    title: 'Firebase',
                    description:
                        'Firebase is a platform developed by Google for building mobile and web applications. It provides a suite of tools and services, including real-time databases, authentication, hosting, and analytics, allowing developers to focus on creating user-friendly applications without managing infrastructure.',
                    imagePath: 'lib/assets/firebase.png',
                    link: "https://firebase.google.com/"),
                _buildServiceCard(
                  screenWidth: screenWidth,
                  title: 'HTML - CSS',
                  description:
                      'HTML (HyperText Markup Language) is the standard language for creating and structuring web content. CSS (Cascading Style Sheets) is used to design and format the appearance of HTML elements on web pages.',
                  imagePath: 'lib/assets/ect_logo.jpg',
                ),
                _buildServiceCard(
                  screenWidth: screenWidth,
                  title: 'JS',
                  description:
                      'JavaScript (JS) is a versatile programming language primarily used for enhancing web pages with dynamic behavior and interactivity.',
                  imagePath: 'lib/assets/ect_logo.jpg',
                ),
                _buildServiceCard(
                  screenWidth: screenWidth,
                  title: 'SQL - NoSQL',
                  description:
                      'SQL (Structured Query Language) is a standardized language for managing and querying relational databases, ensuring efficient storage and retrieval of data. NoSQL (Not only SQL) encompasses various database technologies designed for flexible, scalable, and high-performance storage and retrieval of unstructured or semi-structured data.',
                  imagePath: 'lib/assets/ect_logo.jpg',
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
    String? link,
  }) {
    final double cardWidth =
        (screenWidth / 2) - 20; // Adjust for padding and spacing

    return Container(
      width: 500,
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
                    fit: BoxFit.contain,
                  ),
                  borderRadius: BorderRadius.circular(8),
                  color: Colors.white,
                ),
              ),
              SizedBox(width: 20),
              Expanded(
                child: Text(
                  title,
                  style: TextStyle(
                    color: Color.fromRGBO(255, 255, 255, 1),
                    fontFamily: 'Poppins',
                    fontSize: 24,
                    fontWeight: FontWeight.normal,
                  ),
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
          link != null
              ? ElevatedButton(
                  onPressed: () {
                    js.context.callMethod('open', [link]);
                  },
                  child: Text('Visit'))
              : SizedBox()
        ],
      ),
    );
  }

  // Widget _buildServiceCard({
  //   required double screenWidth,
  //   required String title,
  //   required String description,
  //   required String imagePath,
  // }) {
  //   return Container(
  //     width: (screenWidth * 0.9 / 2) - 70,
  //     decoration: BoxDecoration(
  //       color: Color.fromRGBO(41, 44, 54, 1),
  //       borderRadius: BorderRadius.circular(12),
  //     ),
  //     padding: EdgeInsets.all(20),
  //     child: Column(
  //       crossAxisAlignment: CrossAxisAlignment.start,
  //       children: [
  //         Row(
  //           children: [
  //             Container(
  //               width: 42,
  //               height: 42,
  //               decoration: BoxDecoration(
  //                 image: DecorationImage(
  //                   image: AssetImage(imagePath),
  //                   fit: BoxFit.cover,
  //                 ),
  //                 borderRadius: BorderRadius.circular(8),
  //                 color: Color.fromRGBO(56, 64, 90, 1),
  //               ),
  //             ),
  //             SizedBox(width: 20),
  //             Text(
  //               title,
  //               style: TextStyle(
  //                 color: Color.fromRGBO(255, 255, 255, 1),
  //                 fontFamily: 'Poppins',
  //                 fontSize: 24,
  //                 fontWeight: FontWeight.normal,
  //               ),
  //             ),
  //           ],
  //         ),
  //         SizedBox(height: 20),
  //         Text(
  //           description,
  //           style: TextStyle(
  //             color: Color.fromRGBO(176, 173, 173, 1),
  //             fontFamily: 'Poppins',
  //             fontSize: 18,
  //             fontWeight: FontWeight.normal,
  //           ),
  //         ),
  //       ],
  //     ),
  //   );
  // }
}
