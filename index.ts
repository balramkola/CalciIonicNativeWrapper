import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable, merge } from 'rxjs';

@Plugin({
  pluginName: 'Calci',
  plugin: 'com.balram.myfirstplugin',
  pluginRef: 'cordova.plugins.Calci',
  repo: 'https://github.com/balramkola/CalciPlugin.git',
  platforms: ['Android']
})
@Injectable()
export class Calci extends IonicNativePlugin {

  @Cordova()
  add(data: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  substract(data: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @CordovaProperty() tickSec: string;

  @Cordova({
    eventObservable: true,
    event: 'countdowntimerontick',
    element: document,
  })
  onTick(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova({
    eventObservable: true,
    event: 'countdowntimeronfinish',
    element: document,
  })
  onFinish(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
