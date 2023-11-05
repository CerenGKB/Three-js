#define PI 3.1415926535897932384626433832795 ;

varying vec2 vUv ;

float random (vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.545);
}

vec2 rotate(vec2 uv, float rotation, vec2 mid)
{
    return vec2(
      cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
      cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
    );
}

void main()
{
     //pattern1
    // gl_FragColor = vec4(vUv.x , vUv.y, 0.0, 1.0);

    //pattern2
    // gl_FragColor = vec4(vUv.x, vUv.y,1.0, 1.0);

    //pattern3
    // float strength = vUv.x ;
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 4
    // float strength = vUv.y ;
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

     //Pattern 5
    // float strength = 1.0 - vUv.y ;
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

     //pattern 6
    // float strength =  vUv.y * 10.0 ;
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 7
    // float strength =  mod(vUv.y * 10.0,1.0) ;
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 8
    // float strength =  mod(vUv.y *10.0,1.0) ;
    // strength = step(0.5, strength);
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    
    //pattern 9
    // float strength =  mod(vUv.y * 10.0,1.0) ;
    // strength = step(0.8, strength);
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

     //pattern 10
    // float strength =  mod(vUv.x * 10.0,1.0) ;
    // strength = step(0.8, strength);
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 11
    // float strength =  step(0.8,mod(vUv.x * 10.0,1.0)) ;
    // strength += step(0.8,mod(vUv.y * 10.0,1.0));
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern12
    // float strength =  step(0.8,mod(vUv.x * 10.0,1.0)) ;
    // strength -= step(0.3,mod(vUv.y * 10.0,1.0));
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 13
    // float strength =  step(0.4,mod(vUv.x * 10.0,1.0)) ;
    // strength -= step(0.2,mod(vUv.y * 10.0,1.0));
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 14
    // float barX =  step(0.4,mod(vUv.x * 10.0,1.0)) ;
    // barX *= step(0.8,mod(vUv.y * 10.0,1.0));
    // float barY =  step(0.8,mod(vUv.x * 10.0,1.0)) ;
    // barY *= step(0.4,mod(vUv.y * 10.0,1.0));
    // float strength = barX + barY ;
    // gl_FragColor = vec4(strength,strength, strength, 1.0);
    
    //pattern 15
    // float barX =  step(0.4,mod(vUv.x * 10.0,1.0)) ;
    // barX *= step(0.8,mod(vUv.y * 10.0,1.0));
    // float barY =  step(0.8,mod(vUv.x * 10.0 + 0.2,1.0)) ;
    // barY *= step(0.4,mod(vUv.y * 10.0 - 0.2,1.0));
    // float strength = barX + barY ;
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 16
    // float strength = abs(0.5 - (vUv.x));
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 17
    // float strength = min(abs(vUv.x - 0.5), abs(vUv.y -0.5));
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 18
    // float strength = max(abs(vUv.x - 0.5), abs(vUv.y -0.5));
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 19
    // float strength = step(0.2,max(abs(vUv.x - 0.5), abs(vUv.y -0.5)));
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 20
    // float strength = step(0.4,max(abs(vUv.x - 0.5), abs(vUv.y -0.5)));
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 21
    // float strength = step(0.4,max(abs(vUv.x - 0.5), abs(vUv.y -0.5)));
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 22
    // float strength = floor(vUv.x * 10.0) /10.0 ;
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 23
    // float strength = floor(vUv.x * 10.0) /10.0 ;
    // strength *= floor(vUv.y * 10.0) /10.0 ;
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 24
    // float strength = random(vUv);
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 25
    // vec2 gridUv = vec2(
    //     floor(vUv.x * 10.0) /10.0,
    //     floor((vUv.y + vUv.x * 0.5) * 10.0) /10.0
    //     );
    // float strength = random(gridUv) ;
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 26
    // float strength = length(vUv) ;
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    
    // pattern 27
    // float strength = distance(vUv,vec2(0.5)) ;
    // gl_FragColor = vec4(strength,strength, strength, 1.0);
    

    //pattern 28
    // float strength = 1.0 -distance(vUv,vec2(0.5)) ;
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 29
    // float strength = 0.06 /distance(vUv,vec2(0.5)) ;
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 30
    // vec2 lightUv = vec2 (
    //     vUv.x * 0.2 + 0.4,
    //     vUv.y
    // );
    // float strength = 0.015 /distance(lightUv,vec2(0.5)) ;
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 31
    // vec2 lightUvX = vec2 (
    //     vUv.x * 0.2 + 0.4,
    //     vUv.y 
    // );
    // float lightX = 0.015 / distance(lightUvX, vec2(0.5));

    //  vec2 lightUvY = vec2 (
    //     vUv.y * 0.2 + 0.4,
    //     vUv.x 
    // );
    // float lightY = 0.015 / distance(lightUvY, vec2(0.5));
    // float strength = lightX * lightY ;
     
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 32

    // vec2 rotatedUv = rotate(vUv, 0.8, vec2(0.5));
    // vec2 lightUvX = vec2 (
    //    rotatedUv.x * 0.2 + 0.4,
    //    rotatedUv.y 
    // );
    // float lightX = 0.015 / distance(lightUvX, vec2(0.5));

    //  vec2 lightUvY = vec2 (
    //    rotatedUv.y * 0.2 + 0.4,
    //     rotatedUv.x 
    // );
    // float lightY = 0.015 / distance(lightUvY, vec2(0.5));
    // float strength = lightX * lightY ;
     
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 33
    // float strength = step(0.2,distance(vUv,vec2(0.5)));
    // gl_FragColor = vec4(strength,strength, strength, 1.0);
    
    //pattern 34
    // float strength = abs(distance(vUv,vec2(0.5))-0.25);
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 35
    // float strength = step(0.02,abs(distance(vUv,vec2(0.5))-0.25));
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 36
    // float strength = 1.0- step(0.02,abs(distance(vUv,vec2(0.5))-0.25));
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 37
    // vec2 wavedUv = vec2(
    //     vUv.x,
    //     vUv.y + sin(vUv.x * 30.0) * 0.1
    // );
    // float strength = 1.0- step(0.02,abs(distance(wavedUv,vec2(0.5))-0.25));
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 38
    // vec2 wavedUv = vec2(
    //     vUv.x+ sin(vUv.y * 30.0) * 0.1,
    //     vUv.y + sin(vUv.x * 30.0) * 0.1
    // );
    // float strength = 1.0- step(0.02,abs(distance(wavedUv,vec2(0.5))-0.25));
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 39
    // vec2 wavedUv = vec2(
    //     vUv.x+ sin(vUv.y * 100.0) * 0.1,
    //     vUv.y + sin(vUv.x * 100.0) * 0.1
    // );
    // float strength = 1.0- step(0.02,abs(distance(wavedUv,vec2(0.5))-0.25));
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 40
    // float angle = atan(vUv.x,vUv.y) ;
    // float strength = angle ;
    // gl_FragColor = vec4(strength,strength, strength, 1.0);

    //pattern 41
    float angle = atan(vUv.x - 0.5,vUv.y - 0.5) ;
    float strength = angle ;
    gl_FragColor = vec4(strength,strength, strength, 1.0);
}