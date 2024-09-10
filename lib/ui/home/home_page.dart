import 'package:efecankatturkmen/ui/home/aboutme_section.dart';
import 'package:efecankatturkmen/ui/home/contact_section.dart';
import 'package:efecankatturkmen/ui/home/projects_section.dart';
import 'package:efecankatturkmen/ui/home/whatdoido_section.dart';
import 'package:efecankatturkmen/ui/shell/collapableshellnav.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class LandingpageWidget extends StatefulWidget {
  LandingpageWidget({Key? key, required this.scrollController})
      : super(key: key);
  ScrollController scrollController;
  @override
  _LandingpageWidgetState createState() => _LandingpageWidgetState();
}

class _LandingpageWidgetState extends State<LandingpageWidget> {
  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.of(context).size.width;
    return ListView(
      shrinkWrap: true,
      children: [
        SizedBox(height: 50), // Replacing Divider with SizedBox for spacing
        AboutWidget(
          key: aboutKey,
        ),
        SizedBox(height: 50),
        ServiceWidget(
          key: whatdoidoKey,
        ),
        SizedBox(height: 50),

        ProjectsWidget(
          key: projectsKey,
        ),
        SizedBox(height: 50),
        Container(
          width: double.infinity, // Adjusted to full width
          child: ContactWidget(
            key: contactKey,
          ),
        ),
        SizedBox(height: 50),
      ],
    );
  }
}
