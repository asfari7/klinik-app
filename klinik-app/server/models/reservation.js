const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Reservation = db.define('Reservation', {
  id_reservation: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Auth',
      key: 'id_user'
    }
  },
  id_doctor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Auth',
      key: 'id_doctor'
    }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nik: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ttl: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  gender: {
    type: DataTypes.ENUM('Laki-laki', 'Perempuan'),
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tgl_reservasi: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  keluhan: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('Menunggu', 'In Progress', 'Batal', 'Selesai'),
    defaultValue: 'Menunggu'
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'reservations',
  timestamps: false
});

module.exports = Reservation;
