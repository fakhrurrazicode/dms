<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $table = 'tags';
    protected $fillable = [
        'name',
        'tag_id'
    ];

    public function categories()
    {
        return $this->hasMany(self::class, 'tag_id');
    }

    public function childCategories()
    {
        return $this->hasMany(self::class, 'tag_id')->with('categories');
    }
}
