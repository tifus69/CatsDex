package com.catsdex;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // Import this.
import android.os.Bundle; // Import this.

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
//  @Override
//  protected void onCreate(Bundle savedInstanceState) {
//    SplashScreen.show(this);
//    super.onCreate(savedInstanceState);
//  }
  @Override
  protected String getMainComponentName() {
    SplashScreen.show(this);
    return "CatsDex";
  }

  @Override
  public void invokeDefaultOnBackPressed() {
    moveTaskToBack(true);
  }


//  @Override
//  protected String getMainComponentName() {
//    return "CatsDex";
//  }


}
