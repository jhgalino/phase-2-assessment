<template>
    <main class="grid grid-rows-1 gap-y-6 mt-16 mx-5">
        <Filter title="Platform">
            <template #select>
                <option value="">Sorted By:</option>
                <option value="relevance">Relevance</option>
                <option value="popularity">Popularity</option>
                <option value="release-date">Release Date</option>
                <option value="alphabetical">Alphabetical</option>
            </template>
            <template #choices>
                <div>
                    <input type="checkbox" autocomplete="off" name="pc" id="pc">
                    <label class="text-lg" for="pc">PC</label>
                </div>
                <div>
                    <input type="checkbox" autocomplete="off" name="browser" id="browser">
                    <label class="text-lg" for="browser">Browser</label>
                </div>
            </template>
        </Filter>
        <Filter title="Genre">
            <template #select>
                <option value="">Filter Type:</option>
                <option value="and">AND (All of the options selected)</option>
                <option value="or">OR (Any of the options selected)</option>
                <option value="not">NOT (Excluding options)</option>
            </template>
            <template #choices>
                <div>
                    <input type="checkbox" autocomplete="off" name="mmo" id="mmo">
                    <label for="mmo">MMO</label>
                </div>
                <div>
                    <input type="checkbox" autocomplete="off" name="mmorpg" id="mmorpg">
                    <label for="mmorpg">MMORPG</label>
                </div>
                <div>
                    <input type="checkbox" autocomplete="off" name="shooter" id="shooter">
                    <label for="shooter">Shooter</label>
                </div>
                <div>
                    <input type="checkbox" autocomplete="off" name="strategy" id="strategy">
                    <label for="strategy">Strategy</label>
                </div>
                <div>
                    <input type="checkbox" autocomplete="off" name="moba" id="moba">
                    <label for="moba">Moba</label>
                </div>
                <div>
                    <input type="checkbox" autocomplete="off" name="battle-royale" id="battle-royale">
                    <label for="battle-royale">Battle Royale</label>
                </div>
                <div>
                    <input type="checkbox" autocomplete="off" name="card" id="card">
                    <label for="card">Card</label>
                </div>
                <div>
                    <input type="checkbox" autocomplete="off" name="racing" id="racing">
                    <label for="racing">Racing</label>
                </div>

                <div>
                    <input type="checkbox" autocomplete="off" name="sports" id="sports">
                    <label for="sports">Sports</label>
                </div>
                <div>
                    <input type="checkbox" autocomplete="off" name="social" id="social">
                    <label for="social">Social</label>
                </div>
                <div>
                    <input type="checkbox" autocomplete="off" name="fighting" id="fighting">
                    <label for="fighting">Fighting</label>
                </div>
            </template>
        </Filter>
    </main>
</template>

<script setup>

</script>