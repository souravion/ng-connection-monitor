# 🌐 Angular Network Status

A lightweight Angular library to detect actual internet connectivity by pinging a backend endpoint — **not just relying on `navigator.onLine`**.

## 🚀 Why This Library?

- `navigator.onLine` is unreliable — it only checks local connection, not real internet access.
- This library actively **pings a backend server** to verify actual connectivity.
- Exposes a clean **RxJS Observable** (`isOnline$`) to subscribe from any component or service.
- Fully compatible with **Angular v13 and above**.

---

## 📦 Installation
```bash
npm install ng-connection-monitor
```
## ⚙️ Setup
### 1. Import HttpClientModule in your AppModule
```bash
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    HttpClientModule,
    // other imports
  ],
})
export class AppModule {}
`````
### 2. Import NgConnectionMonitorModule in your AppModule
```bash
import { NgConnectionMonitorService } from './ng-connection-monitor.service';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[NgConnectionMonitorService]
})
export class NgConnectionMonitorModule { }
````
### 3.Use the NgConnectionMonitorService in your component
```bash
import { NgConnectionMonitorService } from 'ng-connection-monitor'; // library import

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  onlineStatus:any
  constructor(private networkStatusService: NgConnectionMonitorService){
      this.networkStatusService.isOnline$.subscribe(data=>{
        this.onlineStatus = data
        console.log("data",data)
      });

  }
}
```
## ⚙️ Backend Ping Server

To accurately detect real internet connectivity, this library pings a backend server endpoint.

You can use the [my-ping-server](https://github.com/souravion/my-ping-server) repository as a ready-to-use lightweight ping backend.

Make sure to set the `pingUrl` in your app to point to this server's `/ping` endpoint for reliable network status checks.

## 🧪 How It Works
- Starts a timer loop every 3 seconds

- Pings the configured backend endpoint (default: /api/ping)

- If response is 200, emits true, else false

- Keeps emitting changes only when status flips (distinctUntilChanged)

## ✅ API
```bash
isOnline$ : Observable<boolean>
```
##### Subscribe to this to get real-time connectivity status.
## 💡 Roadmap / Future Ideas
- Detect slow internet & emit custom message (e.g., "Slow Connection Detected")

- Support multi-ping strategies

- Angular signals support (v17+)
## 🛡️ License

Let me know if you want to replace [Sourav](https://github.com/souravion) with your actual GitHub handle or real name.
