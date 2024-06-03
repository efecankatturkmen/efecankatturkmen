import 'package:flutter/material.dart';

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
                  title: 'Front-end Development',
                  description:
                      'Lom ipsum dolo, sit amet consectetu adpisiasdasdsadsadsadsadasdasdsadasdsadasdasdasdasdasdsadcing elit, rem voluptas sed blandasdasdasdasdasditiis',
                  imagePath: 'assets/images/Webdevelopment1.png',
                ),
                _buildServiceCard(
                  screenWidth: screenWidth,
                  title: 'UI/UX Designer',
                  description:
                      'Lom ipsum dolo, sit amet consectetu adpisicing elit, rem voluptas sed blanditiis',
                  imagePath: 'assets/images/Uidesign1.png',
                ),
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

          // GridView.builder(
          //   shrinkWrap: true,
          //   padding: EdgeInsets.all(10),
          //   gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
          //     crossAxisCount: isMobile || isTablet ? 1 : 2,
          //     crossAxisSpacing: 10,
          //     mainAxisSpacing: 10,
          //     childAspectRatio:
          //         (screenWidth / 2) / 200, // Adjust aspect ratio as needed
          //   ),
          //   itemCount: services.length,
          //   itemBuilder: (context, index) {
          //     final service = services[index];

          //     return _buildServiceCard(
          //       screenWidth: screenWidth,
          //       title: service['title']!,
          //       description: service['description']!,
          //       imagePath: service['imagePath']!,
          //     );
          //   },
          // ),
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
              // Container(
              //   width: 42,
              //   height: 42,
              //   decoration: BoxDecoration(
              //     image: DecorationImage(
              //       image: AssetImage(imagePath),
              //       fit: BoxFit.cover,
              //     ),
              //     borderRadius: BorderRadius.circular(8),
              //     color: Color.fromRGBO(56, 64, 90, 1),
              //   ),
              // ),
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
