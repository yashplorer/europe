var days = [
	{
		"date": "5/29",
		"location": ["Oakland","Bergen"],
		"airLoc": ["OAK","BGO"],
		"details":[{
				"keyword": "Fly OAK to BGO via ARN",
				"amount": 563.1,
				"time": ["4:45","14:35"],
				"link": "http://goo.gl/6DEPNi"
			}]
	},
	{
		"date": "5/30",
		"location": "Bergen",
		"airLoc": "BGO",
		"details":[{
				"keyword": "Montana Youth and Family Hostel",
				"amount": 39.92,
				"link": "http://goo.gl/YrMOcY"
			}]
	},
	{
		"date": "5/31",
		"location": ["Bergen", "Oslo"],
		"airLoc": ["BGO","OSL"],
		"details":[{
				"keyword": "Tour Norway by Train (BGO to OSL)",
				"amount": 209.49,
				"time": ["8:43","22:25"],
				"link": "http://goo.gl/pSgmzm"
			},{
				"keyword": "Oslo Youth Hostel Haraldsheim",
				"amount": 74.42,
				"link": "http://goo.gl/lXnlzh "
			}]
	},
	{
		"date": "6/1",
		"location": "Oslo",
		"airLoc": "OSL"
	},
	{
		"date": "6/2",
		"location": ["Oslo", "Copenhagen"],
		"airLoc": ["OSL","CPH"],
		"details":[{
				"keyword": "Fly OSL to CPH",
				"amount": 66.2,
				"time": ["9:05","10:15"],
				"link": "http://goo.gl/FIebUh"
			},{
				"keyword": "Urban House",
				"amount": 66.5,
				"link": "http://goo.gl/jszB2I"
			}]
	},
	{
		"date": "6/3",
		"location": "Copenhagen",
		"airLoc": "CPH"
	},
	{
		"date": "6/4",
		"location": ["Copenhagen", "Stockholm"],
		"airLoc": ["CPH","ARN"],
		"details":[{
				"keyword": "Train CPH to ARN",
				"amount": 22.6,
				"time": ["18:36","23:39"],
				"link": "http://goo.gl/0y0Bdw"
			},{
				"keyword": "Skanstulls Hostel",
				"amount": 60.26,
				"link": "http://goo.gl/cKC6Co"	
			}]
	},
	{
		"date": "6/5",
		"location": "Stockholm",
		"airLoc": "ARN"
	},
	{
		"date": "6/6",
		"location": ["Stockholm", "Helsinki"],
		"airLoc": ["ARN","HEL"],
		"details":[{
				"keyword": "Cruise ARN to HEL",
				"amount": 55.73,
				"time": ["16:30", "10:00"],
				"link": "https://goo.gl/RqEc8s"
			},{
				"keyword": "Eurohostel",
				"amount": 64.8,
				"link": "http://goo.gl/rIF0Tj"
			}]
	},
	{
		"date": "6/7",
		"location": "Helsinki",
		"airLoc": "HEL"
	},
	{
		"date": "6/8",
		"location": ["Helsinki", "Budapest"],
		"airLoc": ["HEL", "BUD"],
		"details":[{
				"keyword": "Fly HEL to BUD",
				"amount": 97,
				"time": ["18:35","19:50"],
				"link": "http://goo.gl/PLZTFH"
			},{
				"keyword": "Maverick City Lounge",
				"amount": 61.91,
				"link": "http://goo.gl/jzvRDZ"
			}]
	},
	{
		"date": "6/9",
		"location": "Budapest",
		"airLoc": "BUD"
	},
	{
		"date": "6/10",
		"location": "Budapest",
		"airLoc": "BUD"
	},
	{
		"date": "6/11",
		"location": ["Budapest","Plitvice NP"],
		"airLoc": ["BUD", "PNP"],
		"details":[{
				"keyword": "Train BUD to ZAG",
				"amount": 44.58,
				"time": ["14:59","20:44"],
				"link": "http://goo.gl/QKFy4z"
			},{
				"keyword": "Bus ZAG to PNP",
				"amount": 14.87,
				"time": ["21:30","23:15"],
				"link": "http://goo.gl/FsCSrl"
			},{
				"keyword": "Apartment Ana",
				"amount": 14.26,
				"link": "http://goo.gl/h9wNUu"
			}]
	},
	{
		"date": "6/12",
		"location": ["Plitvice NP", "Split"],
		"airLoc": ["PNP","SPU"],
		"details":[{
				"keyword": "Plitvice NP",
				"amount": 8.19,
				"link": "http://goo.gl/kwlhtQ"
			},{
				"keyword": "Bus PNP to SPU",
				"amount": 14.87,
				"time": ["14:30","18:50"],
				"link": "http://goo.gl/q17dmO"
			},{
				"keyword": "Grand Hostel LerO",
				"amount": 17.15,
				"link": "http://goo.gl/csJr24"
			}]
	},
	{
		"date": "6/13",
		"location": ["Split", "Mostar"],
		"airLoc": ["SPU", "OMO"],
		"details":[{
				"keyword": "Bus SPU to OMO",
				"amount": 17.35,
				"time": ["17:30","21:00"],
				"link": "http://goo.gl/tPBApL"
			},{
				"keyword": "Sky Lounge Hostel",
				"amount": 23.52,
				"link": "http://goo.gl/PGh25a"
			}]
	},
	{
		"date": "6/14",
		"location": ["Mostar","Dubrovnik"],
		"airLoc": ["OMO","DBV"],
		"details":[{
				"keyword": "Bus OMO to DBV",
				"amount": 17.05,
				"time": ["17:40","21:00"],
				"link": "http://goo.gl/iSertv"
			},{
				"keyword": "Old Town Hostel",
				"amount": 111.11,
				"link": "http://goo.gl/mXb54n"
			}]
	},
	{
		"date": "6/15",
		"location": "Dubrovnik",
		"airLoc": "DBV"
	},
	{
		"date": "6/16",
		"location": "Bay of Kotor, Montenegro",
		"airLoc": "KTR",
		"details":[{
				"keyword": "Bus to Kotor",
				"amount": 16,
			}]
	},
	{
		"date": "6/17",
		"location": ["Dubrovnik", "Rome"],
		"airLoc": ["DBV", "FCO"],
		"details":[{
				"keyword": "Fly DBV to FCO",
				"amount": 67,
				"time": ["14:30","15:45"],
				"link": "https://goo.gl/H2pjC5"
			},{
				"keyword": "Alessandro Palace Hostel",
				"amount": 52,
				"link": "http://goo.gl/F6XeiN"	
			}]
	},
	{
		"date": "6/18",
		"location": "Rome",
		"airLoc": "FCO"
	},
	{
		"date": "6/19",
		"location": ["Rome", "Florence"],
		"airLoc": ["FCO", "FLO"],
		"details":[{
				"keyword": "Train FCO to FLR",
				"amount": 19.33,
				"time": ["21:00","22:35"],
				"link": "https://goo.gl/iBQFI2"
			},{
				"keyword": "David Inn",
				"amount": 74.55,
				"link": "http://goo.gl/upYBZ5"	
			}]
	},
	{
		"date": "6/20",
		"location": "Florence",
		"airLoc": "FLR"
	},
	{
		"date": "6/21",
		"location": ["Florence","Monterosso"],
		"airLoc": ["FLR", "MNT"],
		"details":[{
				"keyword": "Train FLR to Monterosso",
				"amount": 22.4,
				"time": ["18:28","21:35"],
				"link": "https://goo.gl/epaHmI"
			},{
				"keyword": "Ostello Corniglia",
				"amount": 57.72,
				"link": "http://goo.gl/WM1WTR"
			}]
	},
	{
		"date": "6/22",
		"location": "Cinque Terre",
		"airLoc": "CTE"
	},
	{
		"date": "6/23",
		"location": ["Monterosso", "Nice"],
		"airLoc": ["MNT", "NCE"],
		"details":[{
				"keyword": "Train Monterosso to NCE",
				"amount": 52,
				"time": ["14:54","19:51"],
				"link": "https://goo.gl/uVwWqR"
			},{
				"keyword": "Hostel Meyerbeer Beach",
				"amount": 57.6,
				"link": "http://goo.gl/yigTb4"	
			}]
	},
	{
		"date": "6/24",
		"location": "Monte-Carlo, Monaco",
		"airLoc": "MCM",
		"details":[{
				"keyword": "Train to Monte-Carlo",
				"amount": "10",
				"time": ["8:40","22:07"],
				"link": "https://goo.gl/iVI4gt"
			}]
	},
	{
		"date": "6/25",
		"location": ["Nice", "Barcelona"],
		"airLoc": ["NCE","BCN"],
		"details":[{
				"keyword": "Fly NCE to BCN",
				"amount": 102,
				"time": ["17:50","19:05"],
				"link": "https://goo.gl/6Ig5v6"
			}]
	},
	{
		"date": "6/26",
		"location": ["Barcelona", "Zurich"],
		"airLoc": ["BCN", "ZRH"],
		"details":[{
				"keyword": "Fly BCN to ZRH",
				"time": ["7:00","8:50"]
			}]
	}
];