import 'package:efecankatturkmen/ui/home/aboutme_section.dart';
import 'package:efecankatturkmen/ui/home/contact_section.dart';
import 'package:efecankatturkmen/ui/home/projects_section.dart';
import 'package:efecankatturkmen/ui/home/whatdoido_section.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class LandingpageWidget extends StatefulWidget {
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
        Divider(
          height: 50,
          color: Colors.transparent,
        ),
        AboutWidget(),
        Divider(
          height: 50,
          color: Colors.transparent,
        ),
        ServiceWidget(),
        Divider(
          height: 50,
          color: Colors.transparent,
        ),
        ProjectsWidget(),
        Divider(
          height: 50,
          color: Colors.transparent,
        ),
        Container(
          child: ContactWidget(),
          width: 200,
        ),
        Divider(
          height: 50,
          color: Colors.transparent,
        ),
      ],
    );
  }
}
