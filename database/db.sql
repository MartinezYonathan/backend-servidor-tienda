CREATE DATABASE name_bd_servidor;


CREATE TABLE IF NOT EXISTS producto
(
    id serial,
    nombre text,
    descripcion text,
    tamanio text,
    precio text,
    barcode text,
    inventario text,
    PRIMARY KEY (id)
);

ALTER TABLE public.users_room_llamada
    OWNER to jhlqfjaaffpmon;
    
