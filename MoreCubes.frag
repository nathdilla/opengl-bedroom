#version 330 core
in vec2 TexCoord;
in vec3 fragmentColor;


out vec3 color;


uniform sampler2D ourTexture1;
uniform sampler2D ourTexture2;

void main()
{
    
    color = fragmentColor;
}