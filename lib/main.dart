import 'package:efecankatturkmen/firebase_options.dart';
import 'package:efecankatturkmen/router.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:google_fonts/google_fonts.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  runApp(
    ProviderScope(
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;
    return MaterialApp.router(
      title: 'Cankat T.',
      debugShowCheckedModeBanner: false,
      //theme: ThemeData.dark(),
      theme: ThemeData(
          textTheme: GoogleFonts.montserratTextTheme(),
          brightness: Brightness.dark),

      routerConfig: AppRouter().appRouter,
    );
  }
}
