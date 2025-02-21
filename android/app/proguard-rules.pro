-keep public class * extends android.view.View {
    public <init>(android.content.Context);
    public <init>(android.content.Context, android.util.AttributeSet);
    public <init>(android.content.Context, android.util.AttributeSet, int);
}

-keep class com.facebook.react.** { *; }
-keep class com.facebook.** { *; }
-keepattributes *Annotation*

# 保護 drawable 和資源文件
-keepclassmembers class **.R$* {
    public static <fields>;
}

# 防止資源被刪除
-dontwarn android.content.res.**
-dontwarn android.support.v7.**
-dontwarn com.facebook.react.**
