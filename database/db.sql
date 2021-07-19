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

CREATE TABLE IF NOT EXISTS producto_update
(
    id serial,
    id_producto serial not null,
    precio text,
    precio_update text,
    date_create DATE,
    PRIMARY KEY (id),
    foreign key (id_producto) references producto(id) on delete cascade on update cascade
);




ALTER TABLE public.users_room_llamada
    OWNER to jhlqfjaaffpmon;
    
