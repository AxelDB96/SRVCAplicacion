﻿using System.ComponentModel.DataAnnotations;

namespace SRVCAplicacion.Models
{
    public class log_aud
    {
        [Key]
        public int id_log_aud { get; set; } = 0;  // ID de la auditoría

        public int id_usuario { get; set; } = 0;  // ID del usuario que realiza la acción

        [MaxLength(90)]
        public string accion { get; set; } = "";  // Descripción de la acción realizada

        public DateTime hora { get; set; }  // Hora en la que se realizó la acción

        [MaxLength(160)]
        public string valor_original { get; set; } = "";  // Valor original antes del cambio

        [MaxLength(160)]
        public string valor_nuevo { get; set; } = "";  // Valor nuevo después del cambio

        public int id_punto_control { get; set; } = 0;  // ID del punto de control asociado
    }

}
