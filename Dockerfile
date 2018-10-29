FROM nginx

COPY wrapper.sh /

COPY html /usr/share/nginx/html
COPY VirtustreamPartnerPortal /usr/share/nginx/VirtustreamPartnerPortal 

CMD ["./wrapper.sh"]
