import PushNotification from "react-native-push-notification"
import PushNotificationIOS from "@react-native-community/push-notification-ios"
import {Platform} from 'react-native'

class NotificationManager {
    configure = () => {
        PushNotification.configure({
            onRegister: function(token) {
                console.log("[NotificationManager] onRegister token:", token);
            },
            onNotification: function (notification) {
                console.log("[NotificationManager] onNotification:", notification);
            
                // process the notification
            
                // (required) Called when a remote is received or opened, or local notification is opened
                notification.finish(PushNotificationIOS.FetchResult.NoData);
              },
        });
    }

    _buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
        return {
            id : id,
            autoCancel : true,
            largeIcon : options.largeIcon || "ic_launcher",
            smallIcon : options.smallIcon || "ic_launcer",
            bigText : message || "",
            subText : message || "",
            subText : title || "",
            vibrate : options.vibrate || false,
            vibration : options.vibration || 300,
            priority : options.priority || "high",
            importance : options.importance || "high",
            data : data
        }
    }
    _buildIOSNotification = (id, title, message, data = {}, options = {}) => {
        return {
            alertAction : options.alertAction || "view",
            category : options.category || "",
            userInfo : {
                id : id,
                data : data
            }
        }
    }

    showNotification = (id, title, message, data = {}, options = {}) => {
        PushNotification.localNotification({
            ...this._buildAndroidNotification(id, title, message, data, options),
            ...this._buildIOSNotification(id, title, message, data, options),
            title : title || "",
            message : message || "",
            playSound : options.playSound || false,
            soundName : options.soundName || 'default',
            userInteraction : false 

        })
    }

    cancelAllLocalNotification = () => {
        if (Platform.OS === 'ios') {
            PushNotificationIOS.removeAllDeliveredNotifications()
        } else {
            PushNotification.cancelAllLocalNotifications()
        }
    }

    unregister = () => {
        PushNotification.unregister()
    }
}