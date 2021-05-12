#### <span class="span-underline">The Why</span>

*"Why would you want to render a map of the NYC subway system when you could just look at it on your phone?"*

Well my friend, the answer is quite simple:

- I've always wanted to work with GTFS in some way, shape, or form.
- I get to practice working with data in Python.
- I like the subway system.

Thankfully, the MTA's GTFS data is quite easy to read and figure out what line is what just from the `shapes.txt`. But before we dive into the *code*, let's talk about GTFS for a second.

#### <span class="span-underline">What is GTFS?</span>

GTFS stands for "General Transit Feed Specificaton". Public transport agencies can format their data to the GTFS standard and publish it for developers and data analysis to crunch and manipulate.

You can read more about GTFS [here](https://developers.google.com/transit/gtfs).

You can access the MTA's GTFS data [one their website](http://web.mta.info/developers/developer-data-terms.html#data). I'm working with static data, so I downloaded the "New York City Transit Subway" data on their page.

#### <span class="span-underline">Requirements</span>

Using this specific data set, we only need a graphing library. I went ahead and used [matplotlib](https://matplotlib.org/), but you can pretty much use any graphing library you're most comfortable with.

#### <span class="span-underline">Data, Data, Data</span>

Since we're only after a very simple render of the subway system, we'll only be accessing one file: `shapes.txt`. When you open up `shapes.txt`, you'll be greeted with the following information:

```python
shape_id,shape_pt_lat,shape_pt_lon,shape_pt_sequence,shape_dist_traveled
1..N03R,40.702068,-74.013664,0,
1..N03R,40.703199,-74.014792,1,
1..N03R,40.703226,-74.014820,2,
1..N03R,40.703253,-74.014846,3,
1..N03R,40.703280,-74.014870,4,
1..N03R,40.703307,-74.014893,5,
...
```

It'll look intimidating at first, but this data is very easy to read. `shape_id` refers to the subway service the station belongs to. In the case of `1..N03r`, we can infer that this station serves the `1` train for one of it's services.

The next two positions, `shape_pt_lat` and `shape_pt_lon` refer to the stations latitude and longitude. The next point, `shape_pt_sequence`, is an index of where the station is for the service. Now how can we store all of this information?

The solution I came out with was by creating a class object "Station":

```python
class Station:
    def __init__(self, stat_id, stat_lat, stat_long):
        self.stat_id = stat_id
        self.stat_lat = stat_lat
        self.stat_long = stat_long

    def __repr__(self):
        return f"{self.stat_id}, {self.stat_lat}, {self.stat_long}"
```

The station class is able to store the 3 pieces of information we're after: The `shape_id`, the `shape_pt_lat`, and the `shape_pt_lon`. We can disregard the `shape_pt_sequence` data since we don't really need it.

With the station class done, we now have an object that can tell us what line it belongs to and it's position within the world. So we can work on parsing that data into a `Station` object and storing it into a list:

```python
def parse_data(file):
    """
    Parses through stops.txt and grabs all of the necessary data about a route's stops.
    Returns a list of Stations.
    string --> list(Station)
    """
    with open(file, "r") as f:
        stations = []
        while True:
            line = f.readline()
            if not line:
                break
            elif "shape_id" in line:
                pass
            else:
                f_mat = list(line.split(","))
                tmp_stat = Station(f_mat[0], f_mat[1], f_mat[2]) # We already know what information we need from each line since GTFS files follows a set standard.
                stations.append(tmp_stat)
        return stations
```

And in our `if __name__ == "__main__`:

```python
if __name__ == "__main__":
    stations = parse_data("K:\\!dev\\Python\\nyc_subway2\\NYC-Subway-From-GTFS-Data\\nyc\\shapes.txt") # You'll need to copy your own path to the shapes.txt file here.
```


